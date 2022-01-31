"use strict";

$(document).ready(function(){
    $("#startGame").on('click', function(e){
        e.preventDefault();

        var gamePage = $(".game-section"); 

        if(gamePage.css('display', 'none')){
            gamePage.css('display', 'block');
            $('.main-section').css('display', 'none');
        }
    });

    function selectHero () {
        var ironMan = $("#ironMan");
        var captainAmerica = $("#captainAmerica");
        var blackWidow = $("#blackWidow");
        var hulk = $("#hulk");
        var thor = $("#thor");
        var loki = $("#loki");

        var hero = [ironMan, captainAmerica, blackWidow, hulk, thor, loki]
            

        for( var i = 0; i < hero.length; i++) {
            var heroes = hero[i];

            $(heroes).on('click', function() {

                $(this).css('display', 'none');

                // random score for heroes
                var random = Math.floor(Math.random() * (300 - 100) + 100) + 1;
                var span = $('<span>')
                $(span).html(random);
                $(this).append(span);


                if($("#yourHero").html() !== '' && $("#yourEnemy").html() !== ''){
                    $(span).css('display', 'none');
                }

                //selection for heroes
                if($("#yourHero").is(':empty')) {
                    $("#yourHero").html(this);
                    $(span).attr('id', 'hero');
                    $(this).css('display', 'block');
                }else if($("#yourEnemy").is(':empty')){
                    $("#yourEnemy").html(this);
                    $(span).attr('id', 'enemy');
                    $(this).css('display', 'block');
                }else{
                    $(this).css('display', 'block');
                }
 
                $(".fight-game").css('display', 'flex');


            }) 
        }

        $("#attackBtn").on('click', function(e){
            e.preventDefault();

            var yourScore = Math.floor(Math.random() * 40) + 1;
            var enemyScore = Math.floor(Math.random() * 40) + 1;

            var defend = $('#enemy').html() - enemyScore;
            var attack = $('#hero').html() - yourScore;

            var resultText = $("<span>");

            if(defend > 0 && attack > 0 ){

                $('#enemy').empty();
                $('#enemy').html(defend);
                $('#hero').empty().html(attack);

                if(defend < 30){
                    $('#enemy').empty().html(0);
                    $(resultText).html('You won!');
                    $('#result').append(resultText);
                }else if(attack < 30){
                    $('#hero').empty().html(0);
                    $(resultText).html('You lost!');
                    $('#result').append(resultText);
                }

            }
        })

        function stopGame() {
            if($('#enemy').html() === 0 || $('#hero').html() === 0){
                $("#attackBtn").off('click');
            }

        }

        stopGame();
    }
    selectHero();
})