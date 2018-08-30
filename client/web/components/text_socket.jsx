import React from 'react';
import startSocket from '../../shared/util/socket_util';
import {typing} from '../../shared/actions/testing_actions';

const socket = startSocket();

const mapDispatchToProps = dispatch => ({
  typing: 
})

const TextSocket = ({ typing }) => (
  <div>
    <h5>Type yo text up in here</h5>
    <input type="text" onChange={typing} />
  </div>
);

export default TextSocket;
