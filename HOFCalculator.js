function calcFxn(operation,ivalue,nos){
    let total=ivalue
    for(const number of nos){
        total=operation(total,number)
    }
    return total
}

function sum(n1,n2){
    return n1+n2
}
function multiply(n1,n2){
    return n1*n2
}
console.log(calcFxn(sum,0,[1,3,4]))
console.log(calcFxn(multiply,1,[1,3,4]))