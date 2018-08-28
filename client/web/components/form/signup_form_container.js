import { connect } from 'react-redux';
import { createUser } from '../../actions/user_actions';
import Form from './form';

const mapStateToProps = () => ({
  formType: 'signup'
});

const mapDispatchToProps = dispatch => ({
  action: user => dispatch(createUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
