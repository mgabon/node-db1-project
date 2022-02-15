exports.checkAccountPayload = (req, res, next) => {
  const error = {status: 400}
  const { name , budget } = req.body
  if (name === undefined || budget === undefined) {
    error.message = 'name and bought are required'
    next(error)
}
}
exports.checkAccountNameUnique = (req, res, next) => {

}

exports.checkAccountId = async (req, res, next) => {
try {
  const account = await Account.get
  if (!account) {
next({ status: 404, message: 'not found'})
  } else {
    req.account = account
    next()
  }
} catch (err) {
  next(err)
}
}
