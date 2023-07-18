//STRINGS - Collection of characters 

let Myname = "sakshi"
console.log(Myname.length) //prints sakshi
console.log(Myname[0]) //prints s
console.log(Myname[1])//prints a

//TEMPLATE LITERALS
let boy1 = "shivu"
let boy2 = " shibbu"

let sentence = "boy2 is friend of boy1"
console.log(sentence)

//string interpolation - insert variables directly in template literals

console.log('Hey im ${Myname}' )

//ESCAPE SEQUENCE CHARACTER 
let fruit = 'Bana\'na'
console.log(fruit)
let fruityyy = "Bana\"na"
console.log(fruityyy )
// \" -> this is one charcter .. called as escape seq char

// STRING METHODS
console.log(Myname.toUpperCase())
console.log(Myname.toLowerCase())
console.log(Myname.slice(2,4)) // 2 se leke 4 tak ke print honge bs 
console.log(Myname.slice(2)) // 2 se leke aage tk ke saare print honge
console.log(Myname.replace("sak","tak"))
let friend = " Riya"
console.log(Myname.concat("is a friend of ",friend,"ok"))
let friend2 = "          meenu"
console.log(friend2) // prints __________meenu
console.log(friend2.trim()) //removes whitespaces

// STRINGS ARE IMMUTABLE
let fr ="shivakshi"
console.log(fr[0])
console.log(fr[1])
console.log(fr[2])
console.log(fr[3])
fr[3] ="r" // this is not possible , original string never changes .. whatever method is used , a new string is returned ...older one is not changed , hence string is immutable.
console.log(fr[4])

