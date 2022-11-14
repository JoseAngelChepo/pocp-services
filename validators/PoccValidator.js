const { celebrate, Joi } = require('celebrate');

module.exports = {
  createPoccValidator: celebrate({
    body: Joi.object().keys({
      title: Joi.string().required(),
      type: Joi.string().required(),
      properties: Joi.object().required(),
      dateRegistered: Joi.date().required(),
      course: Joi.object().required(),
      quantityAvailable: Joi.number().optional(),
    }),
  }),
};
