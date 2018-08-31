import { connect } from 'react-redux';
import Document from './document';
import { updateText, updateImage } from '../../../shared/actions/document_actions';
// image change and text change action

// updateText, updateImageLayer

const mapStateToProps = (state) => ({
  imageLayer: state.documents[state.ui.selectedDocument].imageLayer,
  textLayer: state.documents[state.ui.selectedDocument].textLayer
});

const mapDispatchToProps = dispatch => ({
  updateText: (textId, text) => dispatch(updateText(textId, text)),
  updateImage: (imageId, image) => dispatch(updateImage(image))
});

const DocumentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Document);

export default DocumentContainer;
