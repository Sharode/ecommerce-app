function round100th(x) {
    x = x.toString()
    x = x.slice(0, 6)
    return x
}

module.exports = round100th