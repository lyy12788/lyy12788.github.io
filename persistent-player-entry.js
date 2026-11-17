/* Automatic persistent playback shell; no floating mode button. */
(()=>{'use strict';if(window.parent!==window||location.pathname==='/player.html')return;
const allowed=/^\/(?:|index\.html|forum\.html|gospel\.html|aid\.html|suggestions\.html|rules\.html|privacy\.html|content-complaints\.html|post1\.html|audio-upload\.html)$/;
if(!allowed.test(location.pathname))return;
const page=location.pathname+location.search+location.hash;
location.replace('/player.html?page='+encodeURIComponent(page));
})();
