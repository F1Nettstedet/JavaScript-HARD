'use strict'

//Задача №1 

let lang = prompt("На каком языке вывести дни недели 'ru' или 'eng'")
let rusDayWeek = "Понедельник,вторник,среда,четверг,пятница,суббота,воскресенье"
let engDayWeek = "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday"

if(lang === "ru"){
    console.log(rusDayWeek)
} else{
    console.log(engDayWeek)
}

switch (lang){ 
    case "ru": console.log(rusDayWeek);
    break;
    case "eng": console.log(engDayWeek)
    break;

}

let arrDayWeek = [[rusDayWeek],[engDayWeek]]
console.log(lang === "ru" ? arrDayWeek[0] : arrDayWeek[1])


//Задача №2

let namePerson = prompt('Введите имя')
let role = namePerson === "Артем" ? 'Директор' : namePerson ==='Александр' ? "Преподаватель" : "Студент"
console.log(role)