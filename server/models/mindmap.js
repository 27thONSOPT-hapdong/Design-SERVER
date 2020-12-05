module.exports = (sequelize, DataTypes) => {
    return sequelize.define('mindmap', {
      title: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      start_date: {
        type: DataTypes.DATE(),
        allowNull: false,
      },
      end_date: {
        type: DataTypes.DATE(),
        allowNull: false,
      },
      contents: {
        type: DataTypes.TEXT(),
        allowNull: false
      }
    },{
        timestamps : false
    }
    )
  }