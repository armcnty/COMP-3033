from flask import Flask,render_template, request
from flask_mysqldb import MySQL
 
app = Flask(__name__)
 
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'contacts_user'
app.config['MYSQL_PASSWORD'] = 'passw0rd'
app.config['MYSQL_DB'] = 'contacts'
 
mysql = MySQL(app)
 
@app.route('/form')
def form():
	query_string = "SELECT * from contact"
	cur = mysql.connection.cursor()
	cur.execute(query_string)
	
	result = cur.fetchall()
	
	return jasonify(result)

app.run()

