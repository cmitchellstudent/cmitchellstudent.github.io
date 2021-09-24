(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.player = window.opspark.player || {};
    let player = window.opspark.player, opspark = window.opspark;
    
    /**
     * init: Initialize the player and player manager. 
     */ 
    player.init = function (game) {
        game.player = opspark.createPlayer(game);
        game.playerManager = opspark.createPlayerManager(game.player, game);
    };

    
     var audio = new Audio('https://storage.cloudconvert.com/tasks/de3ffac0-abbf-4d84-9afd-bd5f0c2d1d4d/2020-01-06%2018-19-33.mp3?AWSAccessKeyId=cloudconvert-production&Expires=1632531302&Signature=jAlCECuX7NffUs5OoF8kfUKvGeo%3D&response-content-disposition=inline%3B%20filename%3D%222020-01-06%2018-19-33.mp3%22&response-content-type=audio%2Fmpeg');
        audio.play();
      }
)(window);