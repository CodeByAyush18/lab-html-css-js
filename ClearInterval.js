const timeoutID=setTimeout(function(){
    console.log('Hii');
},2000)

clearTimeout(timeoutID);
console.log('Timeout has been cleared')