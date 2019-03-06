module.exports = function(sequelize, DataTypes) {
  var Comments = sequelize.define("Comments", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    post: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ifComment: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    parentId: {
      type: DataTypes.INTEGER
    }
  });
  return Comments;
};
