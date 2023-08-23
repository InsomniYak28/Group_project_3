# Import the dependencies.

import datetime as dt

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


    return jsonify(data=data)






# 4. Define main behavior
if __name__ == "__main__":
    app.run(debug=True)
