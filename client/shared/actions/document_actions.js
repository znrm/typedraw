//import api stuff
import * as DocAPIUtil from '../somwhereTBD';

export const UPDATE_TEXT = 'UPDATE_TEXT';
export const UPDATE_IMAGE = 'UPDATE_IMAGE';

export const onUpdateText = (document) => ({
  type: UPDATE_TEXT,
  document
});

export const onUpdateImage = (image) => ({
  type: UPDATE_IMAGE,
  image
});

export const updateText = (document) => dispatch => {
  return DocAPIUtil.updateText(document)
    .then(res => dispatch(onUpdateText(res, document)), err => console.log(err, 'edit error'));
};

export const updateImage = (image) => dispatch => {
  return DocAPIUtil.updateImage(image)
    .then(res => dispatch(onUpdateImage(res, image)), err => console.log(err, 'pic error'));
};
