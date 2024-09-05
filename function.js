function greet(){
    console.log("Hello Coders!!")

}
greet()
num=18;
function fact(){
    if(num==0||num==1){
        return 1;
    }
    for( i=0;i<num;i++){
        if(num%i==0){
            console.log(i)
        }
    }
}
fact()
//Arrow Function
greet =(name)=>{
    console.log("Hello"+name);
}
greet("Ayush")

function sum(){
    console.log(arguments);
    let sum=0; 
    for(i=0;i<arguments.length;i++){
        sum=sum+arguments[i];
    }
    return sum;
}
console.log(sum(6,12));
console.log(sum(5,6,7,8));


function evenOdd(n){
    if(n%2==0){
        return "true";
    }else{
        return "false";
    }
}
console.log(evenOdd(5))


myFun=(n)=>{
    if(n%2==0){
        return "true";
    }else{
        return "false";
    }
}
