import React from 'react';
import { connect } from 'react-redux';
import { receiveKeys } from '../../shared/actions/document_actions';

const mapDispatchToProps = dispatch => ({
  onTyping: key => dispatch(receiveKeys(0, key))
});

const TextSocket = ({ onTyping }) => (
  <div>
    <h5>Type yo text up in here</h5>
    <input type="text" onKeyPress={e => onTyping(e.key)} />
  </div>
);

export default connect(null, mapDispatchToProps)(TextSocket);
