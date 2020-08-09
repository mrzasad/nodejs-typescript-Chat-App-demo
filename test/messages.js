const proxyquire = require('proxyquire').noCallThru()
const chai = require("chai")
const assert = chai.assert
const expect = chai.expect

describe("services/messages", () => {
	const dbSub = {
		getData: (path) => {
			return [{
				sentBy: "User - 1",
				message: "DEF"
			}, {
				sentBy: "User - 2",
				message: "ABC"
			}]
		},
		push: (path, data, options) => {
			return true
		}
	}
	let messages = null
	beforeEach(function(done) {
		messages = proxyquire('../services/messages', {
			'../connections/jsonDB': dbSub
		})
		done()
	})
	it('validateData - Function returning true for valid values', () => {
		const resp = messages.validateData({
			sentBy: "User",
			message: "Message"
		})
		expect(resp).to.eql(true)
	})
	it('validateData - Function throwing error for invalid values', () => {
		expect(() => messages.validateData({
			sentBy: "",
			message: ""
		})).to.throw("Invalid input data")
	})
	it('add - Function returning true after saving object in database', () => {
		const resp = messages.add({
			sentBy: "User",
			message: "Message"
		})
		expect(resp).to.eql(true)
	})
	it('getListSorted - Function returning sorted array by alphabetical order', () => {
		const resp = messages.getListSorted()
		expect(resp).to.eql([{
			sentBy: "User - 2",
			message: "ABC"
		}, {
			sentBy: "User - 1",
			message: "DEF"
		}])
	})
})