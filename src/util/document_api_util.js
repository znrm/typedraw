import axios from 'axios';
import HOST from './host';

export const getDocument = documentId =>
  axios.get(`${HOST}/api/documents/${documentId}`);

// should send web token in the future
export const createDocument = userId =>
  axios.post(`${HOST}/api/documents`, { userId });

export const updateTitle = (document, title) =>
  axios.put(`${HOST}/api/documents/${document.id}`, {
    title
  });

export const updateText = (document, textLayer) =>
  axios.put(`${HOST}/api/documents/${document.id}`, {
    textLayer
  });

export const updateImage = (document, imageLayer) =>
  axios.put(`${HOST}/api/documents/${document.id}`, {
    imageLayer
  });

export const addCollaborator = (document, user) =>
  axios.put(`${HOST}/api/documents/${document.id}`, {
    collaborators: user
  });

export const deleteDocument = documentId =>
  axios.delete(`${HOST}/api/documents/${documentId}`);
