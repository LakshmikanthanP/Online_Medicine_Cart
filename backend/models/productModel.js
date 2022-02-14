//import mongoose from 'mongoose'
const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
)

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: 'User',
    },
    name: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    brand: {
      type: String,
      required: false,
    },
    category: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: false,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: false,
      default: 0,
    },
    price: {
      type: Number,
      required: false,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: false,
      default: 0,
    },
    sellerid: {
      type: Number,
      required: false

    },
    blocked:{ 
      type: Boolean,
      required: false,
      default: false
    }
  },
  {
    timestamps: true,
  }
)

// const Product = mongoose.model('Product', productSchema)

// export default Product
module.exports = mongoose.model('Product', productSchema, 'Product');