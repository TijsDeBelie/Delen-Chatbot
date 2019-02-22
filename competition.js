const builder = require('botbuilder');

class Question {
    constructor (questionText, type) {
        this.questionText = questionText;
        this.type = type;
    }
}

class BooleanQuestion extends Question {
    constructor(questionText, answer) {
        super(questionText, 0);
        this.answer = answer;
    }

    answerQuestion(answer) {
        return (answer === this.answer);
            
    }

    getMessage(session) {
       return  new builder.Message(session)
    		.text(this.questionText)
    		.suggestedActions(
        	builder.SuggestedActions.create(
                session, [
                    builder.CardAction.imBack(session, "Yes", "Yes"),
                    builder.CardAction.imBack(session, "No", "No"),
                   
                ]
            ));
    
    }
}

class RangeQuestion extends Question {
    constructor(questionText, answer ,range) {
        super(questionText,1)
        this.answer = answer;
        this.range = range;
    }

    answerQuestion(userAnswer) {
        const numberAnswer = parseFloat(userAnswer);
        return (Math.abs(this.answer - numberAnswer > 0 && Math.abs(this.answer - numberAnswer) <= this.range))        
    }

    getMessage(session) {
        return new builder.Message(session)
    		.text(this.questionText);
    }
}

class OptionsQuestion extends Question {
    constructor(questionText, answer, options) {
        super(questionText,2);
        this.answer = answer;
        this.options = options;
    }

    answerQuestion(selectedOption) {
        return (selectedOption === this.answer);
    }

    getMessage(session) {
        return new builder.Message(session)
        .text(this.questionText)
        .suggestedActions(
        builder.SuggestedActions.create(
            session, this.options.map(option => builder.CardAction.imBack(session, option, option),) 
        ));
    
    }
}

const questions = [
    new BooleanQuestion(`Given Facebook's current turmoil, and based on what we explained previously about
    how these kinds of situations can impact a stock price. Do you think the stock price will increase?`,'No'),
    new RangeQuestion(`What do you think was the average investment return percentage that Delen Bank's clients obtained during 2017?`,4.8, 2),
    new OptionsQuestion(`Which of the following industries offered the highest investment return for Delen Bank on 2017?`,
    'Oil & Gas',['Oil & Gas', 'Nanotechnology', 'Aerospace']),
	new BooleanQuestion(`Is this a good program?`,'Yes')
]

module.exports = {questions: questions};