const promise = new Promise(function(resolve, reject) {
    if (Math.random() > 0.5) {
        resolve('Success');
    } else {
        reject({ code: 402, message: 'Data not found' });
    }
});

console.log(promise);

promise
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => {
        console.log('Stop Loader');
    });
