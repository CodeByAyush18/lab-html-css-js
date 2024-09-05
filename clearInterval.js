let count=10;
const countdown= () =>{
    console.log(count--)
    if(count==0){
        clearInterval(timer);
    }
}

const timer=setInterval(countdown,1000)