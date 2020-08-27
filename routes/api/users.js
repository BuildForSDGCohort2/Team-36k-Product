const express = require("express");
const router = express.Router();

// // Item Model
// const Item = require("../../models/Item");
// const { response } = require("express");

// // @route GET api/items
// // @desc GET All Items
// // @access  Public
// router.get("/", (request, response) => {
//     Item.find()
//         .sort({ date: -1 })
//         .then((items) => response.json(items));
// });

// // @route POST api/items
// // @desc Create A Item
// // @access  Public
// router.post("/", (request, response) => {
//     const newItem = new Item({
//         name: request.body.name,
//     });

//     newItem.save().then((item) => response.json(item));
// });

// // @route DELETE api/items/:id
// // @desc DELETE  A Item
// // @access  Public
// router.delete("/:id", (request, response) => {
//     Item.findById(request.params.id)
//         .then((item) =>
//             item.remove().then(() => response.json({ sucess: true }))
//         )
//         .catch((err) => response.status(404).json({ success: false }));
// });

module.exports = router;
