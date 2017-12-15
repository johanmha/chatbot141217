var restify = require('restify');
var builder = require('botbuilder');
require('dotenv').config()

//Setup Restify server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
	console.log('%s listening to %s', server.name, server.url);
});

// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
    // appId: process.env.MICROSOFT_APP_ID,
    // appPassword: process.env.MICROSOFT_APP_PASSWORD
	appId: 'd311e46d-22ed-4f7f-b8ad-8a9bc4815842',
    appPassword: 'blpDDFYUS66?-*fugrQ517_'
});

//Listen for messages from users
server.post('/api/messages', connector.listen());

//Receive messages and reply with echo
var bot = new builder.UniversalBot(connector, function (session) {
	session.send('You said: %s', session.message.text);
});
