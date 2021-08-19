const mongoose = require('mongoose');

const questSchema = mongoose.Schema({
  quest: {
    type: String,
  },
  picture: {
    type: String,
  },
  right: {
    type: String,
    requried: true,
  },
  number:{
    type:String
  },
  title: {
    type: String,
  },
  
});

module.exports = mongoose.model('Guest', questSchema);
