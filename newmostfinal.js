const Discord = require('discord.js');

const client = new Discord.Client();
const prefix = "##";
const ytdl = require("ytdl-core");
const token = '------';
var request = require('request');
var Weather = require('weather.js');




function play(connection, message) {
  var server = servers[message.guild.id];




  server.dispatcher = connection.playStream(ytdl(server.queue[0], {filter:"audioonly"}));

  server.queue.shift();

  server.dispatcher.on("end", function() {
    if (server.queue[0]) play(connection, message)
    else connection.disconnect();
  });
}

var servers = {};
var strings = ['it is definite','yes','no', 'most definitely no', 'assuredly not', 'not in the forseeable future', 'try again later', 'unable to answer that question', 'it is not possible', 'answer unclear', 'it cannot be certain', 'nope'];
var rollNumbers = ['1', '2', 'hey man why dont you go and roll a real die like thatd be nice maybe give ol callosity a break','3','4','5','6','7','8','9','10'];

client.on('ready', () => {
  console.log('Callosity Bot up and running');
});

client.on("message", function(message) {
  if (message.author.equals(client.user)) return;

  if (!message.content.startsWith(prefix)) return;

 var args = message.content.substring(prefix.length).split(" ");

 function setApiKey() {
   Weather.APIKEY = '--------'
 };

 function newCat() {
        request("http://random.cat/meow", function (error, response, body) {
          body = JSON.parse(body)["file"];
          message.channel.send(`${body}`);
        })
    };

function newDog() {
           request("https://random.dog/woof.json", function (error, response, body) {
             body = JSON.parse(body)["url"];
             message.channel.send(`${body}`);
           })
       };

switch (args[0]) {

   case "8ball":
    var randomIndex = Math.floor(Math.random() * strings.length);
    var randomString = strings[randomIndex];
      message.channel.send(randomString);
        break;
  case "roll":
    var randomIndexRoll = Math.floor(Math.random() * rollNumbers.length);
    var randomRoll = rollNumbers[randomIndexRoll];
      message.channel.send(randomRoll);
      break;

 case "play":
      if (!args[1]) {
            message.channel.send("Please provide a link");
            return;
      }

      if (!message.member.voiceChannel) {
          message.channel.send("You must be in a voice channel!")
          return;
        }

        if(!servers[message.guild.id]) servers[message.guild.id] = {
          queue: []
        };

        var server = servers[message.guild.id];

        server.queue.push(args[1]);
          message.channel.send("added song to queue");

        if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
            play(connection, message);
        });
    break;

  case "skip":
      var server = servers[message.guild.id];

      if (server.dispatcher) server.dispatcher.end();
    break;
  case "stop":
    var server = servers[message.guild.id];

    if(message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
    break;

  case "cat":
    newCat()
  break;

  case "dog":
    newDog()
  break;

  case "old-weather":
    message.channel.send(`If I'm being honest with you we were going to implement a weather command, but
     that didn't go too well... http://i.imgur.com/Ngms0OO.png there were a number of errors and it wasn't really working out,
      so lets just get to the point, we're not gonna go outside enough to need this`)
    break;

  case "define-callosity":
    message.channel.send('The definition of Callosity is a lack of feeling and/or capacity for emotion')
  break;
//*NOT WORKING vvvvv
 case "weather":

setApiKey();

  var content = message.content
    if (message.author.equals(client.user)) return;
    if (!message.content.startsWith(prefix)) return;
    var parts = content.split(" ");
  var city = parts[1];


  Weather.getCurrent(city, function(current) {
message.channel.send(
  ["currently:",current.temperature(),"and",current.conditions()].join(" ")
);
});
break;
    
//* NOT WORKING ^^^^^

case "foxy":

message.channel.send("https://www.youtube.com/watch?v=c8xJtH6UcQY&feature=youtu.be")
break;

case "TheLegend27":

message.channel.send("https://clips.twitch.tv/GiantYummyDeerTwitchRaid")
break;



};


});

client.login(token);
