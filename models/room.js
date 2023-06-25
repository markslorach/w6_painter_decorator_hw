const Room = function (name, area) {
    this.name = name;
    this.area = area;
    this.painted = false;
};

Room.prototype.paintRoom = function () {
    this.painted = true;
}

module.exports = Room;