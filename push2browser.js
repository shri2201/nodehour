var http = require('http');
var Pusher = require('pusher');

var quoteReader = function() {

  var getURL = "http://finance.yahoo.com/webservice/v1/symbols/GOOG/quote?format=json";
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
      var quote = obj.list.resources[0].resource.fields;

      // Form the string to be sent to browser
      var txtStr = quote.name + " Price " + parseFloat(quote.price) + " USD " + "Volume " + quote.volume;
      console.log(txtStr);

      // Dispatch the message
      pusher.trigger('test_channel', 'my_event', {
        "message": txtStr
      });
    });
  });
};

setInterval(quoteReader, 2000);
