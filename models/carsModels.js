
module.exports = function (sequelize, DataTypes) {
    var Cars = sequelize.define("Cars", {
      model: {
        type: DataTypes.STRING, allowNull: false, validate: {// notNull: true,
          // notEmpty: true,
          len: [1, 200]
        }
      },
      make: {
        type: DataTypes.STRING, allowNull: false, validate: {// notNull: true,
          // notEmpty: true,
          len: [1, 200]
        }
      },
      year: {
        type: DataTypes.INTEGER, allowNull: false, validate: {// notNull: true,
          // notEmpty: true,
          len: [1, 200]
        }
    },
      mileage: {
        type: DataTypes.INTEGER, allowNull: false, validate: {// notNull: true,
          // notEmpty: true,
          len: [1, 200]
        }
    },
      type: {
        type: DataTypes.STRING, allowNull: false, validate: {// notNull: true,
          // notEmpty: true,
          len: [1, 200]
        }
      },
      hidden: { 
          type: DataTypes.BOOLEAN, defaultValue: false }
    });
    return Cars;
};
  