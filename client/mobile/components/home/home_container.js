import { connect } from 'react-redux';
import Home from './home';
import { createDocument } from '../../../shared/actions/document_actions';

const mapStateToProps = ({ session }) => ({
  userId: session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createDoc: userId =>
    dispatch(createDocument(userId)).then(() =>
      ownProps.navigation.navigate('DocumentFrameContainer'))
});

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeContainer;
