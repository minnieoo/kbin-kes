// ==UserScript==
// @name         Change font size
// @namespace    https://github.com/aclist
// @version      0.3.9
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

let eventListenerCheckbox;
let eventListenerDefaultButton;

function resizeText() {
    const settings = getModSettings('resize');
// === FONT SIZE SETTINGS OBJ === //
    const fontSizes = {
        header: `${settings["optionHeader"]}px`,
        posts: `${settings["optionPosts"]}px`,
        magSidebar: `${settings["optionMagSidebar"]}px`,
        homeSidebar: `${settings["optionHomeSidebar"]}px`,
        profile: `${settings["optionProfile"]}px`,
        posts: `${settings["optionCreate"]}px`
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

// === CREATE POSTS === //

    // create posts *variables*
    const createPost = document.querySelectorAll('form.entry-create');
    const createMicroBlog = document.querySelectorAll('form.post-add');
    const createHeader = document.querySelectorAll('aside.options.options--top.options-activity');
    const createMag = document.querySelectorAll('form[name="magazine"]');

    // create posts *loops*
    createPost.forEach(createPostElem => {
        const createPostElement = createPostElem.querySelectorAll('label, markdown-toolbar, ul, li, button, i, textarea[placeholder="Body"], input[placeholder="Select a magazine"], select[id^="entry_"][id$="_lang"], input.image-input');

        createPostElement.forEach(createPostResize => {
            createPostResize.style.fontSize = fontSizes.posts;
        })
    });

    createMicroBlog.forEach(createMicroElem => {
        const createMicroBlogElement = createMicroElem.querySelectorAll('markdown-toolbar, ul, li, button, i, label, input, input#post_magazine_autocomplete-ts-control, select[id="post_lang"], input.image-input');

        createMicroBlogElement.forEach(microBlogResize => {
            microBlogResize.style.fontSize = fontSizes.posts;
        })

    });

    createHeader.forEach(createHeaderElem => {
        const createHeaderElement = createHeaderElem.querySelectorAll('div.options__title h2, menu li a');

        createHeaderElement.forEach(createHeaderResize => {
            createHeaderResize.style.fontSize = fontSizes.posts;
        })
    });

    createMag.forEach(createMagElem => {
        const createMagElement = createMagElem.querySelectorAll('label, markdown-toolbar, ul, li, button, i, input[placeholder="/m/"], textarea[placeholder="Description"], textarea[placeholder="Rules"]');

        createMagElement.forEach(createMagResize => {
            createMagResize.style.fontSize = fontSizes.posts;
        })
    });









// === TRANSPARENCY CHECKBOX FUNCTIONALITY === //
    if (!eventListenerCheckbox) {
        eventListenerCheckbox = (e) => {
            const transCheckbox = document.querySelector('label input[kes-key="transCheckbox"]');
            const kesModalContent = document.querySelector('div.kes-settings-modal-content');
            const kesModalContainer = document.querySelector('div.kes-settings-modal-container');
        
            if (e.target.type === 'checkbox' && e.target.getAttribute('kes-key') === 'transCheckbox') {
                console.log('CHECKBOX HAS BEEN CLICKED');
        
                if (transCheckbox.checked) {
                    console.log('CHECKBOX HAS BEEN CHECKED');
                    kesModalContent.style.backgroundColor = '#2c2c2c00';
                    kesModalContainer.style.backgroundColor = 'transparent';
        
                } else {
                    console.log('CHECKBOX HAS BEEN !!UNCHECKED!!');
                    kesModalContent.style.backgroundColor = '';
                    kesModalContainer.style.backgroundColor = '';
                }
        
                e.stopPropagation();
            }
        
        
        }
        
        document.addEventListener('click', eventListenerCheckbox);
    }

// === RESET TO DEFAULTS FUNCTIONALITY === //
        if (!eventListenerDefaultButton) {
            eventListenerDefaultButton = (e) => {
                const defaultButton = document.querySelector('input[kes-key="defaultButton"]');
                const buttonColor = defaultButton.style.backgroundColor;
                function buttonStyle(button) { 
                    button.style.backgroundColor = buttonColor; 
                }
            
                if (e.target.type === 'button' && e.target.getAttribute('kes-key') === 'defaultButton') {
                    console.log('Reset defaults button clicked');
                    defaultButton.style.backgroundColor = '#079D0C'
                    setTimeout(() => buttonStyle(defaultButton), 500);

                }


            }

            document.addEventListener('click', eventListenerDefaultButton); 
        }


} // end of resizeText() function //


function textResize(toggle) {
    if (toggle) {
        resizeText();
    } else {
        document.removeEventListener('click', eventListenerCheckbox);
        document.removeEventListener('click', eventListenerDefaultButton);
        eventListenerCheckbox = null;
        eventListenerDefaultButton = null;

    }
}
