const express = require('express');
const router = express.Router();

//Importo modelo de datos
const OrderController = require('../controllers/OrderController');

/**
 * @swagger
 * components:
 *  securitySchemes:
 *    bearerAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 *  schemas:
 *      Order:
 *          type: object
 *          required:
 *              - userId
 *              - movieId
 *          properties:
 *              userId:
 *                  type: integer
 *                  description: User id who will rent the movie
 *              movieId:
 *                  type: integer
 *                  description: Id of the Movie that the user will rent 
 *          example:
 *              userId: 5
 *              movieId: 5
 *
 */

// End-points CRUD Orders
router.get('/', OrderController.getAll);
/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Retrieve the list of orders.
 *     tags: [Orders]
 *     description: Retrieve the list of orders.
 *     responses:
 *       200:
 *         description: list of orders.
 *     security:
 *      - bearerAuth: []
 */
router.get('/:id', OrderController.getById);
/**
 * @swagger
 * /orders/{id}:
 *   get:
 *     summary: Retrieves an Order by id
 *     tags: [Orders]
 *     parameters:
 *       - in : path
 *         name: id
 *         description: id of the Order
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: Order by its id
 *     security:
 *      - bearerAuth: []
 */
router.post('/', OrderController.create);
/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Create a new Order
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Order'
 *     responses:
 *       200:
 *         description: The Order was successfully created
 *     security:
 *      - bearerAuth: []
 */
router.put('/:id', OrderController.update);
/**
 * @swagger
 * /orders/{id}:
 *   put:
 *     summary: updates order by id
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: order id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Order'
 *     responses:
 *       200:
 *         description: The order was updated
 *     security:
 *      - bearerAuth: []
 *
 */
router.delete('/', OrderController.deleteAll);
router.delete('/:id', OrderController.delete);
/**
 * @swagger
 *  /orders/{id}:
 *    delete:
 *      summary: removes order from array
 *      tags: [Orders]
 *      parameters:
 *        - in: path
 *          name: id
 *          description: order id
 *          required: true
 *          schema:
 *            type: integer
 *      responses:
 *        200:
 *          description: The order was deleted
 *        404:
 *          description: The order was not found
 *      security:
 *       - bearerAuth: []
 *
 */

module.exports = router;