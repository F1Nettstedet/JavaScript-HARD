'use strict'
// Задача №1 

let screenPrice

screenPrice = prompt('Какая сумма?')

const isNumber = function (num) {
    let regexp = /\s/g
    return !regexp.test(num) && !isNaN(parseFloat(num) && isFinite(num))
}

while(!isNumber(screenPrice)){
    screenPrice  = prompt('Какая сумма?')
}


console.log(screenPrice)