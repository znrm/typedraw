import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login } from '../../../shared/actions/session_actions';
import { removeErrors } from '../../../shared/actions/errors_actions';
import Form from './form';

const mapStateToProps = ({ errors, session }) => ({
  session,
  errors,
  formType: 'login'
});

const mapDispatchToProps = dispatch => ({
  action: user => dispatch(login(user)),
  clearErrors: () => dispatch(removeErrors())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Form)
);
