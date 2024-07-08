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

const userSchema = new mongoose.Schema({
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
}, {timestamps: true})

const User = mongoose.model('USER', userSchema)

module.exports = User