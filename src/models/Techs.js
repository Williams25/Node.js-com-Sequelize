const { Model, DataTypes } = require('sequelize');

class Techs extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsToMany(models.Users, {
      foreignKey: 'tech_id',
      through: 'User_techs',
      as: 'users',
    })
  }
}

module.exports = Techs