export default class SettingsScene extends Phaser.Scene {
	constructor() {
        super({ key: "SettingsScene" });
    }
    create() {
        this.width = this.sys.game.config.width;
        this.height = this.sys.game.config.height;
        this.center_width = this.width / 2;
        this.center_height = this.height / 2;

        this.cameras.main.setBackgroundColor(0x000000);
        this.showScreen();
    }
    showScreen() {
        const { width, height } = this.scale
        this.add.bitmapText(width * 0.5, height * 0.10, 'modernist', 'Settings').setTint(0x9A7D5C).setOrigin(0.5);
        this.add.text(10, height * 0.20,
            'LANGUAGE OF APPLICATION:', { fontFamily: 'Century Gothic', fontSize: 25, color: '#d08025' })
        this.add.text(10, height * 0.25,
            'ENGLISH', { fontFamily: 'Century Gothic', fontSize: 25, color: '#d08025' })
        this.add.text(10, height * 0.30,
            'RUSSIAN', { fontFamily: 'Century Gothic', fontSize: 25, color: '#d08025' })
        this.add.text(10, height * 0.35,
            'UKRAINIAN', { fontFamily: 'Century Gothic', fontSize: 25, color: '#d08025' })
        this.backButton = this.add.sprite(width * 0.5, height * 0.9, 'ui_button3').setInteractive();
        this.backButton.setDisplaySize(this.backButton.width * 0.75, this.backButton.height * 0.75);
        this.backText = this.add.bitmapText(this.backButton.x, this.backButton.y, 'modernist', 'Back').setTint(0x9A7D5C).setOrigin(0.5)
        this.backButton.on('pointerdown', () => {
            this.scene.start("splash")
        })
    }
}