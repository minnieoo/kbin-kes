// ==UserScript==
// @name         Change font size
// @namespace    https://github.com/aclist
// @version      0.8.4
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
        comments: `${settings["optionComments"]}px`,
        userSettings: `${settings["optionUserSettings"]}px`,
        userMessages: `${settings["optionMessages"]}px`
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
        const textContentElements = postContentElem.querySelectorAll('h1.a, h3, p, a, time, button:not([data-action="subject#vote"]), small.badge');
        const textContentH1 = postContentElem.querySelectorAll('header span.entry__domain, article.entry header h1 a, header span.entry__domain');
        const textContentH2 = postContentElem.querySelectorAll('header span.entry__domain, article.entry.section.subject h2 a');
        const voteText = postContentElem.querySelectorAll('span[data-subject-target="favCounter"], span[data-subject-target="downvoteCounter"], i.fa-arrow-up, i.fa-arrow-down');

        textContentElements.forEach(textContentElem => {
            textContentElem.style.setProperty('font-size', fontSizes.posts);
        });

        textContentH2.forEach(textContentH2 => {
            const postSizeNum = settings["optionPosts"];
            textContentH2.style.setProperty('font-size', `${postSizeNum * 1.02}pt`);
        });

        textContentH1.forEach(postResizeH1 => {
            const postSizeNumH1 = settings["optionPosts"];
            postResizeH1.style.setProperty('font-size', `${postSizeNumH1 * 1.02}pt`);
            })

        voteText.forEach(textVote => {
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


// ⇶⇶⇶⇶⇶⇶⇶ USER SETTINGS ⬱⬱⬱⬱⬱⬱⬱ //

// === USER SETTINGS GENERAL === //
    const settingsSizeMultiply = settings["optionUserSettings"] * 1.5;

    // user settings general *variables*
    const profileGeneral = document.querySelectorAll('div.container form[name="user_settings"]');

    // user settings general *loops*
    profileGeneral.forEach(profGenSelect => {
        const profGenElem = profGenSelect.querySelectorAll('h2, div label, div select, div div');
        const profGenElemH2 = profGenSelect.querySelectorAll('h2');
    
        profGenElem.forEach(profElemResize => {
            profElemResize.style.setProperty('font-size', fontSizes.userSettings);
        })
    
        profGenElemH2.forEach(profElemResizeH2 => {
            profElemResizeH2.style.setProperty('font-size', settingsSizeMultiply);
        })
    })

// === USER SETTINGS EMAIL === //

    // user settings email *variables*
    const profileEmail = document.querySelectorAll('div.container form[name="user_email"]');

    // user settings email *loops*
    profileEmail.forEach(profEmailSelect => {
        const profEmailElem = profEmailSelect.querySelectorAll('h2, div label, div select, div div, input');
        const profEmailElemH2 = profEmailSelect.querySelectorAll('h2');

        profEmailElem.forEach(profEmailResize => {
            profEmailResize.style.setProperty('font-size', fontSizes.userSettings);
        })

        profEmailElemH2.forEach(profEmailResizeH2 => {
            profEmailResizeH2.style.setProperty('font-size', settingsSizeMultiply);
        })
    })

// === USER SETTINGS PROFILE EDITING === //

    // user settings profile editing *variables*
    const profileEdit = document.querySelectorAll('div.container form[name="user_basic"]');

    // user settings profile editing *loops*
    profileEdit.forEach(profEditSelect => {
        const profEditElem = profEditSelect.querySelectorAll('h2, div select, div div, input, textarea, markdown-toolbar');
        const profEditElemH2 = profEditSelect.querySelectorAll('div label');

        profEditElem.forEach(profEditResize => {
            profEditResize.style.setProperty('font-size', fontSizes.userSettings);
        })

        profEditElemH2.forEach(profEditResizeH2 => {
            profEditResizeH2.style.setProperty('font-size', settingsSizeMultiply);
        })
    })

// === USER SETTINGS PASSWORD === //

    // user settings password *variables*
    const profilePassword = document.querySelectorAll('div.container form[name="user_password"]');

    // user settings password *loops*
    profilePassword.forEach(profPassSelect => {
        const profPassElem = profPassSelect.querySelectorAll('h2, div label, div select, div div, input');
        const profPassElemH2 = profPassSelect.querySelectorAll('h2');

        profPassElem.forEach(profPassResize => {
            profPassResize.style.setProperty('font-size', fontSizes.userSettings);
        })

        profPassElemH2.forEach(profPassResizeH2 => {
            profPassResizeH2.style.setProperty('font-size', settingsSizeMultiply);
        })
    })

// === USER SETTINGS BLOCKED === //

    // user settings blocked *variables*
    const profileBlocked = document.querySelectorAll('div.page-settings.page-settings-block-magazines');
    const navLabels = document.querySelectorAll('.pills li a');

    // user settings blocked *loops*
    profileBlocked.forEach(profBlockSelect => {
        const profBlockElem = profBlockSelect.querySelectorAll('h2, div label, div select, div div, input, li, a, ul, small');
        const profBlockElemH2 = profBlockSelect.querySelectorAll('h2');

        profBlockElem.forEach(profBlockResize => {
            profBlockResize.style.setProperty('font-size', fontSizes.userSettings);
        })

        profBlockElemH2.forEach(profBlockResizeH2 => {
            profBlockResizeH2.style.setProperty('font-size', settingsSizeMultiply);
        });

        navLabels.forEach(navTitleResize => {
                navTitleResize.style.setProperty('font-size', settingsSizeMultiply);
        })
    })

// === USER SETTINGS SUBSCRIPTIONS === //

    // user settings subscriptions *variables*
    const profileSubs = document.querySelectorAll('div.page-settings.page-settings-sub-magazines');
    const subTitles = document.querySelectorAll('div.page-settings-sub-magazines div.pills li a');

    // user settings subscriptions *loops*
    profileSubs.forEach(profSubsSelect => {
        const profSubsElem = profSubsSelect.querySelectorAll('h2, div label, div select, div div, input, li, a, ul, small');
        const profSubsElemH2 = profSubsSelect.querySelectorAll('h2');

        profSubsElem.forEach(profSubsResize => {
            profSubsResize.style.setProperty('font-size', fontSizes.userSettings);
        })

        profSubsElemH2.forEach(profSubResizeH2 => {
            profSubResizeH2.style.setProperty('font-size', settingsSizeMultiply);
        });

        subTitles.forEach(subTitleResize => {
                subTitleResize.style.setProperty('font-size', settingsSizeMultiply);
        })
    })


// === USER MESSAGES === //

    // user messages *variables*
    const userMessages = document.querySelectorAll('div.page-messages');
    const userMessagesSizeMultiply = settings["optionMessages"] * 1.5;

    // user messages *loops*
    userMessages.forEach(userMessageSelect => {
        const userMessageElem = userMessageSelect.querySelectorAll('h2, div select, div div, input, textarea, markdown-toolbar, time, button[id="message_submit"]');
        const userMessageElemH1 = userMessageSelect.querySelectorAll('h1, label[for="message_body"]');

        userMessageElem.forEach(userMessageResize => {
            userMessageResize.style.setProperty('font-size', fontSizes.userMessages);
        })

        userMessageElemH1.forEach(userMessageResizeH1 => {
            userMessageResizeH1.style.setProperty('font-size', userMessagesSizeMultiply);
        })
    })



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



} // end of resizeText() function //


function textResize(toggle) {
    if (toggle) {
        resizeText();
    } else {
        document.removeEventListener('click', eventListenerCheckbox);
        eventListenerCheckbox = null;

    }
}
