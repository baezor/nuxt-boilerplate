import express from 'express'
import { Nuxt, Builder} from 'nuxt'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

import api from './api/routes'

const app = express();
const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 3000;

app.set('port', port);

// MongoDb
const mongodbhost = process.env.MONGO_URL || 'mongodb://localhost/weeker';
mongoose.Promise = global.Promise;
mongoose.connect(mongodbhost);

// Body-parser settings
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

// Import API Router
app.use('/api', api);

// Import and Set Nuxt.js options
let config = require('./nuxt.config.js');
config.dev = !(process.env.NODE_ENV === 'production');

// Init Nuxt.js
const nuxt = new Nuxt(config);

// Build only in dev mode
if (config.dev) {
  const builder = new Builder(nuxt);
  builder.build();
}

// Give nuxt middleware to express
app.use(nuxt.render);

// Listen the server
app.listen(port, host);
console.log('Server listening on ' + host + ':' + port); // eslint-disable-line no-console