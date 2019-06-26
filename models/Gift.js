module.exports = function(sequelize, DataTypes) {
  var Gift = sequelize.define("Gift", {
    itemName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    comments: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    FriendId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Gift.associate = function(models) {
    models.Gift.belongsTo(models.Friend, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });

    models.Friend.hasMany(models.Gift);
  };

  return Gift;
};
