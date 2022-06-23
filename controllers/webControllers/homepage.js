module.exports = {
    get: (req, res, next) => {
        try {
            res.status(200).render('homepage');
        }
        catch (err) {
            throw err
        }
    }
}