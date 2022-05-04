
var router = require("express").Router();
const controller = require("./controller");

router.get("/data", controller.data);
 

module.exports  = router;