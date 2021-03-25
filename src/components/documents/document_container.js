import { connect } from 'react-redux';
import Document from './document';

const mapStateToProps = ({ ui }) => ({
  action: ui.documentAction
});

const DocumentContainer = connect(mapStateToProps)(Document);

export default DocumentContainer;
