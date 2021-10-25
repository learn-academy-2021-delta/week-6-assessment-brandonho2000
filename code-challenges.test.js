// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

var people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

describe('job describer', () => {
  test('take the name and givve a occupation', () => {
  expect(describer(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})
// sweet. i failed.
// b) Create the function that makes the test pass.
// i know i want to take the "Name" and "occupation" and have it displayed together with "is" inbetween using something like .join 
// i want to take apart the array with .map and log it as its own var called final that will be the final product
// .map to on array and set capper to equal the names cappitolized.
// join back the names with occupation with is inbetween and a period at the end.
const describer = (array) => {
var final = array.map(obj =>{
  let names = obj.name.split(" ")
  let capper = names.map(name => {
    return name[0].toUpperCase() + name.slice(1)
  })
  return capper.join(" ") + " is " + obj.occupation + "."
})
return final
}



// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
var hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

describe('only takes numbers that are remainders when divided by 3, leaving the other numbers, strings and datatypes', (array) => {
  test('only takes in numbers that are divisible by 3', () =>{
    expect(by3(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(by3(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

// sicko mode. i failed
// b) Create the function that makes the test pass.
// i want to take the array and filter only numbers and divide those numbers by 3.
// created the function and filter the array then set the return to display the numbers divided by 3 which is logged on a new var called filter
const by3 = (array) => {
  let filter = array.filter(value => typeof value === 'number')
  return filter.map(value => value % 3)
}

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

describe('takes in the array and cubes all of the items within the array', () => {
  test('cube the numbers in array', () =>{
    expect(cube(cubeAndSum1)).toEqual(99)
    expect(cube(cubeAndSum2)).toEqual(1125)
  })
})

// sick nasty. i failed
// b) Create the function that makes the test pass.
// create a function that takes an array
// .mapped the array to cube the numbers and used .reduce to add the values

const cube = (array) => {
  let cube3 = array.map(value => value**3)
  return cube3.reduce((value1, value2) => value1 + value2)
}