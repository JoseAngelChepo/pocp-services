const express = require('express');
const router = express.Router();

const { StudentValidator } = require('../validators');
const { StudentController } = require('../controllers');
const { StudentService } = require('../services');

const asynError = require('../errors/asyncErrors');

router.post('/student', [StudentValidator.createUserStudentValidator], StudentController.create(StudentService, asynError));
router.get('/student/address/:address', StudentController.getStudentByAddress(StudentService, asynError));
router.get('/student/email/:email', StudentController.getStudentByEmail(StudentService, asynError));
router.get('/student/id/:id', StudentController.getStudentById(StudentService, asynError));
router.put('/student', StudentController.updateStudent(StudentService, asynError));
router.post('/student/mint/pocc', StudentController.mintPocc(StudentService, asynError));

module.exports = router;
