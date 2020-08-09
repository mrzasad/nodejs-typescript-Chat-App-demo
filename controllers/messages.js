const service = require('../services/messages')

const add = (req, res) => {
	try {
		service.validateData(req.body)
		service.add(req.body)
		res.send({
			message: "Message saved"
		})
	} catch (err) {
		res.status(400).send({
			error: err
		})
	}
}

const getList = (req, res) => {
	try {
		const data = service.getListSorted()
		res.send(data)
	} catch (err) {
		res.status(400).send({
			error: err
		})
	}
}

module.exports = {
	add,
	getList
}