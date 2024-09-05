const findIndex=(func,numbers)=>{
    let idx=-1;
    for(i=0;i<numbers.length;i++){
        if(func(numbers[i])){
            idx=i
            break;
        }
    }
    return idx
}
const arr=[1,2,3,5,7,9]
const func=(num)=> num>5;
console.log(findIndex(func,arr))