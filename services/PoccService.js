const { Pocc } = require('../models');
const GenericError = require('../errors/GenericError');

module.exports = {
  create: (body) => Pocc.create(body)
    .then((newPocc) => newPocc),

  findId: (_id) => Pocc.findOne({ _id }).exec()
    .then((pocc) => pocc).catch(() => false),

  updatePoccById: (_id, data) => Pocc.findOneAndUpdate(
    { _id }, data
  ).exec()
    .then((res) => res)
    .catch((err) => { throw new GenericError(err); }),

  findAll: () => Pocc.find()
    .then((result) => Promise.resolve(result))
    .catch((err) => {
      console.log(err)
      throw GenericError(err, 409);
    }),
  
  findAllPocc: (skipNumber = 0, limitNumber = 10) => Pocc.find()
    .limit(limitNumber)
    .skip(skipNumber)
    .sort({ createdAt: 'descending' })
    .then((result) => Promise.resolve(result))
    .catch((err) => {
      throw GenericError(err, 409);
    }),
  
};
