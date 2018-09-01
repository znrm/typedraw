const axios = require('axios');

export const getDocument = documentId =>
  axios.get(`https://typedraw.herokuapp.com/api/documents/${documentId}`);

// should send web token in the future
export const createDocument = userId =>
  axios.post('https://typedraw.herokuapp.com/api/documents', { userId });

export const updateTitle = (document, title) =>
  axios.put(`https://typedraw.herokuapp.com/api/documents/${document.id}`, {
    title
  });

export const updateText = (document, textLayer) =>
  axios.put(`https://typedraw.herokuapp.com/api/documents/${document.id}`, {
    textLayer
  });

export const updateImage = (document, imageLayer) =>
  axios.put(`https://typedraw.herokuapp.com/api/documents/${document.id}`, {
    imageLayer
  });

export const addCollaborator = (document, user) =>
  axios.put(`https://typedraw.herokuapp.com/api/documents/${document.id}`, {
    collaborators: user
  });

export const deleteDocument = documentId =>
  axios.delete(`https://typedraw.herokuapp.com/api/documents/${documentId}`);
