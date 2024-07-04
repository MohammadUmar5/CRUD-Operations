const express =require('express');
const create=express.Router();
const bodyParser = require('body-parser');


var articles=[];
let nextArticleId=1;

create.use(bodyParser.urlencoded({ extended: true }));

create.get("/",(req,res)=>{
    res.render('createArticle.ejs')
})
create.post("/",(req,res)=>{
    var article={
        id:nextArticleId,
        title:req.body.createText,
        date:new Date().toLocaleDateString(),
        description:req.body.createDescription,
    }
    articles.push(article);
    nextArticleId++;
  
    // console.log(descriptionInput)
    console.log(article)
    res.render('createArticle.ejs')
})
module.exports={create, articles,nextArticleId};