import { connect } from 'react-redux';
import AddCollaborators from './add_collaborators';

const mapStateToProps = (state) => ({
  collaboraters: state.documents.collaboraters,
});

const mapDispatchToProps = dispatch => ({
  // addCollaborator: () => dispatch(addCollaborators())
  addCollaborator: newCollaborator => console.log('add colllabs yo'),
  removeCollaborator: () => console.log('remove collabs yo')
});

const AddCollaboratorsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCollaborators);

export default AddCollaboratorsContainer;
