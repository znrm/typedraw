import { connect } from 'react-redux';
import Documents from './documents';
import { updateText, updateImage } from '../../shared/actions/document_actions';
//image change and text change action

//updateText, updateImageLayer

const mapStateToProps = (state) => ({
  imageLayer: state.document.imageLayer,
  text: state.document.textLayer
});

const mapDispatchToProps = dispatch => ({
  updateText: document => dispatch(updateText(document)),
  updateImage: image => dispatch(updateImage(image))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Documents);
