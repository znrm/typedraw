const Document = require('../models/Document');

class DocumentSessions {
  async newConnection(documentId) {
    if (this[documentId] === undefined) await this.startSession(documentId);

    this[documentId].connections += 1;
  }

  async disconnection(documentId) {
    this[documentId].connections -= 1;

    if (this[documentId].connections === 0) {
      await this.saveImageToDatabase(documentId);
      delete this[documentId];
    }
  }

  startSession(documentId) {
    this[documentId] = {
      connections: 0,
      imageDataURI: ''
    };

    return Document.findById(documentId).then(
      document => {
        if (document) this[documentId].imageDataURI = document.imageLayer;
      },
      error => console.error('Cannot find document because', error.message)
    );
  }

  getImageDataURI(documentId) {
    return this[documentId].imageDataURI;
  }

  saveImageDataURI(documentId, imageDataURI) {
    this[documentId].imageDataURI = imageDataURI;
  }

  saveImageToDatabase(documentId) {
    return Document.findById(documentId).then(
      document => {
        if (document) {
          document.set({ imageLayer: this[documentId].imageDataURI });
          document.save();
        }
      },
      error => console.error('Cannot find document because', error.message)
    );
  }
}

module.exports = DocumentSessions;
