const Router = require("express");
const Box = require("../models/Box");

const router = new Router();

router.post("/", async (req, res) => {
   try {
      const newBox = new Box({
         name: req.body.name,
         brand: req.body.brand,
         quantity: req.body.quantity,
         imgUrl: req.body.imgUrl,
         nameBrand: `${req.body.name}${req.body.brand}`,
      });

      const box = await newBox.save();
      if (!box) throw Error("Something went wrong saving the Box");

      res.status(200).json({ msg: "Box added..." });
   } catch (e) {
      res.status(400).json({ msg: e.message });
   }
});

router.get("/", async (req, res) => {
   try {
      const boxes = await Box.find();
      if (!boxes) throw Error("No users exist");
      res.json(boxes);
   } catch (e) {
      res.status(400).json({ msg: e.message });
   }
});

module.exports = router;
