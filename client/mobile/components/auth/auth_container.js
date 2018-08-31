import { connect } from 'react-redux';
import { createUser } from '../../../shared/actions/user_actions';
import { removeErrors } from '../../../shared/actions/errors_actions';
import { login } from '../../../shared/actions/session_actions';
import Auth from './auth';

const mapStateToProps = ({ errors }) => ({
  errors
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  createUser: user => dispatch(createUser(user)),
  clearErrors: () => dispatch(removeErrors())
});

const AuthContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);

export default AuthContainer;
