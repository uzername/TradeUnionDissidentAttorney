import Phaser from "phaser"
import Bootloader from "./scenes/bootloader";
import Outro from "./scenes/outro";
import Splash from "./scenes/splash";
import Game from "./scenes/game";
import SettingsScene from "./scenes/settings";
import splash_credits from "./scenes/splash_credits";

import DialogManagerPlugin2 from "./dialogsystem2/MyDialogManager2"
import StringsTraslation from "./strings.js"


var initializedStrings = new StringsTraslation();

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config = {
    type: Phaser.AUTO,
    width: 1024,
    height: 768,
    parent: 'game-container',
    backgroundColor: '#00000',
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 300 },
            //debug: true,
        },
    },
    pixelArt: true,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    autoRound: false,
    scene: [Bootloader, Splash, splash_credits, SettingsScene, Game, Outro],
    plugins: {
        // https://newdocs.phaser.io/docs/3.80.0/Phaser.Types.Core.PluginObjectItem
        scene: [{ key: "MyDialogManagerPlugin2", plugin: DialogManagerPlugin2, sceneKey: "MyDialogManagerPlugin2Inst", mapping: "MyDialogManagerPlugin2Inst" }]
    }
    };

const game = new Phaser.Game(config);
