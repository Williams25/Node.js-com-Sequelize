const { Model, DataTypes } = require('sequelize');

class Users extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      age: DataTypes.INTEGER
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.hasMany(models.Addresses, { foreignKey: 'user_id', as: 'addresses' })
    this.belongsToMany(models.Techs, { foreignKey: 'user_id', through: 'User_techs', as: 'techs' })
  }
}

module.exports = Users