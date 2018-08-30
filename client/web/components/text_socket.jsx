import React from 'react';
import { connect } from 'react-redux';
import { typing } from '../../shared/actions/testing_actions';

const mapDispatchToProps = dispatch => ({
  onTyping: key => dispatch(typing(key))
});

const TextSocket = ({ onTyping }) => (
  <div>
    <h5>Type yo text up in here</h5>
    <input type="text" onKeyPress={e => onTyping(e.key)} />
  </div>
);

export default connect(null, mapDispatchToProps)(TextSocket);
