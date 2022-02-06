from flask import Flask, jsonify, request
import jsonpickle
from logic import timeslot, timeslotlist, timeslotcontainer

app = Flask(__name__)

@app.route("/", methods = ['POST'])
def return_best_fit():
    req = request.get_json()
    # parse json, make timeslot objects out of gaps between time2's and time1's
    timeslots = []
    for item in req:
        if(type(item) != dict):
            return '', 400
        if((not 'start' in item) or (not 'end' in item)):
            return '', 400
        timeslots.append((item['start'], item['end']))
    freetimeslots = []
    for i in range(len(timeslots) - 1):
        freetimeslots.append(timeslot(timeslots[i][1], timeslots[i + 1][0]))
    ftimeslotlist = timeslotlist(freetimeslots)
    ret = ftimeslotlist.bestOption()
    retfr = timeslotcontainer(str(ret.time1).split(" ")[1], str(ret.time2).split(" ")[1])
    return jsonpickle.encode(retfr), 200