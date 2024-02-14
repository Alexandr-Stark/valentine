const canvas = document.getElementById('confetti')

const jsConfetti = new JSConfetti();

document.addEventListener('DOMContentLoaded', function () {
  const envelope = document.getElementById('envelope');

  envelope.addEventListener('click', function () {
    if (envelope.className === 'close') openEnvelope();
    else closeEnvelope();
    jsConfetti.addConfetti({
      emojis: ['🍪', '🌷', '💕'],
      emojiSize: 100,
      confettiNumber: 20,
    });
  });

  function openEnvelope() {
    envelope.classList.add('open');
    envelope.classList.remove('close');
  }

  function closeEnvelope() {
    envelope.classList.add('close');
    envelope.classList.remove('open');
  }
});
