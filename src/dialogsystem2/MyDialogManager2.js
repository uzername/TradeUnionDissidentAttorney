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
            parentElement.appendChild(this.dialogDiv)
        }
    }
    /**
     * open a chat window with such options:
     * @param {String} NPCTalkStatement String that shows statement of NPC
     * @param {Array<String>} NPCTalkVariants  list of strings that indicate possible answers
     */
     
    InitiateTalk(NPCTalkStatement, NPCTalkVariants ) {
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
        this.wasDialogOpened = true;
        //console.log(NPCTalkStatement, NPCTalkVariants, geometryConfigObject);
    }
    /**
     * close chat window
     */
    UnInitiateTalk() {
        this.dialogDiv.style.display = "none";
        this.wasDialogOpened = false;
    }
}