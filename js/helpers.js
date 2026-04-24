// ==========================================
// Helper functions and Vector class
// ==========================================

// 3D vector
function Vector(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
}

Vector.prototype.add = function(v) {
    return new Vector(this.x + v.x, this.y + v.y, this.z + v.z);
};

Vector.prototype.subtract = function(v) {
    return new Vector(this.x - v.x, this.y - v.y, this.z - v.z);
};

Vector.prototype.multiply = function(s) {
    return new Vector(this.x * s, this.y * s, this.z * s);
};

Vector.prototype.clone = function() {
    return new Vector(this.x, this.y, this.z);
};

// Clamp a value between min and max
function clamp(val, min, max) {
    return Math.max(min, Math.min(max, val));
}

// Wrap a value between min and max
function wrap(val, min, max) {
    if (val < min) return max - (min - val) % (max - min);
    if (val >= max) return min + (val - max) % (max - min);
    return val;
}

// Distance between two vectors
function distance(a, b) {
    var dx = a.x - b.x;
    var dy = a.y - b.y;
    var dz = a.z - b.z;
    return Math.sqrt(dx*dx + dy*dy + dz*dz);
}

// ==========================================
// Export for Node.js
// ==========================================
if (typeof exports !== "undefined") {
    exports.Vector = Vector;
    exports.clamp = clamp;
    exports.wrap = wrap;
    exports.distance = distance;
}
