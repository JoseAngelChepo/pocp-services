const { celebrate, Joi } = require('celebrate');

module.exports = {
  createTeacherValidator: celebrate({
    body: Joi.object().keys({
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      email: Joi.string().required(),
      school: Joi.string().required(),
      address: Joi.string().optional(),
      isVerified: Joi.boolean().optional(),
      isActive: Joi.boolean().optional(),
    }),
  }),
};
