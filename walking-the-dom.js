//DOM- jo HTML hai usko convert krdiya gaya hai javascript object me or ab ham usko object ki tarah access kr skte hain
/*
1. document.head -> head ka content aajayega
2. document.body -> body content aajayega 
3. document.documentElement -> html content aajayega
4. document.title -> string return kregaa---isse aap change bhi kr skte ho page ka content on SERVER side
*/

//accessing children  of an element
/*
console.log(Element.firstChild) -> first child Element
console.log(Element.lastChild) -> last child Element
console.log(Element.childNodes) -> all child Elements/nodes

Element.hasChildNodes() -> returns true if there are any child nodes

child nodes look like an array but they are actually collections
using array.from we can convert into array!

*/

//$0 -> jo select kiya hua hai vo iske through access kr skte hain

/*
DOM COLLECTIONS PROPERTIES
1. Iterable using for..of loop
2. read only
3.they are live Element.childNodes variable will update automatically if childnodes of element is ChannelMergerNode.
*/

/*
PARENTS AND SIBLINGS OF AN ELEMENT
parent node -> tabhi return krega kuch jab vo node ho , comment node , text node koi bhi node ho..
parent Element -> agar parent ek element hai tabhi isme return hoga , nhi to null return kra jayega

console.log(document.body.firstChild) -> returns first child
a = document.body.firstChild
console.log(a.parentNode)
console.log(a.parentElement)
console.log(a.firstChild.nextSibling)
*/

//ELEMENT ONLY NAVIGATION -> to avoid text , comment nodes
let b = document.body
console.log("first child of b is:",b.firstChild) //-> iske through hame kisi bhi tarah ka child dekhne ko mil skta hao , be it text node , comment node, element node
console.log("first child of b is:",b.firstElementChild) //-> iske through hame sirf element child hi milega 
//other Element only methods
document.previousElementSibling //-> prev sibling which is an element
document.nextElementSibling  //->next sibling
document.firstElementSibling //-> first element child
document.lastElementSibling //-> last element child



//TABLE NAVIGATION  -> additional DOM element properties specific to its kind
let t = document.body.firstElementChild.firstElementChild
console.log(t)
console.log(t.rows)
console.log(t.caption)
console.log(t.tHead.firstElementChild)
console.log(t.tFoot)
console.log(t.tBodies) //-> colleciton o <tbody> elements
console.log(t.rows[1].rowIndex) //-> row Node. starting from zero
