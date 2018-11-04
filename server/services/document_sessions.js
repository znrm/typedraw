const Document = require('../models/Document');

class DocumentSessions {
  constructor() {
    this.sessions = {};
  }

  async newConnection(documentId) {
    if (this.noActiveSession(documentId)) {
      console.log(`Starting new document session for document ${documentId}.`);
      await this.startSession(documentId);
    }

    this.sessions[documentId].connections += 1;
    return Promise.resolve();
  }

  disconnection(documentId) {
    this.sessions[documentId].connections -= 1;

    if (this.noRemainingConnections(documentId)) {
      console.log(`All connections to document ${documentId} have closed.`);

      Document.findById(documentId)
        .then(
          document => {
            if (document) {
              document.set({ imageLayer: this.sessions[documentId].imageData });
              document.save();
            }
          },
          error => console.error('Cannot find document because', error.message)
        )
        .then(() => {
          delete this.sessions[documentId];
        });
    }
  }

  noRemainingConnections(documentId) {
    return this.sessions[documentId].connections === 0;
  }

  noActiveSession(documentId) {
    return this.sessions[documentId] === undefined;
  }

  async startSession(documentId) {
    this.sessions[documentId] = {
      connections: 0,
      imageData: ''
    };

    return Document.findById(documentId)
      .then(document => {
        if (document) {
          this.sessions[documentId].imageData = document.imageLayer;
        }
      })
      .catch(error =>
        console.error('Cannot find document because', error.message));
  }

  getImageData(documentId) {
    return this.sessions[documentId].imageData;
  }

  saveImageData(documentId, imageData) {
    this.sessions[documentId].imageData = imageData;
  }

  async getImageLayerFromDatabase(documentId) {}

  async saveImageLayerToDatabase(documentId) {}
}

module.exports = DocumentSessions;
