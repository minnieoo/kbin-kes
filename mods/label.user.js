function labelOp (toggle) {
    if (toggle) {
        let settings = getModSettings("labelcolors");
        let fg = settings["fgcolor"];
        let bg = settings["bgcolor"];
        safeGM('addStyle', `
            blockquote.author a.user-inline::after {
                content: 'OP';
                font-weight: bold;
                color: ${fg};
                background-color: ${bg};
                margin-left: 4px;
                padding: 0px 5px 0px 5px;
            }
            body.rounded-edges blockquote.author a.user-inline::after {
                border-radius: var(--kbin-rounded-edges-radius);
            }
        `);
    } else {
        safeGM('addStyle', 'blockquote.author a.user-inline::after { content: ""; background-color: unset; padding: unset; margin-left: unset; }');
    }
}
