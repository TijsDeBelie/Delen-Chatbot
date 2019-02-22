
var builder = require('botbuilder');

const cancel = [


        function(session, result){

		
		var msg = new builder.Message(session)
    		.text("Do you want to cancel?")
    		.suggestedActions(
        	builder.SuggestedActions.create(
                session, [
                    builder.CardAction.postBack(session, "Yes", "Yes"),
                    builder.CardAction.postBack(session, "No", "No"),
                   
                ]
            ));
		builder.Prompts.text(session, msg);
		
		
		
	
    }, 
	
	function (session, results) {
		var result = results.response;
	
		if (result == 'Yes') {
			session.endDialog(`Ok, I will shut up now`)
			
			
		}
	}

]

module.exports = {
    cancel: cancel

}

