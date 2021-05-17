import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["<%= @answer %>"]
    typeSpeed: 35,
    loop: false
  });
}


export { loadDynamicBannerText };