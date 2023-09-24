const app = require('express')();

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

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});