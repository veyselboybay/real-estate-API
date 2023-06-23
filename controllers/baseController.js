const listingModel = require('../models/listing')
const mockData = require('../listings-data')

const getAll = async (req, res) => {
    return res.status(200).json(mockData)
}
const createListing = async (req, res) => {
    // return res.json(mockData);
}

module.exports = { getAll}