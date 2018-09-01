const express = require('express');
// const passport = require('passport');
const Document = require('../../models/Document');
const User = require('../../models/User');
const { merge } = require('lodash');

const router = express.Router();

router.get('/:documentId', (req, res) => {
  Document.findById(req.params.documentId).then(document => {
    if (document) {
      const { imageLayer, textLayer, id, collaborators, title } = document;
      return res.json({ imageLayer, textLayer, id, collaborators, title });
    }
    return res.status(404).json({
      message: `Document with id ${req.params.documentId} not found`
    });
  });
});

router.post('/', (req, res) => {
  User.findById(req.body.userId).then(owner => {
    new Document({ owner }).save().then(docRes => {
      res
        .json({ ...docRes._doc, id: docRes._id })
        .catch(docErr => res.status(422).json({ message: docErr }));
    });
  });
});

router.put('/:documentId', (req, res) => {
  Document.findById(req.params.documentId).then(document => {
    if (document) {
      const { body } = req;
      if (body.collaborators) {
        document.collaborators.push(body.collaborators);
        body.collaborators = document.collaborators;
      }
      Object.assign(document, body);

      const updatedDocument = new Document(document);

      updatedDocument
        .save()
        .then(docRes => {
          const { imageLayer, textLayer, id, collaborators, title } = docRes;
          res.json({ imageLayer, textLayer, id, collaborators, title });
        })
        .catch(docErr => res.status(422).json({ message: docErr }));
    }
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
