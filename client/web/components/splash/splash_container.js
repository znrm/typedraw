import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Splash from './splash';

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Splash)
);
