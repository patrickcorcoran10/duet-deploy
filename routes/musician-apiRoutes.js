
var db = require("../models");

module.exports = function (app) {
 
    app.get("/api/musician", function (req, res) {

        db.User.findAll({

        }).then(function (dbBadge) {
            res.json(dbBadge);
            console.log(dbBadge);
        });
    }
    );

    app.get("/api/reward/:",
        function (req, res) {
            db.Badge.findOne({
                where: {
                    id: req.params.Badge
                },
                // include: [db.User]
            })
                .then(function (dbBadge) {
                    res.json(dbBadge)
                    console.log(dbBadge);
                    console.log("working");

                });
        });
}