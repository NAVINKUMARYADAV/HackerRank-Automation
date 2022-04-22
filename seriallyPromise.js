let fs=require("fs");
let f1KaPromise=fs.promises.readFile("f1.txt");
// f1KaPromise.then(function(data){
//     console.log(data+" ");
//     let f2KaPromise=fs.promises.readFile("f2.txt");
//     return f2KaPromise;

// }).then(function(data){
//     console.log(data+" ");
//     let f3KaPromise=fs.promises.readFile("f3.txt");
//     return f3KaPromise;

// }).then(function(data){
//     console.log(data+" ");
//     let f4KaPromise=fs.promises.readFile("f4.txt");
//     return f4KaPromise;
// }).then(function(data){
//     console.log(data+" ");
//     let f5KaPromise=fs.promises.readFile("f5.txt");
    
//     return f5KaPromise;
//     console.log(data+" ");
// }).then(function(data){
//     console.log(data+" ");
// })


let arr=['./f1.txt','./f2.txt','./f3.txt','./f4.txt','./f5.txt']
let filePromise= fs.promises.readFile(arr[0]);
for(let i=1;i<arr.length;i++){
    filePromise = filePromise.then(function(data){
        console.log(data+"");
        let nextFilePromise = fs.promises.readFile(arr[i]);
        return nextFilePromise;
    })
}

filePromise.then(function(data){
    console.log(data+"");
})

