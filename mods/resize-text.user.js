// ==UserScript==
// @name         Change font size
// @namespace    https://github.com/aclist
// @version      0.7.0
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
        createPosts: `${settings["optionCreate"]}px`,
        comments: `${settings["optionComments"]}px`
      };


// === HEADER === //
    //header *variables*
    const topHeader = document.querySelectorAll('#header.header'); // selects elem w id header and class header
    const threadMenu = document.querySelectorAll('menu.options__main'); //
    const avatar = document.querySelector('img.user-avatar');


    // header *loops*
    topHeader.forEach(headerElem => {
        const topHeaderElems = headerElem.querySelectorAll('a img, h1, h2, h3, p, li, span, a:not(.icon), i');
        
        topHeaderElems.forEach(resizeHeaderElems => {
            resizeHeaderElems.style.setProperty('font-size', fontSizes.header);

            if (avatar) {
                const avatarWidth = avatar.offsetWidth;
                const avatarHeight = avatar.offsetHeight;
                const percentage = fontSizes.header * 5; // 80% of pix size
                const newWidth = avatarWidth * (percentage / 100);
                const newHeight = avatarHeight * (percentage / 100);

                avatar.style.width = `${newWidth}px`;
                avatar.style.height = `${newHeight}px`;
            }
        })

    }) 

// === POSTS === //
    // post *variables*
    const postContent = document.querySelectorAll('article.entry');

    // post *loops*
    postContent.forEach(postContentElem => {
        const textContentElements = postContentElem.querySelectorAll('h1.a, h3, p, a, time, button:not([data-action="subject#vote"])');
        const textContentH1 = postContentElem.querySelectorAll('span.entry__domain, h1 a');
        const textContentH2 = postContentElem.querySelectorAll('span.entry__domain, h2 a');
        const voteText = postContentElem.querySelectorAll('span[data-subject-target="favCounter"], span[data-subject-target="downvoteCounter"], i.fa-arrow-up, i.fa-arrow-down');

        textContentElements.forEach(textContentElem => {
            textContentElem.style.setProperty('font-size', fontSizes.posts);
        });

        textContentH2.forEach(textContentH2 => {
            const postSizeNum = settings["optionPosts"];
            textContentH2.style.setProperty('font-size', `${postSizeNum * 1.05}pt`);
        });

        textContentH1.forEach(textContentH1 => {
            const postSizeNumH1 = settings["optionPosts"];
            textContentH1.style.setProperty('font-size', `${postSizeNumH1 * 1.05}pt`);
        });

        voteText.forEach(textVote => {
           // let textVoteSize = `${contentSizeNum * 1.05}pt`;
            textVote.style.setProperty('font-size', fontSizes.posts);
        });

    });


// === COMMENTS  === //

    // comments *variables*
    const commentSection = document.querySelectorAll('section.comments.entry-comments.comments-tree');

    //comments *loops*
    commentSection.forEach(commentElem => {
        const commentElement = commentElem.querySelectorAll('blockquote header a, header time, div.content p, div.content a, span[data-subject-target$="Counter"], li, a, i.fa-arrow-up, i.fa-arrow-down, h1, h2, h3, h4');
    
        commentElement.forEach(commentResize => {
            commentResize.style.setProperty('font-size', fontSizes.comments);
        })
    })


// === MAG SIDEBAR === //

    // mag sidebar *variables*
    const magSidebar = document.querySelectorAll('aside#sidebar section.magazine.section');
    const magSidebarName = document.querySelectorAll('aside#sidebar section.magazine.section h3');
    const magName = document.querySelectorAll('aside#sidebar section.magazine.section a');
    const modSidebar = document.querySelectorAll('section.user-list, section.user-list h3');
    // mag side bar *loops*
    magSidebar.forEach(sidebar => {
        sidebar.style.setProperty('font-size', fontSizes.magSidebar);
    })

    magName.forEach(mag => {
        mag.style.setProperty('font-size', fontSizes.magSidebar);
    })

    modSidebar.forEach(mods => {
        mods.style.setProperty('font-size', fontSizes.magSidebar);
    })

    magSidebarName.forEach(magname => {
        magname.style.setProperty('font-size', fontSizes.magSidebar);
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
                relatedMagElem.style.setProperty('font-size', fontSizes.homeSidebar);
            });
    })

    homeActiveUsers.forEach(activeUserElem => {
        const activeUser = activeUserElem.querySelectorAll('h3');
        activeUser.forEach(resizeActiveUser => {
            resizeActiveUser.style.setProperty('font-size', fontSizes.homeSidebar);
        })
    })

    homepageSidebarPosts.forEach(sidebarPostsElem => {
        const sidebarPosts = sidebarPostsElem.querySelectorAll('h3, div.container blockquote.content p, div.container time, div.container a');

        sidebarPosts.forEach(sidebarPost => {
            sidebarPost.style.setProperty('font-size', fontSizes.homeSidebar);
        });
    });

    homeEntries.forEach(homeEntryElem => {
        const homeEntry = homeEntryElem.querySelectorAll('h3, div.container blockquote.content p, div.container time, div.container a');

        homeEntry.forEach(homeEntryText => {
            homeEntryText.style.setProperty('font-size', fontSizes.homeSidebar);
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
        resizeProfileElem.style.setProperty('font-size', fontSizes.profile);
       })

    })

    profileInfo.forEach(profileInfoElem => {
        const profileInfoElement = profileInfoElem.querySelectorAll('h3, ul, li, a, p');

        profileInfoElement.forEach(resizeProfileInfoElems => {
            resizeProfileInfoElems.style.setProperty('font-size', fontSizes.profile);
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
            createPostResize.style.setProperty('font-sizes', fontSizes.createPosts);
        })
    });

    createMicroBlog.forEach(createMicroElem => {
        const createMicroBlogElement = createMicroElem.querySelectorAll('markdown-toolbar, ul, li, button, i, label, input, input#post_magazine_autocomplete-ts-control, select[id="post_lang"], input.image-input');

        createMicroBlogElement.forEach(microBlogResize => {
            microBlogResize.style.setProperty('font-sizes', fontSizes.createPosts);
        })

    });

    createHeader.forEach(createHeaderElem => {
        const createHeaderElement = createHeaderElem.querySelectorAll('div.options__title h2, menu li a');

        createHeaderElement.forEach(createHeaderResize => {
            createHeaderResize.style.setProperty('font-size', fontSizes.createPosts);
        })
    });

    createMag.forEach(createMagElem => {
        const createMagElement = createMagElem.querySelectorAll('label, markdown-toolbar, ul, li, button, i, input[placeholder="/m/"], textarea[placeholder="Description"], textarea[placeholder="Rules"]');

        createMagElement.forEach(createMagResize => {
            createMagResize.style.setProperty('font-size', fontSizes.createPosts);
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

// // === RESET TO DEFAULTS FUNCTIONALITY === //

// if (!eventListenerDefaultButton) {
//     eventListenerDefaultButton = (e) => {
//       const defaultButton = document.querySelector('input[kes-key="defaultButton"]'); //button
//       const buttonColor = defaultButton.style.backgroundColor;
//       function buttonStyle(button) {
//         button.style.backgroundColor = buttonColor;
//       }
  
//       if (e.target.type === 'button' && e.target.getAttribute('kes-key') === 'defaultButton') {
//         console.log('Reset defaults button clicked');
//         defaultButton.style.backgroundColor = '#079D0C'
//         setTimeout(() => buttonStyle(defaultButton), 500);
  
//         const numSelectMain = document.querySelectorAll('input[kes-key^="option"]');
  
//         numSelectMain.forEach(numSelectElem => {
//           numSelectElem.setAttribute("value", "12");
//           numSelectElem.value = "12";
//           numSelectElem.dispatchEvent(new Event('input')); // update CSS
  
//           // Apply updated font size to the corresponding element
//           const optionKey = numSelectElem.getAttribute('kes-key');
//           const elementToUpdate = document.querySelector(`[kes-key="${optionKey}"]`);
//           if (elementToUpdate) {
//             elementToUpdate.style.fontSize = fontSizes[optionKey];
//           }
//         });
  
//         Object.keys(fontSizes).forEach(key => {
//           console.log(key + ': ' + fontSizes[key])
//           fontSizes[key] = '12px';
//           console.log(`UPDATED: ${key}: ${fontSizes[key]}`)
//         });
//       }
//     }
  
//     document.addEventListener('click', eventListenerDefaultButton);
//   }


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
