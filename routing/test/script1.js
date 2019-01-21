let t,a,b,c;
async function load() {
  t = await fetch('https://fonts.googleapis.com/css?family=Shadows+Into+Light');
  a = await t.json();
}
load();
function renderText() {
  let ctx = document.querySelector('canvas').getContext('2d');
  ctx.font = `48px t`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Waka Waka', 150, 50);
}
renderText();
// document.fonts.load('10pt "https://fonts.googleapis.com/css?family=Shadows+Into+Light"').then(renderText);