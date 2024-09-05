// ... -> Spread & rest operator
const nums=[1,2,3];
const newArr=[...nums,4]
console.log(newArr)

const a1=[1,2,3]
const a2=[4,5,6]
const nA=[...a1,...a2]
console.log(nA)

const sum = (a,b,c)=>{
    console.log(a+b+c)
}
sum(...a2)

let string = "abc";
const newStr = [...string];
console.log(newStr);


let obj1={
    name:"PW Skills",
    course:"Web Dev"
};
let obj2={rating:5,reviews:2000}
const obj={...obj1,...obj2}
console.log(obj)

const arr=[1,2,3,4,5]
console.log(Math.max(...arr))