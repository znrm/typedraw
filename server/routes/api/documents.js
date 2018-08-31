const express = require('express');
// const passport = require('passport');
const Document = require('../../models/Document');
const User = require('../../models/User');

const router = express.Router();

router.get('/:documentId', (req, res) => {
  Document.findById(req.params.documentId).then(document => {
    if (document) return res.json({ document });

    return res.status(404).json({
      message: `Document with id ${req.params.documentId} not found`
    });
  });
});

router.post('/', (req, res) => {
  const newDocument = new Document({
    owner: User.findOne({ email: 'agadberr@gmail.com' }).id,
    collaborators: [],
    title: 'Untitled Document',
    textLayer: '',
    imageLayer: ''
  });

  newDocument
    .save()
    .then(docRes => res.json(docRes))
    .catch(docErr => res.status(422).json({ message: docErr }));
});

router.put('/:documentId', (req, res) => {
  Document.findByIdAndUpdate(
    req.params.documentId,
    {
      title: req.body.title || 'Untitled Document'
    },
    { new: true }
  )
    .then(document => {
      if (!document) {
        return res.status(404).send({
          message: `Document with id ${req.params.documentId} not found`
        });
      }
      return res.send(document);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: `Document with id ${req.params.documentId} not found`
        });
      }
      return res.status(500).send({
        message: `Error updating document with id ${req.params.documentId}`
      });
    });
});

router.delete('/:documentId', (req, res) => {
  Document.findByIdAndRemove(req.params.documentId)
    .then(document => {
      if (!document) {
        return res.status(404).send({
          message: `Document with id ${req.params.documentId} not found`
        });
      }
      return res.send({ message: 'Document successfully deleted' });
    })
    .catch(err => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: `Document with id ${req.params.documentId} not found`
        });
      }
      return res.status(500).send({
        message: `Could not delete document with id ${req.params.documentId}`
      });
    });
});

module.exports = router;
