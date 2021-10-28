const { user } = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');
const db = require("../models");
const users = db.user;

const AuthController = {}; //Create the object controller

//-------------------------------------------------------------------------------------
//GET all movies from database
AuthController.getAll = (req, res) => {

    users.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        });
};


//-------------------------------------------------------------------------------------
//Login user with database
//get user
AuthController.signIn = (req, res) => {
    let { email, password } = req.body;
    // Buscar usuario
    user.findOne({
        where: { email: email }
    }).then(user => {
        if (!user) {
            res.status(404).json({ msg: "Usuario con este correo no encontrado" });
        } else {
            if (bcrypt.compareSync(password, user.password)) {
                // Creamos el token
                let token = jwt.sign({ user: user }, authConfig.secret, {
                    expiresIn: authConfig.expires
                });

                res.json({
                    user: user,
                    token: token
                })
            } else {
                // Unauthorized Access
                res.status(401).json({ msg: "Contraseña incorrecta" })
            }
        }
    }).catch(err => {
        res.status(500).json(err);
    })
};


//-------------------------------------------------------------------------------------
//REGISTER new user in database
//create user
AuthController.signUp = (req, res) => {

    // Encriptamos la contraseña
    let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds));

    // Crear un usuario
    user.create({
        name: req.body.name,
        email: req.body.email,
        password: password
    }).then(user => {

        // Creamos el token
        let token = jwt.sign({ user: user }, authConfig.secret, {
            expiresIn: authConfig.expires
        });

        res.json({
            user: user,
            token: token
        });

    }).catch(err => {
        res.status(500).json(err);
    });

};


//-------------------------------------------------------------------------------------
//DELETE ALL Non Admin users in database
//deleteAll
AuthController.deleteAll = (req, res) => {
    let { email, password } = req.body;
    // Buscar usuario
    user.findOne({
        where: { email: email }
    }).then(user => {
        if (!user) {
            res.status(404).json({ msg: "Usuario con este correo no encontrado" });
        } else {
            if (bcrypt.compareSync(password, user.password)) {

                if (user.admin) {
                    users.destroy({
                        where: { admin: null },
                        truncate: false
                    })
                        .then(nums => {
                            res.send({ message: `${nums} non Admin Users were deleted successfully!` });
                        })
                } else {
                    // Unauthorized Access
                    res.status(401).json({ msg: "User is not an Admin" })
                }

            } else {
                // Unauthorized Access
                res.status(401).json({ msg: "Contraseña incorrecta" })
            }
        }
    }).catch(err => {
        res.status(500).json(err);
    })
};

module.exports = AuthController;

