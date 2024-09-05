const person={name: "Vishwa",age: 99,city:"Bangalore"}
console.log(typeof person)

const user={name:"Ayush",age:21,greet:function(){
    console.log("Hello Coders!!")
}}
console.log(user)

//2nd way to create object
const obj=new Object()
console.log(obj)

//3rd way to create objects
function emp(id,name,salary){
    this.id=id;
    this.name=name;
    this.salary=salary
}
const emp_obj=new emp(1,"Ayush",100000)
console.log(emp_obj)

console.log(user.name)
console.log(user["name"])


const student={
    name:"Ayush",
    age:21,
    address:{
        city:"Bangalore",
        state:"Karnataka",
        pincode:560049
    }
}
const insaan={}
insaan.name="Ayush",
insaan.hobby="Cricket",
insaan["country"]="India"
console.log(insaan)


console.log(student.address.city)
insaan.name="Rishabh"//Updates the value
console.log(insaan)
delete insaan.name;
console.log(insaan)
console.log(Object.keys(insaan))//Prints all the keys ,no nested keys
console.log(Object.values(insaan))
console.log(Object.entries(insaan))
insaan_new=Object.assign({},insaan,{name:"Ayush"})
console.log(insaan_new)

const Netflix={
    Webseries:"Wonderful World",
    videoQuality:"720p",
    audioQuality:"90"
}
console.log(Netflix);
Object.seal(Netflix)
Netflix.Webseries="Stranger Things"
console.log(Netflix)
Netflix.audioQuality="85"
console.log(Netflix)



const aadmi={
    name:"Ayush",
    age:20,
    salary:100000
}
console.log(Object.hasOwn(person,"name"))
console.log(Object.getOwnPropertyNames(aadmi))
console.log(Object.getOwnPropertyDescriptors(aadmi))

for (k in aadmi){
    console.log(k)
}