const express =require('express');
const view=express.Router();
const bodyParser = require('body-parser');




view.use(bodyParser.urlencoded({ extended: true }));

view.get("/",(req,res)=>{
    res.render('view.ejs')
})

  

module.exports=view