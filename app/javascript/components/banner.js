import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Ask your coach anything:"],
    typeSpeed: 50,
    loop: true,
    backSpeed: 25
  });
}

export { loadDynamicBannerText };