const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController.js');

router.get('/', studentController.search);

router.post('/', studentController.insert)

router.route("/:id")
    .get(studentController.searchDetail)
    .put(studentController.update)
    .delete(studentController.delete);

module.exports = router;