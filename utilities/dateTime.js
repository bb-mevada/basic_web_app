/**
 * @description Helps to get indian timezone datetime string
 * @returns {string} // MM/DD/YYYY, HH:MM:SS
 */
let loggerDateTime = () => {
    return new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata'
    });
}

module.exports = {
    loggerDateTime
}