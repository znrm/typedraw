import { connect } from 'react-redux';
import Document from './document';
import { updateText, receiveDocument } from '../../../shared/actions/document_actions';

const mapStateToProps = ({ ui, documents }) => ({
  documentId: ui.selectedDocument,
  action: ui.documentAction,
  imageLayer: documents[ui.selectedDocument].imageLayer,
  textLayer: documents[ui.selectedDocument].textLayer
});

const mapDispatchToProps = dispatch => ({
  updateText: (docId, text) => dispatch(updateText({ id: docId }, text)),
  receiveDocument: (document) => dispatch(receiveDocument(document))
});

const DocumentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Document);

export default DocumentContainer;
