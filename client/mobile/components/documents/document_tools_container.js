import { connect } from 'react-redux';
import DocumentTools from './document_tools';
import { selectDocumentAction, toggle, selectColor } from '../../../shared/actions/ui_actions';


const mapProps = (dispatch, ownProps) => ({
  selectAction: (action) => dispatch(selectDocumentAction(action)),
  toggles: (uiElement) => dispatch(toggle(uiElement)),
  colorSelect: (color) => dispatch(selectColor(color)),
  goCollabs: () => ownProps.navigation.navigate('AddCollaboratorsContainer')
});

const DocumentToolsContainer = connect(null, mapProps)(DocumentTools);

export default DocumentToolsContainer;
