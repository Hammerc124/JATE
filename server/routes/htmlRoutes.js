// import path package to use path.join
const path = require('path');
// export function to serve index.html
module.exports = (app) =>
  app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
  );
