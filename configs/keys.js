if (process.env.NODE_ENV === "production") {
  // production enviroment
  module.exports = require("./prod");
} else {
  // development enviroment
  module.exports = require("./dev");
}
