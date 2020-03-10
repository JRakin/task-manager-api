const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'juaidrakin1@gmail.com',
    subject: 'Thanks for joining us',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
  });
};

const sendCacelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'juaidrakin1@gmail.com',
    subject: 'Good bye!',
    text: `Good bye ${name}. Let us know how we can keep you with us.`
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCacelationEmail
};
