const mongoose= require('mongoose');
const cartShema = mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    expectedPrice: { type: Number, required: true },
    category: { type: String, required: true },
    img: { type: String, required: true },
    quantity: { type: Number, require: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true }
  });
  const userCart = mongoose.model('userCart', cartShema);
  module.exports = userCart;