const Questions = require('./competition').questions
const builder = require('botbuilder');

const QuestionsGame = [
    function (session) {
		session.send("Nice! let's start playing!")
			
		var randomNumber = Math.floor(Math.random() * 3)
        var question = Questions[randomNumber];
        var msg = question.getMessage(session);
        session.dialogData.question = question;
		builder.Prompts.text(session, msg);
	}, 
	
	function (session, results) {
		var result = results.response
		const arr = (answer,type) => {
			switch (type) {
				case 0:
					return (answer === session.dialogData.question.answer);
				case 1:
					const numberAnswer = parseFloat(answer);
					return (Math.abs(session.dialogData.question.answer - numberAnswer > 0 && Math.abs(session.dialogData.question.answer - numberAnswer) <= session.dialogData.question.range))        
				case 2:
				return (answer === session.dialogData.question.answer);
					break;			
				default:
					break;
			}

		}
		if (arr(result, session.dialogData.question.type)) {
			session.send(`Congratulations, you have answered correctly!`)
			
		}
		else {
			session.send('sorry, that is not the correct answer :(')
        }
        session.endDialog();
	}
]

module.exports = {QuestionsGame: QuestionsGame}