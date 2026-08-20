const validateId = (req, res, next) => {

    const id = parseInt(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({
            success: false,
            message: "Invalid Task ID"
        });
    }

    next();
};

module.exports = validateId;