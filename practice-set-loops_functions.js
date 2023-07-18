//PRINT MARKS OF STUDENTS USING FOR- LOOP 
let marks = {
    "sakshi":39,
    "shivam":29,
    "lavi" : 57,
    "rohan":68
}

for(let i = 0 ; i<Object.keys(marks).length ; i++){// this will return keys of object named marks 
    console.log("the marks of" + Object.keys(marks)[i] + "are" + marks[ Object.keys(marks)[i]]) //will return all the keys and values 
}

//PRINT MARKS OF STUDENTS USING FOR-IN LOOP 
for(let key in marks ){// this will return keys of object named marks 
    console.log("the marks of" + key + "are" + marks[key]) //will return all the keys and values 
}