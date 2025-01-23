import StringsTraslation from "../strings.js"
import { OmniStateOfMind, NPCSecretary_States } from "../noosphere_nexus.js"
/*
* it sort of duplicates NPC_Boss but it is secretary
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
        var initializedNoosphere = new OmniStateOfMind();
        var initializedStrings = new StringsTraslation();
        if (initializedNoosphere.AllCharacterInfo.NPC_Secretary.StateOfDialog == NPCSecretary_States.Initial) {
            return initializedStrings.lines[initializedStrings.currentLanguage]['Secretary_Intro'];
        } else if (initializedNoosphere.AllCharacterInfo.NPC_Secretary.StateOfDialog == NPCSecretary_States.SmallTalkE) {
            return initializedStrings.lines[initializedStrings.currentLanguage]['Secretary_A1WhatAreE'];
        }
        
    }
    getTalkOptions() {
        var initializedNoosphere = new OmniStateOfMind();
        var initializedStrings = new StringsTraslation();
        if (initializedNoosphere.AllCharacterInfo.NPC_Secretary.StateOfDialog == NPCSecretary_States.Initial) {
            return [
                initializedStrings.lines[initializedStrings.currentLanguage]['Secretary_Q1WhatAreE'],
                initializedStrings.lines[initializedStrings.currentLanguage]['Secretary_Q1OnMyWay'],
                initializedStrings.lines[initializedStrings.currentLanguage]['Secretary_Q1GoodBye']
            ]
        } else if (initializedNoosphere.AllCharacterInfo.NPC_Secretary.StateOfDialog == NPCSecretary_States.SmallTalkE) {
            return [
                initializedStrings.lines[initializedStrings.currentLanguage]['Secretary_Q1OnMyWay'],
                initializedStrings.lines[initializedStrings.currentLanguage]['Secretary_Q1GoodBye']
            ];
        }
    }
    getTalkFunctors() {
        var thisthis = this;
        var initializedNoosphere = new OmniStateOfMind();
        if (initializedNoosphere.AllCharacterInfo.NPC_Secretary.StateOfDialog == NPCSecretary_States.Initial) {
            return [
                function () {
                    initializedNoosphere.AllCharacterInfo.NPC_Secretary.StateOfDialog = NPCSecretary_States.SmallTalkE;
                    var newNPCTalkStatement = thisthis.getTalkStatement();
                    var newNPCTalkVariants = thisthis.getTalkOptions();
                    var newNPCTalkFunctions = thisthis.getTalkFunctors();
                    thisthis.scene.MyDialogManagerPlugin2Inst.UpdateTalk(newNPCTalkStatement, newNPCTalkVariants, newNPCTalkFunctions);
                },
                function () {
                    // bye bye
                    initializedNoosphere.AllCharacterInfo.PROP_ConOffice.StateOfDialog = ConOffice_States.Initial;
                    thisthis.scene.MyDialogManagerPlugin2Inst.UnInitiateTalk();
                },
                function () {
                    // bye bye
                    initializedNoosphere.AllCharacterInfo.PROP_ConOffice.StateOfDialog = ConOffice_States.Initial;
                    thisthis.scene.MyDialogManagerPlugin2Inst.UnInitiateTalk();
                }
            ]
        } else if (initializedNoosphere.AllCharacterInfo.NPC_Secretary.StateOfDialog == NPCSecretary_States.SmallTalkE) {
            return [
                function () {
                    // bye bye
                    initializedNoosphere.AllCharacterInfo.PROP_ConOffice.StateOfDialog = ConOffice_States.Initial;
                    thisthis.scene.MyDialogManagerPlugin2Inst.UnInitiateTalk();
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
        return initializedStrings.lines[initializedStrings.currentLanguage]['Reaction_Say'];
    }
}