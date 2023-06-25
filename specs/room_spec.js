const assert = require('assert');
const Room = require('../models/room.js');

describe('Room', function () {

    let room;

    beforeEach(function () {
        room = new Room('Bedroom', 10, false);
    });

    it('should have a name', function () {
        const actual = room.name;
        assert.strictEqual(actual, 'Bedroom');
    });

    it('should have an area in square metres', function () {
        const actual = room.area;
        assert.strictEqual(actual, 10);
    })

    it('should start not painted', function () {
        const actual = room.painted;
        assert.strictEqual(actual, false);
    })

    it('should be able to be painted', function () {
        room.paintRoom();
        const actual = room.painted;
        assert.strictEqual(actual, true);
    })

});