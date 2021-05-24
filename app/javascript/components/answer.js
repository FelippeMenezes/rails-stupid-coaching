import Typed from 'typed.js';

const loadDynamicAnswerText = () => {
  new Typed('#answer-typed-text', {
    strings: ["TEST TEST TEST"],
    typeSpeed: 65,
    backSpeed: 65,
    smartBackspace: true,
    loop: true
  });
}

export { loadDynamicAnswerText };