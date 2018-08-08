// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
// TEMPORARILY CHANGED ../public to ../public for test environment - BE SURE TO FIX FOR DEPLOYMENT
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/signup", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/loggedin");
    } else {
      res.sendFile(path.join(__dirname, "../public/passport_views/signup.html"));
    }
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/loggedin");
    }
    res.sendFile(path.join(__dirname, "../public/passport_views/login.html"));
  });

  app.get("/create_contact", function(req, res) {
    // If the user already has an account send them to the members page
    console.log(req.user);
    if (req.user) {
      return res.sendFile(path.join(__dirname,"../public/create_contact.html"));
    }
    return res.sendFile(path.join(__dirname, "../public/passport_views/login.html"));
  });

  app.get("/loggedin", function(req, res) {
    // If the user already has an account send them to the members page
    console.log(req.user);
    if (req.user) {
      return res.sendFile(path.join(__dirname, "../public/loggedIn.html"));
    } else {
      return res.sendFile(path.join(__dirname, "../public/passport_views/login.html"));
    }
    
  });


  app.get("/contact_list", function(req, res) {
    // If the user already has an account send them to the members page
    console.log(req.user);
    if (req.user) {
      return res.sendFile(path.join(__dirname, "../public/contact_list.html"));
    } else {
      return res.sendFile(path.join(__dirname, "../public/passport_views/login.html"));
    }
  });

  app.get("/logout", function(req, res) {
    // If the user already has an account send them to the members page
    console.log(req.user);
    if (req.user) {
      req.logout();
      res.redirect("/");
    } else {
      return res.sendFile(path.join(__dirname, "../public/passport_views/login.html"));
    }
  });
  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/loggedin", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/loggedIn.html"));
  });
};