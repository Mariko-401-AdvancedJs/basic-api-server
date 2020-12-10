'use strict';

module.exports = (req, res, next) => {
  console.log(`METHOD is a ${req.method}, PATH is ${req.path}`);
  next();
}