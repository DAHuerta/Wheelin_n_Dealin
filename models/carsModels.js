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
      type: DataTypes.INTEGER, allowNull: false
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

  // Cars.associate = function(models) {
  //   // We're saying that a Post should belong to an Author
  //   // A Post can't be created without an Author due to the foreign key constraint
  //   Cars.belongsTo(models.Users, {
  //     foreignKey: {
  //       allowNull: true
  //     }
  //   });
  // };

  return Cars;
};
