Callbacks 

a function calling another function - a function passed in as an argument
pass as argument do not include the parenthesis 
callbacks are a valuable part of asynchronous - its the callback that processes the data and that we wait for to return once the data is received.
avoid multiple callbacks which can make code difficult to read - also should avoid nesting within each other or you can caught up within each other as they wait for the responses

Promises
organize the sequence of code, produces a result that can be used within the next step
default callbacks parameters of resolve and reject
resolve() promise is successful and returns whatever is within the parameter
reject() is a failed promise - catch() is executed when the reject is triggered.

Fetch Method
fetch is used to request a resource which is external to the current file, it returns a promise that then resolves to a response object.
Simple example of fetch and text and html file
How to get file contents and load it to your web page AJAX
Chaining of promises and how they work