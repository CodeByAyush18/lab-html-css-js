const sum=(...nums)=>{
    return nums.reduce((sum,num)=>sum+num)
}
console.log(sum(1,2,3,4,5))

const person={
    name:"Ayush",
    age:21,
    address:{
        city:"BBSR",
        country:"India",
    }
};
const{name,...remaining}=person
console.log(remaining)