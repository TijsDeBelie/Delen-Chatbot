var builder = require('botbuilder');


const tutorial = [


    function (session) {




        var msg = new builder.Message(session)
            .text('Hi! Welcome to the first part of our tutorial about stock trading. I hope you are ready!')
            .suggestedActions(
                builder.SuggestedActions.create(
                    session, [
                        builder.CardAction.postBack(session, "next()", "Yes I am"),
                        builder.CardAction.postBack(session, "Cancel", "Hell no"),

                    ]
                ));
        builder.Prompts.text(session, msg);

    },

    function (session) {


        var msg = new builder.Message(session)
            .text('Great! Today we will learn about the influence of PR disasters on stock prices.' +
                'You might think, that these are bad stocks to invest in but when the company is quite large they quickly get back on their feet.' +
                'Often there is a lot of potential profit in these types of investments, but you have to look out that the company will be able to handle the bad PR.')
            .suggestedActions(
                builder.SuggestedActions.create(
                    session, [
                        builder.CardAction.postBack(session, "next()", "Give me an example"),
                        builder.CardAction.postBack(session, "Cancel", "Go to the question of the day."),

                    ]
                ));
        builder.Prompts.text(session, msg);

    },


    function (session, results) {
        var msg = new builder.Message(session)
            .suggestedActions(
                builder.SuggestedActions.create(
                    session, [
                        builder.CardAction.postBack(session, "next()", "Go to the question of the day"),
                        builder.CardAction.postBack(session, "Cancel", "Stop the tutorial"),

                    ]
                ));
        msg.attachmentLayout(builder.AttachmentLayout.carousel)
        msg.attachments([
            new builder.HeroCard(session)
                .text("Here's an example of EA, after their loot box schandal their stocks might have plummeted but after only one month their prices went back" +
                    " to the original price. If you would have invested at their lowest point, you would currently have a profit of more than 20%! ")
                .images([builder.CardImage.create(session, 'http://imagehoster.bitballoon.com/ea-1.png')])
                .subtitle("EA stock prices for the past 6 months")



        ]);
        builder.Prompts.text(session, msg);
        //session.send(msg); //.endDialog()


    },

    function (session) {




        var msg = new builder.Message(session)
            .text("Alright! Which stock do you think will be the most interesting to invest in based on today's lesson?")
            .suggestedActions(
                builder.SuggestedActions.create(
                    session, [
                        builder.CardAction.postBack(session, "next()", "Google"),
                        builder.CardAction.postBack(session, "next()", "Facebook"),
                        builder.CardAction.postBack(session, "next()", "Yelp"),

                    ]
                ));
        builder.Prompts.text(session, msg);

    },

    function (session) {




        var msg = new builder.Message(session)
            .text("Thanks! See you tomorrow for checking this stock's trend. :)");
        builder.Prompts.text(session, msg);

    },





    //stop copy here
   

];

module.exports = {
    tutorial: tutorial

}