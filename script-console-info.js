//advantages of using seperate script file using src attribute of SCRIPT TAG
// 1. separation of concerns
// 2. Browser catching
/*
CONSOLE OBJECT METHODS 

assert() -> used to assert = sach hota hai toh kch ni hota , galat hota h toh error aajaata hai
clear() -> clears console
log() -> outputs a msg to console
table() -> displays data in tabular Form
obj = {a:1 , b:2 , c:3}
console.table(obj)

warn() -> provides a warning
error() -> used for errors 
info() -> used for special info
time() -> starts a timer in the console view.
timeend() ->  stops a timer that was previously started by calling console.time().
*/

//ALERT - PROMPT - CONFIRM

alert("Enter value of a!") //-> alertis used to invoke  a mini window with a msg
let a = prompt("enter a here","578") //-> optional default argument 
a = Number.parseInt(a) //prompt hmesha string value deta h to usko convert krte hain int me
alert("you entered a of type "+ (typeof a)) 
let write = confirm("do you want to write in page?")
if(write){
document.write(a)
}
else{
    document.write("please allow me to write")
}