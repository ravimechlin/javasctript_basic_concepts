const delay=(number)=>{

    const promise=new Promise((resolve,reject)=>{
        if(number===233){
            const suceess="accepted"
        resolve(suceess);

        }
        else{

            const rejected="rejection"
            reject(rejected);
        }
        
    })
    return promise;
   
}






 async function check(num){

   const data=await delay(num);
   return data;
   

}

check(233).then((data)=>{
    console.log(data);
})
.catch((errr)=>{
    console.log(errr);
})
