const listingModel = require('../models/listing')
const mockData = require('../listings-data')

const getAll = async (req, res) => {
    const { city, transactionType, propertyType, beds } = req.query;
    if (Object.keys(req.query).length === 0) {
        return res.status(200).json({success:true,msg:'FULLFILLED',data:mockData})
    }
    try {
        const filteredData = await mockData.filter(item => item.city === city && item.transactionType === transactionType && item.propertyType === propertyType && item.beds === beds);
        return res.status(200).json({success:true,msg:'FULLFILLED',data:filteredData})
    } catch (error) {
        return res.status(400).json({success:false,msg:'REJECTED => '+error,data:filteredData})
    }
}
const createListing = async (req, res) => {
    // return res.json(mockData);

}

module.exports = { getAll}