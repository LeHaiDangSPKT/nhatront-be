const AccountModal = require("../models/Account");

class Account {
  // [GET] /
  getAccount(req, res, next) {
    AccountModal.find({}, (err, result) => {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      }
    });
  }
}

module.exports = new Account();
