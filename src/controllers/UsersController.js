const User = require('../models/Users')

module.exports = {
  store: async (req, res) => {
    const { name, email, age } = req.body

    const user = await User.create({ name, email, age })
    return res.json(user)
  },

  index: async (req, res) => {
    const users = await User.findAll()
    return res.status(200).json(users)
  }
}