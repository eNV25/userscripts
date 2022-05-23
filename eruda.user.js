// ==UserScript==
// @name          Eruda Loader
// @description   Load and setup Eruda WebTools. DOM plugin included.
// @namespace     https://github.com/eNV25/userscripts
// @homepageURL   https://github.com/eNV25/userscripts
// @match         *://*/*
// @exclude-match https://eruda.liriliri.io/*
// @require       https://unpkg.com/eruda
// @require       https://unpkg.com/eruda-dom
// @run-at        document-idle
// @grant         none
// @noframes
// ==/UserScript==

if (!eruda._isInit) eruda.init();
