import { connect } from 'react-redux';
import { addCollaborator } from '../../actions/document_actions';
import AddCollaborators from './collaborators';

const mapStateToProps = ({ documents, ui }) => ({
  collaborators: documents[ui.selectedDocument].collaborators,
  documentId: ui.selectedDocument
});

const mapDispatchToProps = dispatch => ({
  addCollaborator: (document, user) => dispatch(addCollaborator(document, user))
});

const CollaboratorsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCollaborators);

export default CollaboratorsContainer;
