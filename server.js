const express = require("express");
const PORT = process.env.PORT || 3001;
const path = require("path")
const app = express();
const db = require("./models")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "client", "build")))

require("./routes/apiRoutes")(app)

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});



db.sequelize.sync({ force: false }).then(() => {
    app.listen(process.env.PORT || PORT, () => {
      console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
    });
});