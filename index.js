$(document).ready(function (){
  let count = 0;
  let active = 0;

  const player = ['X', 'O'];
  
  const audio = {};  
  audio['move-0'] = new Audio();
  audio['move-0'].src = './sounds/move-0.wav';
  audio['move-1'] = new Audio();
  audio['move-1'].src = './sounds/move-1.wav';
  audio['win'] = new Audio();
  audio['win'].src = './sounds/win.mp3';
  audio['draw'] = new Audio();
  audio['draw'].src = './sounds/draw.mp3';
  
  const Player1Win = "Player 1 wins!";
  const Player2Win = "Player 2 wins!";
  const tictactoe = "Tic-Tac-Toe";
  const itsDraw = "It's a draw!";

  $('#b0').click(function (){
    $('#b0 p').text(player[active]).addClass(player[active]);
    $(this).addClass('disable-div');
    audio[`move-${active}`].play();
    changePlayer();
    count++;
    checkForWin();
  })

  $('#b1').click(function (){
    $('#b1 p').text(player[active]).addClass(player[active]);
    $(this).addClass('disable-div');
    audio[`move-${active}`].play();
    changePlayer();
    count++;
    checkForWin();
  })

  $('#b2').click(function (){
    $('#b2 p').text(player[active]).addClass(player[active]);
    $(this).addClass('disable-div');
    audio[`move-${active}`].play();
    changePlayer();
    count++;
    checkForWin();
  })

  $('#b3').click(function (){
    $('#b3 p').text(player[active]).addClass(player[active]);
    $(this).addClass('disable-div');
    audio[`move-${active}`].play();
    changePlayer();
    count++;
    checkForWin();
  })

  $('#b4').click(function (){
    $('#b4 p').text(player[active]).addClass(player[active]);
    $(this).addClass('disable-div');
    audio[`move-${active}`].play();
    changePlayer();
    count++;
    checkForWin();
  })

  $('#b5').click(function (){
    $('#b5 p').text(player[active]).addClass(player[active]);
    $(this).addClass('disable-div');
    audio[`move-${active}`].play();
    changePlayer();
    count++;
    checkForWin();
  })

  $('#b6').click(function (){
    $('#b6 p').text(player[active]).addClass(player[active]);
    $(this).addClass('disable-div');
    audio[`move-${active}`].play();
    changePlayer();
    count++;
    checkForWin();
  })

  $('#b7').click(function (){
    $('#b7 p').text(player[active]).addClass(player[active]);
    $(this).addClass('disable-div');
    audio[`move-${active}`].play();
    changePlayer();
    count++;
    checkForWin();
  })

  $('#b8').click(function (){
    $('#b8 p').text(player[active]).addClass(player[active]);
    $(this).addClass('disable-div');
    audio[`move-${active}`].play();
    changePlayer();
    count++;
    checkForWin();
  })

  $('#newGame').click(function(){
    count = 0;
    active = 0;
    $(".tile p").text("").removeClass('X').removeClass('O');
    $(".tile").removeClass("disable-div").removeClass('win-tile');
    $('#winner').text(tictactoe);
    $(this).removeClass('highlight');
  })

  function changePlayer() {
    active === 0 ? active = 1 : active = 0;
  }

  const winList = [
    ['#b0', '#b1', '#b2'],
    ['#b3', '#b4', '#b5'],
    ['#b6', '#b7', '#b8'],
    ['#b0', '#b3', '#b6'],
    ['#b1', '#b4', '#b7'],
    ['#b2', '#b5', '#b8'],
    ['#b0', '#b4', '#b8'],
    ['#b2', '#b4', '#b6'],
  ];

  function checkForWin() {
    for(let i=0; i<8; i++) {
      let sequence = winList[i];
      let a = sequence[0];
      let b = sequence[1];
      let c = sequence[2];

      if($(a).text() === $(b).text() && $(a).text() === $(c).text() && $(a).text() === 'X'){
        $('#winner').text(Player1Win);
        highlightTile(a, b, c);
        winOutcome();
        highlightBtn();
        break;
      }
      else if($(a).text() === $(b).text() && $(a).text() === $(c).text() && $(a).text() === 'O'){
        $('#winner').text(Player2Win);
        highlightTile(a, b, c);
        winOutcome();
        highlightBtn();
        break;
      }
      else if(count === 9 && i===7){
        $('#winner').text(itsDraw);
        audio['draw'].play();
        highlightBtn();
      }
    }   
  }

  function highlightTile(a, b, c) {
    $(a).addClass('win-tile');
    $(b).addClass('win-tile');
    $(c).addClass('win-tile');
  }
  
  function sleep(ms) {
    return new Promise(function (resolve) {
      setTimeout(resolve, ms);
    });
  }
  
  function highlightBtn() {
      $('#newGame').addClass('highlight');
  }

  async function winOutcome(){
    $(".tile").addClass("disable-div");
    audio['win'].play();
    for(let i=0; i<3; i++){
      $('.jumbotron').addClass('winUI-0');
      await sleep(250);
      $('.jumbotron').removeClass('winUI-0').addClass('winUI-1');  
      await sleep(250);
      $('.jumbotron').removeClass('winUI-1');  
    }
  }
});
