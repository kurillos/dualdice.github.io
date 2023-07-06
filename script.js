let score = [0 , 0];       
let roundScore = 0;     
let current = 0;          
let dice;
let gameRunning = true;
let animation = 0;

    document.querySelector('.score-0').textContent = '0';
    document.querySelector('.score-1').textContent = '0';
    document.querySelector('.current-0').textContent = '0';
    document.querySelector('.current-1').textContent = '0';

    
    document.getElementById("rotate").onclick = function(){
      dice = Math.floor(Math.random()*6 + 1);
      
   if(gameRunning){    
       
      document.querySelector("#dice-img").src = "dice-"+dice+".PNG";
    
    
 if(gameRunning){    
     
  document.querySelector('#dice-img').src = 'assets/dice-' + dice +'.png';
    
    if(animation === 0){
      document.querySelector('#dice-img').classList.add('tada');
      document.querySelector('#dice-img').classList.remove('shake');
      animation=1;      
    }
    
    else{
        document.querySelector('#dice-img').classList.remove('tada');
        document.querySelector('#dice-img').classList.add('shake');
       
        animation = 0;
        
    }
    
    if(dice!==1){
     roundScore=roundScore+dice;
     document.querySelector('.current-'+current).textContent = roundScore;
    }
    
    else{
        roundScore=0;
        document.querySelector('.current-'+current).textContent = 0 ;
        document.querySelector('.player-0').classList.toggle('active');
        document.querySelector('.player-1').classList.toggle('active');
        current = 1-current; 
    }
 }



document.getElementById('hold').onclick = function(){

  if(gameRunning){    
    score[current]= score[current] + roundScore;
    document.querySelector('.score-'+current).textContent = score[current]
    
    if(score[current] >= 100){
        document.querySelector("#pl-"+current).innerHTML = "<h2 id='pl-'"+current+">YOU'RE ROCK ! "+"<i class='fas fa-cicle'>"+"</i></h2>";
        gameRunning = false;
    }
    
  else{    
    document.querySelector('.player-0').classList.toggle('active');
    document.querySelector('.player-1').classList.toggle('active');
    document.querySelector('.current-'+current).textContent = 0 ;
    current = 1-current ;
    roundScore = 0;
   }
      
  }
    
 }


document.querySelector('#new').addEventListener('click',game);



function game() {
    
    score= [0,0];
    roundScore = 0 ;
    current= 0;
    gameRunning = true;
    
   
    document.querySelector('.score-0').textContent = '0';
    document.querySelector('.score-1').textContent = '0';
    document.querySelector('.current-0').textContent = '0';
    document.querySelector('.current-1').textContent = '0';
    document.querySelector("#pl-0").innerHTML = "<h2 id='pl-0'>PLAYER 1 "+"<i class='fas fa-cicle'>"+"</i></h2>";
    document.querySelector("#pl-1").innerHTML = "<h2 id='pl-1'>PLAYER 2 "+"<i class='fas fa-cicle'>"+"</i></h2>";
  }
}
}