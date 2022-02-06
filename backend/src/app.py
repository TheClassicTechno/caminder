from flask import Flask, jsonify, request
from logic import timeslot, timeslotlist

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "Hello world"

@app.route("/", methods = ['POST'])
def return_best_fit():
    req = request.get_json()
    # parse json, make timeslot objects out of gaps between time2's and time1's
    timeslots = []
    for item in req:
        if(type(item) != dict):
            next
        if(not item.has_key('start') or not item.has_key('end')):
            next
        timeslots.append((item['start'], item['end']))
    freetimeslots = []
    for i in range(len(timeslots) - 1):
        freetimeslots.append(timeslot())
    return '', 200