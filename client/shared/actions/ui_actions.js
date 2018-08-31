export const SELECT_DOCUMENT_ACTION = 'SELECT_DOCUMENT_ACTION';
export const SELECT_DOCUMENT = 'SELECT_DOCUMENT';

export const selectDocumentAction = (documentAction) => ({
  type: SELECT_DOCUMENT_ACTION,
  documentAction
});

export const selectDocument = documentId => ({
  type: SELECT_DOCUMENT,
  documentId,
});

// toggle eraser action
