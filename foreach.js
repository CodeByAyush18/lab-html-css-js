const forEach =(cb,arr) =>{
    for(let item of arr){
        cb(item)
    }
}

const cb=(item)=>{
    console.log(item)
}

forEach(cb,[1,3,5])