import { connect } from 'react-redux';
import Document from './document';
import { receiveDocument } from '../../../shared/actions/document_actions';

const mapStateToProps = ({ ui, documents }) => ({
  documentId: ui.selectedDocument,
  documentAction: ui.documentAction,
  imageLayer: documents[ui.selectedDocument].imageLayer,
  textLayer: documents[ui.selectedDocument].textLayer
});

const mapDispatchToProps = dispatch => ({
  updateDocument: document => dispatch(receiveDocument(document))
});

const DocumentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Document);

export default DocumentContainer;
