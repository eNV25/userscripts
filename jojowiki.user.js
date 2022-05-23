// ==UserScript==
// @name        JoJo Wiki Redirector
// @description Redirect jojo.fandom.com to jojowiki.com
// @namespace   https://github.com/eNV25/userscripts
// @homepageURL https://github.com/eNV25/userscripts
// @match       https://jojo.fandom.com/wiki/*
// @run-at      document-start
// @grant       none
// @noframes
// @unwrap
// ==/UserScript==

document.location.replace(
  "https://jojowiki.com/" +
    document.location.href.slice("https://jojo.fandom.com/wiki/".length)
);
