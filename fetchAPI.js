const fetch = require('node-fetch');

fetch('https://jsonplaceholder.typicode.com/todos/1',{
    method:'',
    headers:''
})
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.error('There was a problem with the fetch operation:', error));
