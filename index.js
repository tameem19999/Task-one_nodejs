const express = require('express');
const app = express();
const router = require('./router/router');
const cors=require('cors');
app.use(cors())
app.use(express.urlencoded({
    extended:true

}))
app.use(router);
app.listen(4000,()=>{
    console.log('welcome node_js express on 4000 !')
});