
export default class bootloader extends Phaser.Scene {
    constructor() {
        super({ key: "bootloader" });
    }

    preload() {
        this.createBars();
        this.load.on(
            "progress",
            function (value) {
                this.progressBar.clear();
                this.progressBar.fillStyle(0xf09937, 1);
                this.progressBar.fillRect(
                    this.cameras.main.width / 4,
                    this.cameras.main.height / 2 - 16,
                    (this.cameras.main.width / 2) * value,
                    16
                );
            },
            this
        );

        this.load.on(
            "complete",
            () => {
                this.scene.start("splash");
            },
            this
        );



        this.load.spritesheet("dungeoncastle", "assets/images/dungeoncastle.png", {frameWidth:32, frameHeight:32});
        this.load.image("landscape", "assets/images/landscape_city37.png");
        this.load.image("ui_frame", "assets/UI/drawing.png");
        this.load.image("ui_button1", "assets/UI/button1.png");
        this.load.image("ui_button2", "assets/UI/button2.png");
        this.load.image("ui_button3", "assets/UI/button3.png");
        this.load.bitmapFont("modernist", "assets/UI/modernist_0.png", "assets/UI/modernist.fnt");
    }
    loadFont(name, url) {
        var newFont = new FontFace(name, `url(${url})`);
        newFont.load().then(function (loaded) {
            document.fonts.add(loaded);
        }).catch(function (error) {
            return error;
            console.log(error);
        });
    }
    createBars() {
        this.loadBar = this.add.graphics();
        this.loadBar.fillStyle(0xca6702, 1);
        this.loadBar.fillRect(
            this.cameras.main.width / 4 - 2,
            this.cameras.main.height / 2 - 18,
            this.cameras.main.width / 2 + 4,
            20
        );
        this.progressBar = this.add.graphics();
    }
}

