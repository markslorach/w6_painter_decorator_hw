const Decorator = function () {
    this.paintStock = [];
}

Decorator.prototype.addPaint = function (paint) {
    this.paintStock.push(paint);
}

Decorator.prototype.totalLitres = function () {
    return this.paintStock.reduce((total, paint) => total += paint.litres, 0);
}

Decorator.prototype.hasEnoughPaint = function (room) {
    return this.totalLitres() >= room.area;
}

Decorator.prototype.canPaintRoom = function (room) {
    // if(this.totalLitres() >= room.area) {
    //     room.paintRoom();
    // }
    if (this.hasEnoughPaint(room)) {
        room.paintRoom();
    }
}

// Unsure if this is correct - whatever I've wrote is passing haha
Decorator.prototype.decreasePaintStock = function (room) {
    return this.paintStock.forEach(paint => paint.litres -= room.area);    
}

Decorator.prototype.removeEmptyPaintCans = function () {
    for(paint of this.paintStock) {
        if(paint.checkIfEmpty()) {
            const indexOfPaint = this.paintStock.indexOf(paint);
            this.paintStock.splice(indexOfPaint, 1)
        }
    }
}

// Park.prototype.removeDinosaur = function (dinosaur){
//     const indexOfDinosaur = this.dinosaurs.indexOf(dinosaur);
//     this.dinosaurs.splice(indexOfDinosaur, 1)
// }

module.exports = Decorator;