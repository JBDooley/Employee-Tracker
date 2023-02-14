const mysql = require('mysql2');

const db = mysql.createConnection(
	{
		host: 'localhost',
		user: 'root',
		password: process.env.MYSQL_PASSWORD,
		database: 'employees_db'
	},
console.log('connected to the employees_db database')
);

module.exports = db;