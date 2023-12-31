# Import the dependencies.

from flask import Flask, render_template, jsonify
import psycopg2

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

# Connect to the database
conn = psycopg2.connect(database="flaskAPI_db", user="postgres",
                        password="postgres", host="localhost", port="5432")
  
# create a cursor
cur = conn.cursor()
  
# Insert data from table
cur.execute('''SELECT * FROM healthdata''')

data = cur.fetchall()

# close the cursor and connection
cur.close()
conn.close()

#################################################
# Flask Routes
#################################################
@app.route("/")
def welcome():
    
    return render_template('index.html')

@app.route("/data")
def info():

    conn = psycopg2.connect(database="flaskAPI_db", user="postgres",
                        password="postgres", host="localhost", port="5432")
  
    # create a cursor
    cur = conn.cursor()
    
    # Insert data from table
    cur.execute('''SELECT * FROM healthdata''')

    data = cur.fetchall()

    # close the cursor and connection
    cur.close()
    conn.close()

    columns=[x[0] for x in cur.description]
    json_data=[]
    for result in data:
        json_data.append(dict(zip(columns,result)))
    return jsonify(data=json_data)

@app.route("/topcause")
def cause():

    conn = psycopg2.connect(database="flaskAPI_db", user="postgres",
                        password="postgres", host="localhost", port="5432")
  
    # create a cursor
    cur = conn.cursor()
    
    # Insert data from table
    sql_string ="SELECT DISTINCT ON (locationdesc) locationdesc, topic, sum(datavalue) as datavalue, lat, lon FROM healthdata \
        where category='Overall' group by locationdesc, topic, lat, lon order by locationdesc asc , sum(datavalue) desc"
        
    cur.execute(sql_string)

    topcause = cur.fetchall()

    # close the cursor and connection
    cur.close()
    conn.close()

    columns=[x[0] for x in cur.description]
    json_topcause=[]
    for result in topcause:
        json_topcause.append(dict(zip(columns,result)))
    return jsonify(json_topcause)

# 4. Define main behavior
if __name__ == "__main__":
    app.run(debug=True)
