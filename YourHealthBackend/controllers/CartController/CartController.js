const userCart = require('../../modals/CartModal/cartModal');

// Create or update a user's cart item
exports.createUserCart = async (req, res) => {
  try {
    // Validate required fields
    const { name, price, expectedPrice, category, img } = req.body;
    if (!name || !price || !expectedPrice || !category || !img) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Check if the item already exists in the cart
    const existingItem = await userCart.findOne({
      name,
      userId: req.user,
      price,
      expectedPrice,
      category,
      img,
    });

    if (existingItem) {
      // If the item already exists, update the quantity
      await userCart.updateOne(
        { _id: existingItem._id },
        { $inc: { quantity: 1 } } // Increment quantity by 1
      );

      const updatedItem = await userCart.findById(existingItem._id);
      return res.status(200).json(updatedItem);
    } else {
      // If the item doesn't exist, insert a new item
      const data = {
        name,
        price,
        expectedPrice,
        category,
        img,
        quantity: 1,
        userId: req.user,
      };

      const newItem = await userCart.create(data);
      return res.status(201).json(newItem);
    }
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all items in a user's cart
exports.getUserCart = async (req, res) => {
  try {
    const data = await userCart.find({ userId: req.user });
    return res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching user cart:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete an item from a user's cart
exports.deleteUserCart = async (req, res) => {
  try {
    const itemId = req.params.id;

    if (!itemId) {
      return res.status(400).json({ error: 'Item ID is required' });
    }

    const deletedItem = await userCart.deleteOne({ _id: itemId, userId: req.user });

    if (!deletedItem.deletedCount) {
      // If the item with the provided ID doesn't exist, return 404 Not Found
      return res.status(404).json({ error: 'Cart item not found' });
    }

    // Return a success message or the deleted item
    return res.status(200).json({ message: 'Cart item deleted successfully' });
  } catch (error) {
    // If an error occurs, return a 500 Internal Server Error
    console.error('Error deleting cart item:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
