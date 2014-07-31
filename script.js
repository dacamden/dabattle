/////////////////////////////////////
////////////BATTLE SCRIPT////////////
/////////////////////////////////////

//Arrays
var stword = ["Planned", "Spearheaded", "Boost", "Inspired", "Guided", "Tested",
	"Targeted", "Infinite", "Acidic", "Alluring", "Ambiguous", "Apathetic",
	"Aquatic", "Zealous", "Aapricious", "Aeadpan", "Deafening", "Hurtful"
];
var ndword = ["Punch", "Kick", "Slap", "Bite", "Push", "Stomp", "Smack", "Grab",
	"Poke", "Tickle", "Tackle"
];
var stword2 = ["Histrionic", "Hubristic", "Incendiary", "Insidious", "Insolent",
	"Intransigent", "Inveterate", "Irksome", "Jocular", "Judicious",
	"Limpid", "Loquacious", "Luminous", "Mannered", "Mendacious", "Mordant",
	"Munificent", "Nefarious", "Noxious", "Obtuse", "Pervasive", "Petulant",
	"Platitudinous"
];
var ndword2 = ["Strike", "Scratch", "Glare", "Spit", "Tackle", "Smash", "Throw",
	"Crack", "Rip", "Trip", "Whack", "Whip", "Stroke", "Splash", "Claw",
	"Mash"
];
var multi = [1.8, 1.9, 1.9, 2, 2, 2, 2.1, 2.1, 2.2];


var healtharr = [200, 220, 240, 280, 300, 320, 330, 340, 350, 360, 370, 380,
	400, 420, 450, 460, 470, 480, 490, 500
];
var defarr = [1, 2, 3, 4, 5];
var attackarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
	19, 20
];
var attackarr2 = [6, 7, 8, 9, 10, 11];
var imagearr = ["http://cdn.bulbagarden.net/upload/b/b8/059Arcanine.png",
	"http://cdn.bulbagarden.net/upload/c/cd/024Arbok.png",
	"http://cdn.bulbagarden.net/upload/c/cc/147Dratini.png",
	"http://cdn.bulbagarden.net/upload/archive/f/f8/20100417191927%21187Hoppip.png",
	"http://cdn.bulbagarden.net/upload/archive/5/5d/20130914032735%21010Caterpie.png",
	"http://blog.dacamden.co.uk/images/leo.JPG",
	"http://studio101.biz/wp-content/plugins/files/civicrm/persist/contribute/images/Monsters%20vs%20Aliens%20035.jpg",
	"https://lh3.googleusercontent.com/-lWO0Yu4OHJc/TXpEikJmhII/AAAAAAAAAe0/BWobw90XdlM/s1600/March-of-the-Monsters-Day-11.jpg",
	"https://stevenchasestudios.files.wordpress.com/2012/10/yeti-2.jpg"
];
var defplus = [5, 6, 7, 8, 9, 10];

// BARCODE GENERATOR
var barcode1 = Math.floor((function getRandomArbitrary() {
	return Math.random() * (9999999999999 - 1111111111111) + 1;
})());
var barcode2 = Math.floor((function getRandomArbitrary() {
	return Math.random() * (9999999999999 - 1111111111111) + 1;
})());
var formmaker = function(code) {
	var barcodex = code.toString();
	console.log(barcode1);
	var n = barcodex.split('').map(Number);
	console.log(n);
	return Math.round(((n[2] + 3 + n[6] + 9 + n[7] + 5) / (n[0] + 50)) * 81);
};
var form1 = formmaker(barcode1),
	form2 = formmaker(barcode2);

//Declare Player Stat Variables

var pHitPoints = healtharr[form1 % 20],
	pBaseMult = multi[form1 % 9],
	pAtk1 = attackarr[form1 % 20],
	pAtk2 = attackarr2[form1 % 6],
	pDefPoints = defarr[form1 % 5],
	pMit = Math.log(pDefPoints) / Math.log(1.1),
	pImg = imagearr[form1 % 9],
	pDefPlus = defplus[form1 % 6];

var attack1name1 = stword[form1 % 18],
	attack1name2 = ndword[form1 % 10],
	attack2name1 = stword2[form1 % 23],
	attack2name2 = ndword2[form1 % 16];

//Declare Ai Stat Variables

var cHitPoints = healtharr[form2 % 20],
	cBaseMult = multi[form2 % 9],
	cAtk1 = attackarr[form2 % 20],
	cAtk2 = attackarr2[form2 % 6],
	cDefPoints = defarr[form2 % 5],
	cMit = Math.log(cDefPoints) / Math.log(1.1),
	cImg = imagearr[form2 % 9],
	cDefPlus = defplus[form2 % 6];

//Declare Turn variable

var turn = 1;


//Jquery Stats input to html

$(document).ready(function() {
	$('#pHitPoints').html(Math.round(pHitPoints));
	$('#pBaseMult').html(pBaseMult);
	$('#pDefPoints').html(Math.round(pDefPoints));
	$('#pMit').html(Math.round(cMit));
	$('#cHitPoints').html(Math.round(cHitPoints));
	$('#cBaseMult').html(cBaseMult);
	$('#cDefPoints').html(Math.round(cDefPoints));
	$('#cMit').html(Math.round(cMit));
	$('#Turn').html(turn);
	$('#pImg').html("<img src=" + pImg + " height=" + 200 +
		" width=" + 200 + ">");
	$('#cImg').html("<img src=" + cImg + " height=" + 200 +
		" width=" + 200 + ">");
	$('#attack1name').html(attack1name1 + " " + attack1name2);
	$('#attack2name').html(attack2name1 + " " + attack2name2);
	$('#pAtk1').html(Math.round(pAtk1));
	$('#pAtk2').html(Math.round(pAtk2));
	$('#phealthBar').html(pHitPoints);

});

//Declare Computer attack function

computerMove = function(power) {
$('#AiLog').html(
				"<p style = 'color: blue;'>Computer is choosing a Move</p>"
			);
			var delay = 2500; //2.5 seconds
			setTimeout(function() {
				if ((turn % 2) === 0) {
					var computerChoice = Math.random();
					if (computerChoice < 0.34) {
						var dmg = cBaseMult * cAtk1 * (1 - (pMit /
							100));
						pHitPoints = pHitPoints - dmg;
						$('#pHitPoints').html(Math.round(pHitPoints));
						$('#AiLog').html(
							"<p style = 'color: red;'>Computer Attacked Player!</p>"
						);
            $('#allLog').prepend(
              "<p style = 'color: red;'> C: Attacked player for " + Math.round(dmg) + "</p>" 
			);
						turn = turn + 1;
						$('#Turn').html(turn);
					} else if (computerChoice <= 0.67) {
						var dmg = cBaseMult * cAtk2 * (1 - (pMit /
							100));
						pHitPoints = pHitPoints - dmg;
						$('#pHitPoints').html(Math.round(pHitPoints));
						$('#AiLog').html(
							"<p style = 'color: red;'>Computer Attacked Player!</p>"
						);
            $('#allLog').prepend(
              "<p style = 'color: red;'>C: Attacked player for " + Math.round(dmg) + "</p>" 
			);
						turn = turn + 1;
						$('#Turn').html(turn);
					} else {
						cDefPoints = cDefPoints + cDefPlus;
						cMit = Math.log(cDefPoints) / Math.log(1.1);
						$('#cDefPoints').html(Math.round(cDefPoints));
						$('#cMit').html(Math.round(cMit));
						$('#AiLog').html(
              "<p style = 'color: green;'>C: Computer increased defense</p>"
						);
            $('#allLog').prepend(
              "<p style = 'color: green;'>C: Increased defense by " + Math.round(cDefPlus) + "</p>" 
			);
						turn = turn + 1;
						$('#Turn').html(turn);
					}
				} else {
					$('#AiLog').html("<p>Waiting...</p>");
				}
        if (pHitPoints < 1) {
		pHitPoints = 'Dead';
		$('#pHitPoints').html(pHitPoints);
	}
			}, delay);
};

// Declare player button fucntions

pAttack1 = function foo(power) {
	if (pHitPoints < 1) {
		pHitPoints = 'Dead';
		$('#pHitPoints').html(pHitPoints);
  } else if (pHitPoints === 'Dead'){
    $('#PlayerLog').html('<p>You are dead...</p>');
  } else {
		if ((turn % 2) === 1) {
			var dmg = pBaseMult * power * (1 - (cMit / 100));
			cHitPoints = cHitPoints - dmg;
			$('#cHitPoints').html(Math.round(cHitPoints));
			$('#PlayerLog').html(
				"<p style = 'color: red;'>Player attacked Computer!</p>"
			);
      $('#allLog').prepend(
        "<p style = 'color: red;'>P: Attacked computer for " + Math.round(dmg) + "</p>" 
			);
			turn = turn + 1;
			$('#Turn').html(turn);
			if (cHitPoints < 1) {
				cHitPoints = 'Dead';
				$('#cHitPoints').html(cHitPoints);
			} else {
				computerMove(1) //use computer move. 1 is a pointless parameter.
			}
		} else {
			$('#PlayerLog').html("<p>It is not your turn</p>");
		}
	}

};

pAttack2 = function foo(power) {
	if (pHitPoints < 1) {
		pHitPoints = 'Dead';
		$('#pHitPoints').html(pHitPoints);
	} else if (pHitPoints === 'Dead'){
    $('#PlayerLog').html('<p>You are dead...</p>');
  } else {
		if ((turn % 2) === 1) {
			var dmg = pBaseMult * power * (1 - (cMit / 100));
			cHitPoints = cHitPoints - dmg;
			$('#cHitPoints').html(Math.round(cHitPoints));
			$('#PlayerLog').html(
				"<p style = 'color: red;'>Player attacked Computer!</p>"
			);
      $('#allLog').prepend(
        "<p style = 'color: red;'>P: Attacked computer for " + Math.round(dmg) + "</p>" 
			);
			turn = turn + 1;
			$('#Turn').html(turn);
			if (cHitPoints < 1) {
				cHitPoints = 'Dead';
				$('#cHitPoints').html(cHitPoints);
			} else {
				computerMove(1);
			}
		} else {
			$('#PlayerLog').html("<p>It is not your turn</p>");
		}
	}
};

pDef = function foo(power) {
	if (pHitPoints < 1) {
		pHitPoints = 'Dead';
		$('#pHitPoints').html(pHitPoints);
	} else if (pHitPoints === 'Dead'){
    $('#PlayerLog').html('<p>You are dead...</p>');
  } else {
		if ((turn % 2) === 1) {
			pDefPoints = pDefPoints + power;
			pMit = Math.log(pDefPoints) / Math.log(1.1);
			$('#pDefPoints').html(Math.round(pDefPoints));
			$('#pMit').html(Math.round(pMit));
			$('#PlayerLog').html(
				"<p style = 'color: green;'>Player increased defense</p>"
			);
      $('#allLog').prepend(
        "<p style = 'color: Green;'>P: Increased Defense by " + Math.round(pDefPlus) + "</p>" 
			);
			turn = turn + 1;
			$('#Turn').html(turn);
			computerMove(1);
		} else {
			$('#PlayerLog').html("<p>It is not your turn</p>");
		}
	}
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

changeTurn = function bar(power) {
	turn = turn + power;
	$('#Turn').html(turn);
};