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
        posts: `${settings["optionPosts"]}px`,
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

// === POSTS === //
    // post *variables*
    const content = document.querySelectorAll('article.entry');

    // post *loops*
    content.forEach(header => {
        const textContentElements = header.querySelectorAll('h1, h3, p, a, time, button:not([data-action="subject#vote"])');
        const textContentH2 = header.querySelectorAll('span.entry__domain, h2 a');
        const voteText = header.querySelectorAll('span[data-subject-target="favCounter"], span[data-subject-target="downvoteCounter"], i.fa-arrow-up, i.fa-arrow-down');

        textContentElements.forEach(textElem => {
            textElem.style.fontSize = fontSizes.posts;
        });

        textContentH2.forEach(textH2 => {
            const postSizeNum = settings["optionPosts"];
            textH2.style.fontSize = `${postSizeNum * 1.2}pt`;
        });

        voteText.forEach(textVote => {
           // let textVoteSize = `${contentSizeNum * 1.05}pt`;
            textVote.style.fontSize = fontSizes.posts;
        });

    });







} // end of resizeText()


function textResize(toggle) {
    if (toggle) {
        resizeText();
    } else {
    }
}
