const mysql = require('mysql');

// Node.js supports all sorts of DB connections, 
// Here's how easy it is to connect to your local MySQL server
// Make sure it's running!

const con = mysql.createConnection({
  host: "localhost",
  user: "contacts_user",
  password: "passw0rd",
  database: "contacts_db"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM contact", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});

