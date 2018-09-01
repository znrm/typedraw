import { connect } from 'react-redux';
import Document from './document';
import { updateText } from '../../../shared/actions/document_actions';

const mapStateToProps = ({ ui, documents }) => ({
  document: documents[ui.selectedDocument],
  documentId: ui.selectedDocument,
  action: ui.documentAction,
  imageLayer: documents[ui.selectedDocument].imageLayer,
  textLayer: documents[ui.selectedDocument].textLayer
});

const mapDispatchToProps = dispatch => ({
  updateText: (docId, text) => dispatch(updateText(docId, text))
});

const DocumentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Document);

export default DocumentContainer;
