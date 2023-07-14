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
    // settings
    const settingsHeader = getModSettings("optionHeader");
    const headerFontSize = settings["optionHeader"]


    



    // === HEADER === //
    function headerResize() {
        // main header elems
        const topHeader = document.querySelectorAll('#header.header'); // selects elem w id header and class header
        const threadMenu = document.querySelectorAll('menu.options__main'); // 
        // internal header elems
        const topHeaderElems = topHeader.querySelectorAll('a img, h1, h2, h3, p, li, span, a:not(.icon), i');
        const threadMenuElems = threadMenu.querySelectorAll('li, a');
    
        // loops
        topHeaderElems.forEach(headerElem => {
            headerElem.style.fontSize = `${headerFontSize}pt`;       
        });
    } //end headerResize()

    



  
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
  
