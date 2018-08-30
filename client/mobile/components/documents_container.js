import { connect } from 'react-redux';
import Documents from './documents';
import { updateText, updateImage, receiveKeys } from '../../shared/actions/document_actions';
// image change and text change action

// updateText, updateImageLayer

const mapStateToProps = (state) => ({
  // this is what it will eventually look like
  // imageLayer: state.documents[state.ui.selectedDocumentId].imageLayer,
  // textLayer: state.documemnts[state.ui.selectedDocumentId].textLayer
  textLayer: state.documents.testDocument.textLayer
});

const mapDispatchToProps = dispatch => ({
  updateText: (id, key) => dispatch(receiveKeys(0, key)),
  // updateImage: image => dispatch(updateImage(image))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Documents);
