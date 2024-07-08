const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const addressSchema = new mongoose.Schema({
    street: {
        type: String,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    postalCode: {
        type: Number,
        required: true,
    }
})

const reviewSchema = new mongoose.Schema({
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'USER',
      required: true,
    },
    review: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
}, {timestamps: true});

const serviceProviderSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: addressSchema,
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    adharNumber: {
        type: Number,
        required: true,
    },
    typeOfService: [{
        type: String,
        required: true,
    }],
    experience: {
        type: Number,
    },
    availability: {
        days: [String],
        hours: {
            start: String,
            end: String,
        }
    },
    review: reviewSchema,
}, {timestamps: true})

const SPSchema = mongoose.model('SPSCHEMA', serviceProviderSchema)

module.exports = SPSchema