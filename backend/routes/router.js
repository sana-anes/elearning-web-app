var router = require('express').Router()

const teacherRouter = require('./teacherRouter')
const adminRouter = require('./adminRouter')
const clientRouter = require('./route')


router.use('/teacher', teacherRouter)
router.use('/admin', adminRouter)
router.use('/app', clientRouter)



module.exports = router;