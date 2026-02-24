// function login(email, pass, cb) {
//     setTimeout(() => {
//         cb({ userId: email, isLoggedIn: true, message: "Login successfull" });

//     }, 3000);
// }

// function getVideoList(user, cb) {
//     setTimeout(() => {
//         cb(["video1", "video2", "video3"]);
//     }, 4000);
// }

// function getVideoDetails(video, cb) {
//     setTimeout(() => {
//         cb({ title: video, duration: "2 mins" });
//     }, 1000);
// }

// login("user@example.com", "password", (userDetails) => {  //callback hell->the sitution w
//     console.log(userDetails);

//     getVideoList(userDetails.userId, (videoList) => {
//         console.log(videoList);

//         getVideoDetails(videoList[0], (videoDetails) => {
//             console.log(videoDetails);
//         })
//     })

// });

// console.log("ending app.js")

//Callback Hell is a situation in programming (mostly in JavaScript) 
// where you have many nested callbacks inside callbacks, making the code very hard to read, understand, and debug.
// Sometimes callback hell looks like pyramid and triangle that's why it is called PYRAMID OF DOOM

// callback hell always apply in dependent call in asynchronosied code
// it's solution is Promises



// Promises -> it is a build in function in java script Constructor function 
// in constructor function we always use a new keyword 
// let myPromise= new Promise((res,rej)=>{
//     let data = "this is my data";
//     if(data){
//         //these two functions are built in CALLBACK function inside promise function i.e. resolve (res) and rejected (rej)
//         res(data);   // if we don't give any dat inside res() than PromiseResult will show undefined
//     }
//     else{
//         rej("error: no data found");
//     }
// });

// console.log(myPromise)



// In this case error will show
let myPromise= new Promise((res,rej)=>{
    let data = "";
    if(data){
        res();  
    }
    else{
        rej("error: no data found");
    }
});

console.log(myPromise)