// Import contact model
Img = require('./imageModel');
// Handle index actions
exports.index = function (req, res) {
    Img.get(function (err, images) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Images retrieved successfully",
            data: images
        });
    });
};
// Handle create contact actions
exports.new = function (req, res) {
    var image = new Img();
    image.name = req.body.name ? req.body.name : image.name;
    image.url = req.body.url;
    image.siteaddress = req.body.siteaddress
    // save the image and check for errors
    image.save(function (err) {
        if (err)
            res.json(err);
        res.json({
            message: 'New Image uploaded!',
            data: image
        });
    });
};
// Handle view Image info
exports.view = function (req, res) {
    Img.findById(req.params.image_id, function (err, image) {
        if (err)
            res.send(err);
        res.json({
            message: 'Image details loading..',
            data: image
        });
    });
};
// Handle update Image info
exports.update = function (req, res) {
    Img.findById(req.params.image_id, function (err, image) {
        if (err)
            res.send(err);
        image.name = req.body.name ? req.body.name : image.name;
        image.url = req.body.url;
        image.siteaddress = req.body.siteaddress;
        
        // save the image and check for errors
        Img.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Image Info updated',
                data: image
            });
        });
    });
};
// Handle delete image
exports.delete = function (req, res) {
    Img.remove({
        _id: req.params.image_id
    }, function (err, image) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Image deleted'
        });
    });
};