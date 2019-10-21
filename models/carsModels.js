module.exports = function (sequelize, DataTypes) {
  var Car = sequelize.define("Car", {
    model: {
      type: DataTypes.STRING, allowNull: false, validate: {// notNull: true,
        // notEmpty: true,
        len: [1, 200]
      }
    },
    make: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        // notNull: true,
        // notEmpty: true,
        len: [1, 200]
      }
    },
    year: {
      type: DataTypes.INTEGER, allowNull: true
    },
    mileage: {
      type: DataTypes.INTEGER, allowNull: true
    },
    type: {
      type: DataTypes.STRING, allowNull: false, validate: {// notNull: true,
        // notEmpty: true,
        len: [1, 200]
      }
    },
    color: {
      type: DataTypes.STRING, allowNull: true
    },
    price: {
      type: DataTypes.INTEGER, allowNull: true
    },
    image: {
      type: DataTypes.TEXT, allowNull: true
    },
    hidden: {
      type: DataTypes.BOOLEAN, defaultValue: false
    }
  }
    , {
      timestamps: false
    });
  return Car;
};