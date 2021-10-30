const express = require('express');
const router = express.Router();

/**
 * @swagger
 * components:
 *  securitySchemes:
 *    bearerAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 *  schemas:
 *      Movie:
 *          type: object
 *          required:
 *              - title
 *              - genre
 *              - cast
 *          properties:
 *              title:
 *                  type: string
 *                  description: Movie Title
 *              Genre:
 *                  type: string
 *                  description: Movie genre
 *              Cast:
 *                  type: string
 *                  description: Movie cast
 *          example:
 *              title: NuevoTitulo
 *              genre: NuevoGenero
 *              cast: NuevoReparto
 *              
 */

//Importo modelo de datos
const MovieController = require('../controllers/MovieController');

// End-points CRUD movies
router.get('/', MovieController.getAll);

/**
 * @swagger
 * /movies:
 *   get:
 *     summary: Retrieve the list of movies.
 *     tags: [Movies]
 *     description: Retrieve the list of movies.
 *     responses:
 *       200:
 *         description: list of movies.
 *     security:
 *       - bearerAuth: []
 */
router.get('/:id', MovieController.getById);
/**
 * @swagger
 * /movies/{id}:
 *   get:
 *     summary: Retrieves a Movie by id
 *     tags: [Movies]
 *     parameters:
 *       - in : path
 *         name: id
 *         description: id of the Movie
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: Movie by its id
 *     security:
 *       - bearerAuth: []
 */
router.get('/name/:title', MovieController.getByTitle);
/**
 * @swagger
 * /movies/name/{title}:
 *   get:
 *     summary: Retrieves a Movie by title
 *     tags: [Movies]
 *     parameters:
 *       - in : path
 *         name: title
 *         description: title of the Movie
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Movie by its title
 *     security:
 *       - bearerAuth: []
 */
router.get('/genre/:genre', MovieController.getByGenre);
/**
 * @swagger
 * /movies/genre/{genre}:
 *   get:
 *     summary: Retrieves a Movie by genre
 *     tags: [Movies]
 *     parameters:
 *       - in : path
 *         name: genre
 *         description: genre of the Movie
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Movie by its genre
 *     security:
 *       - bearerAuth: []
 */
router.get('/cast/:cast', MovieController.getByCast);
/**
 * @swagger
 * /movies/cast/{cast}:
 *   get:
 *     summary: Retrieves a Movie by cast
 *     tags: [Movies]
 *     parameters:
 *       - in : path
 *         name: cast
 *         description: cast of the Movie
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Movie by its cast
 *     security:
 *       - bearerAuth: []
 */
router.post('/', MovieController.create);
/**
 * @swagger
 * /movies:
 *   post:
 *     summary: Create a new Movie
 *     tags: [Movies]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Movie'
 *     responses:
 *       200:
 *         description: The Movie was successfully created
 *     security:
 *       - bearerAuth: []
 */

router.put('/:id', MovieController.update);
/**
 * @swagger
 * /movies/{id}:
 *   put:
 *     summary: updates movie by id
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: movie id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Movie'
 *     responses:
 *       200:
 *         description: The Movie was updated
 *     security:
 *       - bearerAuth: []
 *
 */
router.delete('/', MovieController.deleteAll);
router.delete('/:id', MovieController.delete);
/**
 * @swagger
 *  /movies/{id}:
 *    delete:
 *      summary: removes movie from array
 *      tags: [Movies]
 *      parameters:
 *        - in: path
 *          name: id
 *          description: movie id
 *          required: true
 *          schema:
 *            type: integer
 *      responses:
 *        200:
 *          description: The movie was deleted
 *        404:
 *          description: The movie was not found
 *      security:
 *       - bearerAuth: []
 *
 */

module.exports = router;