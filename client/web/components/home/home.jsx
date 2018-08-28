import React from 'react';

class Home extends React.Component {
  componentDidMount() {
    this.props.state.session.loggedIn
      ? null
      : this.props.history.replace('/login');
  }

  handleLogout() {
    this.props.logout().then(() => this.props.history.replace('/login'));
  }

  render() {
    const currentUser = this.props.state.session.currentUser;
    return (
      <div>
        <h1>Welcome to TypeDraw</h1>
        <button onClick={() => this.handleLogout()}>Logout</button>
      </div>
    );
  }
}

export default Home;
