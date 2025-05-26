// cors.js
module.exports = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Or your Netlify domain
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};
