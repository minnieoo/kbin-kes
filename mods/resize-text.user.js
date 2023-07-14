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


function resizeText() {
    // settings
    const settingsHeader = getModSettings("optionHeader");
    const headerFontSize = settSings["optionHeader"];






// === HEADER === //
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
//end headerResize()

}


function textResize(toggle) {
    if (toggle) {
        resizeText();
    } else {
    }
}
