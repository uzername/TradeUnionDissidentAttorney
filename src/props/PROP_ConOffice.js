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
        var initializedStrings = new StringsTraslation();
        if (initializedNoosphere.AllCharacterInfo.PROP_ConOffice.StateOfDialog == ConOffice_States.Initial) {
            return initializedStrings.lines[initializedStrings.currentLanguage]['ConOffice_Initial'];
        } else if (initializedNoosphere.AllCharacterInfo.PROP_ConOffice.StateOfDialog == ConOffice_States.GunManual) {
            return initializedStrings.lines[initializedStrings.currentLanguage]['ConOffice_GunHandlingText'];
        } else if (initializedNoosphere.AllCharacterInfo.PROP_ConOffice.StateOfDialog == ConOffice_States.HistoryManual) {
            return initializedStrings.lines[initializedStrings.currentLanguage]['ConOffice_HistoryReviewText'];
        } else if (initializedNoosphere.AllCharacterInfo.PROP_ConOffice.StateOfDialog == ConOffice_States.LawsManual) {
            return initializedStrings.lines[initializedStrings.currentLanguage]['ConOffice_LawsHandbookText'];
        }
    }
    getTalkOptions() {
        var initializedNoosphere = new OmniStateOfMind();
        var initializedStrings = new StringsTraslation();
        if (initializedNoosphere.AllCharacterInfo.PROP_ConOffice.StateOfDialog == ConOffice_States.Initial) {
            
            return [
                initializedStrings.lines[initializedStrings.currentLanguage]['ConOffice_GunHandling'],
                initializedStrings.lines[initializedStrings.currentLanguage]['ConOffice_HistoryReview'],
                initializedStrings.lines[initializedStrings.currentLanguage]['ConOffice_LawsHandbook'],
                initializedStrings.lines[initializedStrings.currentLanguage]['ConOffice_CommandShutdown']
            ];
        } else {
            return [
                initializedStrings.lines[initializedStrings.currentLanguage]['ConOffice_CommandBack'],
                initializedStrings.lines[initializedStrings.currentLanguage]['ConOffice_CommandShutdown']
            ];
        }
    }
    getTalkFunctors() {
        var thisthis = this;
        var initializedNoosphere = new OmniStateOfMind();
        if (initializedNoosphere.AllCharacterInfo.PROP_ConOffice.StateOfDialog == ConOffice_States.Initial) {
            return [
                function () {
                    initializedNoosphere.AllCharacterInfo.PROP_ConOffice.StateOfDialog = ConOffice_States.GunManual;
                    var newNPCTalkStatement = thisthis.getTalkStatement();
                    var newNPCTalkVariants = thisthis.getTalkOptions();
                    var newNPCTalkFunctions = thisthis.getTalkFunctors();
                    thisthis.scene.MyDialogManagerPlugin2Inst.UpdateTalk(newNPCTalkStatement, newNPCTalkVariants, newNPCTalkFunctions);
                },
                function () {
                    initializedNoosphere.AllCharacterInfo.PROP_ConOffice.StateOfDialog = ConOffice_States.HistoryManual;
                    var newNPCTalkStatement = thisthis.getTalkStatement();
                    var newNPCTalkVariants = thisthis.getTalkOptions();
                    var newNPCTalkFunctions = thisthis.getTalkFunctors();
                    thisthis.scene.MyDialogManagerPlugin2Inst.UpdateTalk(newNPCTalkStatement, newNPCTalkVariants, newNPCTalkFunctions);
                },
                function () {
                    initializedNoosphere.AllCharacterInfo.PROP_ConOffice.StateOfDialog = ConOffice_States.LawsManual;
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