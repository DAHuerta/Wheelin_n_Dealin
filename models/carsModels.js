

module.exports = function (sequelize, DataTypes) {
  var Cars = sequelize.define("Cars", {
    model: {
      type: DataTypes.STRING, allowNull: false
    },
    make: {
      type: DataTypes.STRING,
      allowNull: false
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
      type: DataTypes.STRING, allowNull: false
    },
    price: {
      type: DataTypes.STRING, allowNull: false
    },
    image: {
      type: DataTypes.TEXT, allowNull: true
    },
    hidden: {
      type: DataTypes.BOOLEAN, defaultValue: false
    }
  }, {
    timestamps: false
  });
  return Cars;
};
