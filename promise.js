// const cart = ["shoes", "pants", "kurta"];
// createOrder(cart, function (orderId) {
// proceedToPayment (orderId);
// });
// const promise = createOrder (cart);
// promise.then(function (orderId) {
// proceedToPayment (orderId);
// });
// I
// const GITHUB_API = "https://api.github.com/users/akshaymarch7";
// const user = fetch(GITHUB_API);  //promise object is going to be returned inside this user object
// console.log(user);
// user.then(function (data) {
// console.log(data);
// });



// const cart = ["shoes", "pants", "kurta"];
// createOrder (cart, function (orderId) {
// proceedToPayment (orderId, function (paymentInfp) {
// showOrderSummary(paymentInfp, function () {
// updateWalletBalance();
// });
// });
// });
// const promise = createOrder (cart);
// promise.then (function (orderId) {
// proceedToPayment (orderId);
// });


// const cart = ["shoes", "pants", "kurta"];
// createOrder(cart, function (orderId) {
// proceedToPayment (orderId, function (paymentInfp) {
// showOrderSummary (paymentInfp, function () {
// updateWalletBalance();
// });
// });
// });
// createOrder (cart)
// .then(function (orderId) {
// return proceedToPayment (orderId); // dont forget to return when using promise chaining
// })
// .then(function (paymentInfo) {
// return showOrderSummary (paymentInfo);
// })
// .then(function (paymentInfo) {
//  return updateWalletBalance (paymentInfo);
// });
// //can also be written like this 
// createOrder (cart)
// .then(orderId => proceedToPayment (orderId))
// .then (paymentInfo => showOrderSummary (paymentInfo))
// .then (paymentInfo => updateWalletBalance (paymentInfo));

//PRACTICE
// const cart = ["shoes", "pants", "kurta"];
// const promise = createOrder(cart); // orderId
// console.log(promise);
// // IF REQUEST IS RESOLVED
// promise.then(function (orderId) {
//     console.log(orderId);
//     //proceedToPayment (orderId);
//     })

// .catch(function(orderId){  //IF REQUEST IS RREJECTED(graceful way of handling errors)
//     console.log(err.message); 
// });



/// Producer
function createOrder (cart) {
const pr = new Promise (function (resolve, reject) {
// createOrder
// validateCart
// orderId
if(!validateCart (cart)) {
const err = new Error("Cart is not valid");
reject(err);
}
// logic for createOrder
const orderId = "12345";
if(orderId) {
    setTimeout(function(){ //fake delay
        resolve(orderId);
    },5000);
//resolve(orderId);
}
});
return pr;
}

function validateCart (cart) {
    return false; //simple function for the sake of simplicity
}



const cart = ["shoes", "pants", "kurta"];
createOrder (cart)
.then(function (orderId) {
    console.log(orderId);
    return orderId;
})
.catch(function (err) {
    console.log(err.message);
    })
.then(function(orderId) {
proceedToPayment (orderId).then(function(paymentInfo) {
    console.log(paymentInfo)
    });
})
.then(function(paymentInfo) {
    console.log(paymentInfo)
    })
.catch(function (err) {
    console.log(err.message);
     })
.then(function(orderId) {
    console.log("This will always be called , no matter what");  
     })


/// Producer
function createOrder(cart) {
}
function proceedToPayment (orderId) {
return new Promise (function(resolve, reject) {
resolve("Payment Successful");
})
}
function validateCart (cart) {
return false;
}