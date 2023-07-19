const main = document.getElementsByTagName('main')[0];
console.log(main.querySelector('#theme-button'));
const themeButton = (window.innerWidth > 968 ? main : document).querySelector('#theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun';

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme);
};

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});


window.onscroll = function() {setSticky()};

const header = document.getElementById("header");
function setSticky() {
  if (window.pageYOffset > window.innerHeight) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  };
};

function scrollTop(){
    const scrollTop = document.getElementById('scrolltop');
    if(this.scrollY >= 200) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop);

function scaleCv(){
  document.body.classList.add('scale-cv');
};

function removeScale(){
  document.body.classList.remove('scale-cv');
};

let areaCv = document.getElementById('resume');

let resumeButton = (window.innerWidth > 968 ? main : document).querySelector('#resume-button');

let opt = {
margin:       0,
filename:     'Gleb-Zlobin-Resume.pdf',
image:        { type: 'jpeg', quality: 0.98 },
html2canvas:  { scale: 4 },
jsPDF:        { format: 'a4', orientation: 'portrait' }
};

function generateResume(){
    html2pdf(areaCv, opt);
};

resumeButton.addEventListener('click', () =>{
    scaleCv();
    generateResume();
    setTimeout(removeScale, 5000);
});
