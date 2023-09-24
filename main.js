const app = require('express')();
const { appRouter } = require('./router');

app.route('/')
  .get((req, res) => {
    res.send('Hello World!');
  });

app.route('/version')
  .get((req, res) => {
    res.status(200).json({
      serviceName: 'cherrypick-service',
      status: 'OK',
      version: 'Version 1'
    });
  });

appRouter(app);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});