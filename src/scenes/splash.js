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
        this.add.bitmapText(width*0.5, height*0.25, 'modernist', 'Trade Union Dissident: Attorney').setTint(0x9A7D5C).setOrigin(0.5)
        const artDecoBackground = this.add.image(width*0.5, height*0.5,'ui_frame').setDisplaySize(width,height)
        // Play button
        this.playButton = this.add.sprite(width * 0.5, height * 0.5, 'ui_button3').setInteractive();
        this.playButton.setDisplaySize(this.playButton.width * 0.75, this.playButton.height*0.75)

        this.playText = this.add.bitmapText(this.playButton.x, this.playButton.y, 'modernist', 'Play').setTint(0x9A7D5C).setOrigin(0.5)

        // Settings button
        this.settingsButton = this.add.image(this.playButton.x, this.playButton.y + this.playButton.displayHeight + 10, 'ui_button2').setInteractive()
        this.settingsButton.setDisplaySize(this.settingsButton.width * 0.75, this.settingsButton.height*0.75)

        this.settingsText = this.add.bitmapText(this.settingsButton.x, this.settingsButton.y, 'modernist', 'Settings').setTint(0x9A7D5C)
            .setOrigin(0.5)

        // Credits button
        this.creditsButton = this.add.image(this.settingsButton.x, this.settingsButton.y + this.settingsButton.displayHeight + 10, 'ui_button1').setInteractive();
        this.creditsButton.setDisplaySize(this.creditsButton.width * 0.75, this.creditsButton.height * 0.75)

        this.creditsText = this.add.bitmapText(this.creditsButton.x, this.creditsButton.y, 'modernist', 'Credits').setTint(0x9A7D5C)
            .setOrigin(0.5)

        this.playButton.on('pointerdown', () => {
            alert('playButton clicked');
        })
        this.creditsButton.on('pointerdown', () => {
            this.scene.start("splash_credits")
        })
        this.settingsButton.on('pointerdown', () => {
            alert('I add some settings (like switching language) later maybe');
        })
    }

}