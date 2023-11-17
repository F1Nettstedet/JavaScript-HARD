const timer = document.getElementById('timer1')
const timer2 = document.getElementById('timer2')


const getDateInSrting = function () {
    let getFullDate = " "
    const now = new Date()
    const daysWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
    const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']
    let dayWeek = now.getDay()
    let dayMonth = now.getDate()
    let month = now.getMonth()
    let year = now.getFullYear()

    let hours = now.getHours()
    let minutes = now.getMinutes() + " минут"
    let seconds = now.getSeconds() + " секунд"
    let arrTime = [[2, 3, 4, 22, 23, 24, 32, 33, 34, 42, 43, 44, 52, 53, 54],[1, 21, 31, 41, 51]]

    dayWeek = daysWeek[dayWeek]
    month = months[month]


    if (hours == 1 || hours == 21) {
        hours += ' Час'
    } else if (hours > 1 && hours < 4 || hours >= 22) {
        hours += ' Часа'
    } else {
        hours += ' Часов'
    }


    for (let key in arrTime[0]) {
        if (arrTime[0][key] === parseFloat(seconds)) {
            seconds += 'ы'

        }
        if (arrTime[1][key] === parseFloat(seconds)) {
            seconds += 'а'
        }
    }

    for (let key in arrTime[0]) {
        if (arrTime[0][key] === parseFloat(minutes)) {
            minutes += 'ы'
        }
        if (arrTime[1][key] === parseFloat(minutes)) {
            minutes += 'а'
        }


    }
    getFullDate =  `Сегодня ${dayWeek}, ${dayMonth} ${month} ${year} года ${hours} ${minutes} ${seconds}`
    return getFullDate
}




setInterval(() => {
    timer.innerHTML = getDateInSrting()
}, 1000)


const getDateInNumber = function(){ 
    
    const now = new Date()
    let dayMonth = now.getDate().toString().padStart(2,'0')
    let month = now.getMonth().toString().padStart(2,'0')
    let year = now.getFullYear()

    let hours = now.getHours().toString().padStart(2,'0')
    let minutes = now.getMinutes().toString().padStart(2,'0')
    let seconds = now.getSeconds().toString().padStart(2,'0')

    return(`${dayMonth}.${month}.${year} - ${hours}:${minutes}:${seconds}`)

}
setInterval(() => {
    timer2.innerHTML = getDateInNumber()
}, 1000)
