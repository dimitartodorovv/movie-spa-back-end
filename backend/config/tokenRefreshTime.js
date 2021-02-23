

module.exports = function(expTime) {
    let time = Date.now() - expTime * 1000
    return time
}