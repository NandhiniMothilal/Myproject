import express from 'express'
const router = express.Router()

router.get('/', function (req, res) {
    console.log('check tab with')
    res.json({ status: true, message: 'success' })
})

export default router
