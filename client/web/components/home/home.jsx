import React from 'react';

const Home = ({ logout }) => (
  <div>
    <h1>Welcome to TypeDraw</h1>
    <button type="button" onClick={logout}>
      Logout
    </button>
  </div>
);

export default Home;
