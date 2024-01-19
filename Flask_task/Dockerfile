FROM python:3.8-slim-buster

WORKDIR ./Flask_task

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

COPY . .

ENTRYPOINT ["python3"]

CMD ["app.py", "--host", "0.0.0.0"]

