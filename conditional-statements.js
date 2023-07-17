let a = prompt("hey kya haal") // prompt hamse puchta hai , alert hamko batata hai 
console.log(typeof a) //string aayega
a = Number.parseInt(a) //converting the string to number
if(a<0){
    alert("this is valid age");
}
else if(a<9){
    alert("you are a kid and you cant drive");
}
else if (a<18 && a>=9){
    alert("after 18 drive krna");
}
else{
    alert("You can drive");
}
console.log("done")
console.log("You can" , (a<18 ? "not drive": "drive"))

//SWITCH CASE 

let age = prompt("whats your age ?")
switch(age){
    case '12':
        console.log("your age is 12")
        break
    case '13':
        console.log("your age is 13")
        break
    case '14':
        console.log("your age is 14")
        break
    default:
        console.log("your age is not special")  
}