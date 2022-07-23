
// find element by id
let myDiv  = document.getElementById("myDiv")
console.log(myDiv)

// find element by tag => return an array of elements

let myParagraphs = document.getElementsByTagName('p')
console.log(myParagraphs)
console.log(myParagraphs[1])


// find element by class name => return an array too

let classElemt = document.getElementsByClassName("my-span")

// find elements by query selectors (css selectors) => this is the best way
let queryElement = document.querySelector('#myDiv')
console.log(queryElement)

let queryAllElements = document.querySelectorAll('p')
console.log(queryAllElements)

// get elements by other ways
console.log(document.forms[0]["one"]["value"])

console.log(document.links[0])


     /*      LA FIN DE LA PREMIERE PARTIE  AJOUTER AU REPO  */



