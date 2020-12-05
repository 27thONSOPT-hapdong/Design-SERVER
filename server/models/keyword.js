module.exports = (sequelize, DataTypes) => {
    return sequelize.define('keyword', {
        word: {
          type: DataTypes.STRING(45),
          allowNull: false,
        }
    }, {  
        freezeTableName: true,
        timestamps : false
    });
  };