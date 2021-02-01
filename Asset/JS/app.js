// UI Element
const man = document.querySelector('#walkingMan'),
      coin = document.querySelector('.coin');

// Assigning Variable
let timer;
let height = document.documentElement.clientHeight;
let width = document.documentElement.clientWidth;

// If the Elements are touching
function isTouching (a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}

handleTimer();

window.addEventListener('keyup', function(e) {
  if(e.key === 'ArrowDown' || e.key === 'Down') {
    moveVertical(man, 50);
  } 
  else if (e.key === 'ArrowUp' || e.key === 'Up') {
     moveVertical(man, -50);
  } 
  else if (e.key === 'ArrowRight' || e.key === 'Right') {
    moveHorizontal(man, 50);
    man.style.transform = 'scale(1, 1)';
  } 
  else if (e.key === 'ArrowLeft' || e.key === 'Left') {
    moveHorizontal(man, -50);
    man.style.transform = 'scale(-1, 1)';
  }

  if(isTouching(man, coin)) {
    clearInterval(timerId);
  }
});

const moveVertical = (avatar, value) => {
  let currTop = extractPos(avatar.style.top);
  avatar.style.top = `${currTop + value}px`;
}

const moveHorizontal = (avatar, value) => {
  let currLeft = extractPos(avatar.style.left);
  avatar.style.left = `${currLeft + value}px`;
} 

function handleTimer() {
  return timerId = setInterval(moveCoin, 3500);
}

// Move the coin randomly around the DOM
function moveCoin() {
  let x = Math.floor(Math.random() * document.documentElement.clientWidth);
  let y = Math.floor(Math.random() * document.documentElement.clientHeight);

  coin.style.top = `${y}px`;
  coin.style.left = `${x}px`;
}

moveCoin();

// Positioning the Man
let extractPos = (pos) => {
  if (!pos) return 100; 
  return parseInt(pos.slice(0, -2));
}
// Stop movement when man and coin touch
function stopMovement() {
  
}
