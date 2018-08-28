import React from 'react';
import { withRouter } from 'react-router-dom';
import { merge } from 'lodash';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const { action } = this.props;
    e.preventDefault();
    const user = merge({}, this.state);
    action(user);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    let title;
    let buttontxt;
    const { formType } = this.props;
    const { username, password } = this.state;
    if (formType === 'login') {
      title = 'TypeDraw Log In';
      buttontxt = 'Log In';
    } else {
      title = 'Join TypeDraw!';
      buttontxt = 'Sign Up';
    }
    return (
      <div className="form-container">
        <form className="form-box" onSubmit={this.handleSubmit}>
          <div className="form-header">
            <h1>{title}</h1>
          </div>
          <div className="form-info">
            <div className="form-username">
              <label>Username</label>
              <input
                type="text"
                value={username}
                placeholder="Username"
                onChange={this.update('username')}
                className="form-username-input"
              />
            </div>

            <div className="form-password">
              <label>Password</label>
              <input
                type="password"
                value={password}
                placeholder="Password"
                onChange={this.update('password')}
                className="form-password-input"
              />
            </div>
          </div>

          <button type="submit" className="submit-btn">
            {buttontxt}
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(Form);
