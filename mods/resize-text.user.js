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
    const settings = getModSettings('resize');
// === FONT SIZE SETTINGS OBJ === //
    const fontSizes = {
        header: `${settings["optionHeader"]}px`,
        content: `${settings["optionContent"]}px`,
        magSidebar: `${settings["optionMagSidebar"]}px`
      };


// === HEADER === //
    //header *variables*
    const topHeader = document.querySelectorAll('#header.header'); // selects elem w id header and class header
    const threadMenu = document.querySelectorAll('menu.options__main'); //
    const avatar = document.querySelector('img.user-avatar');
    const avatarWidth = avatar.offsetWidth;
    const avatarHeight = avatar.offsetHeight;

    // header *loops*
    topHeader.forEach(headerElem => {
        const topHeaderElems = headerElem.querySelectorAll('a img, h1, h2, h3, p, li, span, a:not(.icon), i');
        
        topHeaderElems.forEach(resizeHeaderElems => {
            const percentage = fontSizes.header * 5; // 80% of pix size
            const newWidth = avatarWidth * (percentage / 100);
            const newHeight = avatarHeight * (percentage / 100);

            avatar.style.width = `${newWidth}px`;
            avatar.style.height = `${newHeight}px`;

            resizeHeaderElems.style.fontSize = fontSizes.header;
        })

    }) 







} // end of resizeText()


function textResize(toggle) {
    if (toggle) {
        resizeText();
    } else {
    }
}
