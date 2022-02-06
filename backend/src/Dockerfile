FROM nginx:alpine

RUN apk update
RUN apk add py-pip
RUN apk add --no-cache python3-dev 
RUN pip install --upgrade pip

WORKDIR /src
COPY . /src
RUN pip --no-cache-dir install -r requirements.txt

EXPOSE 8080

CMD ["python3", "app.py"]