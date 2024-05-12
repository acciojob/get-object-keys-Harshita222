
const assert = require('assert');

// Define the student object
const student = {
    name: "John"
};

// Add getKeys() method to Object prototype
Object.prototype.getKeys = function() {
    return Object.keys(this);
};

describe('getKeys()', function() {
    it('returns an array of all the keys in an object', function() {
        const keys = student.getKeys();
        assert.deepStrictEqual(keys, ['name']);
    });
});
