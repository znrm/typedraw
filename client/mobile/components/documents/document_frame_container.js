import { connect } from 'react-redux';
import DocumentFrame from './document_frame';

const mapStateToProps = state => ({
  document: state.documents.textLayer,
  image: state.documents.imageLayer
});

const DocumentFrameContainer = connect(mapStateToProps)(DocumentFrame);

export default DocumentFrameContainer;
