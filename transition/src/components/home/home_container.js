import { connect } from 'react-redux';
import Home from './home';
import { logout } from '../../actions/session_actions';
import { getDocument, createDocument } from '../../actions/document_actions';
import navByPlatform from '../../util/platform_util';

const mapStateToProps = ({ session }) => ({
  userId: session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(logout()),
  createDoc: userId =>
    dispatch(createDocument(userId)).then(() =>
      navByPlatform(ownProps, 'DocumentFrameContainer', '/document')),
  getPublicDoc: () =>
    dispatch(getDocument('5b8ade489b77030014ecbec5')).then(() =>
      navByPlatform(ownProps, 'DocumentFrameContainer', '/document'))
});

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeContainer;
