const mongoose = require('mongoose')

const listingSchema = mongoose.Schema({
    city: {
        type: String,
        required: true,
    },
    transactionType: {
        type: String,
        required: true,
    },
    propertyType: {
        type: String,
        required: true,
    },
    beds: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    postalCode: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    pictures: {
        type: [String]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Listing', listingSchema);