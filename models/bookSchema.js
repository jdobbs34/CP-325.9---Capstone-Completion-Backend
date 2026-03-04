import mongoose from "mongoose"

const bookSchema = new mongoose.Schema ({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['want to read', 'reading', 'finished'],
    default: 'want to read'
  }, 
  rating:{
    type: Number,
    min: 1,
    max: 5,
    default: null
  },
  notes: {
    type: String,
    default: ''
  },
  cover: {
    type: String,
    default: ''
  },
  googleId: {
    type: String,
    default: ''
  }
}, {timestamps: true})

export default mongoose.model("Books", bookSchema)