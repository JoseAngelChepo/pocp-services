module.exports = {
  emailConfirmEmail: (email) => {
    return {
      to: email,
      from: {
        email: process.env.EMAIL_SENDER,
        name: 'POCC'
      },
      subject: 'Hola, necesitas confirmar tu email para continuar',
      html: ``
    }
  },
}
