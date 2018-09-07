const navByPlatform = (ownProps, mobileLocation, webLocation) => {
  if (ownProps.navigation) {
    ownProps.navigation.navigate(mobileLocation);
  } else {
    ownProps.history.push(webLocation);
  }
};

export default navByPlatform;
