import StringsTraslation from "../strings.js"
import { OmniStateOfMind, ConOffice_States } from "../noosphere_nexus.js"
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
        var initializedNoosphere = new OmniStateOfMind();
        if (initializedNoosphere.AllCharacterInfo.PROP_ConOffice.StateOfDialog == ConOffice_States.Initial) {
            return "This is Console in the office. What do you want to know about?";
        } else if (initializedNoosphere.AllCharacterInfo.PROP_ConOffice.StateOfDialog == ConOffice_States.GunManual) {
            return "This is how to safely handle your weapon...";
        } else if (initializedNoosphere.AllCharacterInfo.PROP_ConOffice.StateOfDialog == ConOffice_States.HistoryManual) {
            return "This is what happened in the world...";
        } else if (initializedNoosphere.AllCharacterInfo.PROP_ConOffice.StateOfDialog == ConOffice_States.LawsManual) {
            return "Every person who works in Legal domain should know laws...";
        }
    }
    getTalkOptions() {
        var initializedNoosphere = new OmniStateOfMind();
        if (initializedNoosphere.AllCharacterInfo.PROP_ConOffice.StateOfDialog == ConOffice_States.Initial) {
            return ["Gun Handling Manual", "History Review", "Laws Handbook", "All right, I just shut it down"];
        } else {
            return ["Get Back", "Turn Off"];
        }
    }
    getTalkFunctors() {
        var thisthis = this;
        var initializedNoosphere = new OmniStateOfMind();
        if (initializedNoosphere.AllCharacterInfo.PROP_ConOffice.StateOfDialog == ConOffice_States.Initial) {
            return [
                function () {
                    console.log("Option 1 Console");
                    initializedNoosphere.AllCharacterInfo.PROP_ConOffice.StateOfDialog = ConOffice_States.GunManual;
                    var newNPCTalkStatement = thisthis.getTalkStatement();
                    var newNPCTalkVariants = thisthis.getTalkOptions();
                    var newNPCTalkFunctions = thisthis.getTalkFunctors();
                    thisthis.scene.MyDialogManagerPlugin2Inst.UpdateTalk(newNPCTalkStatement, newNPCTalkVariants, newNPCTalkFunctions);
                },
                function () {
                    initializedNoosphere.AllCharacterInfo.PROP_ConOffice.StateOfDialog = ConOffice_States.HistoryManual;
                    console.log("Option 2 Console");
                    thisthis.scene.MyDialogManagerPlugin2Inst.UnInitiateTalk();
                },
                function () {
                    initializedNoosphere.AllCharacterInfo.PROP_ConOffice.StateOfDialog = ConOffice_States.LawsManual;
                    thisthis.scene.MyDialogManagerPlugin2Inst.UnInitiateTalk();
                },
                function () {
                    // bye bye
                    initializedNoosphere.AllCharacterInfo.PROP_ConOffice.StateOfDialog = ConOffice_States.Initial;
                    thisthis.scene.MyDialogManagerPlugin2Inst.UnInitiateTalk();
                }
            ]
        } else {
            return [
                function () {
                    // back to first level of interaction
                    initializedNoosphere.AllCharacterInfo.PROP_ConOffice.StateOfDialog = ConOffice_States.Initial;
                    var newNPCTalkStatement = thisthis.getTalkStatement();
                    var newNPCTalkVariants = thisthis.getTalkOptions();
                    var newNPCTalkFunctions = thisthis.getTalkFunctors();
                    thisthis.scene.MyDialogManagerPlugin2Inst.UpdateTalk(newNPCTalkStatement, newNPCTalkVariants, newNPCTalkFunctions);
                },
                function () {
                    // bye bye
                    initializedNoosphere.AllCharacterInfo.PROP_ConOffice.StateOfDialog = ConOffice_States.Initial;
                    thisthis.scene.MyDialogManagerPlugin2Inst.UnInitiateTalk();
                }
            ]
        }
    }
    getTalkAction() {
        var initializedStrings = new StringsTraslation();
        return initializedStrings.lines[initializedStrings.currentLanguage]['Reaction_Display'];
    }
}