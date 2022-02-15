const router = require('express').Router()
const Accounts = require('./accounts-model')
const md = require('./accounts-middleware')
router.get('/', async (req, res, next) => {
try {
const accounts = await Accounts.getAll()
res.json(accounts)
} catch (err) {
  next(err)
}
})

router.get('/:id', md.checkAccountId, (req, res, next) => {
res.json(req.account)
})

router.post('/', md.checkAccountPayload, md.checkAccountNameUnique, (req, res, next) => {
  try {
    res.json('post account')
  } catch (err) {
    next(err)
  }
})

router.put('/:id',  md.checkAccountId, md.checkAccountPayload, md.checkAccountPayload, (req, res, next) => {
  try { 
    res.json('update account')
  } catch (err) {
    next(err)
  }
});

router.delete('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
})

module.exports = router;
