// @version     0.1.6

function navbarIcons (toggle) {
    let settings = getModSettings("nav_icons");
    let search = settings.search
    let post = settings.post
    let subs = settings.subs
    let font = settings.font
    const fa = document.querySelector('.fa-solid.fa-magnifying-glass');
    fa.style.setProperty('font-family', 'Anton');
    if (toggle) {
        let selectedFont = '${font}';
        document.styleSheets[0].addRule('a[href="/search"] i', 'font-family: "Anton";');
        document.styleSheets[0].addRule('header menu li a[aria-label="Search"] i::before', 'content: "' + search + '";');
        document.styleSheets[0].addRule('header menu li a[aria-label="Add"] i::before', 'content: "' + post + '";');
        document.styleSheets[0].addRule('header menu li a[aria-label="Select a channel"] i::before', 'content: "' + subs + '";');

        const searchText = document.querySelectorAll('a[href="/search"] i');
        const addText = document.querySelector('header menu li a[aria-label="Add"] i:before');
        const channelText = document.querySelector('header menu li a[aria-label="Select a channel"] i:before');
    
        searchText.style.setProperty('font-family', 'Anton');
    } else {
        document.styleSheets[0].addRule('header menu li a[aria-label="Search"] i::before', 'content:"\\f002" ;');
        document.styleSheets[0].addRule('header menu li a[aria-label="Add"] i::before', 'content:"\+" ;');
        document.styleSheets[0].addRule('header menu li a[aria-label="Select a channel"] i::before', 'content:"\\f03a" ;');
    }
}
