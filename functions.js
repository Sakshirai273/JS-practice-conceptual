// Functions:- enhance reusability of code and sepearation og various logics
const hello = () => {
console.log("hey kse ho , m toh thik")
  return "hi";
}

function onePlusavg (x,y){
  return Math.round(1+ (x+y)/2) // "math.round" returns round offed number 
}
const sum = (p,q) => {
  return p+q
}

let a = 1;
let b = 2;
let c = 3;
hello(); //hey kse ho wali line print hoti 
let y = hello();   //hey kse ho wali line print hoti 
console.log(y)// y ka output "hi" aayega 

console.log("one plus avg of a and b is " ,onePlusavg(a,b))
//console.log("one plus avg of a and b is ", 1+ (b+c)/2)
console.log("one plus avg of a and b is ",1+ (c+a)/2)
console.log("one plus avg of a and b is ", onePlusavg(a,c))
console.log(sum(a,c))

//Mean of a,b,c,d
const mean = (a,b,c,d) => {
  return (a+b+c+d)/4
}
console.log(mean(4,5,6,7))