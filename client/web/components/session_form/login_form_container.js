import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import Form from './form';

const mapStateToProps = ({ session }) => ({
  session,
  formType: 'login'
});

const mapDispatchToProps = dispatch => ({
  action: user => dispatch(login(user))
});

export default withRouter(
  connect(
    mapStateToProps, 
    mapDispatchToProps
  )(Form)
);
