// Promise Creation
let myPromise= new Promise((res,rej)=>{
    let data = "this is my data";
    if(data){
        //these two functions are built in CALLBACK function inside promise function i.e. resolve (res) and rejected (rej)
        res(data);   // if we don't give any dat inside res() than PromiseResult will show undefined
    }
    else{
        rej("error: no data found");
    }
});

console.log(myPromise)


// Promise handling
myPromise.then((d)=>{
    console.log(d);
},(e)=>{
    console.log(e)
}); //here first one is for resolve function and second one is for rejected one myPromise.then(()=>{},()=>{})


// second method to handle promises
myPromise.then((d)=>{
    console.log(d);
}).catch((e)=>{
    console.log(e)
});