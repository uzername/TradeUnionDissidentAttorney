import { DialogAnswer, DialogCompleteStructure, DialogStatement } from "./MyDialogManager"
import { DialogActor } from "./MyDialogManager"
export default class DialogConfig {
    constructor() {
        var dialogActors = [new DialogActor("1", "Attorney"), new DialogActor("2", "NPC_Boss"), new DialogActor(3, "NPC_Secretary")];
        var dialogStatements = [
            new DialogStatement(
            1, "Good morning! You arrived just in time, a Boss has some big assignment for you",
            [new DialogAnswer(1, "Okay, I am going to office of a Boss", function () { return null; }),
             new DialogAnswer(2, "I already have the required information, do not worry", function () { return null; })]
        ), ]
        this.dialogData = new DialogCompleteStructure(dialogActors, dialogStatements);
    }
}
