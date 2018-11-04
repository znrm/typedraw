class DocumentSessions {
  constructor() {
    this.sessions = {};
  }

  newConnection(documentId) {
    console.log('New socket connection has been established');
    if (this.noActiveSession(documentId)) this.startSession(documentId);

    this.sessions[documentId].connections += 1;
  }

  disconnection(documentId) {
    this.sessions[documentId].connections -= 1;

    if (this.noRemainingConnections(documentId)) {
      delete this.sessions[documentId];
      console.log('All connections have been cleared');
    }
  }

  noRemainingConnections(documentId) {
    return this.sessions[documentId].connections === 0;
  }

  noActiveSession(documentId) {
    return this.sessions[documentId] === undefined;
  }

  startSession(documentId) {
    this.sessions[documentId] = {
      connections: 0,
      imageData: ''
    };
  }

  getImageData(documentId) {
    return this.sessions[documentId].imageData;
  }

  saveImageData(documentId, imageData) {
    this.sessions[documentId].imageData = imageData;
  }
}

module.exports = DocumentSessions;
