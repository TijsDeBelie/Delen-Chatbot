var builder = require('botbuilder');

//var Requestdata = require('./database.js').request


const GreetingDialog = [
    /*function (session) {
		session.send('Hello I am Delen Bot, I will guide you trough important steps:');
		/*
		builder.Prompts.text(session, 'What shall I call you?');
		}, 
	
	async function (session, results, next) {
		session.send('hello ' + results.response);
		let test = await (Requestdata(results.response));
		if(test == true){
			
			session.send('Welcome back');
			return;
		}else{
			
			
			next();
		}
	
	},*/	
	function (session, results) {
		session.send('Hello I am Delen Bot, I will guide you trough important steps:');
		var msg = new builder.Message(session)
    		.text("Would you like to register?")
    		.suggestedActions(
        	builder.SuggestedActions.create(
                session, [
                    builder.CardAction.postBack(session, "register", "Yes"),
                    builder.CardAction.postBack(session, "cancel", "No"),
                   
                ]
            ));
		builder.Prompts.text(session, msg);
		
	}, 
	
	function (session, results) {
		var result = results.response;
	
		if (result == 'cancel') {
			session.send(`Ok, you can always register later`)
			
			
		}
	}
]

module.exports = {
	GreetingDialog: GreetingDialog
}