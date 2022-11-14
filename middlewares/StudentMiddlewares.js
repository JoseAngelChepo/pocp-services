const GenericError = require('../errors/GenericError');

module.exports = {
  isFormById: (formService) => async (req, res, next) => {
    const { idForm } = req.params;
    const form = await (
      await formService.findFormById(idForm)
    ).toObject();
    if (form) {
      delete form.correctAnswer;
      req.form = form;
      return next();
    }
    return next(new GenericError('No existe el form'));
  },
};
