const express = require("express");
const PORT = process.env.PORT || 3001;
const path = require("path")
const app = express();
const db = require("./models")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// require("./routes/apiRoutes")(app)

app.get("/api/bands", function (req, res) {
  db.Band.findAll({}).then(function (dbBand) {
    res.json(dbBand);
  });
});

//Get bands searching for requested instrument
//Get bands searching for requested instrument
//Get bands searching for requested instrument
//Get bands searching for requested instrument
//Get bands searching for requested instrument
//Get bands searching for requested instrument
//Get bands searching for requested instrument
//Get bands searching for requested instrument
//Get bands searching for requested instrument
app.get("/api/bands/:instrument", function (req, res) {
  if (req.params.instrument) {
    // Display the JSON for ONLY that character.
    console.log(req.params.instrument);
    db.Band.findAll({
      where: {
        instrument_seeking: req.params.instrument,
      },
    }).then(function (dbBand) {
      return res.json(dbBand);
    });
  }
});
// Get band with the request id and return them with res.json
app.get("/api/bandID/:id", function (req, res) {
  db.Band.findOne({
    where: {
      id: req.params.id,
    },
  }).then(function (dbBand) {
    res.json(dbBand);
  });
});

/*MUSICIAN ROUTES*/
// Find all musicians and return them to the user with res.json
app.get("/api/musicians", function (req, res) {
  db.Musician.findAll({}).then(function (dbMusicians) {
    res.json(dbMusicians);
  });
});

app.get("/api/musicians/:instrument", function (req, res) {
  if (req.params.instrument) {
    // Display the JSON for ONLY that character.
    db.Musician.findAll({
      where: {
        instrument_playing: req.params.instrument,
      },
    }).then(function (dbMusicians) {
      return res.json(dbMusicians);
    });
  }
});

app.post("/api/post", function (req, res) {
  const band_name = req.body.band_name;
  const instrument_seeking = req.body.instrument_seeking;
  const band_genre = req.body.band_genre;

  // const role = req.body.band;
  db.Band.create({
    band_name: band_name,
    instrument_seeking: instrument_seeking,
    band_genre: band_genre,

    // role: role
  }).then((dbBand) => {
    res.json(dbBand);
    console.log("hello");
  });
});

app.post("/api/musicians", function (req, res) {
  console.log("please work");
  const musician_name = req.body.musician_name;
  const instrument_playing = req.body.instrument_playing;
  const musician_genre = req.body.musician_genre;

  // const role = req.body.band;
  db.Musician.create({
    musician_name: musician_name,
    instrument_playing: instrument_playing,
    musician_genre: musician_genre,

    // role: role
  }).then((dbMusician) => {
    res.json(dbMusician);
    console.log("hello");
  });
});

// Get musician with the requested id and return with res.json
app.get("/api/musicianID/:id", function (req, res) {
  db.Musician.findOne({
    where: {
      id: req.params.id,
    },
  }).then(function (dbMusicians) {
    res.json(dbMusicians);
  });
});

app.post("/api/register", function (req, res) {
  const UserName = req.body.UserName;
  const Email = req.body.Email;
  const Password = req.body.Password;

  // const role = req.body.band;
  db.User.create({
    UserName: UserName,
    Email: Email,
    Password: Password,

    // role: role
  }).then((dbUser) => {
    res.json(dbUser);
    console.log("hello");
  });
});

app.use(express.static(path.join(__dirname, "client", "build")))

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