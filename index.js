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
    $(".tile").removeClass("disable-div");
    $('#winner').text(tictactoe);
    $(this).removeClass('highlight');
  })

  function changePlayer() {
    active === 0 ? active = 1 : active = 0;
  }

  function checkForWin() {
    if($('#b0').text() === $('#b1').text() && $('#b0').text() ===$('#b2').text() && $('#b0').text() === 'X'
       ||$('#b3').text() === $('#b4').text() && $('#b3').text() ===$('#b5').text() && $('#b3').text() === 'X'
       ||$('#b6').text() === $('#b7').text() && $('#b6').text() ===$('#b8').text() && $('#b6').text() === 'X'
       ||$('#b0').text() === $('#b3').text() && $('#b0').text() ===$('#b6').text() && $('#b0').text() === 'X'
       ||$('#b1').text() === $('#b4').text() && $('#b1').text() ===$('#b7').text() && $('#b1').text() === 'X'
       ||$('#b2').text() === $('#b5').text() && $('#b2').text() ===$('#b8').text() && $('#b2').text() === 'X'
       ||$('#b0').text() === $('#b4').text() && $('#b0').text() ===$('#b8').text() && $('#b0').text() === 'X'
       ||$('#b2').text() === $('#b4').text() && $('#b2').text() ===$('#b6').text() && $('#b2').text() === 'X')
      {
        $('#winner').text(Player1Win);
        winUI();
        highlight();
      }
      else if($('#b0').text() === $('#b1').text() && $('#b0').text() ===$('#b2').text() && $('#b0').text() === 'O'
        ||$('#b3').text() === $('#b4').text() && $('#b3').text() ===$('#b5').text() && $('#b3').text() === 'O'
        ||$('#b6').text() === $('#b7').text() && $('#b6').text() ===$('#b8').text() && $('#b6').text() === 'O'
        ||$('#b0').text() === $('#b3').text() && $('#b0').text() ===$('#b6').text() && $('#b0').text() === 'O'
        ||$('#b1').text() === $('#b4').text() && $('#b1').text() ===$('#b7').text() && $('#b1').text() === 'O'
        ||$('#b2').text() === $('#b5').text() && $('#b2').text() ===$('#b8').text() && $('#b2').text() === 'O'
        ||$('#b2').text() === $('#b4').text() && $('#b2').text() ===$('#b6').text() && $('#b2').text() === 'O'
        ||$('#b0').text() === $('#b4').text() && $('#b0').text() ===$('#b8').text() && $('#b0').text() === 'O')
      {
        $('#winner').text(Player2Win);
        winUI();
        highlight();
      }
      else if(count === 9)
      {
        $('#winner').text(itsDraw);
        audio['draw'].play();
        highlight();
      }   
  }
  
  function sleep(ms) {
    return new Promise(function (resolve) {
      setTimeout(resolve, ms);
    });
  }
  
  function highlight() {
      $('#newGame').addClass('highlight');
  }

  async function winUI(){
    $(".tile").addClass("disable-div");
    audio['win'].play();
    for(let i=0; i<3; i++){
      $('.jumbotron').addClass('winUI-0');
      await sleep(300);
      $('.jumbotron').removeClass('winUI-0').addClass('winUI-1');  
      await sleep(300);
      $('.jumbotron').removeClass('winUI-1');  
    }
  }
});
