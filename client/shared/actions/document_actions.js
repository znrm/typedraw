export const UPDATE_TEXT = 'UPDATE_TEXT';
export const UPDATE_IMAGE = 'UPDATE_IMAGE';

export const updateText = (documentId, text) => ({
  type: UPDATE_TEXT,
  documentId,
  text
});

export const updateImage = (documentId, image) => ({
  type: UPDATE_IMAGE,
  documentId,
  image
});
