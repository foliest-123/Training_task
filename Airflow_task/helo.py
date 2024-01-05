import psycopg2

try:
    conn = psycopg2.connect(
        dbname='airflow_task',
        user='postgres',
        password='1234',
        host='localhost',  # Replace with your PostgreSQL server's hostname or IP
        port='5432'  # Replace with your PostgreSQL server's port if it's not the default
    )
    print("Connected to the database")
    conn.close()
except psycopg2.OperationalError as e:
    print(f"Unable to connect to the database: {e}")
