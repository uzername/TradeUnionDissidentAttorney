import Turn from "./turn";
/**
 * game object that will translocate us to another location within current location. It just has data, actual translocation is done within game.js
 */
class Passage extends Turn {
    constructor(scene, x, y, in_destinationX, in_destinationY, width = 32, height = 32, type = "") {
        super(scene, x, y, width, height, type)
        this.destinationX = in_destinationX;
        this.destinationY = in_destinationY;
    }
}

export default Passage