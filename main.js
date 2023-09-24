require('dotenv').config()

const appName = process.env.APP_NAME;
const appPort = process.env.APP_PORT;

const app = require('express')();

app.route('/')
  .get((req, res) => {
    res.status(200).json({
      serviceName: appName,
      status: 'OK',
      up: Math.floor(process.uptime())
    });
  });

  app.route('/version')
  .get((req, res) => {
    res.status(200).json({
      serviceName: appName,
      status: 'OK',
      version: 'Version 1'
    });
  });

app.listen(appPort, () => {
  console.log(`Server listening on port ${appPort}`);
});