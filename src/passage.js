import Turn from "./turn";
class Passage extends Turn {
    constructor(scene, x, y, in_destinationX, in_destinationY, width = 32, height = 32, type = "") {
        super(scene, x, y, width, height, type)
        this.destinationX = in_destinationX;
        this.destinationY = in_destinationY;
    }
}

export default Passage