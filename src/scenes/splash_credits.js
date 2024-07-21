export default class splash_credits extends Phaser.Scene {
    constructor() {
        super({ key: "splash_credits" });
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
        this.add.bitmapText(width * 0.5, height * 0.10, 'modernist', 'Credits').setTint(0x9A7D5C).setOrigin(0.5)
        this.add.bitmapText(width * 0.5, height * 0.20, 'modernist', 'Trade Union Dissident: Attorney').setTint(0x9A7D5C).setOrigin(0.5)
        this.add.text(10, height * 0.30,
        'Programmed by JovanM. Initially it was inspired by Mykyta as Unity project, but later he handed me some resources and allowed to split project. I decided to create it on PhaserJS. \n ' +
            'Some resources were gathered from Internet, some were made for original project, some I created myself, some had to adapt for project: \n' +
            '- Main character art made for original project by other artists, I added animations \n' +
            '- Some environment was taken from Celianna, brullov (itch.io) and Dungeon Tileset by inr-1ko.itch.io, something I designed \n' +
            '- For UI I took inspiration from VectorStock site and designed buttons in Inkscape. Captions font is Modernist, I found it somewhere \n '+
            '- Characters were taken from various authors (brunopixels, ...)', { fontFamily: 'Century Gothic', fontSize: 25, color: '#d08025' }).setWordWrapWidth(this.width - 10);
        this.backButton = this.add.sprite(width * 0.5, height * 0.9, 'ui_button3').setInteractive();
        this.backButton.setDisplaySize(this.backButton.width * 0.75, this.backButton.height * 0.75);
        this.backText = this.add.bitmapText(this.backButton.x, this.backButton.y, 'modernist', 'Back').setTint(0x9A7D5C).setOrigin(0.5)
        this.backButton.on('pointerdown', () => {
            this.scene.start("splash")
        })
    }
}