//Importo modelo de datos
const db = require("../models");
const order = db.order;
const Op = db.Sequelize.Op; //Import all ORM sequelize functions 

const OrderController = {}; //Create the object controller


//CRUD end-points Functions
//-------------------------------------------------------------------------------------
//GET all orders from database
OrderController.getAll = (req, res) => {
  const type = req.query.type;
  var condition = type ? { type: { [Op.like]: `%${type}%` } } : null;

  order.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving orders."
      });
    });
};


//-------------------------------------------------------------------------------------
//GET orders by Id from database
OrderController.getById = (req, res) => {
  const id = req.params.id;

  order.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find order with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving orders with id=" + id
      });
    });
};


//-------------------------------------------------------------------------------------
//CREATE a new order in database
OrderController.create = (req, res) => {
  // Validate request
  if (!req.body.type) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a order
  const neworder = {
    type: req.body.type,
    age: req.body.age
  };

  // Save order in the database
  order.create(neworder)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the neworder."
      });
    });
};


//-------------------------------------------------------------------------------------
//UPDATE a order from database
OrderController.update = (req, res) => {
  const id = req.params.id;

  order.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "order was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update order with id=${id}. Maybe Movie was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating order with id=" + id
      });
    });
};


//-------------------------------------------------------------------------------------
//GET orders by Type from database  
//FindByType
OrderController.getByType = (req, res) => {
  order.findAll({ where: { type: req.params.type } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving orders."
      });
    });
};


//-------------------------------------------------------------------------------------
//DELETE a order by Id from database
OrderController.delete = (req, res) => {
  const id = req.params.id;

  order.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "order was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete order with id=${id}. Maybe Movie was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete order with id=" + id
      });
    });
};


//-------------------------------------------------------------------------------------
//DELETE all orders from database
//delete all orders   
OrderController.deleteAll = (req, res) => {
  order.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} orders were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all orders."
      });
    });
};

module.exports = OrderController;