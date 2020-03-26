const router = require("express").Router()
const runningProjectController = require("../controllers/runningproject")

// router.get('/',runningProjectController.showall)
// router.get('/add',runningProjectController.addform)
router.get('/edit/:id/:idstaff/:email',runningProjectController.editform)
// router.get('/delete/:id',runningProjectController.deleteform)
router.get('/add/:idpro/:idman/form',runningProjectController.addform)
router.get('/add/:idpro/:idstaff/:idman',runningProjectController.add)
// router.post('/edit/:id/',runningProjectController.edit)
// router.post('/delete/:id',runningProjectController.delete)
module.exports = router