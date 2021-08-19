const { Router } = require("express");
const bcrypt = require("bcrypt");
const saltRound = 10;
const router = Router();
const Users = require("../models/userModel");


// router.get("/signup", (req, res) => {
//   res.render("signup");
// });

router.post("/signup", async (req, res) => {
  
  try {
    const { name, email, password: scrtPassword } = req.body;
    console.log(name, email, scrtPassword)
    const password = await bcrypt.hash(scrtPassword, saltRound);

    if (name && email && password) {
      const newUser = await Users.create({
        name,
        email,
        password,
      });
      if (newUser) {
        req.session.user = {
          id: newUser._id,
          name: newUser.name,
          email: newUser.email,
        };
        res.json(name);
      } 
  } } catch (err) {
    return res.status(418)
  }
});

router.get("/signout", (req, res) => {
  req.session.destroy();
  res.clearCookie(req.app.get("cookieName"));
  res.redirect("/");
});

router.get("/signin/:msg", async (req, res) => {
  res.render("signin", { msg: req.params.msg });
})

router.get("/signin", async (req, res) => {
  res.render("signin");
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    const currentUser = await Users.findOne({ email });
    if (
      currentUser &&
      (await bcrypt.compare(password, currentUser.password))
    ) {
      req.session.user = {
        id: currentUser._id,
        name: currentUser.name,
        email: currentUser.email,
      };
      return res.redirect("/");
    }
    // const message = "please sign up";
    // return res.status(401).render("signin", { message });
    const msg = "User is not found. Please check email && password";
    return res.status(401).redirect(`/auth/signin/${msg}`);
  }
  // return res.status(401).redirect("/auth/signin");
  const msg = "Fill all!";
  return res.status(401).redirect(`/auth/signin/${msg}`);
});



module.exports = router;
