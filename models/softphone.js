var db = require("../models");
var passport = require("../config/passport");
var userID;

// module.exports = function(req, next) {

//   if (req.user) {
//     userID = req.user.id;
//     return userID;
//   }
//   else {
//     return next();
//   }
// };
module.exports = function (sequelize, DataTypes) {
    var Phonebook = sequelize.define('Phonebook', {
        contact_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        contact_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone_number: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        notes: {
            type: DataTypes.STRING,
            allowNull: true
        }
        // userID: {
        //     type: DataTypes.INTEGER,
        //     allowNull: true
        // }
    });

    Phonebook.associate = function (models) {
// A Phonebook should belong to an User and A Phonebook can't be created without an User due to the foreign key constraint
        Phonebook.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Phonebook;
};