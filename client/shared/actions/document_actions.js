//import api stuff
import * as DocAPIUtil from '../somwhereTBD';

export const UPDATE_TEXT = 'UPDATE_TEXT';
export const UPDATE_IMAGE = 'UPDATE_IMAGE';
export const RECEIVE_NEW_KEYS = 'RECEIVE_NEW_KEYS';

export const onUpdateText = (document) => ({
  type: UPDATE_TEXT,
  document
});

export const onUpdateImage = (image) => ({
  type: UPDATE_IMAGE,
  image
});

export const receiveKeys = (docId, keys) => ({
  type: RECEIVE_NEW_KEYS,
  docId,
  keys
});

export const updateText = (document) => dispatch => (
  DocAPIUtil.updateText(document)
    .then(servDoc => dispatch(onUpdateText(servDoc)), err => console.log(err, 'edit error'))
);

export const updateImage = (image) => dispatch => (
  DocAPIUtil.updateImage(image)
    .then(servImg => dispatch(onUpdateImage(servImg)), err => console.log(err, 'pic error'))
);
