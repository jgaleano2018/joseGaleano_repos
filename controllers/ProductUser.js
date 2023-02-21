const ProductUser = require("../models/ProductUser");

const getProductUser = (req, res) => {
  Products.find((err, productUser) => {
        if (err) {
        res.send(err);
        }
        res.json(productUser);
    });
};

const createProductUser = (req, res) => {
    const productUser = new ProductUser({
      id: req.body.id,
      name: req.body.name,
      price: req.body.price,
      qualification: req.body.qualification,
      url: req.body.url,
      createdDate: req.body.createdDate,
      lastUpdate: req.body.lastUpdate,
    });
  
    productUser.save((err, productUser) => {
      if (err) {
        res.send(err);
      }
      res.json(productUser);
    });
};

const updateProductUser = (req, res) => {
    ProductUser.findOneAndUpdate(
      { _id: req.params.productUserID },
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
      (err, ProductUser) => {
        if (err) {
          res.send(err);
        } else res.json(ProductUser);
      }
    );
};

const deleteProductUser = (req, res) => {
    Todo.deleteOne({ _id: req.params.productUserID })
      .then(() => res.json({ message: "ProductUser Deleted" }))
      .catch((err) => res.send(err));
  };

module.exports = {
    getProductUser,
    createProductUser,
    updateProductUser,
    deleteProductUser
};