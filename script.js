var  scores,roundScore,activePlayer,game;

init();
document.querySelector('.btn-roll').addEventListener('click',function()
        {
    if(game){
        dice=Math.floor(Math.random()*6)+1;                                     
            var diceDom=document.querySelector('.dice');
            diceDom.style.display='block';
            diceDom.src='images/dice-'+dice+'.png';
            
        if(dice!==1){
            roundScore+=dice;
            document.querySelector('#current-'+activePlayer).textContent=roundScore;
        }
        else{
            
            nextplayer();
            }
            
    }
            
                                                 
        });

    document.querySelector('.btn-hold').addEventListener('click',function(){
        if(game)
            {
                    scores[activePlayer]+=roundScore;
        
        document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
        
        if(scores[activePlayer]>=100){
            document.querySelector('#name-'+activePlayer).textContent='Vamos!!!';
            document.querySelector('.dice').style.display='none';
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            game=false;
        }
        else{
                nextplayer();
        }
    
    
            }
        
    });

function nextplayer()
{
        activePlayer===0 ? activePlayer=1:activePlayer=0;
            roundScore=0;
            document.getElementById('current-0').textContent='0';
            document.getElementById('current-1').textContent='0';
            
            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');
            
            document.querySelector('.dice').style.display = 'none';
            
            
    
}

document.querySelector('.btn-new').addEventListener('click',init);

function init()
{
scores=[0,0];
game=true;    
roundScore=0;
activePlayer=0;
document.querySelector('.dice').style.display='none';

document.getElementById('score-0').textContent=0;
document.getElementById('score-1').textContent=0;
document.getElementById('current-0').textContent=0;
document.getElementById('current-1').textContent=0;
document.getElementById('name-0').textContent='player 1';
document.getElementById('name-1').textContent='player 2';  
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');    



}

























































