WebFontConfig = {
    google: {
        families: ['Roboto+Slab']
    },
    custom: {
        families: ['Linearicons-Free'],
        urls: ['https://cdn.linearicons.com/free/1.0.0/icon-font.min.css']
    }
};

(function(d) {
    var wf = d.createElement('script'), s = d.scripts[0];
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
    wf.async = true;
    s.parentNode.insertBefore(wf, s);
})(document);