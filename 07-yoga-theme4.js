/**************************************************************************
*   07-yoga-theme4.js
**************************************************************************/

/**************************************************************************
*   setAnimationClass
**************************************************************************/
function setAnimationClass(p_element, p_className, p_VarNameOfAnimationDurationMSec)
{
   p_element.classList.add(p_className);

   let intervalMsec = getComputedStyle(document.documentElement)
            .getPropertyValue(p_VarNameOfAnimationDurationMSec);

   intervalMsec = parseInt(intervalMsec);
         
   setTimeout(() => 
      {
         p_element.classList.remove(p_className);
      },
      intervalMsec
   );

   return intervalMsec;
}


/**************************************************************************
*   DOMContentLoaded
**************************************************************************/
window.addEventListener("DOMContentLoaded",() => 
{
   // Init data (closures)
      let bodyElem = document.querySelector('body');
      let viewportElem = document.querySelector('body > .viewport');
      let svgDesktopElem = document.querySelector('.viewport > .container-desktop > .yoga-man-block > svg');
      let stuffToRotateElem = svgDesktopElem.querySelector('.stuff-to-rotate-around-athlete');
      let bodhiTreeElem = document.querySelector('.viewport > .container-desktop > .cute-frame-block > .fitted-svg-container > svg .bodhi-tree-dark-green');
      let containerForPostElem = document.querySelector('.viewport > .container-desktop > .cute-frame-block > .fitted-svg-container > .random-post-container');
   //[_]

   
   if (viewportElem.style.display != 'none')
      setAnimationClass(svgDesktopElem,'move-upside-down-page-load','--move_upside_down_duration');

   //
   // Set event listeners for wide screen
   //
      svgDesktopElem.addEventListener('click', (p_event) =>
         {
            if (stuffToRotateElem.classList.contains('rotate'))
               return;

            stuffToRotateElem.classList.add('rotate');
            containerForPostElem.style.opacity = 0;
            bodhiTreeElem.style.opacity = '35%';

            // Save properties before changing
            let prevOverflowPropertyVal = bodyElem.style.overflow;
            let prevCursorVal = svgDesktopElem.style.cursor;
            bodyElem.style.overflow = 'hidden';
            svgDesktopElem.style.cursor = 'default';
            // [_]

            let intervalMSec = setAnimationClass(svgDesktopElem,'was-clicked','--svg_click_animation_duration');

            setTimeout(() => 
               {
                  stuffToRotateElem.classList.remove('rotate')
                  bodyElem.style.overflow = prevOverflowPropertyVal;
                  svgDesktopElem.style.cursor = prevCursorVal;
                  // 
                  containerForPostElem.style.opacity = 1;
                  bodhiTreeElem.style.opacity = 0;


               },
               intervalMSec
            );
         }
      );
   //[_] (Set event listeners for wide screen)

   //
   // Set event listeners for narrow screen (mobile devices)
   //

}
);