// async function always returns a promise.
// if returned a  non promise value , the value will get wrapped in a promise and again a promise is returned. 



// const p = new Promise((resolve , reject)=>{
//     resolve("Promise resolved value!!");
// });

// async function getData(){
// return p;
// }
// // async function getData(){
// // return "Namaste";
// // }
// const dataPromise = getData(); 
// dataPromise.then((res) => console.log(res));

//async await combo is used to handle promises . 


// before async await how we used to handle promises?
const p = new Promise((resolve , reject)=>{
    setTimeout(() => { 
        resolve("Promise resolved value!!");
// } , 10000);
} , 5000);
});


const p2 = new Promise((resolve , reject)=>{
    setTimeout(() => { 
        resolve("Promise resolved value.....!!");
// } , 5000);
} , 10000);
});



//await can only be used inside an async function
async function handlePromise(){
    console.log("Hello duniya!");
    // JS engine (appears to be ) is waiting for the promise to be resolved
    const val = await p;
    console.log("namaste JS");
 //const val = await p; // use keyword 'await' in front of the promise to be resolved and the const value is the resolved promise.
  console.log (val);

  const val2 = await p2;
  console.log("namaste JS 2");
   console.log (val2);
}
handlePromise();

// function getData(){
//     //JS engine won't wait for the promise to be resolved and the promise will be resolved after 10s 
//     p.then((res) => console.log(res));
// console.log("namaste Javascript");
// }
// getData();

//WHY ASYNC AWAIT IS SPECIAL?
