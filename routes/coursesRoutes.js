const express = require('express');
const router = express.Router();
const coursesController = require('../controllers/coursesController.js');

router.get('/', coursesController.search);

router.post('/', coursesController.insert);
router.post('/registraEstudiante', coursesController.associateStudent);

router.route("/:id")
    .get(coursesController.searchDetail)
    .put(coursesController.update)
    .delete(coursesController.delete);

module.exports = router;