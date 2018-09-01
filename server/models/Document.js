const mongoose = require('mongoose');

const { Schema } = mongoose;

const DocumentSchema = new mongoose.Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  collaborators: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    }
  ],
  title: {
    type: String,
    default: 'Untitled Document'
  },
  textLayer: {
    type: String,
    default: ''
  },
  imageLayer: {
    type: Buffer,
    default: []
  }
});

module.exports = mongoose.model('documents', DocumentSchema);
