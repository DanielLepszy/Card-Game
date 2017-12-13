var cards = new Array();
var card = ["Vesemir_Gwent.png", "Radowid_Gwent.png", "Henselt_Gwent.png", "Foltest_Gwint.png",
"Henselt_Gwent.png", "Ciri_Gwnet.png", "Ciri_Gwnet.png", "Emhyr_Gwent.png",
"Foltest_Gwint.png", "Vesemir_Gwent.png", "Radowid_Gwent.png", "Emhyr_Gwent.png"]; 
var arr = [0,1,2,3,4,5,6,7,8,9,10,11];

    for (var i=0; i<arr.length; i++) { 
        var j = Math.floor(Math.random() * arr.length); 
        var temp = arr[i]; 
        arr[i] = arr[j]; 
        arr[j] = temp; 
    }

    for (var i=0; i< card.length; i++) {
  
        cards.push(card[arr[i]]);
        delete card[arr[i]];      
    }

var Card0 = document.getElementById('Card0');
var Card1 = document.getElementById('Card1');
var Card2 = document.getElementById('Card2');
var Card3 = document.getElementById('Card3');

var Card4 = document.getElementById('Card4');
var Card5 = document.getElementById('Card5');
var Card6 = document.getElementById('Card6');
var Card7 = document.getElementById('Card7');

var Card8 = document.getElementById('Card8');
var Card9 = document.getElementById('Card9');
var Card10 = document.getElementById('Card10');
var Card11 = document.getElementById('Card11');


Card0.addEventListener("click", function () { CardReveal(0) });
Card1.addEventListener("click", function () { CardReveal(1) });
Card2.addEventListener("click", function () { CardReveal(2) });
Card3.addEventListener("click", function () { CardReveal(3) });

Card4.addEventListener("click", function () { CardReveal(4) });
Card5.addEventListener("click", function () { CardReveal(5) });
Card6.addEventListener("click", function () { CardReveal(6) });
Card7.addEventListener("click", function () { CardReveal(7) });

Card8.addEventListener("click", function () { CardReveal(8) });
Card9.addEventListener("click", function () { CardReveal(9) });
Card10.addEventListener("click", function () { CardReveal(10) });
Card11.addEventListener("click", function () { CardReveal(11) });

var visible = false;
var turnCounter = 0;
var visible_nr;
var lock = false;
var finishpair = 6;

function CardReveal(nr) {

    var opacityvalue = $('#Card' + nr).css('opacity')
    if (opacityvalue != 0 && lock == false) {
        lock = true;

        var picture = "url(Cards/" + cards[nr] + ")";

        $('#Card' + nr).css('background-image', picture);
        $('#Card' + nr).addClass('CardsActive');
        $('#Card' + nr).removeClass('Cards');

        if (visible == false) {
            //first card
            visible = true;
            visible_nr = nr;
            lock = false;
        }
        else {
            //second Card
            if (cards[visible_nr] == cards[nr]) {
                setTimeout(function () { HidePairCards(nr, visible_nr) }, 850);

            }
            else {
                //alert("pudlo");
                setTimeout(function () { RestorePairCards(nr, visible_nr) }, 1050);
            }
            turnCounter++;
            $('.Scores').html('Turn counter: ' + turnCounter);
            visible = false;

        }
    }
}       
function HidePairCards(FirstCard, SecondCard) {
    $('#Card' + FirstCard).css('opacity', '0')
    $('#Card' + SecondCard).css('opacity', '0')
    lock = false
    finishpair--;

    if( finishpair==0)
    {
        $('#board').html('<h1> You win in '+ turnCounter+'th round')
    }
}
function RestorePairCards(FirstCard, SecondCard) {
    $('#Card' + FirstCard).css('background-image', 'url(Cards/flippedFaction2.png');
    $('#Card' + FirstCard).toggleClass('Cards');

    $('#Card' + SecondCard).css('background-image', 'url(Cards/flippedFaction2.png');
    $('#Card' + SecondCard).toggleClass('Cards');

    lock = false
}