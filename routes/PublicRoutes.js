const express = require('express');

const router = express.Router();

router.use(require('./SchoolRoutes'));
router.use(require('./TeacherRoutes'));
router.use(require('./StudentRoutes'));
router.use(require('./PoccRoutes'));

module.exports = router;
