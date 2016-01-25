var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

// create reusable transporter object using SMTP transport
// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport(smtpTransport({
  host: 'srv.maia11.com',
  port: 25,
  secure: false,
  auth: {
    user: 'my@mail.com',
    pass: 'xyz'
  }
}));



// NB! No need to recreate the transporter object. You can use
// the same transporter object for all e-mails

// setup e-mail data with unicode symbols
var mailOptions = {
  from: 'redsafe@kennissoftware.com', // sender address
  to: 'anurag.shrivastava@ing.nl', // list of receivers
  subject: 'Hello ✔', // Subject line
  text: 'Hello world ✔', // plaintext body
  html: '<b>Hello world ✔</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    return console.log(error);
  }
  console.log('Message sent: ' + info.response);

});
