import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Form from './form';

const mapStateToProps = () => ({
  formType: 'login'
});

const mapDispatchToProps = dispatch => ({
  action: user => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
