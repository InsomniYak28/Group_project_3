
import json
import csv

csvfile = open('healthdata.csv', 'r')
jsonfile = open('health_data.json', 'w')

fieldnames = ("Year","LocationAbbr","LocationDesc","DataValue","Topic","TopicDesc","Category","CategoryAbbr","Lat","Lon")

reader = csv.DictReader(csvfile, fieldnames)

for row in reader:
    json.dump(row, jsonfile)
    jsonfile.write('\n')
