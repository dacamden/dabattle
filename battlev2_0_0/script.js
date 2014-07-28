/////////////////////////////////////
////////////BATTLE SCRIPT////////////
/////////////////////////////////////

//Declare Player Stat Variables

var pHitPoints = 500,
    pBaseDmg = 5,
    pDefPoints = 1,
    pMit = Math.log(pDefPoints) / Math.log(1.1);

//Declare Monster Stat Variables

var cHitPoints = 500,
    cBaseDmg = 5,
    cDefPoints = 1,
    cMit = Math.log(cDefPoints) / Math.log(1.1);

//Declare Turn variable

var turn = 1;

//Jquery Stats Declaration

$(document).ready(function(){
  $('#pHitPoints').html(Math.round(pHitPoints));
  $('#pBaseDmg').html(Math.round(pBaseDmg));
  $('#pDefPoints').html(Math.round(pDefPoints));
  $('#pMit').html(Math.round(cMit));
  $('#cHitPoints').html(Math.round(cHitPoints));
  $('#cBaseDmg').html(Math.round(cBaseDmg));
  $('#cDefPoints').html(Math.round(cDefPoints));
  $('#cMit').html(Math.round(cMit));
  $('#Turn').html(turn);
});

//Declare Button Functions

pAttack1 = function foo (power) {
  if ((turn%2) === 1){
    var dmg = pBaseDmg * power * (1 - (cMit/100));
    cHitPoints =  cHitPoints - dmg;
    $('#cHitPoints').html(Math.round(cHitPoints));
    $('#PlayerLog').html("<p style = 'color: red;'>Player attacked Computer!</p>");
    turn = turn + 1;
    $('#Turn').html(turn);
    $('#AiLog').html("<p style = 'color: blue;'>Computer is choosing a Move</p>");
    var delay=2500; //2.5 seconds
    setTimeout(function(){
      if ((turn%2) === 0){
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
      var dmg = cBaseDmg * power * (1 - (pMit/100));
      pHitPoints =  pHitPoints - dmg;
      $('#pHitPoints').html(Math.round(pHitPoints));
      $('#AiLog').html("<p style = 'color: red;'>Computer Attacked Player!</p>");
      turn = turn + 1;
      $('#Turn').html(turn);
    } else if (computerChoice <= 0.67) {
      var dmg = cBaseDmg * power * (1 - (pMit/100));
      pHitPoints =  pHitPoints - dmg;
      $('#pHitPoints').html(Math.round(pHitPoints));
      $('#AiLog').html("<p style = 'color: red;'>Computer Attacked Player!</p>");
      turn = turn + 1;
      $('#Turn').html(turn);
    } else {
      cDefPoints = cDefPoints + power;
      cMit = Math.log(cDefPoints) / Math.log(1.1);
      $('#cDefPoints').html(Math.round(cDefPoints));
      $('#cMit').html(Math.round(cMit));
      $('#AiLog').html("<p style = 'color: green;'>Computer increased defense</p>");
      turn = turn + 1;
      $('#Turn').html(turn); 
    };
  } else {
    $('#AiLog').html("<p>Waiting...</p>");
  }
    },delay); 
  } else {
    $('#PlayerLog').html("<p>It is not your turn</p>");
  };
};

pAttack2 = function foo (power) {
  if ((turn%2) === 1){
    var dmg = pBaseDmg * power * (1 - (cMit/100));
    cHitPoints =  cHitPoints - dmg;
    $('#cHitPoints').html(Math.round(cHitPoints));
    $('#PlayerLog').html("<p style = 'color: red;'>Player attacked Computer!</p>");
    turn = turn + 1;
    $('#Turn').html(turn);
    $('#AiLog').html("<p style = 'color: blue;'>Computer is choosing a Move</p>");
    var delay=2500; //2.5 seconds
    setTimeout(function(){
      if ((turn%2) === 0){
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
      var dmg = cBaseDmg * power * (1 - (pMit/100));
      pHitPoints =  pHitPoints - dmg;
      $('#pHitPoints').html(Math.round(pHitPoints));
      $('#AiLog').html("<p style = 'color: red'>Computer Attacked Player!</p>");
      turn = turn + 1;
      $('#Turn').html(turn);
    } else if (computerChoice <= 0.67) {
      var dmg = cBaseDmg * power * (1 - (pMit/100));
      pHitPoints =  pHitPoints - dmg;
      $('#pHitPoints').html(Math.round(pHitPoints));
      $('#AiLog').html("<p style = 'color: red;'>Computer Attacked Player!</p>");
      turn = turn + 1;
      $('#Turn').html(turn);
    } else {
      cDefPoints = cDefPoints + power;
      cMit = Math.log(cDefPoints) / Math.log(1.1);
      $('#cDefPoints').html(Math.round(cDefPoints));
      $('#cMit').html(Math.round(cMit));
      $('#AiLog').html("<p style = 'color: green;'>Computer increased defense</p>");
      turn = turn + 1;
      $('#Turn').html(turn); 
    };
  } else {
    $('#AiLog').html("<p>Waiting...</p>");
  }
    },delay); 
  } else {
    $('#PlayerLog').html("<p>It is not your turn</p>");
  };
};

pDef = function foo (power){
  if ((turn%2) ===1) {
    pDefPoints = pDefPoints + power;
    pMit = Math.log(pDefPoints) / Math.log(1.1);
    $('#pDefPoints').html(Math.round(pDefPoints));
    $('#pMit').html(Math.round(pMit));
    $('#PlayerLog').html("<p style = 'color: green;'>Player increased defense</p>");
    turn = turn + 1;
    $('#Turn').html(turn);
    $('#AiLog').html("<p style = 'color: blue;'>Computer is choosing a Move</p>");
    var delay=2500; //2.5 seconds
    setTimeout(function(){
      if ((turn%2) === 0){
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
      var dmg = cBaseDmg * power * (1 - (pMit/100));
      pHitPoints =  pHitPoints - dmg;
      $('#pHitPoints').html(Math.round(pHitPoints));
      $('#AiLog').html("<p style = 'color: red;'>Computer Attacked Player!</p>");
      turn = turn + 1;
      $('#Turn').html(turn);
    } else if (computerChoice <= 0.67) {
      var dmg = cBaseDmg * power * (1 - (pMit/100));
      pHitPoints =  pHitPoints - dmg;
      $('#pHitPoints').html(Math.round(pHitPoints));
      $('#AiLog').html("<p style = 'color: red;'>Computer Attacked Player!</p>");
      turn = turn + 1;
      $('#Turn').html(turn);
    } else {
      cDefPoints = cDefPoints + power;
      cMit = Math.log(cDefPoints) / Math.log(1.1);
      $('#cDefPoints').html(Math.round(cDefPoints));
      $('#cMit').html(Math.round(cMit));
      $('#AiLog').html("<p style = 'color: green;'>Computer increased defense</p>");
      turn = turn + 1;
      $('#Turn').html(turn); 
    };
  } else {
    $('#AiLog').html("<p>Waiting...</p>");
  }
    },delay); 
  } else {
    $('#PlayerLog').html("<p>It is not your turn</p>");
  };
};

//Computer Buttons for testing

/*cAttack1 = function foo (power){
  if ((turn%2) === 0){
    var dmg = cBaseDmg * power * (1 - (pMit/100));
    pHitPoints =  pHitPoints - dmg;
    $('#pHitPoints').html(Math.round(pHitPoints));
    $('#AiLog').html("<p>Computer Attacked Player!</p>");
    turn = turn + 1;
    $('#Turn').html(turn);
  } else {
    $('#AiLog').html("<p>It is not your turn</p>");
  };
};

cAttack2 = function foo (power){
  if ((turn%2) === 0){
    var dmg = cBaseDmg * power * (1 - (pMit/100));
    pHitPoints =  pHitPoints - dmg;
    $('#pHitPoints').html(Math.round(pHitPoints));
    $('#AiLog').html("<p>Computer Attacked Player!</p>");
    turn = turn + 1;
    $('#Turn').html(turn);
  } else {
    $('#AiLog').html("<p>It is not your turn</p>");
  };
};

cDef = function foo (power){
  if ((turn%2) === 0) {
    cDefPoints = cDefPoints + power;
    cMit = Math.log(cDefPoints) / Math.log(1.1);
    $('#cDefPoints').html(Math.round(cDefPoints));
    $('#cMit').html(Math.round(cMit));
    $('#AiLog').html("<p>Computer increased defense</p>");
    turn += 1;
    $('#Turn').html(turn);
  } else {
    $('#AiLog').html("<p>It is not your turn</p>");
  };
};*/
  
//Change Turn for testing

changeTurn = function bar (power) {
  turn = turn + power;
  $('#Turn').html(turn);
}