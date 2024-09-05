async function printHelloAfter3Sec(){
    let data=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Printing Hello")
        },3000)
    })
    let result=await data;
    console.log(result);

}
printHelloAfter3Sec()