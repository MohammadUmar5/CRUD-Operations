const express =require('express');
const login=express.Router();




login.get("/",(req,res)=>{
    res.render('login.ejs')
})
// create.post("/",(req,res)=>{
//     res.render('editArticle.ejs')
// })
module.exports=login