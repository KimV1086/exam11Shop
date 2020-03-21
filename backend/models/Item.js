const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: function () {
      return this.image === '';
    }
  },
  image: {
    type: String,
    required: function () {
      return this.description === '';
    }
  },
  price: {
    type: Number, required: true
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

const Item = mongoose.model('Item', ItemSchema);
module.exports = Item;