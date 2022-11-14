const { celebrate, Joi } = require('celebrate');

module.exports = {
  createSchoolValidator: celebrate({
    body: Joi.object().keys({
      name: Joi.string().required(),
      country: Joi.string().required(),
      details: Joi.object().required(),
      email: Joi.string().required(),
      teachersRegistered: Joi.array().optional(),
      isVerified: Joi.boolean().optional(),
      isActive: Joi.boolean().optional(),
    }),
  }),
};
