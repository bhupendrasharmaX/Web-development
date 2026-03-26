// // Asynchronous program
// console.log("---Asynchronous program!---");
// console.log("One");
// console.log("two");
// // setTimeout (()=>{
// //     console.log("Hello");
// // },4000) //timeout, 4sec = 4000 msec
// console.log("three");
// console.log("four");


// // Callbacks function
// console.log("---Callback Function!---");
// function sum(a,b){
//     console.log(a+b);
// }
// function calc(a,b,sum){
//     sum(a,b);
// }
// calc(1,2,sum);

// // Callback hell example
// console.log("---Callback hell example---");
// function getData(dataID,getNextData){
//     setTimeout(()=>{
//         console.log(dataID);
//         if(getNextData){
//             getNextData();
//         }
//     },2000);
// }
// getData(1,()=>{
//     console.log("Getting Data2...")
//     getData(2,()=>{
//         console.log("Getting data3...")
//         getData(3,()=>{
//             console.log("Getting Data4...")
//             getData(4);
//         })
//     });
// });

// // Promises
// const getPromise = () =>{
//     return new Promise((resolve,reject)=>{
//         console.log("Hello,Promise is done!");
//         resolve("Successfully done!");
//     });
// };


// let promise = getPromise();
// promise.then((res)=>{
//     console.log("Promise is Fulfilled!");
// });
// promise.catch((err)=>{
//     console.log("Promise is rejected!");
// });

// //Promise Chain
// function asyncFunction1() {
//      return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Data1");
//             resolve("Successfully done!");
//         },5000);
//     });
// };

// function asyncFunction2() {
//      return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Data2");
//             resolve("Successfully done!");
//         },5000);
//     });
// };

// console.log("Getting data1...");
// asyncFunction1().then((res)=>{
//     console.log("Getting Data2...");
//     asyncFunction2().then((res) =>{});
// });

// Async-Await function
function getData(dataID){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data - ",dataID);
            resolve("Seccessfull!");
        }, 2000);
    });
};

async function getAllData() {
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
    await getData(5);
}
getAllData();