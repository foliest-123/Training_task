from pyspark.sql import SparkSession


spark = SparkSession.builder.getOrCreate()
df1 = spark.createDataFrame([ ("A", 1, None), ("B", None, "123" ), ("B", 3, "456"), ("D", None, None), ], ["Name", "Value", "id"])
df1.show() 