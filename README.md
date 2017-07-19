# Alexa_ContentServer
Attempting integration options to use Alexa / AI for information discovery with OpenText ContentServer as the backend - this is only an illustration using node.js as the interaction framework, together with the Alexa Skills SDK - or - a framework to start integrating REST API / javascript towards a public available demo server.

[![Amazon Alexa and OpenText Content Server](http://i.imgur.com/xYbYiFn.png)](https://youtu.be/1GXQjdMriyE "OpenText and Amazon Alexa integration - an illustration")

The purpose is to inspire discussions around AI and Information Management / Discovery.

Preparation:
- Install alexa-sdk:
  npm install --save alexa-sdk

- Install request (simple HTTP POST/GET requests)
  npm install --save request

- Install moment for Alexa friendly date formating and calculation
  npm install moment --save

- For testing, I recommend installing alexa-skill-test (https://github.com/voiyse/alexa-skill-test)
  npm install -g alexa-skill-test

I'm using the aws cli to upload the zipped code to AWS Lambda. Get a public/private key, the aws cli tool and automate the process.
