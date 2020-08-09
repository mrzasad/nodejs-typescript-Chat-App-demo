const app = require('../app')
const controller = require('../controllers/messages')

app
	.post('/messages', controller.add)
	.get('/messages', controller.getList)