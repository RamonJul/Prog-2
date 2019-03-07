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
    location: {
      type: DataTypes.STRING,
      allowNull: false
    }, // states in which specific genre this comment will be in
    ifComment: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }, // diffrentiates if this is a comment or a post
    parentId: DataTypes.INTEGER,
    //parent id of where this comment will be
    postedAt: Datayprs.DATE
  });
  return Comments;
};
