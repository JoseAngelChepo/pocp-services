const { Student } = require('../models');
const GenericError = require('../errors/GenericError');

module.exports = {
  create: (body) => Student.create(body)
    .then((newStudent) => newStudent),

  findAddress: (address) => Student.findOne({ address }).exec()
    .then((student) => student).catch(() => false),

  findEmail: (email) => Student.findOne({ email }).exec()
    .then((student) => student).catch(() => false),

  findId: (_id) => Student.findOne({ _id }).exec()
    .then((student) => student).catch(() => false),

  updateStudentById: (_id, data) => Student.findOneAndUpdate(
    { _id }, data
  ).exec()
    .then((res) => res)
    .catch((err) => { throw new GenericError(err); }),

  addPoccToStudentById: (_id, pocc, data) => Student.findOneAndUpdate(
      { _id }, 
      { $push: { poccMinted: { pocc, ...data } } },
      { new: true, useFindAndModify: false }
    ).exec()
      .then((res) => res)
      .catch((err) => { throw new GenericError(err); }),

  findAll: () => Student.find()
    .then((result) => Promise.resolve(result))
    .catch((err) => {
      console.log(err)
      throw GenericError(err, 409);
    }),
  
  findAllStudents: (skipNumber = 0, limitNumber = 10) => Student.find()
    .limit(limitNumber)
    .skip(skipNumber)
    .sort({ createdAt: 'descending' })
    .then((result) => Promise.resolve(result))
    .catch((err) => {
      throw GenericError(err, 409);
    }),
  
};
