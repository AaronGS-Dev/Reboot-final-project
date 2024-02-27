const jwt = require('jsonwebtoken')
const User = require('../models/user.model')

function checkAuth(req, res, next) {
  if (!req.headers.authorization) return res.status(401).send('Token not found')

  jwt.verify(req.headers.authorization, process.env.SECRET, async (err, result) => {
    if (err) return res.status(401).send('Token not valid')

    const user = await User.findOne({ where: { email: result.email } })
    if (!user) return res.status(401).send('Token not valid')

    res.locals.user = user
    next()
  })
}

module.exports={
    checkAuth
}