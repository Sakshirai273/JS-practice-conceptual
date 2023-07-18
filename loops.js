//FOR - LOOPS
//Program to add first 'n' natural numbers 
let sum = 0
let n = prompt("enter the value of n")
for(let i = 0 ; i < 5 ; i++){
 sum += (i+1)
//console.log((i+1),"+")
}
console.log("sum of first" + n +"natural numbers is" + sum)
console.log(i)  // gives output i is not defined because 'let' is block scope and 'var' is global scope 


/*
let obj = {
sakshi:84,
shubh:49,
riya:39,
manav:20
}

for(let a in obj){ // for - in loop
    console.log("Marks of" + a + "are" + obj[a])
}
for(let b of "sakshi"){ // for - of loop  
    console.log(b),
}
*/

//WHILE LOOPS - condition ke basis pe code execute kraate hain
/*
let a = prompt("enter the value of n")
a = Number.parseInt(a)

let i = 0 ;
while( i< a){
console.log(a)
i++;
}
*/

//DO- WHILE LOOPS - condition ke basis pe code execute kraate hain pr kam se kam ek baar chlta hai loop

let b = prompt("enter the value of n")
b = Number.parseInt(b)

let j = 0 ;
do {
console.log(a)
i++;
}while(j<b)