const wrap = document.getElementById('envelopeWrap');
const openButton = document.getElementById('openLetter');
const hint = document.getElementById('tapHint');
const intro = document.getElementById('intro');
const gift = document.getElementById('gift');
const skip = document.getElementById('skipIntro');
const playSong = document.getElementById('playSong');
const playerWrap = document.getElementById('playerWrap');
const back = document.getElementById('backToLetter');

function revealGift() {
  wrap.classList.add('open');
  hint.textContent = 'a little gift, just for you ♡';
  skip.textContent = 'your little gift is ready ♡';
  window.setTimeout(() => {
    intro.classList.add('hidden');
    gift.classList.remove('hidden');
    window.scrollTo({top: 0, behavior: 'smooth'});
  }, 850);
}
openButton.addEventListener('click', revealGift);
skip.addEventListener('click', revealGift);
playSong.addEventListener('click', () => {
  playerWrap.classList.toggle('show');
  playSong.textContent = playerWrap.classList.contains('show') ? '⌃' : '▶';
  if (playerWrap.classList.contains('show')) {
    playerWrap.scrollIntoView({behavior:'smooth', block:'nearest'});
  }
});
back.addEventListener('click', () => {
  gift.classList.add('hidden');
  intro.classList.remove('hidden');
  wrap.classList.remove('open');
  hint.textContent = 'tap the letter to open';
  skip.textContent = 'open my little gift ♡';
  window.scrollTo({top:0,behavior:'smooth'});
});
