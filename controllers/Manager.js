const HomesModal = require("../models/Homes");
const WardsModal = require("../models/Wards");

class Manager {
  //[GET] /manager/
  getWard(req, res, next) {
    WardsModal.find({}, (err, result) => {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      }
    });
  }
  //[POST] /manager/addWard
  addWard(req, res, next) {
    const ward = req.body;
    const newWard = new WardsModal(ward);
    newWard.save();
    res.json(ward);
  }
  // [GET] /manager/:name
  show(req, res, next) {
    HomesModal.find({ name: req.params.name }, (err, result) => {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      }
    });
  }
  //[POST] /manager/addHome
  addHome(req, res, next) {
    const home = req.body;
    const newHome = new HomesModal(home);
    newHome.save();
    res.json(home);
  }

  // [DELETE] /manager/ward/:id
  deleteWard(req, res, next) {
    WardsModal.deleteOne({ _id: req.params.id })
      .then((result) => res.json(result))
      .catch(next);
  }

  // [DELETE] /manager/deleteHomeByName/:id
  deleteHomeId(req, res, next) {
    HomesModal.deleteOne({ _id: req.params.id })
      .then((result) => res.json(result))
      .catch(next);
  }
  // [DELETE] /manager/home/deleteHomeByName/:name
  deleteHomeName(req, res, next) {
    HomesModal.deleteMany({ name: req.params.name })
      .then((result) => res.json(result))
      .catch(next);
  }

  //[PUT] /manager/update/:id
  updateHome(req, res, next) {
    HomesModal.updateOne({ _id: req.params.id }, req.body)
      .then((result) => res.json(result))
      .catch(next);
  }
}

module.exports = new Manager();
