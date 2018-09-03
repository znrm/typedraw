import { connect } from 'react-redux';
import { addCollaborator } from '../../../shared/actions/document_actions';
import AddCollaborators from './add_collaborators';

const mapStateToProps = (state) => ({
  collaboraters: state.documents.collaboraters,
  documentId: state.ui.selectedDocument
});

const mapDispatchToProps = dispatch => ({
  // addCollaborator: () => dispatch(addCollaborators())
  removeCollaborator: () => console.log('remove collabs yo'),
  addCollaborator: (document, user) => dispatch(addCollaborator(document, user))

});

const AddCollaboratorsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCollaborators);

export default AddCollaboratorsContainer;
