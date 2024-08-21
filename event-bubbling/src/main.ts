import './style.css';

const cls = {
  signalTriggered: 'signal_triggered',
  signalBubble: 'signal_bubble',
};

const sel = {
  box: '.box',
  mousedown: '.js--mousedown',
  mouseup: '.js--mouseup',
  click: '.js--click',
};

document.querySelectorAll(sel.box).forEach((el) => {
  ['mousedown', 'mouseup', 'click'].forEach((evType) => {
    el.addEventListener(evType, (ev) => {
      console.log('target       ', ev.target, '\ncurrentTarget', ev.currentTarget);

      const signal = el.querySelector(sel[evType as keyof typeof sel]);
      if (!signal) return;

      const clsTriggered = ev.target === ev.currentTarget ? cls.signalTriggered : cls.signalBubble;
      signal.classList.add(clsTriggered);
      setTimeout(() => signal.classList.remove(clsTriggered));
    });
  });
});

document.querySelector('#middle')?.addEventListener('click', (ev) => {
  ev.stopPropagation();
});

document.querySelector('#inner')?.addEventListener('mouseup', (ev) => {
  ev.stopPropagation();
});
