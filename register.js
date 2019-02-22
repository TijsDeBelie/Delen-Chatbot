
var builder = require('botbuilder');
var pushdata = require('./database.js').push

const register = [





    
    // Step 1
    function (session) {
        builder.Prompts.text(session, 'It seems like you want to register. Could you please share your name with us? :)');

    },






    function (session, results) {


		session.userData.userName = results.response
        builder.Prompts.text(session, `Hello ${results.response}! Could you also give us your email address?`);


    },




        function(session, result){

		session.userData.Email = result.response
		var msg = new builder.Message(session)
    		.text("Thank you very much! You are now officially registered with:  " + session.userData.userName + " and " + session.userData.Email + 
            " Since you are newly registered, you might want to check out our tutorial. " +
            "If you want to know my other commands you can click I have more questions")
    		.suggestedActions(
        	builder.SuggestedActions.create(
                session, [
                    builder.CardAction.postBack(session, "Tutorial", "I want to learn more"),
                    builder.CardAction.postBack(session, "help", "I still have questions"),
                   
                ]
            ));
		builder.Prompts.text(session, msg);
		
		
		
		pushdata(session.userData);
    }

]

module.exports = {
    register: register

}

