const base = process.env === 'PRODUCTION'
  ? 'https://fast-escarpment-85327.herokuapp.com'
  : 'http://localhost:3000';

export default base;
