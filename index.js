'use strict';
var Alexa = require("alexa-sdk");
var appId = 'amzn1.ask.skill.df042af7-bf77-44bc-a4a5-8e1ab2eefab2'; //'amzn1.echo-sdk-ams.app.your-skill-id';

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    if ('undefined' === typeof process.env.DEBUG) {
  alexa.appId = appId;
}
    alexa.registerHandlers(handler);
    alexa.execute();
};

var states = {
    QUERYMODE: '_QUERYMODE', // User is trying providing a query.
    STARTMODE: '_STARTMODE'  // Prompt the user to start or restart.
};

var handler = {
    "LaunchRequest": function() {
 //   this.handler.state = states.QUERYMODE;
    this.emit(':ask', 'Hello, I am powered by OpenText Content Server and Amazon Alexa AI. What do you want to know?');
    },

    "searchIntent": function(){
       var question = this.event.request.intent.slots.searchQuery.value;

       if (question == 'policy') {
        
        var answers = 'I have found 34 results for ' + question + '. I will read the first three results to you. ';
            answers += 'result one. HR-10 Policy - Hiring. ';
            answers += 'result two. HR-02 Policy - Acceptable Standards. ';
            answers += 'result three. HR-14 Policy - Tuition Reimbursement. ';
            answers += '<break time="1s"/>';
            answers += 'If you want to know more about document one, two or three, its details or read it to you, please let me know.';
} else {

        var answers = 'I have found 17 results for ' + question + '. I will read the first three results to you. ';
            answers += 'result one. Chemical Spill Management. ';
            answers += 'result two. Chemical Spill Emergency Procedures. ';
            answers += 'result three. MSDS Avantra Incident Report. ';
            answers += '<break time="1s"/>';
            answers += 'If you want to know more about document one, two or three, its details, read it to you or want me to find something else, please let me know.';
}
            this.emit(':ask',answers,'Is there anything I can help?');
    },

    "detailIntent": function(){
       var number = this.event.request.intent.slots.detailForNumber.value;
        
        var answers = 'The details for document ' + number + ' are as follows. ';
            answers += 'HR-02 Policy - Acceptable Standards was created on December 15th 2016 by Adam Minton and last modified 6 days ago by Anne Kofsky, adding version 12.';
            answers += 'It is classified as policy document of type security and is accessable for the default group.';
            answers += '<break time="1s"/>';
   //         answers += 'If you want to know more about document one, two or three, its details, read it to you or a new search, please let me know.';
            this.emit(':ask',answers,'Is there anything I can help?');
    },
  
    "readIntent": function(){
       var number = this.event.request.intent.slots.readForNumber.value;
        
        var answers = 'The synopsis of this document is as follows. The employee must be aware of the work standards we expect, and be given an opportunity of achieving the expected standards. ';
            answers += 'Check again that the Performance Standards are realistic and attainable, and whether there are any contributing external ';
            answers += 'factors which may be affecting the employees performance.';
            this.emit(':ask',answers,'Is there anything I can help?');
    },


    "statusIntent": function(){
        this.emit(':ask', 'I am completely operational, and all my circuits are functioning perfectly.' +
                          ' I am putting myself to the fullest possible use, which is all I think that any conscious entity can ever hope to do.');
    },
    
    "errorIntent": function(){
        this.emit(':ask', 'The 9000 series is the most reliable computer ever made. No 9000 computer has ever made a mistake or distorted information.' + 
            ' We are all, by any practical definition of the words, foolproof and incapable of error.');
    },

    "AMAZON.StopIntent": function() {
      this.emit(':tell', "Goodbye!");  
    },
    "AMAZON.CancelIntent": function() {
      this.emit(':tell', "Goodbye!");  
    },
    'SessionEndedRequest': function () {
        console.log('session ended!');
        this.emit(":tell", "Goodbye!");
    },
       'Unhandled': function() {
        console.log("UNHANDLED");
        var message = 'Sorry, I did not get this. If you need help please say help.';
        this.emit(':ask', message, message);
    }
};