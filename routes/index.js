const account = require("./account");
const manager = require("./manager");
const managerActivity = require("./managerActivity");

function route(app) {
  app.use("/account", account);
  app.use("/manager", manager);
  app.use("/managerActivity", managerActivity);
}
module.exports = route;
