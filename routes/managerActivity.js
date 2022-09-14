const express = require("express");
const router = express.Router();

const managerController = require("../controllers/ManagerActivity");
router.post("/", managerController.addActivity);
router.get("/getYear", managerController.getYearOfActivityModal);
router.get("/:name", managerController.getActivityByName);
router.post("/addYear", managerController.addYear);
router.delete("/deleteYear/:id", managerController.deleteYear);
router.put("/update/:id", managerController.updateActivity);
router.delete("/deleteActivityById/:id", managerController.deleteActivityById);
router.delete(
  "/deleteActivityByName/:name",
  managerController.deleteActivityByName
);

module.exports = router;
