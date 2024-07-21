
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

        // 6 images
        this.load.spritesheet("attorney_idle", "assets/sprites/attorney_idle.png", {
            frameWidth: 64,
            frameHeight: 64,
        });
        // 2 images
        this.load.spritesheet("attorney_idleinit", "assets/sprites/attorney_idleinit.png", {
            frameWidth: 64,
            frameHeight: 64,
        });
        //4 images
        this.load.spritesheet("attorney_jump", "assets/sprites/attorney_jump.png", {
            frameWidth: 64,
            frameHeight: 64,
        });
        //10 images
        this.load.spritesheet("attorney_run", "assets/sprites/attorney_run.png", {
            frameWidth: 64,
            frameHeight: 64,
        });
        // 7 images
        this.load.spritesheet("attorney_shootingpistol", "assets/sprites/attorney_shootingpistol.png", {
            frameWidth: 64,
            frameHeight: 64,
        });
        // 8 images
        this.load.spritesheet("attorney_walk", "assets/sprites/attorney_walk.png", {
            frameWidth: 64,
            frameHeight: 64,
        });

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

