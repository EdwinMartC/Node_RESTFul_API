const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacherController.js');

router.get('/', teacherController.search);

router.post('/', teacherController.insert)

router.route("/:id")
    .get(teacherController.searchDetail)
    .put(teacherController.update)
    .delete(teacherController.delete);

module.exports = router;