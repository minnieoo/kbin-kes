// @version     0.0.2

function navbarIcons (toggle) {
    let settings = getModSettings("nav_icons");
    let search = settings.search
    let post = settings.post
    let subs = settings.subs
    if (toggle) {
        let selectedFont = 'font-family: ' + settings.font + ';';
        document.styleSheets[0].addRule('header menu li a[aria-label="Search"] i::before', 'content: "' + search + '";' + selectedFont);
        document.styleSheets[0].addRule('header menu li a[aria-label="Add"] i::before', 'content: "' + post + '";');
        document.styleSheets[0].addRule('header menu li a[aria-label="Select a channel"] i::before', 'content: "' + subs + '";');

        const searchText = document.querySelector('header menu li a[aria-label="Search"] i:before');
        const addText = document.querySelector('header menu li a[aria-label="Add"] i:before');
        const channelText = document.querySelector('header menu li a[aria-label="Select a channel"] i:before');
    
        // searchText.style.setProperty('font-family', `'${settings.font};'`);
        // addText.style.setProperty('font-family', `'${settings.font};'`);
        // channelText.style.setProperty('font-family', `'${settings.font};'`);
        console.log(settings.font);
        console.log(selectedFont);
    } else {
        document.styleSheets[0].addRule('header menu li a[aria-label="Search"] i::before', 'content:"\\f002" ;');
        document.styleSheets[0].addRule('header menu li a[aria-label="Add"] i::before', 'content:"\+" ;');
        document.styleSheets[0].addRule('header menu li a[aria-label="Select a channel"] i::before', 'content:"\\f03a" ;');
    }
}
