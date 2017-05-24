#Callosity Bot

This is Callosity bot, it was made during a 24 hour code thinger called codeday  everything about Callosity is working except for two things, weather and stopping youtube playback.


When running the weather command, this error appears in command line 

>C:\Users\ryanr\project\node_modules\weather.js\dist\weather.js:181
 > return this.data.list[0].main.temp;
 
                  ^

>TypeError: Cannot read property 'list' of undefined
    >at Weather.Current.temperature (C:\Users\ryanr\project\node_modules\weather.js\dist\weather.js:181:19)
    >at C:\Users\ryanr\project\gay:142:25
    >at C:\Users\ryanr\project\node_modules\weather.js\dist\weather.js:60:5
    >at ClientRequest.<anonymous> (C:\Users\ryanr\project\node_modules\weather.js\dist\weather.js:81:14)
    >at ClientRequest.g (events.js:292:16)
   > at emitOne (events.js:96:13)
    >at ClientRequest.emit (events.js:188:7)
   > at HTTPParser.parserOnIncomingClient [as onIncoming] (_http_client.js:473:21)
    >at HTTPParser.parserOnHeadersComplete (_http_common.js:99:23)
   > at Socket.socketOnData (_http_client.js:362:20)

