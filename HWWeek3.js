
//Assignment 1

// function maxOfTwoNumbers(x, y) {
//     if (x > y)
//         return x
//     else if (y > x)
//         return y
//     else
//         return x

// }
// console.log(maxOfTwoNumbers(7, 5))
// console.log(maxOfTwoNumbers(7, 9))
// console.log(maxOfTwoNumbers(9, 9))

// Assignment 2

// const maxOfThree = function(x, y, z){

//     if (x > y && x >z)
//         return x

//     else if (y > x && y >z)
//         return y
//     else 
//         return z

// }
// console.log(maxOfThree(1,2,3))
// console.log(maxOfThree(3,2,1))
// console.log(maxOfThree(1,3,2))

// Assignment 3

// function isCharAVowel(character){
//     const characters = ['a','e','i','o','u','A','E','I','O','U']
//     if (characters.includes(character)){
//         return true
//     }
//     else 
//         return false

// }

// console.log(isCharAVowel("v"))

// Assignment 4

// const sumArray = function(...skills){

//     let sum = 0
//     for (let i = 0; i < skills.length; i++){
//         sum += skills[i]

//     }
//     return sum
// }

// console.log(sumArray(2,4,5,7))

// Assignment 5


// function multiplyArray(arrays){
//     let product = 1

//     for (let i = 0 ; i < arrays.length; i++){
//         product *= arrays[i]
//     }
//     return product
// }
// console.log(multiplyArray([2, 4, 5]))

// Assignment 6

// const numArgs = function(...nums){
//     return nums.length
// }
// console.log(numArgs(5, 6, 7, 8, 9))

// Assignment 7

// function reverseString(str) {
//     let string1 = ""
//     for (let i = (str.length - 1); i >=0; i--){
//         string1 += str[i]
//     }
//         return string1

// }
// console.log(reverseString("rockstar"))

// Assignment 8

// const longestStringInArray = function (array) {
//     let longest = 0
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].length > longest) {
//             longest = array[i].length
//         }

//     }
//     return longest
// }
// console.log(longestStringInArray(["Hello", "Congratulations", "Clock"]))

// Assignment 9

function stringsLongerThan(array, number){
    arrayResults = []
    for (let i = 0; i < array.length; i++){
        if (array[i].length > number){
            arrayResults.push(array[i])
        }
    }

    return arrayResults
}

console.log(stringsLongerThan(["Hello", "and", "four", "to", "seven"], 2))