//phle synchronous run hota hai fir asynchronous

console.log("1")
setTimeout(()=>{
    console.log("2")
},5000)

setTimeout(()=>{
    console.log("3")
},3000)

setTimeout(()=>{
    console.log("4")
},2000)

console.log("5")   // result will be 1 5 4 3 2

// asynchronous is unblocking and synchronous is blocking


