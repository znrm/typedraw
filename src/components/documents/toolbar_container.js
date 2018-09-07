import { connect } from 'react-redux';
import { selectDocumentAction, toggle, selectColor, selectDocument } from '../../actions/ui_actions';
import Toolbar from './toolbar';

const mapState = (state) => ({
  documents: state.documents
});

const mapProps = (dispatch, ownProps) => ({
  selectAction: (action) => dispatch(selectDocumentAction(action)),
  toggles: (uiElement) => dispatch(toggle(uiElement)),
  colorSelect: (color) => dispatch(selectColor(color)),
  goCollabs: () => ownProps.navigation.navigate('AddCollaboratorsContainer'),
  selectDoc: (docId) => dispatch(selectDocument(docId))
});

const ToolbarContainer = connect(mapState, mapProps)(Toolbar);

export default ToolbarContainer;
