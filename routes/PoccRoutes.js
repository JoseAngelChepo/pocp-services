const express = require('express');
const router = express.Router();

const { PoccValidator } = require('../validators');
const { PoccController } = require('../controllers');
const { PoccService, TeacherService } = require('../services');

const asynError = require('../errors/asyncErrors');

router.post('/pocc', [PoccValidator.createPoccValidator], PoccController.create(PoccService, TeacherService, asynError));
router.get('/pocc/id/:id', PoccController.getPoccById(PoccService, asynError));
router.put('/pocc', PoccController.updatePocc(PoccService, asynError));

module.exports = router;
