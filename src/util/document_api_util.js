import axios from 'axios';

export const getDocument = documentId =>
  axios.get(`https://www.typedraw.app/api/documents/${documentId}`);

// should send web token in the future
export const createDocument = userId =>
  axios.post('https://www.typedraw.app/api/documents', { userId });

export const updateTitle = (document, title) =>
  axios.put(`https://www.typedraw.app/api/documents/${document.id}`, {
    title
  });

export const updateText = (document, textLayer) =>
  axios.put(`https://www.typedraw.app/api/documents/${document.id}`, {
    textLayer
  });

export const updateImage = (document, imageLayer) =>
  axios.put(`https://www.typedraw.app/api/documents/${document.id}`, {
    imageLayer
  });

export const addCollaborator = (document, user) =>
  axios.put(`https://www.typedraw.app/api/documents/${document.id}`, {
    collaborators: user
  });

export const deleteDocument = documentId =>
  axios.delete(`https://www.typedraw.app/api/documents/${documentId}`);
