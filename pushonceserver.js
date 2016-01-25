var Pusher = require('pusher');

var pusher = new Pusher({
  appId: '132881',
  key: '6192ee2882ff600b0489',
  secret: 'f4eb366557f0c9997a2d',
  encrypted: true
});

pusher.port = 443;

pusher.trigger('test_channel', 'my_event', {
  "message": "hello world"
});
