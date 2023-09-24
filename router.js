const appName = process.env.APP_NAME;

const router = (app) => {
  app.route('/new-version')
    .get((req, res) => {
      res.status(200).json({
        serviceName: 'cherrypick-service',
        status: 'OK',
        version: 'Version 2'
      });
    });
}

exports.appRouter = router;