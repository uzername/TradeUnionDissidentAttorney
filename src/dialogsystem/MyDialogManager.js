// here will be a dialog manager - a subclass of scene plugin
export default class DialogManagerPlugin extends Phaser.Plugins.ScenePlugin {
    constructor(scene, pluginManager) {
        super(scene, pluginManager);
        console.log("created Dialog Manager");
    }
    MyInit(in_parentElement,in_data) {
        console.log("init of Dialog Manager");
        this.setupUI(in_parentElement);
        this.setupParameters(in_data);
    }
    setupUI(parentElement) {
        this.dialogId = "div-dialog"
        var dialogElement = document.getElementById("div-dialog");
        if (dialogElement != null) {
            this.dialogDiv = dialogElement;
        } else {
            this.dialogDiv = document.createElement('div');
            this.dialogDiv.id = this.dialogId;
            this.dialogDiv.style.display = "none";
            parentElement.appendChild(this.dialogDiv)
        }
    }
    // setup config - actors, answers and such
    setupParameters(in_parameterObject) {
        this.parameterObject = in_parameterObject;
    }
}
/*
* participant of dialog - player or any NPC
* id, name, context are the properties
*/
export class DialogActor {
    constructor(in_id, in_Name) {
        this.id = in_id;
        this.name = in_Name;
        // what is a quest main character performs with this NPC. Dialog resolving depends on it. 
        // it's like - character's memory about player's actions. Keep in mind that it relates to player as well. How odd
        this.questStage = "NONE";
    }
    /**
     * setup context related to this actor - any other data that may be used for dialog resolving
     * @param {any} in_context
     */
    assignContext(in_context) {
        this.context = in_context;
    }
}
/*
* represents answer to dialog statement - player chooses it from list
*/
export class DialogAnswer {
    /**
     * 
     * @param {int} in_id - ID of this answer for dialog
     * @param {string} in_stringToDisplay - how this answer will be shown in list
     */
    constructor(in_id, in_stringToDisplay) {
        this.id = in_id
        this.stringToDisplay = in_stringToDisplay
    }
}
/*
* a single statement made by actor (NPC or player if it is monologue) as well as set of options for it
*/
export class DialogStatement {
    /**
     * 
     * @param {int} in_id - ID of this dialog statement
     * @param {string} in_stringToDisplay - text of this dialog statement
     * @param {list} in_listAnswers - list of all answers
     */
    constructor(in_id, in_stringToDisplay, in_listAnswers) {
        this.id = in_id;
        this.stringToDisplay = in_stringToDisplay;
        this.listAnswers = in_listAnswers;
    }
}
export class DialogCompleteStructure {
    constructor(in_listActors, in_listStatements) {
        this.listActors = in_listActors;
        this.listStatements = in_listStatements;
    }
}