let punti = 0;
let velocita = 25;
let perso = 0;
let cliccato = false;
const audio = new Audio("pigeons-flying-6351.mp3");

//CLICK MANAGEMENT (INCREASE POINTS)
function gestPoints() {
    punti ++;
    document.getElementById('number').innerHTML = punti;
    console.log(punti);
    document.getElementById('palla').style = ('transition-duration:700ms; transform: scale(1.7); opacity:0%;');
    cliccato = true;
    audio.play();
  }

// ANIMATION MANAGEMENT
function myMove() {
    const elem = document.getElementById("palla");
    let posY = -10;
    let posX = 150;
    let interval = setInterval(frame, velocita);

    function frame() {
      //CHECK IF THE BALL IT'S AT THE END OF SCREEN AND IF LOST==5
        if (posY == 100 && perso == 5) { 
          clearInterval(interval);
          alert ('GAMEOVER! Il tuo punteggio è ' + punti);
          // CASE THE BALL IT'S CLICKED (DECREASE "SPEED" AND SET UPDATE SETINTERVAL)
        } else if (posY == 100 && cliccato == true) { 
            cliccato = false; // 
            posY = -10;
            posX = Math.floor(Math.random() * 1000); 
            document.getElementById('palla').style = ('opacity:100%;');
            setInterval(frame, (velocita+0.1))
            // CASE THE BALL IT'S NOT CLICKED (INCREASE "LOST")
          } else if (posY == 100 && cliccato == false) { 
            perso += 1;
            posY = -10;
            posX = Math.floor(Math.random() * 1000); 
            document.getElementById('palla').style = ('opacity:100%;');
          } else {
            elem.style.left = posX + 'px';
            elem.style.top = posY + '%';
            posY++; 
        }}}
myMove();