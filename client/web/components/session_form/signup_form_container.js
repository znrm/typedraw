import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createUser } from '../../actions/user_actions';
import Form from './form';

const mapStateToProps = ({ session }) => ({
  session,
  formType: 'signup'
});

const mapDispatchToProps = dispatch => ({
  action: user => dispatch(createUser(user))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Form)
);
