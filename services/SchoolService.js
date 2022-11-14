const { School } = require('../models');
const GenericError = require('../errors/GenericError');

module.exports = {
  create: (body) => School.create(body)
    .then((newSchool) => newSchool),

  findId: (_id) => School.findOne({ _id }).exec()
    .then((school) => school).catch(() => false),

  updateSchoolById: (_id, data) => School.findOneAndUpdate(
    { _id }, data
  ).exec()
    .then((res) => res)
    .catch((err) => { throw new GenericError(err); }),

  findAll: () => School.find()
    .then((result) => Promise.resolve(result))
    .catch((err) => {
      console.log(err)
      throw GenericError(err, 409);
    }),
  
  findAllSchool: (skipNumber = 0, limitNumber = 10) => School.find()
    .limit(limitNumber)
    .skip(skipNumber)
    .sort({ createdAt: 'descending' })
    .then((result) => Promise.resolve(result))
    .catch((err) => {
      throw GenericError(err, 409);
    }),
  
};
