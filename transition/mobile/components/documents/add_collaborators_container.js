import { connect } from 'react-redux';
import { addCollaborator } from '../../../shared/actions/document_actions';
import AddCollaborators from './add_collaborators';

const mapStateToProps = ({ documents, ui }) => ({
  collaborators: documents[ui.selectedDocument].collaborators,
  documentId: ui.selectedDocument
});

const mapDispatchToProps = dispatch => ({
  removeCollaborator: () => console.log('remove collabs yo'),
  addCollaborator: (document, user) => dispatch(addCollaborator(document, user))
});

const AddCollaboratorsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCollaborators);

export default AddCollaboratorsContainer;
