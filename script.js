const student = {
    name: 'harsh'
};

// Add getKeys() method to Object prototype
Object.prototype.getKeys = function() {
    return Object.keys(this);
};

console.log(student.getKeys()); // Output: ['name']
