import { connect } from 'react-redux';
import Home from './home';

const mapStateToProps = (state) => ({
  userId: state.session.currentUser
});

const mapDispatchToProps = () => ({
  createDoc: () => console.log('create new doc in home_container for mobile')
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
