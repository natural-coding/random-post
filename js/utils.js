/**************************************************************************
*   utils.js
**************************************************************************/

export function setAnimationClass(p_element, p_className, p_animationDurationMSec)
{
   p_element.classList.add(p_className);
   let gapMSec = 200;

   setTimeout(() => 
      {
         p_element.classList.remove(p_className);
      },
      p_animationDurationMSec + gapMSec
   );
}
/**************************************************************************
*   setAnimationClass
**************************************************************************/
/*function setAnimationClass(p_element, p_className, p_VarNameOfAnimationDurationMSec)
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
}*/