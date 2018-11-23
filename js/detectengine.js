let isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

let isFirefox = typeof InstallTrigger !== 'undefined';

let isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

let isIE = /*@cc_on!@*/false || !!document.documentMode;

let isEdge = !isIE && !!window.StyleMedia;

let isChrome = !!window.chrome && !!window.chrome.webstore;

let isBlink = (isChrome || isOpera) && !!window.CSS;