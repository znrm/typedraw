import { connect } from 'react-redux';
import { signup } from '../../actions/user_actions';
import Form from './form';

const mapStateToProps = () => ({
  formType: 'signup'
});

const mapDispatchToProps = dispatch => ({
  action: user => dispatch(signup(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
