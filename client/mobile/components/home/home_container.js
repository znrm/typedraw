import { connect } from 'react-redux';
import Home from './home';
import {
  getDocument,
  createDocument
} from '../../../shared/actions/document_actions';

const mapStateToProps = ({ session }) => ({
  userId: session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createDoc: userId =>
    dispatch(createDocument(userId)).then(() =>
      ownProps.navigation.navigate('DocumentFrameContainer')),
  getPublicDoc: () =>
    dispatch(getDocument('5b8ade489b77030014ecbec5')).then(() =>
      ownProps.navigation.navigate('DocumentFrameContainer'))
});

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeContainer;
