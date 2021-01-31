// normally I'd like to split config files into base, prod, dev files
// but in that project we dont need it

export default {
  BASE_URL: process.env.BASE_URL || 'http://localhost:8080',
};
