const express =require('express');
const edit=express.Router();
const bodyParser = require('body-parser');




edit.use(bodyParser.urlencoded({ extended: true }));

edit.get("/",(req,res)=>{
    res.render('editArticle.ejs')
})

  

module.exports=edit