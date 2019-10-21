

module.exports = function (sequelize, DataTypes) {
    var Car = sequelize.define("Car", {
      model: {
        type: DataTypes.STRING, allowNull: false, validate: {// notNull: true,
          // notEmpty: true,
          len: [1, 200]
        }
      },
      year: {
        type: DataTypes.INTEGER, allowNull: true  
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
      type: {
        type: DataTypes.STRING, allowNull: false, validate: {// notNull: true,
          // notEmpty: true,
          len: [1, 200]
        }
      },
      image: {
        type: DataTypes.TEXT, allowNull: true
      },
      hidden: { 
          type: DataTypes.BOOLEAN, defaultValue: false }
    });
    return Car;
};
