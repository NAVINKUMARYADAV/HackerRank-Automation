function prosifiedFunc(){
    return new Promise(function(resolve,reject){
        let a=1;
        let b=1;
        if(a==b){
            resolve("Equal");
        }
        else{
            reject("unequal");
        }
    })

}
let somePromise=prosifiedFunc();
somePromise.then(function(x){
    console.log(x);
})
somePromise.catch(function(err){
    console.log(error);
})