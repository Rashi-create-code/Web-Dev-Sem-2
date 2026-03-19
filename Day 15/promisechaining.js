// function print(num){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log(num);
//            res();
//         },1000)
//     })
// }

// print(1)
// .then(()=>print(2))
// .then(()=>print(3))
// .then(()=>print(4))
// .then(()=>print(5))

// // Why async and await exist?
// // 1. to avoid promise chaining
// // 2. to execute the asynchronous code properly without confusion
// // 3. to handle the promise in a better way

// // Important:
// // async function always returns a promise


// const pro = new Promise ((res,rej)=>{
//     setTimeout (()=>{
//         res("Promise resolved");
//     },1000)
// })

// async function getdata(){
//     const value = await pro;
//     console.log(value);
//     //logic of async function code
//     console.log("After promise");
// }

// getdata();


    //Promise chaining
function print(num) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log(num);
      res();
    }, 1000);
  });
}

print(1)
  .then(() => print(2))
  .then(() => print(3))
  .then(() => print(4))
  .then(() => print(5));

  //why async and await exist..
  //ton avoid promise chaining
  //to execute the asynchronous code properly wihtout confusion
  //to handle the promise in a better way

  //IMPORTANT:
  //async always returns a promise...async k code ko consoel mi dekhenge toh promise hi dega
  
  //await : it will pause the async fucntion until the promise returns a result(the promise should not be in pending)

  const pro = new Promise((res, rej) => {
  setTimeout(() => {
    res("Promise resolved");
  }, 1000);
});

// function getData(){
//     pro.then((res)=>console.log(res))
//     console.log("after promise")
// }    ....ess ka output hoga after promise (syn) promise resolevd
// Using async/await
async function getData() {
  const value = await pro;
  console.log(value)
  // logic of async function code
  console.log("After promise");
} 
// but this will resolve the above prblm and we get promise resolved ....after promise(here it stop at promise until it get resolevd and print once it prints then it move to next code)



async function fetchData(city) {
    try {
        const API_key = "c499b663bcbf788ec7a58c3c48f2b0bc";
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`);

        const data = await response.json();
        console.log(city);
        console.log(data.main.temp);
        console.log(data.main.humidity);
    } catch (err) {
        console.error(err);
    }
}
fetchData("london")