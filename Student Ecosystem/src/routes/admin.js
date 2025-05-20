const express = require('express');
const { signupAdmin, signinAdmin } = require('../controller/admin');

const router = express.Router();


router.post("/adminsignup", signupAdmin)
router.post("/adminsignin", signinAdmin)

module.exports = router;