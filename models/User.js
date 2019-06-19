module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    picture: {
        //Change datatype after researching how to store images in MYSQL
        type: DataTypes.STRING,
        allowNull: true
    }
  });
  
  User.associate = function(models) {
    models.User.hasMany(models.Friend, {
      onDelete: "cascade"
    });

  };


  return User;
};
