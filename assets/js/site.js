// write cool JS hwere!!
let dateElement = document.getElementById('date')

showDateElement()

function showDateElement() {
    let week = ["søndag", 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag']
    let startDay = 0
    let endDay = 0
    let date = new Date()

    let curentday = 0// date.getDay()
    console.log(curentday);

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

    // end day
    if (curentday < 4) {
        endDay = curentday + 2
    }

    if (curentday == 5) {
        endDay = 0
    }

    if (curentday == 6) {
        endDay = 1
    }



    console.log(startDay, endDay);


}





