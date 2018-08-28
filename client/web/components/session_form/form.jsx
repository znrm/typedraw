import React from 'react';
import { withRouter } from 'react-router-dom';
import { merge } from 'lodash';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.session.loggedIn ? this.props.history.replace('/home') : null;
  }

  handleSubmit(e) {
    const { action } = this.props;
    e.preventDefault();
    const user = merge({}, this.state);
    action(user).then(() => this.props.history.replace('/home'));
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    let title;
    let buttontxt;
    const { formType } = this.props;
    const { email, password } = this.state;
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
            <div className="form-email">
              <label>email</label>
              <input
                type="text"
                value={email}
                placeholder="email"
                onChange={this.update('email')}
                className="form-email-input"
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