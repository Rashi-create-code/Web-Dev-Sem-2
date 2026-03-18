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