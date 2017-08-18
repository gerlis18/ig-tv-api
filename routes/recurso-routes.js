var express = require('express');
var router = express.Router();
var recursoController = require('../controllers/recursos');

router.route('/')
.get(recursoController.consultarRecurso)
.post(recursoController.guardarRecurso);

module.exports = router;

