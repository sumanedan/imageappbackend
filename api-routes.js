// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to ImageGallery'
    });
});

// Import contact controller
var imageController = require('./imageController');
// Contact routes
router.route('/images')
    .get(imageController.index)
    .post(imageController.new);
router.route('/images/:image_id')
    .get(imageController.view)
    .patch(imageController.update)
    .put(imageController.update)
    .delete(imageController.delete);
// Export API routes
module.exports = router;
