'use strict'
// Задача №1 

const changingString = function(changing){

    let result = '' 
    let count = 0
    
    if(!isNaN(changing) && changing !== String()){
     return alert('Передайте строку!')
    }
     result = changing.trim()
    for(let i = 0; result.length > i; i++){
     count = i
    }
    if(count > 30){
     result =  result.slice(0,31) + '...'
    }
    return result
    }
    
    
   console.log(changingString(''))