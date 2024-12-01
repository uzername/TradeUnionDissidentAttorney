/*
 * it is console in office
 */
export default class PROP_ConOffice extends Phaser.Physics.Arcade.Image {
    constructor(scene, x, y, type = "right") {
        super(scene, x, y, "console1");
        this.name = "PROP_ConOffice";
        this.setOrigin(0.5, 1);
        this.scene.physics.add.existing(this);
        this.scene.physics.world.enable(this);
        this.body.setAllowGravity(false);
        this.scene.add.existing(this);
        this.direction = type === "right" ? 1 : -1;
        this.init();
    }
    init() {

    }
    getTalkStatement() {
        return "This is Console in the office";
    }
    getTalkOptions() {
        return ["Yes, okay", "No way!", "All right, I just shut it down"];
    }
}