//ARRAYS - Collection of some items that can be accessed by index.

let marks_students = [51,72,83,94,false, "not present"]
console.log(marks_students)
console.log(marks_students[0])
console.log(marks_students[1])
console.log(marks_students[2])
console.log(marks_students[3])
console.log(marks_students[4])
console.log(marks_students[5])
console.log(marks_students[6]) //undefined because index does not exist
console.log("length of array of marks:-",marks_students.length)
marks_students[6] = 87 // adding a new value to the array
marks_students[0] = 67 //changing value of array
//ARRAYS ARE MUTABLE
console.log(typeof marks_students) //prints "object"

for(let i = 0 ; i< marks_students.length ; i++){
    console.log(marks_students[i]) 
}
let num = [1,5,39,57,47]
let b = num.toString() // converts array into string
console.log(b)
console.log(b , typeof b)
let c = num.join (" and ") // joins all the elements using a  seperator
console.log(c, typeof c)
num.pop() //updates original array pop returns the popped value after removing last element
console.log(num)
let r = num.push(79)//pushes in the end 
 console.log(num, r) 
let s = num.shift() //removes an element from the start of the array and returns it 
console.log(s,num)
let t = num.shift(30) //adds element to the beginning and return array length
console.log(t,num)

//DELETE OPERATOR
let num1 = [1,2,4,5,6,7,3,9] 
console.log(num.length)
delete num[0]
console.log(num.length) // element gets deleted but the length of array remains same 
let num_more = [27,29,18,61,48,19]
let num_evenmore = [923,596,383,586,392,292,349]
let new_array =  num.concat(num_more,num_evenmore) // even more than two arrays cam be merged together
console.log(new_array)
console.log(num, num_more)

//SORT METHOD - modifies original array - sorts alphabetically
let num2 = [455,5,79,40,38,5,249]
num2.sort()
console.log(num2)

//optional compare funciton - for eg to sort in descending order 
let compare = (a,b) =>{
    return b - a
}
let num4 = [757,239,19,9,458,232,49]
num4.sort(compare)
num4.reverse()//reverses the array
console.log(num4)

//SPLICE AND SLICE
let arr = [984,894,746,8,28,476,849]
arr.splice (2,4,6,979,8943,4398)
console.log(arr) // used to add new elements in the array 

let newNum = arr.slice(4,8943) // 4 se leke 8943 tak ke elements delete krdegaa
console.log(newNum)





//LOOPS WITH ARRAYS
let myarr = [4,5,9,7,15]
for(let i  =0 ; i<myarr.length();i++){
    console.log(num[i])
}
//for each loop
//to print the square of each element
myarr.forEach((element) =>{
    console.log(element * element)
})
//array.from -> used to create array from any other object
//for eg. HTML collections are converted into array using "from"
let naam = "sakshi"
let arrr = Array.from(naam)
console.log(arrr)


//for....of -> to access array values/items in short

for(let item of myarr){
    console.log(item)
}

//for..in -> also helps to access keys of an array
for(let i in myarr){
    console.log(myarr[i])
}

//MAP , FILTER , REDUCE IN ARRAY


//MAP METHOD
let myarri = [39,8,30]
let z = myarri.map((value,index,array)=>{
    console.log(value,index,array)
    return value+index
})
console.log(z)
//for each ham tab use krte hain jab hame koi opeartion krna hota hai array ke existing elements or ,aur map ham tab use krte hain jab hame naya array banana hota hai to do something..


//FILTER METHOD
let arr22 = [34,29,23,3,8,2,9]
let a2= arr22.filter((a) => {
    return a<10 //based on some conditon filter krdeta hai array ko
})
console.log(a2 , arr22)

//REDUCE METHOD  -> reduces an array to  a single value 
let arr3 = [1,2,4,5,6,7]
const reduce_func = (h1 , h2) => {
    return  h1 + h2  // 2-2 krke add honge, aur 2 ke ans me fir uske bad wala ek add hoga and so on
}
let newarr3 = arr3.reduce(reduce_func)
console.log(newarr3)

//ques - print all no.s from array divisble by 10
let arrayyy = [1,20,9,200, 290,93,29]
let nn = arrayyy.filter((x) =>{
    return x %10 == 0
})
console.log(nn)


//ques - print the square of no.s of array  
let arrayyy1 = [1,2,9,20,9,29]
let nnn = arrayyy.map((x) =>{
    return x * x 
})
console.log(nnn)


//ques - print the factorial of no.s of array 
let arrayyy3 = [1,2,3,4]
let m = arrayyy3.reduce((x1,x2) =>{
    return x1 * x2  
})
console.log(m)
