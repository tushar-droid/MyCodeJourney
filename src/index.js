import './styles.css';
import profileImage from './assets/profile.jpg';
import resumePath from './assets/Tushar-Resume.pdf';
import battleShipImage from './assets/battleship.png';
import weatherImage from './assets/weather-forecast.png';
import listImage from './assets/list.png';
import dashImage from './assets/landing-page.png';
import topImage from './assets/top.png';
import fccImage from './assets/fcc.png';
import headerResumeImage from './assets/header-resume.png';
import footerResumeImage from './assets/footer-resume.png';
import CVImage from './assets/cv.png';
import gameSphereImage from './assets/gamesphere.png';
import memorygameImage from './assets/memory-game.png';

const profileImgContainer = document.querySelector('.profile');
const battleImageContainer = document.querySelector('.battleship-image-container');
const weatherImageContainer = document.querySelector('.weather-image-container');
const todoListImageContainer = document.querySelector('.todoList-image-container');
const dashImageContainer = document.querySelector('.dash-image-container');
const topImageContainer = document.querySelector('.top-image-container');
const fccImageContainer = document.querySelector('.fcc-image-container');
const headerResumeContainer = document.querySelector('.header-resume-container');
const footerResumeContainer = document.querySelector('.footer-resume-container');
const cvImageContainer = document.querySelector('.cvbuilder-image-container');
const gamesphereImageContainer = document.querySelector('.gamesphere-image-container');
const memorygameImageContainer = document.querySelector('.memorygame-image-container');

cvImageContainer.src = CVImage;
battleImageContainer.src = battleShipImage;
profileImgContainer.src = profileImage;
weatherImageContainer.src = weatherImage;
todoListImageContainer.src = listImage;
dashImageContainer.src = dashImage;
topImageContainer.src = topImage;
fccImageContainer.src = fccImage;
headerResumeContainer.src = headerResumeImage;
footerResumeContainer.src = footerResumeImage;
gamesphereImageContainer.src = gameSphereImage;
memorygameImageContainer.src = memorygameImage;

const cards = document.querySelectorAll('.project-card');

cards.forEach((card) => {
  card.addEventListener('click', (e) => {
    if (e.target.classList.contains('repo-link')) return;
    const link = card.getElementsByClassName('link')[0].href;
    window.open(link, '_blank');
  });
});

window.onload = () => {
  document.querySelector('.loader').style.display = 'none';
  document.body.classList.add('loaded');
  document.querySelector('.content').style.display = 'block';
};

function openResume() {
  console.log('opening Resume');
  window.open(resumePath, '_blank');
}

headerResumeContainer.addEventListener('click', openResume);
footerResumeContainer.addEventListener('click', openResume);
