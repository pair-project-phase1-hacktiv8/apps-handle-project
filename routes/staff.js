const router = require("express").Router()
const staffController = require("../controllers/staff")

router.get('/',staffController.showall)
router.post('/login',staffController.login)
router.get('/project/:id',staffController.showallstaff)
router.get('/add',staffController.addform)
router.get('/edit/:id/',staffController.editform)
router.get('/delete/:id',staffController.deleteform)
router.post('/add',staffController.add)
router.post('/edit/:id/',staffController.edit)
module.exports = router