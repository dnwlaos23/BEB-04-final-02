const express = require('express');
const cors = require('cors');
const session = require('express-session');
const fs = require('fs');
const https = require('https');
const apiRoutes = require("./routes");

const app = express();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("run server");
});

app.use(
  session({
    secret: 'blockinart',
    resave: false,
    saveUninitialized: true,
    proxy: true,
    cookie: {
      path: "/",
      maxAge: 24 * 6 * 60 * 10000,
      sameSite: "none",
      httpOnly: "true",
      secure: "true",
    },
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const corsOptions = {
  origin: true,
  methods: ["GET", "POST", "OPTIONS"],
  credentials: true, // 다른 도메인 간 쿠키 사용 허용 (true) (default:false)
};
app.use(cors(corsOptions));

app.use("/api", apiRoutes);

let server;

if (fs.existsSync("./key.pem") && fs.existsSync("./cert.pem")) {
  server = https
    .createServer(
      {
        key: fs.readFileSync(__dirname + `/` + 'key.pem', 'utf-8'),
        cert: fs.readFileSync(__dirname + `/` + 'cert.pem', 'utf-8'),
      },
      app
    )
    .listen(PORT, () => console.log(`----- 🚀 HTTPS Server is starting on ${PORT} port...`));
} else {
  server = app.listen(PORT, () => console.log(`----- 🚀 HTTP Server is starting on ${PORT} port...`));
}
module.exports = server;
