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
      navByPlatform(ownProps, 'DocumentFrame', '/document')),
  getPublicDoc: () =>
    dispatch(getDocument('5b9b10a2b9ea390015f38f65')).then(() =>
      navByPlatform(ownProps, 'DocumentFrame', '/document'))
});

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeContainer;
