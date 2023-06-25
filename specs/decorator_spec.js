const assert = require('assert');
const Room = require('../models/room.js');
const Paint = require('../models/paint.js');
const Decorator = require('../models/decorator.js');

describe('Decorator', function () {
    
        let decorator;
        let paint1;
        let paint2;
        let room;
    
        beforeEach(function () {
            decorator = new Decorator();
            paint1 = new Paint(15);
            paint2 = new Paint(15);
            room = new Room('Office', 10, false);
        });
    
        it('should start with an empty paint stock', function () {
            const actual = decorator.paintStock;
            assert.deepStrictEqual(actual, []);
        })

        it('should be able to add a can of paint to paint stock', function () {
            decorator.addPaint(paint1);
            const actual = decorator.paintStock;
            assert.deepStrictEqual(actual, [paint1]);
        })

        it('should be able to calculate total litres paint it has in stock', function () {
            decorator.addPaint(paint1);
            decorator.addPaint(paint2);
            const actual = decorator.totalLitres();
            assert.strictEqual(actual, 30);
        })

        it('should be able to calculate whether is has enough paint to paint a room', function () {
            decorator.addPaint(paint1);
            decorator.addPaint(paint2);
            const actual = decorator.hasEnoughPaint(room);
            assert.strictEqual(actual, true);
        })

        it('should be able to paint room if has enough paint in stock', function () {
            decorator.addPaint(paint1);
            decorator.addPaint(paint2);
            decorator.canPaintRoom(room);
            const actual = room.painted;
            assert.strictEqual(actual, true);
        })

        // it('should be able to decrease amount of paint in stock when painting room', function () {

        // })

        it('should be able to remove empty paint cans from stock', function () {
            decorator.addPaint(paint1);
            decorator.addPaint(paint2);
            paint2.emptyPaint();
            decorator.removeEmptyPaintCans();
            const actual = decorator.paintStock;
            assert.deepStrictEqual(actual, [paint1]);
        })
})