const Address = require('../models/Addresses')
const User = require('../models/Users')

module.exports = {
  store: async (req, res) => {
    const { user_id } = req.params
    const { zipcode, street, number } = req.body

    const user = await User.findByPk(user_id)

    !user && res.status(404).json({ message: 'User not found' })

    const address = await Address.create({ zipcode, street, number, user_id })
    return res.json(address)
  },

  index: async (req, res) => {
    const { user_id } = req.params

    const user = await User.findByPk(user_id, {
      include: {
        association: 'addresses'
      }
    })

    !user && res.status(404).json({ message: 'User not found' })

    return res.status(200).json(user)
  }
}