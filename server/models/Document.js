const mongoose = require('mongoose');

const { Schema } = mongoose;

const DocumentSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'documents'
  },
  collaborators: [
    {
      type: Schema.Types.ObjectId,
      ref: 'documents'
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
