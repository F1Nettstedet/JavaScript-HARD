'use strict'
// Задача №1

let arr = ['123', '231', '332', '451', '471', '254']
let count = []
for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === '2' || arr[i][0] === '4') {
        count.push(arr[i])

    }

}

console.log(count)

//Задача №2 
let n = 100;
nextPrime:
for (let i = 2; i <= n; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j === 0) continue nextPrime; 
  }
 console.log(i + 
 ` Делитель для этого числа 1 и ${i}`)
}