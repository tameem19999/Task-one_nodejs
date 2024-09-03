exports.login_get=(rea,res)=>{
    res.json({
        msg:"Hello from login end_point , succefull",
        state:1,
        data:['abdole',100,99]
    })
}
exports.login_post=(req,res)=>{
    res.json({
        msg:req.body.msg,
        password:req.body.password,
        username:req.body.username

    })
}
exports.signup_get=(req,res)=>{
    res.json({
        msg:'Welcome ! to sign_up page'
    })
}
exports.signup_post=(req,res)=>{
    res.json({
        msg:'sign_up succefull'
    })
}
