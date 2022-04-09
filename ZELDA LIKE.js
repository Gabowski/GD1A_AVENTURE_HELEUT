
let gameScene = new Phaser.Scene('Zelda Like');

var config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	scene: gameScene,
	physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
	scene: {
		preload: preload,
		create: create,
		update: update
	}
};

var game = new Phaser.Game(config);

    var gameOver = false;
    var vieJoueur = 3;
    var player;

    var vieMonstre = 3;
	var vieMonstre2 = 3;

	var piece

function preload(){

	this.load.image("Phaser_tuilesdejeu", "Assets/ASSETS.png"); // charger le png du tileset 

	this.load.tilemapTiledJSON("carte", "MAP.json"); // charger la map tiled
}

function create(){

	const carteDuNiveau = this.add.tilemap("carte")

	// importer les Tileset
	const tileset = carteDuNiveau.addTilesetImage(
		"tuilesJeu",
		"Phaser_tuilesdejeu"
		);
	const arbre = carteDuNiveau.createSataticLayer(
		"Arbre",
		tileset
	);
}

function collectPiece(piece){
    
	piece.disableBody(true, true);

}

function update(){

}
