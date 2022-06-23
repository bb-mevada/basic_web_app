module.exports = {
    get: (req, res, next) => {
        try {
            res.status(200).json({
                status: 200,
                message: "API is working 🚀"
            });
        }
        catch (err) {
            throw err
        }
    }
}