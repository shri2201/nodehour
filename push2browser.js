var http = require('http');
var Pusher = require('pusher');

var quoteReader = function() {

  var getURL = "http://api.openweathermap.org/data/2.5/weather?q=Breda,nl&appid=d16fa4b8b21f6c1d2ac64f0b2887a4d8";
  http.get(getURL, function(res) {
    res.setEncoding('utf8');
    res.on('data', function(txt) {
      var pusher = new Pusher({
        appId: '132881',
        key: '6192ee2882ff600b0489',
        secret: 'f4eb366557f0c9997a2d',
        encrypted: true
      });

      pusher.port = 443;
      var obj = JSON.parse(txt);

      //console.log(obj);

      var txtStr = 'Current Temp in Breda is ' + (obj.main.temp - 273.15).toPrecision(3) + " deg C & " + obj.weather[0].description;
      // Form the string to be sent to browser

      console.log(txtStr);

      // Dispatch the message
      pusher.trigger('test_channel', 'my_event', {
        "message": txtStr
      });
    });
  });
};

setInterval(quoteReader, 2000);
