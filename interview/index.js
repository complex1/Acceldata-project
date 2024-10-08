// Given an array of integers, find all occurrences of two elements which add up to a given number (for instance 10). Return the indices of these elements.
// [7, 2, 5, 3, 10, 9, 8], 10 => (0, 3), (1, 6)
// [7, 2, 5, 3, 10, 9, 8], 10 => (0, 3), (1, 6)

// const findPair = (arr, sum) => {
//   const sArr = arr.map((item, index) => {
//     return {
//       num: item,
//       index
//     }
//   }).sort((a,b) => a.num - b.num)
//   const len = arr.length
//   let startI = 0
//   let lastI = len - 1
//   const results = []

//   for (let i = 0; i < len; i++ ) {
//     const _sum = sArr[startI].num + sArr[lastI].num

//     if (_sum === sum) {
//       results.push([sArr[startI].index, sArr[lastI].index])
//       startI++
//       lastI--
//     } else if (_sum > sum) {
//       lastI--
//     } else if (_sum < sum) {
//       startI++
//     }

//     if (startI >= lastI) {
//       break
//     }
//   }
//   return results
// }

// console.log(findPair([], 30))

// console.log(number) // undefind
// let number = 10
// console.log(number) // 10




// Implement a debounce function in JavaScript/TypeScript. 
// The debounce function will take another function as input and ensure it is only invoked after a specified delay,
// regardless of how often it is triggered.

// const debounce = (fn, delay) => {
//   let timer = null

//   return (...arg) => {
//     if (timer) {
//       clearTimeout(timer)
//     }
//     timer = setTimeout(() => {
//       fn(...arg)
//     }, delay)
//   }
// }

// const myLog = debounce((i) => {
//   console.log('shubham', i)
// }, 1000)

// myLog(1)
// myLog(2)
// myLog(3)
// myLog(4)
// myLog(5)
// myLog(6)
// myLog(7)
// myLog(8)
// myLog(9)
// myLog(10)
// myLog(11)
