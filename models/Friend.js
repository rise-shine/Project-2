//Creating Friends table with 4 columns: name, dateOfBirth, relationship and picture.
module.exports = function(sequelize, DataTypes) {
  var Friend = sequelize.define("Friend", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    dateOfBirth: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    relationship: {
      type: DataTypes.STRING,
      allowNull: true
    }, 
    picture: {
      //Change datatype after researching how to store images in MYSQL
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  //Associating Friends table to Users table
  Friend.associate = function(models) {
    models.Friend.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    })
    
    models.User.hasMany(models.Friend);
  };

  return Friend;
};
