# Amazon store

This is a little clone of a Amazon Store. Just list apps and see details of them like comments, screenshots and rating.

## Installation

First you need to install the node modules and the dependencies of both the server and the client. Also you need run the docker-compose file.

> server and docker

```
    cd amazon-store-back
    npm install
    docker-compose up -d db_amazon_store

```

> client

```
    cd amazon-store-front
    npm install
```

Dont forget configure the environment variables in the .env file. When you are done you can continue.

## Run
Once you have the server and the client installed you can run the server and the client.
> server
    
```
    cd amazon-store-back
    npm start
```

> client

```
    cd amazon-store-front
    npm run dev
```

If you want to build the client you can use the command:

```
    npm run build
```

Then you can run the client in production mode to deploy in the cloud or other services.

## Fill database with apps

With a application like **Postman** or a browser you can fill the database with apps using the endpoint, but dont forget to add some categories before, the endpoint "fill" will take those categories to add them to apps randomly.

```
    http://localhost:8080/api/apps/fill
```

You can see the rest of the commands in the documentation of the apirest: [Amazon_Store](https://documenter.getpostman.com/view/8356230/VUqmue2k). 