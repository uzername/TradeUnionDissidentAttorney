import StringsTraslation from "../strings.js"
export default class NPC_Boss extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, type = "right") {
        super(scene, x, y, "NPC_Boss");
        this.name = "NPC_Boss";
        this.setOrigin(0.5, 1);
        this.scene.physics.add.existing(this);
        this.scene.physics.world.enable(this);
        this.body.setAllowGravity(true);
        this.scene.add.existing(this);
        this.direction = type === "right" ? 1 : -1;
        this.init();
    }
    /*
    Inits the animations for the bat and starts the movement. We also add a listener for the `animationcomplete` event.
    */
    init() {
        this.body.setSize(40, 55);
        this.body.setOffset(4, 8);
        this.scene.anims.create({
            key: "NPC_Boss_IdleSitting",
            frames: this.scene.anims.generateFrameNumbers("Boss_IdleSitting", {
                start: 0,
                end: 4,
            }),
            frameRate: 5,
            repeat: -1,
        });

        this.scene.anims.create({
            key: "NPC_Boss_TalkSitting",
            frames: this.scene.anims.generateFrameNumbers("Boss_TalkSitting", {
                start: 0,
                end: 3,
            }),
            frameRate: 4,
            repeat:1
        });

        this.anims.play("NPC_Boss_IdleSitting", true);
        this.flipX = this.direction < 0;
        this.on("animationcomplete", this.animationComplete, this);
    }
    animationComplete(animation, frame) {
        if (animation.key === "NPC_Boss_TalkSitting") {
            this.anims.play("NPC_Boss_IdleSitting", true);
        }
    }

    getTalkStatement() {
        return "Hello, I am Boss";
    }
    getTalkOptions() {
        return ["Understandable, have a good day", "Pleased to meet you", "All right, I just leave"];
    }
    // return functional callbacks on what to do when player chooses some option of dialog. Returns list of functions. Things are getting overcomplicated
    // NPC has scene, so I can potentially access DialogManager in there
    // it should continue getTalkOptions, but function should return only one result not multiple, so I request second pass
    getTalkFunctors() {
        return [
            function () {
                console.log("Option 1 boss talk");
            },
            function () {
                console.log("Option 2 boss talk");
            },
            function () {
                console.log("Option 3 boss talk");
            }
        ]
    }
    getTalkAction() {
        var initializedStrings = new StringsTraslation();
        return initializedStrings.lines[initializedStrings.currentLanguage]['Reaction_Say'];
    }
}