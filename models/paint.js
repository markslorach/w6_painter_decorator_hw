const Paint = function(litres) {
    this.litres = litres;
}

Paint.prototype.checkIfEmpty = function() {
    return this.litres === 0;
}

Paint.prototype.emptyPaint = function() {
    this.litres = 0;
}

module.exports = Paint;