const HOST = process.env.NODE_ENV === 'production'
  ? 'https://www.typedraw.app'
  : 'http://localhost:5000';

export default HOST;
