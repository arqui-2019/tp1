FROM python:3

WORKDIR /app
RUN pip install gunicorn flask
COPY . /app

ENTRYPOINT ["gunicorn", "-b", "0.0.0.0:8000", "app:app"]