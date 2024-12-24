import StringsTraslation from "../strings.js"
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
    getTalkFunctors() {
        var thisthis = this;
        return [
            function () {
                console.log("Option 1 Console");
                thisthis.scene.MyDialogManagerPlugin2Inst.UnInitiateTalk();
            },
            function () {
                console.log("Option 2 Console");
                thisthis.scene.MyDialogManagerPlugin2Inst.UnInitiateTalk();
            },
            function () {
                console.log("Option 3 Console");
                thisthis.scene.MyDialogManagerPlugin2Inst.UnInitiateTalk();
            }
        ]
    }
    getTalkAction() {
        var initializedStrings = new StringsTraslation();
        return initializedStrings.lines[initializedStrings.currentLanguage]['Reaction_Display'];
    }
}