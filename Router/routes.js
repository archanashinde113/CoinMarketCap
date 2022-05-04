
var router = require("express").Router();
const controller = require("../Controller/controller");

router.get("/data", controller.data);
 

module.exports  = router;