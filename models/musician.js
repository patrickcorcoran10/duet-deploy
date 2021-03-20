module.exports = function (sequelize, DataTypes) {

    var Musician = sequelize.define
        ("Musician", {
            musician_name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [1]
                }
            },
            instrument_playing: {
                type: DataTypes.STRING,
                allowNull: false,
                len: [1]
            },
           musician_genre: {
                type: DataTypes.TEXT,
                allowNull: true,
                len: [1]
            },
            musician_link: {
                type: DataTypes.STRING,
                allowNull: true,
                len: [1]
            }

        });

    // Band.associate = function (models) {
    //    Band.hasMany(models.Musician, {
    //         onDelete: "cascade"
    //     });
    // };

    return Musician;
};