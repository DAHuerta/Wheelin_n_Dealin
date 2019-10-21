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
      allowNull: false,
      validate: {
        // notNull: true,
        // notEmpty: true,
        len: [1, 200]
      }
    },
    favorite_type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        // notNull: true,
        // notEmpty: true,
        len: [1, 200]
      }
    },
    favorite_make: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        // notNull: true,
        // notEmpty: true,
        len: [1, 200]
      }
    },
    authorized: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  return Users;
};
