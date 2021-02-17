const Tech = require('../models/Techs')
const User = require('../models/Users')

module.exports = {
  store: async (req, res) => {
    const { user_id } = req.params
    const { name } = req.body

    const user = await User.findByPk(user_id)
    !user && res.status(404).json({ message: 'User not found' })

    const [tech] = await Tech.findOrCreate({ where: { name } })

    await user.addTechs(tech)
    res.status(201).json(tech)
  },

  index: async (req, res) => {
    const { user_id } = req.params

    const user = await User.findByPk(user_id, {
      include: { 
        association: 'techs',
        through: {
          attributes: []
        }
      },
    })

    !user && res.status(200).json([])

    res.status(200).json(user)
  },

  findAll: async (req, res) => {
    const tech = await Tech.findAll()
    !tech && res.status(200).json([])

    return res.status(200).json(tech)
  },

  delete: async (req, res) => {
    const { user_id } = req.params
    const { name } = req.body

    const user = await User.findByPk(user_id)
    !user && res.status(404).json({ message: 'User not found' })

    const tech = await Tech.findOne({ where: { name } })

    await user.removeTechs(tech)

    return res.status(204).json()
  }
}