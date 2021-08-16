const mongoose = require('mongoose');

const logSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    country: {
        type: String,
        required: true,
    },
    temperature: {
        type: String,
        required: true,
    }
},
    {
        timestamps: true,
    }
);

const Log = mongoose.model('Log', logSchema);

module.exports = Log;