const { Op } = require('sequelize')
const User = require('../models/Users')

module.exports = {
  show: async (req, res) => {
    // Encontrar todos usuários que tem email que termina com @gmail.com
    // Desses usuários eu quero buscar todos que moram em "SP"
    // Desses usuários eu quero buscar as tecnologias que começam com React

    const { email, street, tech } = req.params

    const user = await User.findAll({
      attributes: ['id', 'name', 'email'],
      where: {
        email: {
          [Op.like]: `%${email}%`
        }
      },
      include: [
        {
          association: 'addresses',
          attributes: ['id', 'zipcode', 'street', 'number'],
          where: {
            street: {
              [Op.like]: `%${street}%`
            }
          }
        },
        {
          association: 'techs',
          attributes: ['id', 'name'],
          where: {
            [Op.and]: {
              name: {
                [Op.like]: `%${tech}%`
              },
            }
          },
          through: {
            attributes: []
          }
        },
      ],
    })

    return res.status(200).json(user)
  }
}