import { connect } from 'react-redux';
import Document from './document';
import { receiveKeys } from '../actions/document_actions';
// image change and text change action

// updateText, updateImageLayer

const mapStateToProps = (state, ownProps) => ({
  // this is what it will eventually look like
  // imageLayer: state.documents[state.ui.selectedDocumentId].imageLayer,
  // textLayer: state.documemnts[state.ui.selectedDocumentId].textLayer
});

const mapDispatchToProps = dispatch => ({
  updateText: (id, key) => dispatch(receiveKeys(id, key)),
  // updateImage: image => dispatch(updateImage(image))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Document);
