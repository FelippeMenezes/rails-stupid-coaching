import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Ask your Coach anything:", "Pergunte qualquer coisa ao seu Coach:"],
    typeSpeed: 50,
    loop: true,
    backSpeed: 25
  });
}

export { loadDynamicBannerText };