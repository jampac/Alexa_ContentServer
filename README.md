# Alexa_ContentServer
Attempting integration options to use Alexa / AI for information discovery with OpenText ContentServer as the backend. At this stage it's simply a framework to start integrating REST API / javascript towards a public available demo server.

The purpose is to inspire discussions around AI and Information Management / Discovery.

Preparation:
- Install alexa-dsk:
  npm install --save alexa-sdk

- Install request (simple HTTP POST/GET requests)
  npm install --save request

- Install moment for Alexa friendly date formating and calculation
  npm install moment --save

- For testing, I recommend installing alexa-skill-test (https://github.com/voiyse/alexa-skill-test)
  npm install -g alexa-skill-test

I'm using the aws cli to upload the zipped code to AWS Lambda. Get a public/private key, the aws cli tool and automate the process.
