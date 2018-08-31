import { connect } from 'react-redux';
import DocumentFrame from './document_frame';
import { selectDocumentAction } from '../../../shared/actions/ui_actions';

const mapStateToProps = (state) => ({
  document: state.documents.textLayer,
  image: state.documents.imageLayer
});

const mapDispatchToProps = dispatch => ({
  // typing, drawing

});

const DocumentFrameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DocumentFrame);

export default DocumentFrameContainer;
