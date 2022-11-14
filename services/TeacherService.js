const { Teacher } = require('../models');
const GenericError = require('../errors/GenericError');

module.exports = {
  create: (body) => Teacher.create(body)
    .then((newTeacher) => newTeacher),

  findId: (_id) => Teacher.findOne({ _id }).exec()
    .then((teacher) => teacher).catch(() => false),

  updaTeacherById: (_id, data) => Teacher.findOneAndUpdate(
    { _id }, data
  ).exec()
    .then((res) => res)
    .catch((err) => { throw new GenericError(err); }),

  findAll: () => Teacher.find()
    .then((result) => Promise.resolve(result))
    .catch((err) => {
      console.log(err)
      throw GenericError(err, 409);
    }),
  
  addPoccToTeacherById: (_id, pocc, data) => Teacher.findOneAndUpdate(
      { _id }, 
      { $push: { poccRegistered: { pocc, ...data } } },
      { new: true, useFindAndModify: false }
    ).exec()
      .then((res) => res)
      .catch((err) => { throw new GenericError(err); }),

  findAllSchool: (skipNumber = 0, limitNumber = 10) => Teacher.find()
    .limit(limitNumber)
    .skip(skipNumber)
    .sort({ createdAt: 'descending' })
    .then((result) => Promise.resolve(result))
    .catch((err) => {
      throw GenericError(err, 409);
    }),
  
};
