import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../../shared/actions/session_actions';
import Home from './home';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
