

// basic_promise
const promise= new Promise((resolve,reject)=>{
    const data_resolved="resolved";
    const data_rejected="rejected";

    resolve(data_resolved);
    reject(data_rejected);
})



promise.then((data)=>{
    console.log(data);
})
.catch((data)=>{
    console.log(data);
})
