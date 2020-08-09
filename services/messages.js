const db = require('../connections/jsonDB')
const {
	sortBy
} = require("underscore")
const {
	v4: uuidv4
} = require('uuid');

const add = (data) => {
	db.push("/messages[]", {
		id: uuidv4(),
		sentBy: data.sentBy,
		message: data.message
	}, true)
	return true
}

const validateData = (data) => {
	if (data.sentBy && data.message) {
		return true
	} else {
		throw ("Invalid input data")
	}
}

const getListSorted = () => {
	const allMessages = db.getData("/messages")
	const sorted = sortBy(allMessages, "message")
	return sorted
}

module.exports = {
	add,
	validateData,
	getListSorted
}