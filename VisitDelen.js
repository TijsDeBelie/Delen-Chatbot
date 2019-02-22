var opn = require('opn');
var builder = require('botbuilder');


const VisitDialog = [
	
	function (session, results) {
		session.send("You will now be transfered to the Delen Homepage")
		opn("www.Delen.com")
	}
]



module.exports = { VisitDialog: VisitDialog }