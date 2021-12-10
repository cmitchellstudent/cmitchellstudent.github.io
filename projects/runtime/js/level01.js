var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "yeezus", "x": 407, "y": groundY },
                { "type": "yeezus", "x": 900, "y": groundY },
                { "type": "yeezus", "x": 1500, "y": groundY },
                { "type": "jesus", "x": 1900, "y": groundY - 120},
                { "type": "yeezus", "x": 2400, "y": groundY },
                { "type": "yeezus", "x": 2900, "y": groundY },
                { "type": "yeezus", "x": 3713, "y": groundY },
                { "type": "jesus", "x": 3900, "y": groundY - 120},
                { "type": "yeezus", "x": 4400, "y": groundY },
                { "type": "yeezus", "x": 4960, "y": groundY },
                { "type": "yeezus", "x": 5310, "y": groundY },
                { "type": "jesus", "x": 5900, "y": groundY - 120},
                { "type": "yeezus", "x": 6400, "y": groundY },
                { "type": "yeezus", "x": 6900, "y": groundY },
                { "type": "reward", "x": 1500, "y": groundY},
                { "type": "reward", "x": 2024, "y": groundY},
                { "type": "reward", "x": 2500, "y": groundY},
                { "type": "reward", "x": 3000, "y": groundY},
                { "type": "reward", "x": 3500, "y": groundY},
                { "type": "reward", "x": 4093, "y": groundY},
                { "type": "reward", "x": 4500, "y": groundY},
                { "type": "reward", "x": 5000, "y": groundY},
                { "type": "reward", "x": 5521, "y": groundY},
                { "type": "reward", "x": 6000, "y": groundY},
                { "type": "enemy", "x": 600, "y": groundY - 50},
                { "type": "enemy", "x": 1500, "y": groundY - 50},
                { "type": "enemy", "x": 2200, "y": groundY - 50},
                { "type": "enemy", "x": 2800, "y": groundY - 50},
                { "type": "enemy", "x": 3600, "y": groundY - 50},
                { "type": "enemy", "x": 4300, "y": groundY - 50},
                { "type": "enemy", "x": 5100, "y": groundY - 50},
                
            ]
        };


        for (var i = 0; i < levelData.gameItems.length; i++) {
            var gameItemObject = levelData.gameItems[i];
            var objectX = gameItemObject.x;
            var objectY = gameItemObject.y;
            var objectType = gameItemObject.type;
            if (objectType === "yeezus") {
                createYeezus(objectX, objectY);
            } else if (objectType === "reward") {
                createReward(objectX, objectY);
            } else if (objectType === "enemy") {
                createEnemy(objectX, objectY)
            } else if (objectType === "jesus") {
                createJesus(objectX, objectY);
            }
        }

        

        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE
        function createYeezus(x,y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            sawBladeHitZone.x = x;
            sawBladeHitZone.y = y;
            game.addGameItem(sawBladeHitZone);    
            var obstacleImage = draw.bitmap('img/sawblade.png');
                obstacleImage.x = -25;
                obstacleImage.y = -25;
            sawBladeHitZone.addChild(obstacleImage);

            sawBladeHitZone.onPlayerCollision = function() {
                game.changeIntegrity(-1 * damageFromObstacle);
                sawBladeHitZone.fadeOut();
            }
        }


        function createJesus(x,y) {
            var hitZoneSize = 30;
            var damageFromObstacle = 20;
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            sawBladeHitZone.x = x;
            sawBladeHitZone.y = y;
            game.addGameItem(sawBladeHitZone);    
            var obstacleImage = draw.bitmap('img/jesus.png');
                obstacleImage.scaleX = 0.2;
                obstacleImage.scaleY = 0.2;
                obstacleImage.x = -30;
                obstacleImage.y = -30;
            sawBladeHitZone.addChild(obstacleImage);

            sawBladeHitZone.onPlayerCollision = function() {
                game.changeIntegrity(-1 * damageFromObstacle);
                sawBladeHitZone.fadeOut();
            }
        }


        function createEnemy (x, y) {
            var enemy = game.createGameItem('enemy',25);
            var redSquare = draw.rect(50,75,'pink');
            redSquare.x = -25;
            redSquare.y = -25;
            enemy.addChild(redSquare);
            enemy.x = x;
            enemy.y = y;
            game.addGameItem(enemy);
            enemy.velocityX = -1;
            enemy.rotationalVelocity = 10;
    
            enemy.onPlayerCollision = function() {
                console.log('The enemy has hit Halle');
                game.changeIntegrity(-10);
                enemy.fadeOut();
            };

            enemy.onProjectileCollision = function() {
                console.log("Halle has hit the enemy");
                game.increaseScore(100);
                enemy.shrink();
            }
        }



        function createReward (x, y) {
            var reward = game.createGameItem('reward',25);
            var rewardImage = draw.bitmap('img/dropout.jpg');
                rewardImage.scaleX = 0.1;
                rewardImage.scaleY = 0.1;
                rewardImage.x = -30;
                rewardImage.y = -30;
            reward.addChild(rewardImage);
            reward.x = x;
            reward.y = y;
            game.addGameItem(reward);
            reward.velocityX = -1.5;
    
            reward.onPlayerCollision = function() {
                game.increaseScore(1000);
                reward.shrink();
            };
        }


        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
