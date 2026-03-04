import express from "express";
import Books from "../models/bookSchema.js";
import data from "../utilities/data.js"

const router = express.Router();

router.get("/seed", async (req, res) => {
  try {
    await Books.deleteMany({})
    await Books.create(data)

    res.send("Seeded Database")
  } catch (error) {
    console.error(error.message)
    res.send("Send failed")
  }
}
)

// Create
router.route("/").post(async(req, res) => {
  let newBook = await Books.insertOne(req.body);

  res.json(newBook)
})

//Read Show All
.get(async(req, res) => {
  let allBooks = await Books.find({});

  res.json(allBooks)
})

// Update one
router.route("/:id").put(async(req, res) => {
  let updatedBook = await Books.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true },
  );

  if (!updatedBook) return res.status(404).json({ error: "Book Not Found" })

  res.json(updatedBook)
})

// Delete one
.delete(async(req, res) => {
  let deletedBook = await Books.findByIdAndDelete(req.params.id);

    if (!deletedBook) return res.status(404).json({ error: "Book Not Found" })

  res.json(deletedBook)
})

// Show One
.get(async(req, res) => {
  let book = await Books.insertOne(req.params.id);

  if (!book) return res.status(404).json({ error: "Book Not Found" })

  res.json(book)
})

export default router;

// For testing Postman
// router.get("/", (req, res) => {
//   res.send("Testing");
// });