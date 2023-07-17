// PRIMITIVE DATA TYPES 
// N -> NULL 
// N -> NUMBER
// S -> SYMBOL
// S -> STRING
// B -> BOOLEAN
// B -> BIGINT
// U -> UNDEFINED

// NON- PRIMITIVE DATA TYPES
// Objects -> KEY - VALUE PAIRS 

let a = null;
let b= 345;
let c= true;
let d  = BigInt("57") +BigInt("3");
let e = "sakshi"
let f = Symbol("I'm symbol")
let g = undefined
console.log(a,b,c,d,c,f,g)
console.log(typeof d)

//objects in JS
const item = {
    "sakshi":true,
    "shivam":false,
    "lavi" : 57,
    "rohan":undefined
}
console.log(item["sakshi"])