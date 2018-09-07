import { connect } from 'react-redux';
import DocumentFrame from './frame';

const mapStateToProps = state => ({
  document: state.documents.textLayer,
  image: state.documents.imageLayer
});

const FrameContainer = connect(mapStateToProps)(DocumentFrame);

export default FrameContainer;
