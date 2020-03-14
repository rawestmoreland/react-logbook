const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the User schema
const AircraftSchema = new Schema({
    ident: {
        type: String,
        required: true
    },
    ac_or_sim: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    icao_code: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    engines: {
        type: Number,
        required: true,
    },
    engine_type: {
        type: String,
        required: true,
    },
    land_or_sea: {
        type: String,
        required: true,
    },
    manufacturer: {
        type: String,
        required: true
    },
    model_year: {
        type: Number,
        required: false
    },
    weight_class: {
        type: String,
        required: true,
    },
    equipment: {
        type: String,
    },
    hi_perf: {
        type: Boolean,
        required: true,
        default: false
    },
    efis: {
        type: Boolean,
        required: true,
        default: false
    },
    ifr_equipped: {
        type: Boolean,
        required: true,
        default: false
    },
    complex: {
        type: Boolean,
        required: true,
        default: false
    },
    tailwheel: {
        type: Boolean,
        required: true,
        default: false
    },
    unmanned: {
        type: Boolean,
        required: true,
        default: false
    },
    owner: {
        type: Boolean,
        required: true,
        default: false
    },
    taa: {
        type: Boolean,
        required: true,
        default: false
    }
})

module.exports = User = mongoose.model('aircraft', AircraftSchema)