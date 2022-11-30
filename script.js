const switchS = document.querySelector('.switch');
const interrupter = document.querySelector('.interrupter');
const themeP = document.querySelector('#theme'); // themeP = paragraph theme
const contentSec = document.querySelector('#content-section'); // contentSec = content-section

interrupter.addEventListener('click', changeTheme);

function changeTheme() {
  interrupter.classList.toggle('slide');
  contentSec.classList.toggle('light-color');
  if(interrupter.classList.contains('slide')) {
    document.body.classList.add('bg-dark');
    switchS.classList.remove('switch-dark');
    switchS.classList.add('switch-light');
    themeP.textContent = 'Light Theme';
    themeP.classList.add('light-color');
  } else {
    document.body.classList.remove('bg-dark');
    switchS.classList.add('switch-dark');
    switchS.classList.remove('switch-light');
    themeP.textContent = 'Dark Theme';
    themeP.classList.remove('light-color');
  }
}