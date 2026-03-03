import mongoose from "mongoose"

const bookSchema = new mongoose.Schema ({
  title: {
    type: Sting,
    required: true
  },
  author: {
    type: Sting,
    required: true
  },
  status: {
    type: Sting,
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
    type: Sting,
    default: ''
  },
  cover: {
    type: Sting,
    default: ''
  },
  googleId: {
    type: Sting,
    default: ''
  }
}, {timestamps: true})

export default mongoose.model("Books", bookSchema)