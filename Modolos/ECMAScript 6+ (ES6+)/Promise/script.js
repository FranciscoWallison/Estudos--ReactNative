function fazer(){
    let promise = new Promise((resolve, reject)=>{        
        setTimeout(()=>{
            resolve('Ok');
        },3000);
        //resolve('Ok');
    });
    return promise;
}


fazer()
    .then((data)=>{
        console.log(data);
    })