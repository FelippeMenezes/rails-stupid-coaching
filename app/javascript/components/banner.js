import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Ask ^350 your ^350 coach ^350 anything.", "Pergunte ^350 qualquer ^350 coisa ^350 ao ^350 seu ^350 coach."],
    typeSpeed: 65,
    backSpeed: 65,
    loop: true
  });
}

export { loadDynamicBannerText };