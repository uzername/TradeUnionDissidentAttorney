import Passage from "../passage";
import Player from "../player";
import Phaser from "phaser";
import NPC_Boss from "../characters/NPC_Boss";
import MyCollider from "../MyCollider";
import NPC_Secretary from "../characters/NPC_Secretary";
import DialogConfig from "../dialogsystem/dialog_config"
export default class Game extends Phaser.Scene {
    constructor() {
        super({ key: "game" });
        this.player = null;
        this.passageWays = [];
    }
    create() {
        this.width = this.sys.game.config.width;
        this.height = this.sys.game.config.height;
        this.center_width = this.width / 2;
        this.center_height = this.height / 2;
        this.cameras.main.setBackgroundColor(0x62a2bf); //(0x00b140)//(0x62a2bf)
        //this.add.tileSprite(0, 1000, 1024 * 10, 512, "landscape").setOrigin(0.5);
        this.createMap();
        this.cameras.main.zoom = 2;
        this.game.scale.setZoom(2);
        this.cameras.main.setBounds(0, 0, 20920 * 2, 20080 * 2);
        this.physics.world.setBounds(0, 0, 20920 * 2, 20080 * 2);
        this.addPlayer();
        this.cameras.main.startFollow(this.player, true, 1, 0.05, 0, 0);        
        this.physics.world.enable([this.player]);
        //this.addScore();

        this.currentDialogSetting = new DialogConfig();
        console.log(this.MyDialogManagerInst);
        var game_topmostcontainer = document.getElementById("game-container");
        this.MyDialogManagerInst.MyInit(game_topmostcontainer,this.currentDialogSetting);

        this.loadAudios();
        this.playMusic();
    }
    createMap() {
        this.tileMap = this.make.tilemap({
            key: "sceneoffice",
            tileWidth: 32,
            tileHeight: 32,
        });

        console.log(this.tileMap);


        this.tileSet = this.tileMap.addTilesetImage("officetiles");
        this.backLayer = this.tileMap.createLayer(
            "back",
            this.tileSet
        );
        this.decorLayer = this.tileMap.createLayer(
            "decor",
            this.tileSet
        );
        this.platformLayer = this.tileMap.createLayer(
            "walls",
            this.tileSet
        );
        this.stairsLayer = this.tileMap.createLayer(
            "stairs",
            this.tileSet
        );
        /*
        this.platformLayer.setCollisionByProperty({
            collide: true
        });
        this.platformLayer.setCollisionByExclusion([-1]);
        */
        this.objectsLayer = this.tileMap.getObjectLayer("objects");
        this.colliderLayer = this.tileMap.getObjectLayer("colliders");
        this.turnGroup = this.add.group();
        this.passageGroup = this.add.group();
        this.collidersGroup = this.add.group();

        this.FriendsGroup = this.add.group();
        this.addFunctionalObjects();
        this.addColliders();
    }
    addFunctionalObjects() {
        this.objectsLayer.objects.forEach((object) => {
            if (object.name.startsWith("NPC")) {
                var facing = "left";
                var facing_v = object.properties[0].value;
                if (facing_v != null) {
                    facing = facing_v;
                }
                if (object.name === "NPC_Boss") {
                    var NPC_BossInst = new NPC_Boss(this, object.x, object.y, facing);
                    this.FriendsGroup.add(NPC_BossInst);
                } else if (object.name === "NPC_Secretary") {
                    var NPC_SecretaryInst = new NPC_Secretary(this, object.x, object.y, facing);
                    this.FriendsGroup.add(NPC_SecretaryInst);
                }
            } else if (object.name === "turn") {
                this.turnGroup.add(new Turn(this, object.x, object.y));
            } else if (object.name === "passage") {
                // TODO add checks here!
                var dest = object.properties[0].value;
                var destX = -777;
                var destY = -777;
                if (dest != null) {
                    this.objectsLayer.objects.forEach((object2) => { if (object2.name === dest) { destX = object2.x; destY = object2.y; } })
                }
                if ((destX != -777) && (destY != -777)) {
                    this.passageGroup.add(new Passage(this, object.x, object.y, destX, destY, object.width, object.height));
                }
                
            }
        });
    }
    /*
    * add coliders between various other entities - friends and enemies
    */
    addColliders() {
        this.colliderLayer.objects.forEach((object) => {
            this.collidersGroup.add(new MyCollider(this, object.x, object.y, object.width, object.height));
        });
        this.physics.add.collider(this.FriendsGroup, this.collidersGroup);
    }
    /*
   We add the player to the game and we add the colliders between the player and the rest of the elements. The starting position of the player is defined on the tilemap.
   */
    addPlayer() {
        this.elements = this.add.group();

        const playerPosition = this.objectsLayer.objects.find(
            (object) => object.name === "player"
        );
        this.player = new Player(this, playerPosition.x, playerPosition.y, 0);
        this.player.assignInteractCallback(this.playerInteractsWithScene, this);
        /*
        this.physics.add.collider(this.player, this.platformLayer, this.hitFloor,
            () => {
                return true;
            },
            this);
            */
        this.physics.add.collider(this.player, this.collidersGroup);
    }
    /*
    This should be when player presses use key (E)
    invoked from player js as callback (because keys are handled within player js). thisthis is a game.js object but 'this' will be a player
    */
    playerInteractsWithScene(thisthis) {
        // use passage
        thisthis.physics.overlap(thisthis.player, thisthis.passageGroup, thisthis.passagePlayer);
        // talks to NPC
        thisthis.physics.overlap(thisthis.player, thisthis.FriendsGroup, thisthis.talkPlayer);
    }

    talkPlayer(playerObject, NPCObject) {
        if (NPCObject != null) {
            //console.log("talk to: ");
            //console.log(NPCObject);

        }
    }
    /*
    when player uses passage
    */
    passagePlayer(playerObject, passageObject) {
        if (passageObject != null) {
            playerObject.x = passageObject.destinationX;
            playerObject.y = passageObject.destinationY;
        }
    }
    loadAudios() {
    
    }

    playMusic(theme = "game") {

    }
    /*
    When the player hits the floor
    */
    hitFloor(player, platform) {

    }

    update() {
        this.player.update();
        //if (this.number === 3 && this.player.y > 1500) this.restartScene();
    }
}