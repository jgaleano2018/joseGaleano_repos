const express = require("express");
const router = require("./router");
const mongoose = require("mongoose");
const dotenv = require("dotenv");  //require dotenv package
const cors = require("cors");

const PORT = 8000;
const app = express();

app.listen(PORT, async () => {
  console.log(`server up on port ${PORT}`);
});

app.use(router);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

dotenv.config({ path: "./config.env" }); //import config.env file

const DB = process.env.DATABASE;  
const Port = process.env.PORT;

mongoose.set("strictQuery", false);
mongoose.connect(
  'mongodb+srv://Mao202302:Mao20230203@cluster0.qimarzg.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
).then(() => {
  console.log("Connected to MongoDB");
})
.catch((err) => {
  console.log(err);
});
