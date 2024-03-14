from flask import Flask,render_template, jsonify, request
import pymysql # pip install PyMySQL
 
app = Flask(__name__)
 
# You should really load DB credentials from either 
# environment variables (os.environ) or using python-decouple
# See: https://able.bio/rhett/how-to-set-and-get-environment-variables-in-python--274rgt5
 
mysql = pymysql.connect(host='localhost', user='contacts_user', password='passw0rd', database='contacts_db')

@app.route('/my_flask', methods=['GET'])
def my_flask_fn():
	try: 
		cur = mysql.cursor()
		cur.execute("SELECT * from contact")
		result = cur.fetchall()
		cur.close()
		return jsonify(result)
	except Exception as e:
		print("Error with ",e)

@app.route('/my_flask/<int:cid>', methods=['GET'])
def my_flask_fn_id(cid): 
	try:
		cur = mysql.cursor()
		cur.execute("SELECT * FROM contact WHERE id = %s", (cid,))
		data = cur.fetchall()
		cur.close()
		return jsonify(data)
	except Exception as e:
		print("Error with ",e)

app.run(host='localhost', port=5000)
