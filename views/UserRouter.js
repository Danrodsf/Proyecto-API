const express = require('express');
const router = express.Router();

// Middlewares
const auth = require('../middlewares/auth');

//Importo modelo de datos
const AuthController = require('../controllers/AuthController');

// Dos rutas: login y registro
// /api/singin & /api/singup
router.get('/', auth, AuthController.getAll);
router.get('/:id', auth, AuthController.getById);
router.post('/signin', AuthController.signIn);
router.post('/signup', AuthController.signUp);
router.delete('/:id', auth, AuthController.deleteUser);
router.delete('/', auth, AuthController.deleteAll);


module.exports = router;