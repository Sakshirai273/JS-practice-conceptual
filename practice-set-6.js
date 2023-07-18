
//Practice set - 6

//1. write program using prompt function to take input of age as a value from the user and use alert to tell if he can drive and use confirm to ask the user if he wants to see prompt again...then use error method if age entered is negative 
let runAgain = true;

const canDrive = (age) => {
  return age >= 18 ? true : false
}

while (runAgain) {
  let age = prompt("Enter your age")
  age = Number.parseInt(age)
  if (age < 0) {
    console.error("Please enter a valid age");
    break;
  }

  if (canDrive(age)) {
    alert("Yes you can drive")
  }
  else {
    alert("You cannot drive")
  }
  runAgain = confirm("Do you want to play again?")
}



//2. change background on basiss on user input also change or rideredt url if user enters number greater than 4
let number = prompt("enter your no")
number = Number.parseInt(number)

if(number>4){
    location.href ="https://google.com"
}
let color = prompt("enter bg color")

document.body.style.background = color