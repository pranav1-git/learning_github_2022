console.log("In this chapter 6 we are going to study conditonal expressions in javascript")
// let age = 18
// let b = 18
// if (b > age)
//   console.log("Hurray !! you can Drive 😁👍🏻")

// else if (b == age)
//   console.log("oh ! congo that you turned out 18 ! You can Drive")
// else
//   console.log("Sorry 😔😔 You cannot drive")

let age = prompt("Hey what is your age ? ")
age = Number.parseInt(age) // this code converts the given string value into integer , and it is known as typecasting
// console.log(typeof age)
if (age > 18)
  console.log("Hurray !! you can Drive 😁")
else if (age == 18)
  console.log("oh ! congo 😃 that you turned out 18 ! You can Drive")
else if (age < 0)
  console.log("Person's age can never be negative")
else if (age == 0)
  console.log("Lol ! tu abhi just paida hua hain 😂😂")
else
  console.log("This is an INVALID age !!")


//2. program of conditional expressions

let num = prompt("Enter any Number :")
num = Number.parseInt(num)

if (num > 0) {
  console.log("The given number is a positive")
}
else if (num == 0) {
  console.log("The given number is zero")
}
else if (num < 0) {
  console.log("The given number is negative")
}
else {
  console.log("The given number is INVALID !!")
}


let friend = prompt("Enter your friend name : ")
if (friend == "ravi") {
  console.log("Ravi is daring , handsome , of strong attitude and my best friend")
}
else if (friend == "amit") {
  console.log("Amit is a nice guy , selfish , talkative")
}
else if (friend == "sujal") {
  console.log("Sujal is confused but intelligent")
}
else if (friend == "zaid") {
  console.log("Zaid is no more my friend")
}
else {
  console.log("Sorry !! Dont have any compliment for others")
}