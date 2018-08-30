import { connect } from 'react-redux';
import Documents from './documents';
//image change and text change action
//updateText, updateImageLayer
const mapStateToProps = (state) => ({
  imageLayer: state.document.imageLayer,
  textLayer: state.document.textLayer
  
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Documents);
