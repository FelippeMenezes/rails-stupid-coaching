import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Ask ^350 your ^250 Coach ^350 anything:", "Pergunte ^250 qualquer ^350 coisa ^250 ao ^150 seu ^250 Coach:"],
    typeSpeed: 75,
    backSpeed: 50,
    loop: true,
    startDelay: 2000,
    backDelay: 3000
  });
}

export { loadDynamicBannerText };