const express  = require('express');
const {handleuserlogin} = require('../constroller/Userlogin-con')
const router = express.Router();

router.get('/',handleuserlogin);



module.exports = router;