const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("config");
const app = express();

const boxRoute = require("./routes/box");

app.use(cors());
app.use(express.json());

app.use("/box", boxRoute);

const port = process.env.PORT || 8000;

const start = async () => {
   try {
      await mongoose
         .connect(config.get("mongoURI"), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
         })
         .then(() => console.log("MongoDB Connected..."))
         .catch((err) => console.log(err));

      app.listen(port, () => console.log(`Server started on port ${port}`));
   } catch (e) {
      console.log(e);
   }
};

start();
