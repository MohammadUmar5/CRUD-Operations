const express = require('express');
const {create, articles}= require('./routes/createArticles.js');
const loginRouter=require('./routes/login.js');
const edit = require('./routes/edit.js');
const view=require('./routes/view.js');



const app = express();
const port = 3000;
// making public folder static
app.use(express.static("public"));

// this will get triggered when the website opens
app.get("/", (req, res) => {
  res.render("landing.ejs");
});

// this will triger when user clicks the button on landing page
app.get("/blog", (req, res) => {
  res.render("blog.ejs",{articles:articles});
});

// Sign in form
app.use("/login",loginRouter)

// this will trigger when user clicks button (New Article)
app.use("/createArticle", create);

// edit article route
app.use("/editArticle",edit)

//view article route
app.use("/viewArticle",view)

// server created
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});