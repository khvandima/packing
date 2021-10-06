const { Schema, model } = require("mongoose");

const Box = new Schema({
   name: { type: String, required: true },
   brand: { type: String, required: true },
   quantity: { type: String, default: 0 },
   imgUrl: { type: String },
   nameBrand: String,
});

module.exports = model("Box", Box);
