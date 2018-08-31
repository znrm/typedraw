const mongoose = require('mongoose');

const { Schema } = mongoose;

const DocumentSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  collaborators: [
    {
      type: Schema.Types.ObjectId,
      ref: 'users'
    }
  ],
  title: {
    type: String
  },
  textLayer: {
    type: String
  },
  imageLayer: {
    type: Buffer
  }
});

module.exports = mongoose.model('documents', DocumentSchema);
