const express = require('express');
const router = express.Router();

const { TeacherValidator } = require('../validators');
const { TeacherController } = require('../controllers');
const { TeacherService } = require('../services');

const asynError = require('../errors/asyncErrors');

router.post('/teacher', [TeacherValidator.createTeacherValidator], TeacherController.create(TeacherService, asynError));
router.get('/teacher/id/:id', TeacherController.getTeacherById(TeacherService, asynError));
router.put('/teacher', TeacherController.updateTeacher(TeacherService, asynError));

module.exports = router;
