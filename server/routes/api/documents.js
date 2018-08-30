const express = require('express');
const passport = require('passport');
const Document = require('../../models/Document');

const router = express.Router();

router.get('/:documentId', (req, res) => {
  Document.findOne({ '_id.$oid': req.params.documentId }).then(document => {
    if (document) return document;

    return res.status(404).json({
      id: 'A document with that id does not exist'
    });
  });
});

router.post('/', (req, res) => {
  const newDocument = new Document({
    owner: req.body.id,
    collaborators: [],
    textLayer: '',
    imageLayer: ''
  });

  newDocument
    .save()
    .then(docRes => res.json(docRes))
    .catch(docErr => res.status(422).json({ document: docErr }));
});

// router.put('/:documentId', (req, res) => {
//   Document.findOne({ '_id.$oid': req.params.documentId }).then(document => {
//     if (document) {
//       document.save().then(docRes => res.json(docRes))
//         .catch(docErr => res.status(422).json({ document: docErr }));
//     }

//     return res
//       .status(404)
//       .json({
//         id: 'A document with that id does not exist'
//       });
//   });
// });

// Note.findByIdAndUpdate(req.params.noteId, {
//   title: req.body.title || "Untitled Note",
//   content: req.body.content
// }, { new: true })
//   .then(note => {
//     if (!note) {
//       return res.status(404).send({
//         message: "Note not found with id " + req.params.noteId
//       });
//     }
//     res.send(note);
//   }).catch(err => {
//     if (err.kind === 'ObjectId') {
//       return res.status(404).send({
//         message: "Note not found with id " + req.params.noteId
//       });
//     }
//     return res.status(500).send({
//       message: "Error updating note with id " + req.params.noteId
//     });
//   });

// delete

module.exports = router;
