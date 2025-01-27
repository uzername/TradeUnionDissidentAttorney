class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, health = 10) {
        super(scene, x, y, "attorney");
        this.setOrigin(1, 1);
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.cursor = this.scene.input.keyboard.createCursorKeys();
        this.spaceBar = this.scene.input.keyboard.addKey(
            Phaser.Input.Keyboard.KeyCodes.SPACE
        );
        this.down = this.scene.input.keyboard.addKey(
            Phaser.Input.Keyboard.KeyCodes.DOWN
        );
        this.right = true;
        this.body.setGravityY(100);
        this.body.setSize(32, 55);
        this.body.setOffset(16, 8);
        this.init();

        this.jumping = false;
        this.falling = false;
        this.shooting = false;
        this.crouching = false;

        this.walkVelocity = 150;
        this.runVelocity = 250;
        this.jumpVelocity = -400;
        this.invincible = false;
        this.health = health;
        this.dead = false;
        // movement
        this.W = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.A = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.S = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.D = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        // shift key to switch from walk to running
        this.ShiftShift = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SHIFT);
        // use
        this.E = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
    }
    /*
    well this is complicated. A callback (in_InteractCallback - for interaction with scene) called from player.js but uses game.js context
    probably I should think about dependency injection at this point
    */
    assignInteractCallback(in_InteractCallback, in_contextOfScene) {
        this.InteractCallback = in_InteractCallback;
        this.contextOfScene = in_contextOfScene;
    }
    /*
    Inits the animations for the player: init, idle, walk, jump, death, etc... and it adds a listener for the `animationcomplete` event.
    */
    init() {
        this.scene.anims.create({
            key: "startidle",
            frames: this.scene.anims.generateFrameNumbers("attorney_idleinit", {
                start: 0,
                end: 1,
            }),
            frameRate: 3,
            repeat: -1,
        });

        this.scene.anims.create({
            key: "playeridle",
            frames: this.scene.anims.generateFrameNumbers("attorney_idle", {
                start: 0,
                end: 5,
            }),
            frameRate: 3,
            repeat: -1,
        });

        this.scene.anims.create({
            key: "playerwalk",
            frames: this.scene.anims.generateFrameNumbers("attorney_walk", {
                start: 0,
                end: 7,
            }),
            frameRate: 10,
            repeat: -1,
        });

        this.scene.anims.create({
            key: "playerjump",
            frames: this.scene.anims.generateFrameNumbers("attorney_jump", {
                start: 0,
                end: 3,
            }),
            frameRate: 1,
        });

        this.scene.anims.create({
            key: "playerrun",
            frames: this.scene.anims.generateFrameNumbers("attorney_run", {
                start: 0,
                end: 9,
            }),
            frameRate: 10,
        });

        this.scene.anims.create({
            key: "playershoot",
            frames: this.scene.anims.generateFrameNumbers("attorney_shootingpistol", {
                start: 0,
                end: 6,
            }),
            frameRate: 3,
        });
        /*
        this.scene.anims.create({
            key: "playerdead",
            frames: this.scene.anims.generateFrameNumbers("walt", {
                start: 11,
                end: 16,
            }),
            frameRate: 5,
        });
        */
        this.anims.play("startidle", true);

        this.on("animationcomplete", this.animationComplete, this);
    }

    /*
      In the update function, we set the player movement according to the controls. We check if the player is jumping, falling, walking, etc...
      */
    update() {
        
        if (this.dead) return;
        if (this.jumping) {
            if (this.body.velocity.y >= 0) {
                this.body.setGravityY(700);
                this.falling = true;
            }
        }
        // key handling goes next . By now I check opened dialog window

        if (
            (Phaser.Input.Keyboard.JustDown(this.cursor.up) ||
                Phaser.Input.Keyboard.JustDown(this.W)) && this.body.blocked.down) {
            if ((this.scene.MyDialogManagerPlugin2Inst != null) && (this.scene.MyDialogManagerPlugin2Inst.wasDialogOpened)) { return; }
            this.shooting = false;
            this.body.setVelocityY(this.jumpVelocity);
            this.body.setGravityY(400);
            this.anims.play("playerjump", true);
            //this.scene.playAudio("jump");
            this.jumping = true;
            //this.jumpSmoke();
        } else if (this.cursor.right.isDown || this.D.isDown) {
            if ((this.scene.MyDialogManagerPlugin2Inst != null) && (this.scene.MyDialogManagerPlugin2Inst.wasDialogOpened)) { return; }
            var isRunning = false;
            if ((this.cursor.right.shiftKey) || (this.D.shiftKey) || this.ShiftShift.isDown) {
                isRunning = true;
            }
            this.shooting = false;
            if (this.body.blocked.down) {
                if (isRunning) {
                    this.anims.play("playerrun", true);
                } else {
                    this.anims.play("playerwalk", true);
                }
            }
            this.right = true;
            this.flipX = this.body.velocity.x < 0;
            if (isRunning) {
                this.body.setVelocityX(this.runVelocity);
            } else {
                this.body.setVelocityX(this.walkVelocity);
            }
        } else if (this.cursor.left.isDown || this.A.isDown) {
            if ((this.scene.MyDialogManagerPlugin2Inst != null) && (this.scene.MyDialogManagerPlugin2Inst.wasDialogOpened)) { return; }
            this.shooting = false;
            var isRunning = false;
            if ((this.cursor.left.shiftKey)|| (this.A.shiftKey) || this.ShiftShift.isDown) {
                isRunning = true;
            }
            if (this.body.blocked.down) {
                if (isRunning) {
                    this.anims.play("playerrun", true);
                } else {
                    this.anims.play("playerwalk", true);
                }
            }
            this.right = false;
            this.flipX = true;
            if (isRunning) {
                this.body.setVelocityX(-this.runVelocity);
            } else {
                this.body.setVelocityX(-this.walkVelocity);
            }
        } else {
            if (this.body.blocked.down) {
                if (this.jumping) {
                    //this.scene.playAudio("land");
                    //this.landSmoke();
                }
                this.jumping = false;
                this.falling = false;

                if (!this.shooting) this.anims.play("playeridle", true);
            }

            this.body.setVelocityX(0);
        }

        if (Phaser.Input.Keyboard.JustDown(this.spaceBar)) {
            if ((this.scene.MyDialogManagerPlugin2Inst != null) && (this.scene.MyDialogManagerPlugin2Inst.wasDialogOpened)) { return; }
            this.performCombat();
        }

        if (Phaser.Input.Keyboard.JustDown(this.cursor.down) || Phaser.Input.Keyboard.JustDown(this.S)) {
            if ((this.scene.MyDialogManagerPlugin2Inst != null) && (this.scene.MyDialogManagerPlugin2Inst.wasDialogOpened)) { return; }
            this.crouching = true;
        }
        if (Phaser.Input.Keyboard.JustDown(this.E)) {
            this.InteractCallback(this.contextOfScene);
        }
    }

    /*
      This is called when the player hits the floor. It creates smoke particles. It reuses the jumpSmoke method.
      */
    landSmoke() {
        //this.jumpSmoke(20);
    }
    /*
    jumpSmoke(offsetY = 10, varX) {
        Array(Phaser.Math.Between(3, 6))
            .fill(0)
            .forEach((i) => {
                const offset = varX || Phaser.Math.Between(-1, 1) > 0 ? 1 : -1;
                varX = varX || Phaser.Math.Between(0, 20);
                new JumpSmoke(this.scene, this.x + offset * varX, this.y + offsetY);
            });
    }
    */
    /*
      This is called when the player generates a block. It also creates smoke particles.
      */
    buildBlock() {
        this.shooting = true;
        this.anims.play("playerbuild", true);
        this.scene.playAudio("build");
        const offsetX = this.right ? 64 : -64;
        const offsetY = this.jumpVelocity === -400 ? 0 : -128;
        this.buildSmoke(32, offsetX);
        this.scene.bricks.add(
            new Brick(this.scene, this.x + offsetX, this.y + offsetY)
        );
    }

    /*
      This generates the smoke particles when the player builds a block.
      */
    buildSmoke(offsetY = 10, offsetX) {
        Array(Phaser.Math.Between(8, 14))
            .fill(0)
            .forEach((i) => {
                const varX = Phaser.Math.Between(-20, 20);
                new JumpSmoke(this.scene, this.x + (offsetX + varX), this.y + offsetY);
            });
    }

    /*
      This is called when the player performs action - shooting for example.
      */
    performCombat() {
        if (this.shooting) return;
        this.shooting = true;
        this.anims.play("playershoot", true);
        
    }

    /*
      This just turns the player in the opposite direction.
      */
    turn() {
        this.right = !this.right;
    }

    /*
      This is called when the player finishes an animation. It checks if the animation is the `playerground`, `playershoot` or ... and it plays the idle animation.
      */
    animationComplete(animation, frame) {
        if (animation.key === "playerground") {
            this.anims.play("playeridle", true);
        }

        if (animation.key === "playershoot") {
            this.shooting = false;
            this.anims.play(this.jumping ? "playerjump" : "playeridle", true);
        }
    }

    /*
      This is called when the player is hit by an enemy. It reduces the health and checks if the player is dead.
      */
    hit() {
        this.health--;
        this.anims.play("playerdead", true);
        this.body.enable = false;
        if (this.health === 0) {
            this.die();
        }
    }

    /*
      This is called when the player is dead. It plays the death animation and restarts the scene.
      */
    die() {
        this.dead = true;
        this.anims.play("playerdead", true);
        this.body.immovable = true;
        this.body.moves = false;
        this.scene.restartScene();
    }

    /*
      This is called when the player picks a prize. It checks the prize and calls the corresponding method.
      */
    applyPrize(prize) {
        switch (prize) {
            case "speed":
                this.walkVelocity = 330;
                this.flashPlayer();
                break;
            case "hammer":
                this.mjolnir = true;
                this.flashPlayer();
                break;
            case "boots":
                this.jumpVelocity = -600;
                this.flashPlayer();
                break;
            case "coin":
                this.scene.updateCoins();
                break;
            case "star":
                this.invincible = true;
                this.scene.tweens.add({
                    targets: this,
                    duration: 300,
                    alpha: { from: 0.7, to: 1 },
                    repeat: -1,
                });
                break;
            default:
                break;
        }
    }

    /*
      This is called when the player picks a prize. It flashes the player to show the player that he got a prize.
      */
    flashPlayer() {
        this.scene.tweens.add({
            targets: this,
            duration: 50,
            scale: { from: 1.2, to: 1 },
            repeat: 10,
        });
    }
}

export default Player;