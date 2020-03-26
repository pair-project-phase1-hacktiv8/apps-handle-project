const router = require("express").Router()
const managerController = require("../controllers/manager")

router.get('/',managerController.showall)
router.post('/login',managerController.login)
router.get('/project/:id',managerController.showallmanager)
router.get('/add',managerController.addform)
router.get('/edit/:id/',managerController.editform)
router.get('/delete/:id',managerController.deleteform)
router.post('/add',managerController.add)
router.post('/edit/:id/',managerController.edit)
module.exports = router
