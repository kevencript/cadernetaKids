const proxy = require("http-proxy-middleware");

module.exports = app => {
  app.use(
    proxy(["/api", "/api/profile/create", "/auth/google"], {
      target: "http://localhost:5000/"
    })
  );
};
