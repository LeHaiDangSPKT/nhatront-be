const express = require("express");
const router = express.Router();

const managerController = require("../controllers/Manager");

router.get("/", managerController.getWard);
router.get("/:name", managerController.show);
router.post("/addWard", managerController.addWard);
router.post("/addHome", managerController.addHome);
router.put("/update/:id", managerController.updateHome);
router.delete("/ward/deleteWard/:id", managerController.deleteWard);
router.delete("/home/deleteHomeByName/:name", managerController.deleteHomeName);
router.delete("/home/deleteHomeById/:id", managerController.deleteHomeId);

module.exports = router;
