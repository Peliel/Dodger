// Opera 8.0+
let isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// Firefox 1.0+
let isFirefox = typeof InstallTrigger !== 'undefined';

// Safari 3.0+ "[object HTMLElementConstructor]" 
let isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

// Internet Explorer 6-11
let isIE = /*@cc_on!@*/false || !!document.documentMode;

// Edge 20+
let isEdge = !isIE && !!window.StyleMedia;

// Chrome 1+
let isChrome = !!window.chrome && !!window.chrome.webstore;

// Blink engine detection
let isBlink = (isChrome || isOpera) && !!window.CSS;

if (isChrome) {
    for (let i = 0; i < circDirs.length; i++) {
        circDirs[i][0] = circDirs[i][0] / 2;
        circDirs[i][1] = circDirs[i][1] / 2;
    }
}