'use strict'
// Задача №1 

const list = document.getElementById('week')
let day = 0
let now = new Date()
let nowDat = now.getDay()
let days = ["Воскресенье", "Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"]

for (day in days){ 
if(days[day] === days[6] || days[day] === days[0] && days[day] !== days[nowDat]){ 
    list.innerHTML += "<li>" + '<i>' + days[day] 
}
else if(days[nowDat] == days[day]){
    list.innerHTML += "<li>" + '<b>' + days[day] 
}
else{
    list.innerHTML += "<li>"  + days[day]
}
}
