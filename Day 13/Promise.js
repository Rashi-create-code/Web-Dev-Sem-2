// promise is used to handle asynchronous function in a better way then callback hell

// Promise has three states
// 1)fullfill
// 2)rejected
// 3)pending

// promise is a constructor which is predefined method
// mainly function define is user define method

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

// Promise Consumers two types
// .then and .catch

// if promise fullfilled then it will go to .then() method
// if promise is rejected then it will go to .catch() method

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


let pro = new Promise((resolve, reject) => {
    let proposal = "false"
    if (proposal === "true") {  //here if we write only proposal then it means that if proposal exist then it will always show resolve
        resolve()
    } else {
        reject()
    }
})

pro.then(() => console.log("proposal accepted"))
   .catch(() => console.log("proposal rejected"))