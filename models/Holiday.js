module.exports = function(sequelize, DataTypes) {
  var Holiday = sequelize.define("Holiday", {
    holidayDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },  
    holidayName: {
        type: DataTypes.STRING,
        allowNull: false
    }
  });
  return Holiday;
};