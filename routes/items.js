const express = require('express')
const router = express.Router()

router.get('/', function (req, res, next) {
  const pluCd = req.query.plu_cd
  const items = [
    {
      plu_cd: '123',
      name: 'みかん',
      price: 120
    },
    {
      plu_cd: '234',
      name: 'リンゴ',
      price: 140
    },
    {
      plu_cd: '345',
      name: 'バナナ',
      price: 160
    },
    // 黒崎追加 2018/07/13
    {
      plu_cd: '456',
      name: 'たまご',
      price: 200
    }
  ]
  let result
  if (pluCd) {
    result = items.find((item) => {
      if (item.plu_cd === pluCd) return true
    })
  } else {
    result = items
  }
  res.json(result)
})

module.exports = router
