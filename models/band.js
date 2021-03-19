module.exports = function (sequelize, DataTypes) {

    var Band = sequelize.define
        ("Band", {
            band_name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [1]
                }
            },
            instrument_seeking: {
                type: DataTypes.STRING,
                allowNull: false,
                len: [1]
            },
            band_genre: {
                type: DataTypes.TEXT,
                allowNull: true,
                len: [1]
            },
            band_link: {
                type: DataTypes.STRING,
                allowNull: true,
                len: [1]
            }

        });

    return Band;
};