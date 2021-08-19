require("dotenv").config();
const express = require("express");
const path = require("path");
const sessions = require("express-session");
const MongoStore = require("connect-mongo");
//const morgan = require('morgan');
const secretKey = process.env.SECRETKEY //"32423nkjfbkcdbcksdcseflwj43239240934dnvd" //require("crypto").randomBytes(64).toString("hex");
const { connect } = require("./src/db/db");
const hbs = require("hbs");

const cors = require("cors");

const indexRouter = require("./src/routes/indexRouter");
const authRouter = require("./src/routes/authRouter");
const Question = require('./src/models/questModel')

const PORT =  3000;
const app = express();
const { dbConnectionURL } = require("./src/db/config")

const sessionParser = sessions({
  name: app.get("cookieName"),
  secret: secretKey,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: dbConnectionURL,
  }),
  cookie: {
    // secure: true,
    httpOnly: true,
    maxAge: 100000000,
  },
});
app.use(sessionParser);
app.use(cors())

app.set("cookieName", "userCookie");
app.set("views", path.join(process.env.PWD, "src", "views"));

app.use(express.static(path.join(__dirname, "src", "public")));
hbs.registerPartials(path.join(__dirname, "src", "views", "partials"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "hbs");




app.get("/", async(req,res)=>{
  const questions = await Question.find()
  res.json(questions)
});

app.use("/", indexRouter);
app.use("/auth", authRouter);

app.listen(PORT, () => {
  connect();
  console.log("Server started on PORT", PORT);
});
