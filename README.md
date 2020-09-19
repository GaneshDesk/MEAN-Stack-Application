# MEAN-Stack-Applications
This repository contains MongoDB, Express, Angular, Node Programs.

![Test Image 1](img1.png)

Mean Stack Developement : 

What is MongoDB?

MongoDB is an open-source, cross-platform database which is written in C++. It stores data in the key-value pair, using binary data type like JSON. It is a document-oriented NoSQL Database. A document in MongoDB resembles an Object in OOPS Mongo DB is an ideal choice for a database system where you need to manage large sized tables with millions of data. Moreover, including a field to Mongo DB is easier as it does not require updating the entire table. With Mongo DB you develop an entire application with just one application, i.e. JavaScript.

What is Express.JS?

Express is a mature, flexible, lightweight server framework. It is designed for building single, multi-page, and hybrid web applications. This lightweight framework uses the Pug engine to provide support for templates.
Express is the de-facto framework for Nodejs and is draws heavy inspiration from Sinatra, the popular Ruby framework.

What is Angular JS?

Angular JS is an open-source JavaScript framework. Angular is maintained by Google. The goal of this framework is to introduce MVC(Model View Controller) architecture in the browser-based application that makes the development and testing process easier. The framework helps you create a smarter web app that supports personalization.
AngularJS allows us to use HTML as a template language. Therefore, you can extend HTML's syntax to express the components of your application. Angular features like dependency injection and data binding eliminate plenty of code that you need to write.

What is Node JS?

Node.js allows developers to create web servers and build web applications on it. It's a server-side Javascript execution environment.
Node.js uses a non-blocking and event-driven I/O model. This makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.
It allows developers to create data-intensive real-time apps that run across distributed devices. You can run Node.js runtime on Microsoft Windows, OS X, and Linux.

Mean Stack Architecture :

The primary function of various components of Mean Stack Architecture are as follows:
Angular JS: Accept requests and display results to end user
NodeJS: Handle Client and Server Requests
Express JS: Make requests to Database and return a response
MongoDB: Store and retrieve data.




    1. Firstly, the client makes a request which is processed by the Angular.
    2. After that, the request moves to NodeJS which will parse the request.
    3. ExpressJs will make calls to MongoDB to get or set data.
    4. MongoDB will retrieve the requested data and return that request to the Express JS.
    5. NodeJS will return the request to the client.
    6. At the client side, Angular to display the result fetched from MongoDB.


