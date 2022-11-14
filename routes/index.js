const express = require('express');

const router = express.Router();

// Public
router.use(require('./PublicRoutes'));

module.exports = router;
