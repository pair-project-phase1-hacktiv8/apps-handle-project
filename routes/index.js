const router = require("express").Router()
const manager = require("./manager")
const project = require("./project")
const runningproject = require("./runningproject")
const staff = require("./staff")

router.get('/',(req,res)=>{res.render('login')})
router.use('/manager',manager)
router.use('/project',project)
router.use('/runningproject',runningproject)
router.use('/staff',staff)

module.exports = router