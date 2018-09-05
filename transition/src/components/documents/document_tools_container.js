import { connect } from 'react-redux';
import { selectDocumentAction, toggle, selectColor, selectDocument } from '../../actions/ui_actions';
import DocumentTools from './document_tools';

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

const DocumentToolsContainer = connect(mapState, mapProps)(DocumentTools);

export default DocumentToolsContainer;
