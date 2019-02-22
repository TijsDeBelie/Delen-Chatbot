var openDatabase = require('websql');
var db = openDatabase('mydb.db', '1.0', 'description', 1);


function push(data){
	
	

	
	
db.transaction(function (tx) {  
   tx.executeSql('CREATE TABLE IF NOT EXISTS USER (id unique, Name text, Email text)');
	tx.executeSql('INSERT INTO USER (Name, Email) VALUES (?, ?)', [data.userName, data.Email])
});	
	
}

async function request(data){
	let result;
	db.transaction()
	await db.transaction( function (tx) {  
	tx.executeSql('SELECT * FROM USER WHERE Name = ?', [data], function (tx, results) {
		console.log(results.rows);
		console.log(results.rows.length);
		if(results.rows.length > 0) {
			result = true
		}
		else result = false
	});
		
		
	})
	return result;
};


module.exports = {
	push: push,
	request: request
	
}
