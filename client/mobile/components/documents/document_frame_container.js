import { connect } from 'react-redux';
import DocumentFrame from './document_frame';
import { updateText, updateImage } from '../../../shared/actions/document_actions';

const mapStateToProps = (state) => ({
  document: state.documents.textLayer,
  image: state.documents.imageLayer
});

const mapDispatchToProps = dispatch => ({
  updateText: () => dispatch(updateText),
  updateImage: () => dispatch(updateImage)
});

const DocumentFrameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DocumentFrame);

export default DocumentFrameContainer;
