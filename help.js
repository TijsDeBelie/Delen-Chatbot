var builder = require('botbuilder');
var commands = ['help', 'stock', 'register', 'hello', 'tutorial','lets play a game'];





function command(session, data){
		
return builder.CardAction.imBack(session, commands[data], commands[data])		
}
	
var i;

const HelpDialog = [
    function (session) {
			
		
		
		
		var msg = new builder.Message(session)
    		.text("Please choose a command for more help")
    		.suggestedActions(
        	builder.SuggestedActions.create(
                session, [
    				command(session, 0),
					command(session, 1),
					command(session, 2),
                   	command(session, 3),
					command(session, 4),
					command(session, 5)
                ]
            ));
		
		
		
		builder.Prompts.text(session, msg);
		
	}, 
	
	function (session, results) {
		var result = results.response
	
		if (result == commands[0]) {
			session.send('You will now be prompted with info about ' + commands[0])
		}
		else if (result == commands[1]) {
			session.send('You will now be prompted with info about ' + commands[1])
		}else if (result == commands[2]) {
			session.send('You will now be prompted with info about ' + commands[2])
		}else if (result == commands[3]) {
			session.send('You will now be prompted with info about ' + commands[3])
			
		}
	}
]

module.exports = {
	HelpDialog: HelpDialog
}