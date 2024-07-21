import Phaser from "phaser";
export default class Game extends Phaser.Scene {
    constructor() {
        super({ key: "game" });
        this.player = null;
    }
    create() {
        this.width = this.sys.game.config.width;
        this.height = this.sys.game.config.height;
        this.center_width = this.width / 2;
        this.center_height = this.height / 2;
        this.cameras.main.setBackgroundColor(0x62a2bf); //(0x00b140)//(0x62a2bf)
        //this.add.tileSprite(0, 1000, 1024 * 10, 512, "landscape").setOrigin(0.5);
        this.createMap();
        this.cameras.main.setBounds(0, 0, 20920 * 2, 20080 * 2);
        this.physics.world.setBounds(0, 0, 20920 * 2, 20080 * 2);
        this.addPlayer();
        this.cameras.main.startFollow(this.player, true, 0.05, 0.05, 0, 240);
        this.physics.world.enable([this.player]);
        //this.addScore();
        this.loadAudios();
        this.playMusic();
    }
    createMap() {
        // TODO proper map selection
        this.tileMap = this.make.tilemap({
            key: "sceneoffice",
            tileWidth: 32,
            tileHeight: 32,
        });

        console.log(this.tileMap);

        this.tileSet = this.tileMap.addTilesetImage("officetiles");

        this.objectsLayer = this.tileMap.getObjectLayer("objects");

    }
    /*
   We add the player to the game and we add the colliders between the player and the rest of the elements. The starting position of the player is defined on the tilemap.
   */
    addPlayer() {
        this.elements = this.add.group();
        this.coins = this.add.group();

        const playerPosition = this.objectsLayer.objects.find(
            (object) => object.name === "player"
        );
        this.player = new Player(this, playerPosition.x, playerPosition.y, 0);

    }

    loadAudios() {
    
    }

    playMusic(theme = "game") {

    }
}