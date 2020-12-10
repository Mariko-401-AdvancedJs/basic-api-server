'use strict';

const express = require('express');
const app = express();

//big time middleware
const logger = require('./middleware/logger');
// const validator = require('./middleware/validator');
const notFound = require('./error-handlers/404');
const serverError = require('./error-handlers/500');

const movieRoutes = require('./routes/movies');
const musicRoutes = require('./routes/music');


//movie middleware
app.use(express.json());
app.use(logger);
// app.use(validator);
app.use(movieRoutes);

//movie middleware
app.use(express.json());
app.use(logger);
// app.use(validator);
app.use(musicRoutes);


//error handling
app.use('*', notFound);
app.use(serverError);

module.exports = {
  server: app,
  start: PORT => {
    if (!PORT) { throw new Error('port is missing'); }
    app.listen(PORT, () => {
      console.log(`alive and well on ${PORT}`);
    })
  }
}