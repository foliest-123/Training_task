from datetime import datetime
from airflow.models import Variable
from airflow import DAG
from airflow.decorators import task
from airflow.operators.python import PythonOperator
from airflow.operators.bash import BashOperator
from airflow.providers.postgres.operators.postgres import PostgresOperator
from random import randint
# Explore the below concepts in airflow
# 		DAG
# 		Operators
# 		Executors
# 		Cron expressions
# 		Variables (different ways to create variables)

def Helo_world(**kwargs):
    set_variable = Variable.set(key="name" , value="vijay")
    print(Variable.get("name"))
    add_nums =  kwargs["key1"] + kwargs["key2"]
    task_instance = kwargs['ti']
    task_instance.xcom_push(key="Add_value", value=add_nums)
    path_to_data = task_instance.xcom_pull(task_ids='print_the_context', key='Add_value')
    print("data from Xcom = ",  path_to_data)


def store_variable():
    input_variable = Variable.set(key="input" , value=["DAG", "variable", "preset"] , serialize_json=True)
    LengthOfValues = {}
    Words = Variable.get("input", deserialize_json=True)

    for word in Words:
        wordLen = len(word)
        LengthOfValues[word] = wordLen
    
    print(LengthOfValues)

Variable.set(key="num1" , value=14)
Variable.set(key="num2" , value=20)

def Add_values():
    num1 = Variable.get("num1")
    num2 = Variable.get("num2")
    print("Sum of two values=",int(num1) + int(num2))

def subtract():
    num1 = Variable.get("num1")
    num2 = Variable.get("num2")
    print("subtract of two values=",int(num1) - int(num2))

def multiply():
    num1 = Variable.get("num1")
    num2 = Variable.get("num2")
    print("multiply of two values=",int(num1) * int(num2))


with DAG(dag_id="demo", start_date=datetime(2022, 1, 4), schedule="@once") as dag:
 
    python_func = PythonOperator(
               task_id="print_the_context", 
               python_callable=Helo_world,
               op_kwargs= {"key1":12 , "key2":13}
               )
    
    BashCommand = BashOperator(
        task_id="Bash_command",
        bash_command="echo hello from bash",
        dag=dag
    )
    
    LengthOfval = PythonOperator(
          task_id = "Words_length",
          python_callable=store_variable,
          dag= dag
    )
    Addition = PythonOperator(
          task_id = "Addition",
          python_callable=Add_values,
          dag= dag
    )
    Subtraction = PythonOperator(
          task_id = "Subtraction",
          python_callable=subtract,
          dag= dag
    )
    multiplication = PythonOperator(
          task_id = "multiplication",
          python_callable=multiply,
          dag= dag
    )
    python_func >> BashCommand >> LengthOfval >> [Addition , Subtraction , multiplication]
    


with DAG(dag_id="psql", start_date=datetime(2022, 1, 4), schedule_interval='*/1 * * * *',catchup=False) as psqldag:
    
            insert_order= PostgresOperator(
                task_id="insert_order",
                database="airflow_task",
                postgres_conn_id="postgres",
                sql="""INSERT INTO orders ( customer_id, order_date)
                           select customer_id , now()
                            from customers order by random() limit 2
                    """,
                dag= psqldag
            )
            insert_productreturn = PostgresOperator(
                task_id="insert_product",
                database="airflow_task",
                postgres_conn_id="postgres",
                sql="""INSERT INTO Product_returns ( customer_id, return_date)
                           select customer_id , now()
                            from customers order by random() limit 2
                    """,
                dag= psqldag
            )
            
            insert_purchaseDetails = PostgresOperator(
                task_id="insert_purchasedetails",
                database="airflow_task",
                postgres_conn_id="postgres",
                sql="""INSERT INTO purchase_details (customer_id, total_orders, total_returns)
                            SELECT COALESCE(o.customer_id, r.customer_id) AS customer_id,
                                COALESCE(o.order_count, 0) AS orders,
                                COALESCE(r.return_count, 0) AS returns
                            FROM
                                (SELECT customer_id, COUNT(*) AS order_count
                                FROM orders
                                GROUP BY customer_id) AS o
                            LEFT JOIN
                                (SELECT customer_id, COUNT(*) AS return_count
                                FROM Product_returns
                                GROUP BY customer_id) AS r
                            ON o.customer_id = r.customer_id
                            ORDER BY COALESCE(o.customer_id, r.customer_id);
                    """,
                dag= psqldag
            )
            
            
            
            
            
            insert_order >> insert_productreturn >> insert_purchaseDetails
    

    


