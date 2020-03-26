const router = require("express").Router()
const runningProjectController = require("../controllers/runningproject")

// router.get('/',runningProjectController.showall)
// router.get('/add',runningProjectController.addform)
// router.get('/edit/:id/',runningProjectController.editform)
// router.get('/delete/:id',runningProjectController.deleteform)
router.get('/add/:idpro',runningProjectController.addform)
router.get('/add/:idpro/:idstaff',runningProjectController.add)
// router.post('/edit/:id/',runningProjectController.edit)
// router.post('/delete/:id',runningProjectController.delete)
module.exports = router