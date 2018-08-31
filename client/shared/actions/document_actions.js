export const RECEIVE_DOCUMENT = 'RECEIVE_DOCUMENT';
export const RECEIVE_DOCUMENT_DIFFS = 'RECEIVE_DOCUMENT_DIFFS';

export const receiveDocument = document => ({
  type: RECEIVE_DOCUMENT,
  document
});

export const receiveDocumentDiffs = document => ({
  type: RECEIVE_DOCUMENT_DIFFS,
  document
});
