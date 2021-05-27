Array.prototype.uniq = function () {
    return Array.from(new Set(this))
}
