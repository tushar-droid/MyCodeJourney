import './styles.css';
import profileImage from './assets/profile.jpg';
import footerImage from './assets/footer.jpg';
import battleShipImage from './assets/battleship.png';

const profileImgContainer = document.querySelector('.profile');
const footerImgContainer = document.querySelector('.footer-img');
const battleImage = document.querySelector('.battleship-image-container');
battleImage.src = battleShipImage;
profileImgContainer.src = profileImage;
footerImgContainer.src = footerImage;
