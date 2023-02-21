const Products = require("../models/Products");

const getProducts = (req, res) => {
  Products.find((err, products) => {
        if (err) {
        res.send(err);
        }
        res.json(products);
    });
};

const createProducts = (req, res) => {
    const products = new Products({
      id: req.body.id,
      name: req.body.name,
      price: req.body.price,
      qualification: req.body.qualification,
      url: req.body.url,
      createdDate: req.body.createdDate,
      lastUpdate: req.body.lastUpdate,
    });
  
    products.save((err, products) => {
      if (err) {
        res.send(err);
      }
      res.json(products);
    });
};

const updateProducts = (req, res) => {
    Users.findOneAndUpdate(
      { _id: req.params.productID },
      {
        $set: {
            id: req.body.id,
            name: req.body.name,
            price: req.body.price,
            qualification: req.body.qualification,
            url: req.body.url,
            createdDate: req.body.createdDate,
            lastUpdate: req.body.lastUpdate,
        },
      },
      { new: true },
      (err, Products) => {
        if (err) {
          res.send(err);
        } else res.json(Products);
      }
    );
};

const deleteProducts = (req, res) => {
    Todo.deleteOne({ _id: req.params.productID })
      .then(() => res.json({ message: "Product Deleted" }))
      .catch((err) => res.send(err));
  };


  module.exports = {
    getProducts,
    createProducts,
    updateProducts,
    deleteProducts
};