/// lets have a dialog plugin that just has SAY functionality but what to say - let that Character or Player decide
export default class DialogManagerPlugin2 extends Phaser.Plugins.ScenePlugin {
    constructor(scene, pluginManager) {
        super(scene, pluginManager);
        console.log("created Dialog Manager 2");
    }
    MyInit(in_parentElement, in_data) {
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
}