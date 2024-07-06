export default class splash extends Phaser.Scene {
    constructor() {
        super({ key: "splash" });
    }
    create() {
        this.width = this.sys.game.config.width;
        this.height = this.sys.game.config.height;
        this.center_width = this.width / 2;
        this.center_height = this.height / 2;

        this.cameras.main.setBackgroundColor(0x000000);
        //this.time.delayedCall(1000, () => this.showInstructions(), null, this);

        //this.input.keyboard.on("keydown-SPACE", () => this.startGame(), this);
        //this.input.keyboard.on("keydown-ENTER", () => this.startGame(), this);
        
        this.showScreen();
        
    }

    showScreen() {
        const { width, height } = this.scale
        this.add.bitmapText(width*0.5, height*0.25, 'modernist', 'Trade Union Dissident: Attorney').setTint(0x9A7D5C)
            .setOrigin(0.5)
        const artDecoBackground = this.add.image(width*0.5, height*0.5,'ui_frame').setDisplaySize(width,height)
        // Play button
        const playButton = this.add.image(width * 0.5, height * 0.5, 'ui_button3')
            playButton.setDisplaySize(playButton.width*0.75, playButton.height*0.75)

        this.add.bitmapText(playButton.x, playButton.y, 'modernist', 'Play').setTint(0x9A7D5C).setOrigin(0.5)

        // Settings button
        const settingsButton = this.add.image(playButton.x, playButton.y + playButton.displayHeight + 10, 'ui_button2')
            settingsButton.setDisplaySize(settingsButton.width*0.75, settingsButton.height*0.75)

        this.add.bitmapText(settingsButton.x, settingsButton.y, 'modernist', 'Settings').setTint(0x9A7D5C)
            .setOrigin(0.5)

        // Credits button
        const creditsButton = this.add.image(settingsButton.x, settingsButton.y + settingsButton.displayHeight + 10, 'ui_button1')
            creditsButton.setDisplaySize(creditsButton.width * 0.75, creditsButton.height * 0.75)

        this.add.bitmapText(creditsButton.x, creditsButton.y, 'modernist', 'Credits').setTint(0x9A7D5C)
            .setOrigin(0.5)
    }

}