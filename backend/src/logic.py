from datetime import datetime, timedelta

NOON = datetime(1, 1, 1, 12, 0)

def calculateNoonOffset(time):
    if(time > NOON):
        return time - NOON
    return NOON - time

def calculateNoonOffsetScore(noffset1, noffset2):
    if(noffset1 > noffset2):
        return noffset2 / noffset1
    return noffset1 / noffset2

def timeparse(time):
    times = time.split(" ")
    t = 0
    if(times[1].lower == "pm"):
        t = 12
    hms = times[0].split(":")
    ti = datetime(1, 1, 1, int(hms[0]), int(hms[1]))
    return ti

class timeslot():
    def __init__(self, time1, time2):
        self.time1 = timeparse(time1)
        self.time2 = timeparse(time2)
        self.duration = self.time1 - self.time2
        self.noonOffset = calculateNoonOffsetScore(calculateNoonOffset(self.time1), calculateNoonOffset(self.time2))

class timeslotlist():
    def __init__(self, timeslots):
        self.timeslots = timeslots
    
    def bestOption(self):
        # sort by noonOffsetScore, then take top 1/3? and find longest, advise to spend that outside
        offsetRanks = sorted(self.timeslots, key=lambda x: x.noonOffset)
        topthirdranked = []
        for i in range((len(offsetRanks)//3)):
            topthirdranked.append(offsetRanks[i])
        finalRanks = sorted(topthirdranked, key=lambda x: x.duration)
        return finalRanks[0]

if(__name__ == '__main__'):
    listOfSlots = [timeslot("1:15 am", "2:45 am"), timeslot("4:30 am", "6:00 am"), timeslot("7:15 am", "8:30 am"), timeslot("9:25 am", "10:00 am"), timeslot("10:10 am", "11:45 am"), timeslot("1:30 pm", "2:45 pm"), timeslot("3:15 pm", "3:45 pm"), timeslot("5:00 pm", "5:15 pm"), timeslot("9:10 pm", "9:11 pm"), timeslot("11:23 pm", "11:59 pm")]
    testv = timeslotlist(listOfSlots)
    print(testv.bestOption().time1)