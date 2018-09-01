import * as DocAPIUtil from '../util/document_api_util';
import { selectDocument } from './ui_actions';

export const RECEIVE_DOCUMENT = 'RECEIVE_DOCUMENT';
export const RECEIVE_DOCUMENT_DIFFS = 'RECEIVE_DOCUMENT_DIFFS';
export const REMOVE_DOCUMENT = 'REMOVE_DOCUMENT';

const receiveDocument = document => ({
  type: RECEIVE_DOCUMENT,
  document
});

// const receiveDocumentDiffs = document => ({
//   type: RECEIVE_DOCUMENT_DIFFS,
//   document
// });

const removeDocument = documentId => ({
  type: REMOVE_DOCUMENT,
  documentId
});

export const createDocument = userId => dispatch =>
  DocAPIUtil.createDocument(userId).then(
    newDoc => {
      dispatch(receiveDocument(newDoc));
      dispatch(selectDocument(newDoc.id));
    },
    err => console.log(err, 'new doc error')
  );

export const updateTitle = (document, title) => dispatch =>
  DocAPIUtil.updateTitle(document, title).then(
    servDoc => dispatch(receiveDocument(servDoc)),
    err => console.log(err, 'title error')
  );

export const updateText = (document, text) => dispatch =>
  DocAPIUtil.updateText(document, text).then(
    servDoc => dispatch(receiveDocument(servDoc)),
    err => console.log(err, 'text error')
  );

export const updateImage = (document, image) => dispatch =>
  DocAPIUtil.updateImage(document, image).then(
    servImg => dispatch(receiveDocument(servImg)),
    err => console.log(err, 'image error')
  );

export const addCollaborator = (document, user) => dispatch =>
  DocAPIUtil.updateImage(document, user).then(
    servImg => dispatch(receiveDocument(servImg)),
    err => console.log(err, 'collaborator error')
  );

export const deleteDocument = document => dispatch =>
  DocAPIUtil.deleteDocument(document).then(
    docId => dispatch(removeDocument(docId)),
    err => console.log(err, 'delete error')
  );
