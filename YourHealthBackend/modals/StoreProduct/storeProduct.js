const mongoose = require('mongoose');
const productShema = mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    expectedPrice: { type: Number, required: true },
    category: { type: String, required: true },
    img: { type: String, required: true },
  });
  const products = mongoose.model('products', productShema);
  module.exports = products;