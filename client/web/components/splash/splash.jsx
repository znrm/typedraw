import React from 'react';

import TextSocket from '../text_socket';

class Splash extends React.Component {
  toPage(route) {
    this.props.history.push(route);
  }

  render() {
    return (
      <div>
        <h1>TypeDraw</h1>
        <h3>
          Create doodles and works of art in real time anywhere with your
          friends
        </h3>
        <button onClick={() => this.toPage('/signup')}>
          Create an account
        </button>
        <p>or</p>
        <button onClick={() => this.toPage('/login')}>Sign in</button>
        <h4>Connect on multiple platforms</h4>
        <TextSocket />
        <div>
          <img />
          <img />
          <img />
        </div>
      </div>
    );
  }
}

export default Splash;
