// const landingConfig = window.landingConfig;

import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

const contractCode = document.querySelector(".hero__contract-code");
const contractBtn = document.querySelector(".hero__contract-btn");

contractBtn.addEventListener('click', () => {
  contractCode.select();
  document.execCommand("copy");
});

tippy('.hero__contract-btn', {
  theme: 'custom',
  trigger: 'click',
  // content: '<div style="color: aqua; background: red" class="hero__contract-btn-tooltip">Copied</div>',
  content: 'Copied',
  animation: 'scale',
  // allowHTML: true,
});

// const appHeight = () => {
//   const clientWidth = document.body.clientWidth;
//
//   if (clientWidth < 479) {
//     document.querySelector('body').style.minHeight = `${window.innerHeight}px`;
//     document.querySelector('.main').style.minHeight = `${window.innerHeight}px`;
//     document.querySelector('.main__container').style.minHeight = `${window.innerHeight}px`;
//   } else {
//     document.querySelector('body').style.minHeight = `100vh`;
//     document.querySelector('.main').style.minHeight = `100vh`;
//     document.querySelector('.main__container').style.minHeight = `100vh`;
//   }
// };
//
// window.addEventListener('resize', appHeight);
//
// appHeight();
//
// const landingParallax = window.landingConfig.isParallaxEffect;
//
// function parallax() {
//   if (landingParallax) {
//     const windowWidth = window.screen.width;
//     const balls = document.querySelector('.elements_parallax');
//
//     if (windowWidth > 1199) {
//       const body = document.querySelector('body');
//
//       body.addEventListener('mousemove', function (e) {
//         const pageX = e.clientX - window.innerWidth / 2;
//         const pageY = e.clientY - window.innerHeight / 2;
//         balls.style.transform = 'translateX(calc(' + (pageX / -500) + '%)) translateY(calc(' + (pageY / -500) + '%))';
//       });
//     } else {
//       balls.style.transform = 'translateX(0) translateY(0)';
//     }
//   }
// }
//
// parallax();
