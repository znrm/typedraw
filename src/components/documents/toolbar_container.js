import { connect } from 'react-redux';

import Toolbar from './toolbar';

const selectDocumentAction = documentAction => ({
  type: 'SELECT_DOCUMENT_ACTION',
  documentAction
});

const mapProps = dispatch => ({
  selectAction: action => dispatch(selectDocumentAction(action))
});

const ToolbarContainer = connect(
  null,
  mapProps
)(Toolbar);

export default ToolbarContainer;
