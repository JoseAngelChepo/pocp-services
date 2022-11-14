const sgMail = require('@sendgrid/mail')

const { emailConfirmEmail } = require('./templates/emailConfirmEmail');
const CryptoJS = require("crypto-js");

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

module.exports = {
  sendConfirmEmails: (email, referralToken) => {
    let emailHash = CryptoJS.AES.encrypt(email, process.env.SECRET_KEY).toString()
    const msg = emailConfirmEmail(email, referralToken, emailHash)
    return sgMail.send(msg)
      .then(() => {
        console.log('Email confirmation sent')
      })
      .catch((error) => {
        console.error(error)
      })
  },
}
