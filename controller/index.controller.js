const User = require('../model/user');

  
exports.homePage =(request,response)=>{
    response.render("index.ejs");
};
exports.aboutPage =(request,response)=>{
    response.render("about.ejs");
};
exports.loginPage =(request,response)=>{
    response.render("login.ejs");
};
exports.registerPage =(request,response)=>{
    response.render("register.ejs");
};
exports.loginPost =(request,response)=>{
    let user = new User();
    user.username = request.body.username;
    user.password = request.body.password;
    user.checkUser()
    .then(result=>{
       if(result.length>0){
         console.log(result[0].username);  
         response.send("successful");
       } 
       else{
          response.send("<h1>Invalid email and password</h1>");
       }
    })
    .catch(err=>{
        console.log(err);
        response.send("<h1>Something went wrong...</h1>");
    });
};
exports.registerPost = (request,response)=>{
       
    let username = request.body.username;
    let email = request.body.email;
    let password = request.body.password;
     const user = new User(username,email,password);
     console.log(user);
     user.save()
     .then(result=>{
         response.send("<h1>success</h1>");
     })
     .catch(err=>{
         response.send(err);
         response.send("error..");
     })
 
}
