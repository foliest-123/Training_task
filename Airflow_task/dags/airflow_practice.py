from datetime import datetime
from airflow.models import Variable
from airflow import DAG
from airflow.decorators import task
from airflow.operators.python import PythonOperator
from airflow.operators.bash import BashOperator

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
    pass



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
    
    [python_func , BashCommand]