import { DialogAnswer, DialogCompleteStructure, DialogStatement } from "./MyDialogManager"
import { DialogActor } from "./MyDialogManager"
export default class DialogConfig {
    constructor() {
        var dialogActors = [new DialogActor("1", "Attorney"), new DialogActor("2", "NPC_Boss"), new DialogActor(3, "NPC_Secretary")];
        this.currentPlayer = null;
        this.currentNPC = null;
        var dialogStatements = [
            // secretary dialogs
            new DialogStatement(
            1, "Good morning! You arrived just in time, a Boss has some big assignment for you",
            [new DialogAnswer(1, "Okay, I am going to office of a Boss"),
             new DialogAnswer(2, "I already have the required information, do not worry")]
            ),
            new DialogStatement(
                2, "Have you seen new decree? It says that investigator should carry weapons for self-defence",
                [new DialogAnswer(1, "I go now to a store room and get that equipment."),
                    new DialogAnswer(2, "Those are pretty bulky to carry around")]
            ),
            // boss dialogs
            new DialogStatement(3,
                "Good morning.We received many appeals for help from those who were detained for obstructing the activities of trade unions.",
                [new DialogAnswer(1, "Perhaps they were detained right, the new government of Diamond city-state has many opponents: both external and internal"),
                new DialogAnswer(2, "Diamond city government is too preoccupied with finding traitors, they should follow justice code")])
        ]
        this.dialogData = new DialogCompleteStructure(dialogActors, dialogStatements);
    }
    // used to resolve beginning of dialog. Essentially an entry point of dialog manager
    findFirstStatement(playerGameObj, NPCgameObj, chosenDialogStatementIndx) {
        this.currentNPC = NPCgameObj;
        this.currentPlayer = playerGameObj;
        if (NPCgameObj.name == "NPC_Secretary") {
            if (chosenDialogStatementIndx == null) {
                return 1;
            }
        }
    }
    // used to choose next statement. Called when player chooses some dialog option
    // returns next statement
    handleDialogAnswer(in_DialogStatementId, in_DialogAnswerId) {
        switch (in_DialogStatementId) {
            case 1: {
                switch (in_DialogAnswerId) {
                    case 1: {
                        return null;
                        break;
                    }
                    case 2: {
                        return null;
                        break;
                    }
                    default: {
                        // not found
                    }
                }
            }
            default: {
                // not found
            }
        }
    }
}
