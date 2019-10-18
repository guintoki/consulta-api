const mongoose = require('../database');

const CompanySchema = new mongoose.Schema({
    symbol: {
        type: String,
        required: true
    },
});

const Company = mongoose.model('Company', CompanySchema);

module.exports = Company;