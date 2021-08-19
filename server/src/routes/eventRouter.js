const { Router } = require("express");

const router = Router();

router.get("/new", (req, res) => {
  res.render('eventNew')
})

module.exports = router;
