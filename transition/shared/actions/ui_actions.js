export const SELECT_DOCUMENT_ACTION = 'SELECT_DOCUMENT_ACTION';
export const SELECT_DOCUMENT = 'SELECT_DOCUMENT';
export const TOGGLE = 'TOGGLE';
export const SELECT_COLOR = 'SELECT_COLOR';

export const selectDocumentAction = (documentAction) => ({
  type: SELECT_DOCUMENT_ACTION,
  documentAction
});

export const selectDocument = documentId => ({
  type: SELECT_DOCUMENT,
  documentId,
});

export const toggle = (uiElement) => ({
  type: TOGGLE,
  uiElement
});

export const selectColor = (color) => ({
  type: SELECT_COLOR,
  color
});
