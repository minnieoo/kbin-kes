// @version     0.1.7

function navbarIcons (toggle) {
    if (toggle) {
        let selectedFont = '${font}';
        const fa = document.querySelector('.fa-solid.fa-magnifying-glass');
        fa.style.setProperty('font-family', 'Anton');
    } else {
        document.styleSheets[0].addRule('header menu li a[aria-label="Search"] i::before', 'content:"\\f002" ;');
        document.styleSheets[0].addRule('header menu li a[aria-label="Add"] i::before', 'content:"\+" ;');
        document.styleSheets[0].addRule('header menu li a[aria-label="Select a channel"] i::before', 'content:"\\f03a" ;');
    }
}
