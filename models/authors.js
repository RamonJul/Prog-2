module.exports = function(sequelize, DataTypes) {
  var Authors = sequelize.define("Authors", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false
    },
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
    userNAME: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  return Authors;
};
