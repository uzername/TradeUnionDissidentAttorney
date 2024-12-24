/// lets have a dialog plugin that just has SAY functionality but what to say - let that Character or Player decide
export default class DialogManagerPlugin2 extends Phaser.Plugins.ScenePlugin {
    constructor(scene, pluginManager) {
        super(scene, pluginManager);
        this.wasDialogOpened = false;
        console.log("created Dialog Manager 2");
    }
    MyInit(in_parentElement) {
        console.log("init of Dialog Manager");
        this.setupUI(in_parentElement);
    }
    setupUI(parentElement) {
        this.dialogId = "div-dialog"
        this.dialogId_action = "div-dialog-action";
        this.dialogClass_option = "div-dialog-option"
        var dialogElement = document.getElementById("div-dialog");
        if (dialogElement != null) {
            this.dialogDiv = dialogElement;
        } else {
            this.dialogDiv = document.createElement('div');
            this.dialogDiv.id = this.dialogId;
            this.dialogDiv.style.display = "none";
            this.dialogDiv.style.position = "absolute";
            this.dialogDiv.style.bottom = "0px";
            this.dialogDiv.style.border = "thick solid goldenrod"
            this.dialogDiv.style.padding = "2px";
            this.dialogDiv.style.backgroundColor = "black";
            this.dialogDiv.style.fontFamily = "Century Gothic";
            this.dialogDiv.style.fontSize = "25px";
            parentElement.appendChild(this.dialogDiv)
        }
    }
    /**
     * open a chat window with such options:
     * @param {String} NPCTalkStatement String that shows statement of NPC
     * @param {Array<String>} NPCTalkVariants  list of strings that indicate possible answers
     * @param {String} NPCName name of character to use
     * @param {String} NPCTalkAction word that describes how does this character brings information to us
     * @param {Array<Function>} ListOfActions list of callbacks for NPCTalkVariants
     */
     
    InitiateTalk(NPCTalkStatement, NPCTalkVariants, NPCName, NPCTalkAction, ListOfActions) {
        //an object with such fields: CanvasWidth, CanvasHeight, CanvasMarginLeft, CanvasMarginTop. I use it to calculate position of dialog.
        var geometryConfigObject = {
            CanvasWidth: this.game.canvas.style.width,
            CanvasHeight: this.game.canvas.style.height,
            CanvasMarginLeft: parseInt(this.game.canvas.style.marginLeft),
            CanvasMarginTop: parseInt(this.game.canvas.style.marginTop)
        }
        this.dialogDiv.style.display = "block";
        this.dialogDiv.style.width = geometryConfigObject.CanvasWidth;
        this.dialogDiv.style.height = "50%";
        this.dialogDiv.style.left = geometryConfigObject.marginLeft + "px";
        var dialogDivStatement = document.createElement('div');
        dialogDivStatement.style.width = "100%";
        dialogDivStatement.textContent = NPCName + " " + NPCTalkAction +": ";
        var dialogDivStatement2 = document.createElement('div');
        dialogDivStatement2.style.width = "100%";
        dialogDivStatement2.style.marginBottom = "1em";
        dialogDivStatement2.textContent = NPCTalkStatement;
        
        this.dialogDiv.appendChild(dialogDivStatement);
        this.dialogDiv.appendChild(dialogDivStatement2);
        var indx = 0;
        for (var itemTalkVariant in NPCTalkVariants) {
            var dialogDivStatement3 = document.createElement('div');
            dialogDivStatement3.style.width = "100%";
            dialogDivStatement3.style.cursor = "pointer";
            dialogDivStatement3.style.marginBottom = "0.5em";
            dialogDivStatement3.textContent = " - " + NPCTalkVariants[itemTalkVariant];
            if (ListOfActions.count < indx) {
                dialogDivStatement3.onclick = ListOfActions[indx];
            }
            this.dialogDiv.appendChild(dialogDivStatement3);
            indx++;
        }

        var dialogDivInstructions = document.createElement('div');
        dialogDivInstructions.style.position = "absolute";
        dialogDivInstructions.style.left = "0";
        dialogDivInstructions.style.right = "0";
        dialogDivInstructions.style.bottom = "0";
        dialogDivInstructions.style.textAlign = "right";
        dialogDivInstructions.textContent = "`E` to close";
        this.dialogDiv.appendChild(dialogDivInstructions);
        this.wasDialogOpened = true;
        
        
    }
    /**
     * close chat window
     */
    UnInitiateTalk() {
        this.dialogDiv.innerHTML = '';
        this.dialogDiv.style.display = "none";
        this.wasDialogOpened = false;
    }
}