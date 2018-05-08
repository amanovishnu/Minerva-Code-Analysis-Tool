const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: 'geekymano@gmail.com',
        clientId: '',
        clientSecret: '',
        refreshToken: ''
        
    }
});

var mailOptions = {
    from: 'Mano <>',
    to: '',
    subject: 'Minerva',
    text: 'Code Review Update'
};

transporter.sendMail(mailOptions, function (err, res) {
    if(err){
        console.log(err);
    } else {
        console.log('Email Sent');
    }
})
function gmailnotify() {
  transporter.sendMail(mailOptions, function (err, res) {
    console.log('Jello World');
    if(err){
        console.log(err);
    } else {
        console.log('Email Sent');
    }
})
}