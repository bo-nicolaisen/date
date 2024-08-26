// write cool JS hwere!!
let dateElement = document.getElementById('date')

showDateElement()

function showDateElement() {
    let week = ["søndag", 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag']
    let startDay = 0
    let endDay = 0
    let date = new Date()

    let curentday = date.getDay()


    // start day
    if (curentday > 1) {
        startDay = curentday - 2
    }

    if (curentday == 1) {
        startDay = 6
    }

    if (curentday == 0) {
        startDay = 5
    }




    for (let index = 0; index < 5; index++) {
        console.log(week[startDay]);

        startDay = startDay + 1

        if (startDay > 6) {
            startDay = 0
        }


    }






}





