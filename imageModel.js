var mongoose = require('mongoose');

// Setup schema
var imageSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    siteaddress: {
        type: String,
        required: true
    },
    
});

// Export Image model
var Image = module.exports = mongoose.model('image', imageSchema);
module.exports.get = function (callback, limit) {
    Image.find(callback).limit(limit);
}