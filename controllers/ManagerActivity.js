const ActivityModal = require("../models/Activity");
const YearOfActivityModal = require("../models/YearOfActivity");

class ManagerActivity {
  // [GET] /managerActivity/getYear
  getYearOfActivityModal(req, res, next) {
    YearOfActivityModal.find({}, (err, result) => {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      }
    });
  }
  // [POST] /managerActivity/addYear
  addYear(req, res, next) {
    const year = req.body;
    const newYear = new YearOfActivityModal(year);
    newYear.save();
    res.json(year);
  }

  // [DELETE] /managerActivity/deleteYear/:id
  deleteYear(req, res, next) {
    YearOfActivityModal.deleteOne({ _id: req.params.id })
      .then((result) => res.json(result))
      .catch(next);
  }

  // [GET] /managerActivity/:name
  getActivityByName(req, res, next) {
    ActivityModal.find({ name: req.params.name }, (err, result) => {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      }
    });
  }
  // [POST] /managerActivity/
  addActivity(req, res, next) {
    const activity = req.body;
    const newActivity = new ActivityModal(activity);
    newActivity.save();
    res.json(activity);
  }

  //[PUT] /managerActivity/update/:id
  updateActivity(req, res, next) {
    ActivityModal.updateOne({ _id: req.params.id }, req.body)
      .then((result) => res.json(result))
      .catch(next);
  }

  // [DELETE] /managerActivity/deleteActivityById/:id
  deleteActivityById(req, res, next) {
    ActivityModal.deleteOne({ _id: req.params.id })
      .then((result) => res.json(result))
      .catch(next);
  }

  // [DELETE] /managerActivity/deleteActivityByName/:name
  deleteActivityByName(req, res, next) {
    ActivityModal.deleteMany({ name: req.params.name })
      .then((result) => res.json(result))
      .catch(next);
  }
}

module.exports = new ManagerActivity();
