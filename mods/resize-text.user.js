// ==UserScript==
// @name         Change font size
// @namespace    https://github.com/aclist
// @version      0.2.1
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
        magSidebar: `${settings["optionMagSidebar"]}px`,
        homeSidebar: `${settings["optionHomeSidebar"]}px`,
        profile: `${settings["optionProfile"]}px`
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
    const postContent = document.querySelectorAll('article.entry');

    // post *loops*
    postContent.forEach(postContentElem => {
        const textContentElements = postContentElem.querySelectorAll('h1, h3, p, a, time, button:not([data-action="subject#vote"])');
        const textContentH2 = postContentElem.querySelectorAll('span.entry__domain, h2 a');
        const voteText = postContentElem.querySelectorAll('span[data-subject-target="favCounter"], span[data-subject-target="downvoteCounter"], i.fa-arrow-up, i.fa-arrow-down');

        textContentElements.forEach(textContentElem => {
            textContentElem.style.fontSize = fontSizes.posts;
        });

        textContentH2.forEach(textContentH2 => {
            const postSizeNum = settings["optionPosts"];
            textContentH2.style.fontSize = `${postSizeNum * 1.2}pt`;
        });

        voteText.forEach(textVote => {
           // let textVoteSize = `${contentSizeNum * 1.05}pt`;
            textVote.style.fontSize = fontSizes.posts;
        });

    });

// === MAG SIDEBAR === //

    // mag sidebar *variables*
    const magSidebar = document.querySelectorAll('aside#sidebar section.magazine.section');
    const magName = document.querySelectorAll('aside#sidebar section.magazine.section a');
    const modSidebar = document.querySelectorAll('section.user-list, section.user-list h3');
    // mag side bar *loops*
    magSidebar.forEach(sidebar => {
        sidebar.style.fontSize = fontSizes.magSidebar;
    })

    magName.forEach(mag => {
        mag.style.fontSize = fontSizes.magSidebar;
    })

    modSidebar.forEach(mods => {
        mods.style.fontSize = fontSizes.magSidebar;
    })

// === HOMEPAGE SIDEBAR === //

    // homepage sidebar *variables*
    const homepageSidebarMain = document.querySelectorAll('aside#sidebar section.related-magazines');
    const homeActiveUsers = document.querySelectorAll('aside#sidebar section.active-users');
    const homepageSidebarPosts = document.querySelectorAll('aside#sidebar section.posts');
    const homeEntries = document.querySelectorAll('aside#sidebar section.entries');

    // homepage sidebar loops
    homepageSidebarMain.forEach(homepageSidebarElem => {
            const homeRelatedMags = homepageSidebarElem.querySelectorAll('a img, h1, h2, h3, p, li, span, a:not(.icon), i');

            homeRelatedMags.forEach(relatedMagElem => {
                relatedMagElem.style.fontSize = fontSizes.homeSidebar;
            });
    })

    homeActiveUsers.forEach(activeUserElem => {
        const activeUser = activeUserElem.querySelectorAll('h3');
        activeUser.forEach(resizeActiveUser => {
            resizeActiveUser.style.fontSize = fontSizes.homeSidebar;
        })
    })

    homepageSidebarPosts.forEach(sidebarPostsElem => {
        const sidebarPosts = sidebarPostsElem.querySelectorAll('h3, div.container blockquote.content p, div.container time, div.container a');

        sidebarPosts.forEach(sidebarPost => {
            sidebarPost.style.fontSize = fontSizes.homeSidebar;
        });
    });

    homeEntries.forEach(homeEntryElem => {
        const homeEntry = homeEntryElem.querySelectorAll('h3, div.container blockquote.content p, div.container time, div.container a');

        homeEntry.forEach(homeEntryText => {
            homeEntryText.style.fontSize = fontSizes.homeSidebar;
        })
    })


// === PROFILE === //

    // profile *variables*
    const profileBox = document.querySelectorAll('div.user-box');
    const profileInfo = document.querySelectorAll('aside#sidebar section.user-info');

    // profile *loops*
    profileBox.forEach(profileElem => {
        const profileBoxElem = profileElem.querySelectorAll('h1, p, small');

       profileBoxElem.forEach(resizeProfileElem => {
        resizeProfileElem.style.fontSize = fontSizes.profile;
       })

    })

    profileInfo.forEach(profileInfoElem => {
        const profileInfoElement = profileInfoElem.querySelectorAll('h3, ul, li, a, p');

        profileInfoElement.forEach(resizeProfileInfoElems => {
            resizeProfileInfoElems.style.fontSize = fontSizes.profile;
        })
    })












    const kesModal = document.querySelector('div.kes-settings-modal-content');
    const transCheckbox = document.querySelector('label input[kes-key="transCheckbox"]');
    
    const observer = new MutationObserver(function(mutationsList) {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          // see if modal is added
          const kesModalContent = document.querySelector('div.kes-settings-modal-content');
          const kesModalContainer = document.querySelector('div.kes-settings-modal-container');
    
          if (kesModalContent && kesModalContainer) {
            kesModalContent.style.backgroundColor = '#2c2c2c00';
            kesModalContainer.style.backgroundColor = 'transparent';
    
            return;
          }
        }
      }
    });
    
    transCheckbox.addEventListener('change', function() {
      if (transCheckbox.checked) {
        observer.observe(document.body, { childList: true, subtree: true });
        console.log("Transparency on");
      } else {
        kesModal.style.backgroundColor = ''; 
        kesModalContainer.style.backgroundColor = '';
        console.log("Transparency off");
      }
    });
    



} // end of resizeText()


function textResize(toggle) {
    if (toggle) {
        resizeText();
    } else {
    }
}
