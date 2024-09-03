const express = require('express');
const router = express.Router();
const UsersController = require('../controller/UsersController')
router.get('/',(req,res)=>{
    res.json({
        msg:"Hello from main end_point",
        state:1,
        data:[]
    })
})
router.get('/login',UsersController.login_get)
router.post('/login',UsersController.login_post)
router.get('/signup',UsersController.signup_get)
router.post('/signup',UsersController.signup_post)



module.exports=router;