import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createUser } from '../../../shared/actions/user_actions';
import { removeErrors } from '../../../shared/actions/errors_actions';
import Form from './form';

const mapStateToProps = ({ errors, session }) => ({
  session,
  errors,
  formType: 'signup'
});

const mapDispatchToProps = dispatch => ({
  action: user => dispatch(createUser(user)),
  clearErrors: () => dispatch(removeErrors())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Form)
);
