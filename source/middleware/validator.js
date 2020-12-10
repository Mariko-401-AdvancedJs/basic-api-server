'use strict';

function checkId(req, res, next) {
  console.log('hitting validator:', req.params.id);
  if (req.params.id) {
    next();
  } else {
    next('500')
  }
}
module.exports = checkId;