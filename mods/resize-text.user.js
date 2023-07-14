// ==UserScript==
// @name         Change font size
// @namespace    https://github.com/aclist
// @version      0.1
// @description  Change the size of comment text.
// @author       minnieo
// @match        https://kbin.social/*
// @match        https://fedia.io/*
// @match        https://karab.in/*
// @match        https://www.kbin.cafe/*
// @match        https://karab.in/*
// @icon         https://kbin.social/favicon.svg
// @grant        none
// ==/UserScript==


resizeText() {
    


  
}

  
  function addStep() {
    const headerStep = document.querySelector('input[kes-key="optionHeader"]');
    headerStep.setAttribute('steps', '.1');
  }

  function textResize(toggle) {
      if (toggle) {
          addStep();
          resizeText();
      } else {
      }
  }
  
