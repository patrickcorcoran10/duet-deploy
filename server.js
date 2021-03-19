const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const db = require("./models")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/apiRoutes")(app)

db.sequelize.sync({ force: false }).then(() => {
    app.listen(process.env.PORT || PORT, () => {
      console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
    });
});