const { celebrate, Joi } = require('celebrate');

module.exports = {
  createUserStudentValidator: celebrate({
    body: Joi.object().keys({
      firstName: Joi.string().optional(),
      lastName: Joi.string().optional(),
      email: Joi.string().optional(),
      address: Joi.string().required(),
      school: Joi.string().optional(),
      isVerified: Joi.boolean().optional(),
      isActive: Joi.boolean().optional(),
    }),
  }),
};