module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                // notNull: true,
                // notEmpty: true,
                len: [1, 200]
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                // notNull: true,
                // notEmpty: true,
                len: [1, 200]
            }
        },
        favorite_color: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                // notNull: true,
                // notEmpty: true,
                len: [1, 200]
            }
        },
        favorite_type: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                // notNull: true,
                // notEmpty: true,
                len: [1, 200]
            }
        },
        favorite_make: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                // notNull: true,
                // notEmpty: true,
                len: [1, 200]
            }
        }

    }, {
        timestamps: false
    });
    Users.associate = function(models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        Users.hasMany(models.Cars, {
            onDelete: "cascade"
        });
    };
    return Users;
};