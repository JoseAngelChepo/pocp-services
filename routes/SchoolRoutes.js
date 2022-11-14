const express = require('express');
const router = express.Router();

const { SchoolValidator } = require('../validators');
const { SchoolController } = require('../controllers');
const { SchoolService } = require('../services');

const asynError = require('../errors/asyncErrors');

router.post('/school', [SchoolValidator.createSchoolValidator], SchoolController.create(SchoolService, asynError));
router.get('/school/id/:id', SchoolController.getSchoolById(SchoolService, asynError));
router.put('/school', SchoolController.updateSchool(SchoolService, asynError));

module.exports = router;
