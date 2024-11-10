/*
* it sort of duplicates NPC_Boss
*/
export default class NPC_Secretary extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, type = "right") {
        super(scene, x, y, "NPC_Secretary");
        this.name = "NPC_Secretary";
        this.setOrigin(0.5, 1);
        this.scene.physics.add.existing(this);
        this.scene.physics.world.enable(this);
        this.body.setAllowGravity(true);
        this.scene.add.existing(this);
        this.direction = type === "right" ? 1 : -1;
        console.log(this.direction);
        this.init();
    }
    /*
    Inits the animations for the bat and starts the movement. We also add a listener for the `animationcomplete` event.
    */
    init() {
        this.body.setSize(40, 60);
        this.body.setOffset(11, 4);
        this.scene.anims.create({
            key: "NPC_Secretary_IdleStanding",
            frames: this.scene.anims.generateFrameNumbers("Secretary_IdleStanding", {
                start: 0,
                end: 4,
            }),
            frameRate: 5,
            repeat: -1,
        });

       
        this.anims.play("NPC_Secretary_IdleStanding", true);
        this.flipX = this.direction < 0;
        this.on("animationcomplete", this.animationComplete, this);
    }
    animationComplete(animation, frame) {
        
    }
    getTalkStatement() {
        return "Hello, I am Secretary";
    }
    getTalkOptions() {
        return ["Yes, okay", "No way!", "All right, I just leave"];
    }
}