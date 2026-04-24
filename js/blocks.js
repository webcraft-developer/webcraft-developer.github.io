// blocks.js — dual‑mode (browser + Node)

// Remove "export" — define constants normally
const DIRECTION = Object.freeze({
    UP: 1,
    DOWN: 2,
    NORTH: 3,
    SOUTH: 4,
    WEST: 5,
    EAST: 6
});

// Example BLOCK class (yours may have more)
class BlockType {
    constructor(id, transparent = false) {
        this.id = id;
        this.transparent = transparent;
    }
}

// BLOCK registry
const BLOCK = {
    AIR: new BlockType(0, true),
    DIRT: new BlockType(1, false),

    fromId(id) {
        for (const key in BLOCK) {
            const b = BLOCK[key];
            if (b instanceof BlockType && b.id === id) return b;
        }
        return BLOCK.AIR;
    }
};

// Make globals available in browser
if (typeof window !== "undefined") {
    window.DIRECTION = DIRECTION;
    window.BLOCK = BLOCK;
}

// Make exports available in Node.js
if (typeof exports !== "undefined") {
    exports.DIRECTION = DIRECTION;
    exports.BLOCK = BLOCK;
}

