/**************************************************************************
*   07-yoga-theme4_main.js
**************************************************************************/
import Controller from './js/controller.js';

/**************************************************************************
*   DOMContentLoaded
**************************************************************************/
window.addEventListener("DOMContentLoaded",() => 
{
   const cfg = {
      svgDesktopElem: document.querySelector('.viewport > .container-desktop > .yoga-man-block > svg'),
      svgMobileElem: document.querySelector('.viewport-mobile > .cta-area-block > svg')
   };

   new Controller(cfg);
}
);
