import express from 'express'

const router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
})

/* 
 * 返回一个json数据
 */
 router.get('/json',function(req, res, next) {
 	res.json({
 		status: 200,
 		data: [
 			{
 				1: "qwer"
 			},
 			{
 				1: "sdfsdf"
 			}
 		]
 	})
 })

export default router
