var score,roundscore,activeplayer,dice,play=false;

var bleep=new Audio();
bleep.src="button.mp3";

init();


document.querySelector('.btn-roll').addEventListener('click',function(){
    bleep.play();
    if(play===true){
    var dice1=Math.floor(Math.random()*6)+1;
    var dice2=Math.floor(Math.random()*6)+1;

    document.getElementById('dice-1').style.display='block';
    document.getElementById('dice-2').style.display='block';

    document.getElementById('dice-1').src='dice-'+dice1+'.png';
    document.getElementById('dice-2').src='dice-'+dice2+'.png';

    // if(dice===6&&temp===6){
        
    //     temp=0;
    //     scores[activeplayer]=0;
    //     document.querySelector('#score-'+activeplayer).textContent=scores[activeplayer];
    //     nextplayer();
    // }

    if(dice1!=1&&dice2!=1){
        roundscore+=dice1+dice2;
        document.querySelector('#current-'+activeplayer).textContent=roundscore;

    }
    else{
        nextplayer();
    }
    // temp=dice;
}

});


document.querySelector('.btn-hold').addEventListener('click',function(){
    
    scores[activeplayer]+=roundscore;
    document.querySelector('#score-'+activeplayer).textContent=scores[activeplayer];
    var winningscore;
    var input = document.querySelector('.final-score').value;
    console.log(input);

    if(input){
        winningscore=input;
    }
    else{
        winningscore=100;
    }

    if(scores[activeplayer]>winningscore){
        document.querySelector('#name-'+activeplayer).textContent='WINNER!';

        document.getElementById('dice-1').style.display='none';
        document.getElementById('dice-2').style.display='none';

        document.querySelector('.player-'+activeplayer+'-panel').classList.add('winner');

        document.querySelector('.player-'+activeplayer+'-panel').classList.remove('active');
        play=false;
    }

    roundscore=0;

    nextplayer();

});
document.querySelector('.btn-new').addEventListener('click',function(){
    //=================
//===========
    play=true;
    init();
});

function init()
{
scores=[0,0];
roundscore=0;
activeplayer=0;


document.getElementById('dice-1').style.display='none';
document.getElementById('dice-2').style.display='none';

document.getElementById('score-0').textContent=0;
document.getElementById('score-1').textContent=0;
document.getElementById('current-0').textContent=0;
document.getElementById('current-1').textContent=0;

document.getElementById('name-0').textContent='PLayer 1';
document.getElementById('name-1').textContent='Player 2';


document.querySelector('.player-0-panel').classList.remove('winner');

document.querySelector('.player-1-panel').classList.remove('winner');

document.querySelector('.player-0-panel').classList.remove('active');

document.querySelector('.player-1-panel').classList.remove('active');

document.querySelector('.player-0-panel').classList.add('active');

}

function nextplayer()
{
    activeplayer===0?activeplayer=1:activeplayer=0;
        roundscore=0;
        document.getElementById('current-0').textContent=0;
document.getElementById('current-1').textContent=0;
        
        document.querySelector('.player-0-panel').classList.toggle('active');

        document.querySelector('.player-1-panel').classList.toggle('active');

}