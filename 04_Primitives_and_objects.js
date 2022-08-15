console.log("In this chapter 4 we are going to learn primitives and objects in javascript")

// There are total 7 datatypes in javascript ( nn bb ss u)

// 1.Null
// 2.Number
// 3.Symbol
// 4.String
// 5.Boolean
// 6.Bignt
// 7.Undefined


let d = null
let b = 566
let g = Symbol("I am a symbol")
let a = "string"
let c = true
let f = BigInt("567") + BigInt("3")
let e = undefined
let h

console.log(a, b, c, d, e, f, g)

console.log(typeof d)
console.log(typeof h)



// Objects in javascript ( objects are actually non primitive data types)

console.log("Example of objects -->  1")

const item = {
  "Pranav": true,
  "Ravi": false,
  "Amit": 10,
  "Utkarsh": undefined,
  "popat": "pagal hain",
}

console.log(item["Pranav"])
console.log(item["Ravi"])
console.log(item["Amit"])
console.log(item["Utkarsh"])
console.log(item["popat"])



console.log("Example of objects ---> 2")

const players = {
  "virat": 17,
  "Rohit": "HitMan",
  "Rahul": true,

}

console.log(players["virat"])
console.log(players["Rohit"])
console.log(players["Rahul"])


























