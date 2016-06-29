var smallModal = document.getElementById('small-modal');
var mainModal = document.getElementById('main-modal');
var closeButton = document.getElementsByClassName('close')[0];
var timer;
var smallClicked = false;
var pressedKey = false;

function checkClickSmallModal(e) {
  smallClicked = true;
}

function checkCloseMainModal(e) {
  mainModal.classList.remove('show');
  pressedKey = false;
}

function checkKeyPressed(e) {
  if(e.keyCode == 81 && pressedKey == false) { // Q
    var count = 50;

    if(smallModal.classList.contains('fadeOutRight')) {
      smallModal.classList.remove('fadeOutRight');
    }
    pressedKey = true;
    smallModal.classList.add('show', 'fadeInRight');

    timer = setInterval(function() {
      count--;

      if(count <= 0) {
        smallModal.classList.remove('fadeInRight');
        smallModal.classList.add('fadeOutRight');
        pressedKey = false;
        clearInterval(timer);
      } else {
        if(smallClicked == true) {
          smallModal.classList.remove('show');
          mainModal.classList.add('show');
          smallClicked = false;
          clearInterval(timer);
        }
      }
    }, 100);
  }
}

smallModal.addEventListener('click', checkClickSmallModal, false);
closeButton.addEventListener('click', checkCloseMainModal, false);
window.addEventListener('keyup', checkKeyPressed, false);
