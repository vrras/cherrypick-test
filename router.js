require('dotenv').config()

const appName = process.env.APP_NAME;

const router = (app) => {
  app.route('/new-version')
    .get((req, res) => {
      res.status(200).json({
        serviceName: appName,
        status: 'OK',
        version: 'Version 2'
      });
    });
}

exports.appRouter = router;