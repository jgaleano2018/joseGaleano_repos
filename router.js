const { getProducts, createProducts, updateProducts } = require("./controllers/Products");
const { getProductUser, createProductUser, updateProductUser } = require("./controllers/ProductUser");
const { getUsers, createUsers, updateUsers } = require("./controllers/Users");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Let's build a CRUD API!");
});

router.get("/users", getUsers);
router.get("/products", getProducts);
router.get("/productUser", getProductUser);
router.post("/users", createUsers);
router.post("/products", createProducts);
router.post("/productUser", createProductUser);
router.put("/users/:usersID", updateUsers);
router.put("/products/:productsID", updateProducts);
router.put("/productUser/:productUserID", updateProductUser);

module.exports = router;