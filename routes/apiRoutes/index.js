const router = require('express').Router();
const notesRoutes = require('../apiroutes/notesroutes');

router.use(notesRoutes);

module.exports = router