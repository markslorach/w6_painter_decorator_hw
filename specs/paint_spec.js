const assert = require('assert');
const Paint = require('../models/paint.js');

describe('Paint', function () {

    let paint;

    beforeEach(function () {
        paint = new Paint(15);
    })

    it('should have a number of litres of paint', function () {
        const actual = paint.litres;
        assert.strictEqual(actual, 15);
    })

    it('should be able to check if it is empty', function () {
        const actual = paint.checkIfEmpty();
        assert.strictEqual(actual, false);
    })

    it('should be able to empty itself of paint', function () {
        paint.emptyPaint();
        const actual = paint.litres;
        assert.strictEqual(actual, 0);
    })
});