
const { register, login } = require("../Controllers/AuthControllers");
const { checkUser } = require("../Middlewares/authMiddleware");

const router = require("express").Router();

router.post("/smartstore", checkUser);
router.post("/smartstore/commerce/usersign", register);
router.post("/smartstore/commerce/login", login);

module.exports = router;