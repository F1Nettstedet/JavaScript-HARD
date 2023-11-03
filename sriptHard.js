let num = 266219
let stirngNum = String(num).split("") 
// Преобразовали тип данных Number в String.С помощью метода Split разбили строку на подстроки и вернули массив.  

for(let i = 0 ; i < stirngNum.length; i++ ){
if(stirngNum[i] !== Number){
    stirngNum[i] = Number(stirngNum[i])
} 
//С помощью данного цикла преобразовали массив состоящий из строк в массив состоящий из чисел.

}
 let count = 1
 for(let i = 0; i < stirngNum.length; i++ ){
count *= stirngNum[i]
}
console.log(count)
//С помощью данного цикла перебрали массив чисел и перемножили их,записав в переменную count

count = count ** 3
console.log(count)
// Возвели count в степень 3

num  = String(count) //Преобразовали переменную в строку
num = num.slice(0,2) // При помощи метода Slice удалили из строки ненужные значения

console.log(+num) // С помощью унарного оператора "+" преобразовали строку в число :)