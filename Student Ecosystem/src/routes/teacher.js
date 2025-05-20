const express = require('express');
const { signupTeacher, signinTeacher } = require('../controller/teacher');

const router = express.Router();


router.post("/teachersignup", signupTeacher)
router.post("/teachersignin", signinTeacher)

module.exports = router;