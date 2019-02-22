var builder = require('botbuilder');



const CheckStockDialog = [
    (session, args, next) => {
        const stockCompany = builder.EntityRecognizer.findEntity(args.intent.entities, 'stockCompany');

        // Prompt for the company name if it is not recognized
        if (!stockCompany) {
            builder.Prompts.text(session, 'Which company would you like to check?');
        } else {
            next({ response: stockCompany });
        }
    },

    (session, results) => {
        const stockPrice = Math.round((Math.random() * 100) * 10) / 10;

        //TODO if you send 'stocks' without company you get the reply 'stocks price is ....'

        const imageNumber = Math.floor(Math.random() * (15 - 1 + 1)) + 1;
        const imageUrl = "http://imagehoster.bitballoon.com/" + imageNumber + ".png";



        /*


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
         */

    var msg = new builder.Message(session);
     //.endDialog()

        if(results.response.entity) {
            msg.attachmentLayout(builder.AttachmentLayout.carousel)
            msg.attachments([
                new builder.HeroCard(session)

                    .images([builder.CardImage.create(session, imageUrl)])
                    .title(`${results.response.entity}'s current stock price is $${stockPrice}`)

            ]);
            session.send(msg);


            
        }
         
        else{
            msg.attachmentLayout(builder.AttachmentLayout.carousel)

            msg.attachments([
                new builder.HeroCard(session)

                    .images([builder.CardImage.create(session, imageUrl)])
                    .title(`${results.response}'s current stock price is $${stockPrice}`)

                    .buttons([

                        builder.CardAction.imBack(session, 'Buy', 'Buy'),
                        builder.CardAction.imBack(session, 'Sell', 'Sell'),
                        builder.CardAction.imBack(session, 'VisitDelen', 'Visit Delen Bank platform')
                    ])



            ]);
            session.send(msg).endDialog;



        }
    }
]

module.exports = { CheckStockDialog: CheckStockDialog }