const router = require("express").Router()
const projectController = require("../controllers/project")

router.get('/',projectController.showall)
router.get('/add/:idman',projectController.addform)
router.get('/edit/:id/',projectController.editform)
router.get('/delete/:id',projectController.deleteform)
router.post('/add/:idman',projectController.add)
router.post('/edit/:id/',projectController.edit)
router.post('/delete/:id',projectController.delete)
module.exports = router