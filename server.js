const { createBundleRenderer } = require('vue-server-renderer');

const bundle = require('./dist/vue-ssr-bundle.json');
const template = '<!--vue-ssr-outlet--><script src="/dist/build.js"></script>';
const renderer = createBundleRenderer(bundle, { template });

const express = require('express');
const app = express();

app.use('/dist', express.static('dist'));

app.get('*', (req, res) => {
  renderer
  .renderToStream({url: req.path})
  .pipe(res);
});

app.listen(8080);
