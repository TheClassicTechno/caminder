const NOON = new Date(1, 1, 1, 12, 0, 0, 0)

function msToMinutes(num) {
    return ((num/1000)/60)
}

function calculateNoonOffset(time) {
    if(time > NOON) {
        return time - NOON
    }
    return NOON - time
}

function calculateNoonOffsetScore(noffset1, noffset2) {
    if(noffset1 > noffset2) {
        return noffset2 / noffset1
    }
    return noffset1 / noffset2
}

function timeparse(time) {
    times = time.split(" ")
    let t = 0
    if(times[1].toLowerCase() == "pm") {
        t = 12
    }
    let hms = times[0].split(":")
    return new Date(1, 1, 1, t, (parseInt(hms[0]) + t), parseInt(hms[1]))
}

class timeslot {
    constructor(time1, time2) {
        this.time1 = timeparse(time1)
        this.time2 = timeparse(time2)
        this.duration = msToMinutes(this.time1 - this.time2)
        this.noonOffset = calculateNoonOffsetScore(calculateNoonOffset(this.time1), calculateNoonOffset(this.time2))
    }
}

class timeslotlist {
    constructor(timeslots) {
        this.timeslots = timeslots
    }

    bestOption = () => {
        let offsetRanks = this.timeslots.sort((a, b) => (a.noonOffset > b.noonOffset) ? 1 : -1)
        let topthird = []
        for(let i = 0; i < Math.ceil(offsetRanks.length/3); i++) {
            topthird.push(offsetRanks[i])
        }
        let finalranks = topthird.sort((a, b) => (a.duration, b.duration) ? 1 : -1)
        return finalranks[0]
    }
}

let listOfSlots = [new timeslot("1:15 am", "2:45 am"),new timeslot("4:30 am", "6:00 am"),new timeslot("7:15 am", "8:30 am"),new timeslot("9:25 am", "10:00 am"),new timeslot("10:10 am", "11:45 am"),new timeslot("1:30 pm", "2:45 pm"),new timeslot("3:15 pm", "3:45 pm"),new timeslot("5:00 pm", "5:15 pm"),new timeslot("9:10 pm", "9:11 pm"),new timeslot("11:23 pm", "11:59 pm")]
let kekw = new timeslotlist(listOfSlots)

console.log(kekw.bestOption().time1)