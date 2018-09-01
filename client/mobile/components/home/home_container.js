import { connect } from 'react-redux';
import Home from './home';
import { createDocument } from '../../../shared/util/document_api_util';

const mapStateToProps = state => ({
  userId: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createDoc: () =>
    dispatch(createDocument(ownProps.userId)).then(
      ownProps.navigation.navigate('DocumentFrameContainer')
    )
});

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeContainer;
