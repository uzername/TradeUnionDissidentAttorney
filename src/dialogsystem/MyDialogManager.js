// here will be a dialog manager - a subclass of scene plugin
export default class DialogManagerPlugin extends Phaser.Plugins.ScenePlugin {
    constructor(scene, pluginManager) {
        super(scene, pluginManager);
        
    }
    // setup config
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
     * @param {function} in_processFunction - a function that will be called to get ID of next dialog statement. 
     * In general it may consist of single return but in more complicated variants it may utilize context of actors. 
     * It uses current dialog answer id and optionally contexts - of player and actor - and returns next id of statement
     */
    constructor(in_id, in_stringToDisplay, in_processFunction) {
        this.id = in_id
        this.stringToDisplay = in_stringToDisplay
        this.processFunction = in_processFunction
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
    constructor() {
        this.listActors = [];
        this.listStatements = [];
    }
    constructor(in_listActors, in_listStatements) {
        this.listActors = in_listActors;
        this.listStatements = in_listStatements;
    }
}