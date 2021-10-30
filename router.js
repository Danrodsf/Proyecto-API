const router = require('express').Router();

// Middlewares
const auth = require('./middlewares/auth');

//Importamos Routes definidas en views
const MovieRouter = require('./views/MovieRouter');
const OrderRouter = require('./views/OrderRouter');
const UserRouter = require('./views/UserRouter');

//Rutas
router.use('/users', UserRouter); //Login and register routes
router.use('/movies', MovieRouter); //add auth
router.use('/orders', auth, OrderRouter);

module.exports = router;