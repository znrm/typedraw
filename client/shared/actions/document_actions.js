import * as DocAPIUtil from '../util/document_api_util';

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

export const updateText = (document) => dispatch => (
  DocAPIUtil.updateText(document)
    .then(servDoc => dispatch(receiveDocument(servDoc)), err => console.log(err, 'edit error'))
);

export const updateImage = (image) => dispatch => (
  DocAPIUtil.updateImage(image)
    .then(servImg => dispatch(receiveDocument(servImg)), err => console.log(err, 'pic error'))
);
