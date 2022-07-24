/**************************************************************************
*   view.js
**************************************************************************/

import {setAnimationClass} from './utils.js';


/*************************************************************************/


export class ViewForDesktopLayout {

   ////////////////////////////////////////////////////////////////////////
   // constructor
   ////////////////////////////////////////////////////////////////////////
   constructor(p_config) {
      // Input variables
      this._bodyElem = p_config.bodyElem;
      this._svgDesktopElem = p_config.svgDesktopElem;
      this._stuffToRotateElem = p_config.stuffToRotateElem;
      this._bodhiTreeElem = p_config.bodhiTreeElem;
      this._containerForPostElem = p_config.containerForPostElem;
      this._svg_click_animation_duration = p_config.svg_click_animation_duration;

      // State maitenance
      this._htmlToDisplay = '';
      this._renderingAnimation = false;
   }

   ////////////////////////////////////////////////////////////////////////
   // effectsOnPageLoad
   ////////////////////////////////////////////////////////////////////////
   effectsOnPageLoad() {
      setAnimationClass(
         this._svgDesktopElem,
         'move-upside-down-page-load',
         this._svg_click_animation_duration
      );
   }

   ////////////////////////////////////////////////////////////////////////
   // startAnimationWhileRequestingData
   ////////////////////////////////////////////////////////////////////////
   startAnimationWhileRequestingData() {

      // Guard! :-) ( no try-catch-finally ;-) )
      if (this._renderingAnimation)
         return;
      this._renderingAnimation = true;
      //[_]

      this.setOutputControlsInWaitingState();

      this._stuffToRotateElem.classList.add('rotate');

      // Save properties before changing
         let prevOverflowPropertyVal = this._bodyElem.style.overflow;
         let prevCursorVal = this._svgDesktopElem.style.cursor;
         this._bodyElem.style.overflow = 'hidden';
         this._svgDesktopElem.style.cursor = 'default';
      // [_]

      setAnimationClass(this._svgDesktopElem,'was-clicked',this._svg_click_animation_duration);

      setTimeout(() => 
         {
            this._stuffToRotateElem.classList.remove('rotate')
            this._bodyElem.style.overflow = prevOverflowPropertyVal;
            this._svgDesktopElem.style.cursor = prevCursorVal;

            this._renderingAnimation = false;

            if (this._htmlToDisplay != '')
               this.putHtmlIntoOutputControls();
         },
         this._svg_click_animation_duration
      );

   }//startAnimationWhileRequestingData

   ////////////////////////////////////////////////////////////////////////
   // setOutputControlsInWaitingState
   ////////////////////////////////////////////////////////////////////////
   setOutputControlsInWaitingState() {
      const Elems = Array(this._svgDesktopElem,this._bodhiTreeElem,this._containerForPostElem);
      for(const e of Elems)
         e.classList.add('data-requesting');
   }

   ////////////////////////////////////////////////////////////////////////
   // putHtmlIntoOutputControls
   ////////////////////////////////////////////////////////////////////////
   putHtmlIntoOutputControls() {
      this._containerForPostElem.innerHTML = this._htmlToDisplay;
      // some copy-paste ;-)
      const Elems = Array(this._svgDesktopElem,this._bodhiTreeElem,this._containerForPostElem);
      for(const e of Elems)
         e.classList.remove('data-requesting');
   }

   ////////////////////////////////////////////////////////////////////////
   // setHtmlToDisplay
   ////////////////////////////////////////////////////////////////////////
   setHtmlToDisplay(p_html) {
      this._htmlToDisplay = p_html;
      
      if (!this._renderingAnimation)
         this.putHtmlIntoOutputControls();
   }

};

export class ViewForMobileLayout {

   ////////////////////////////////////////////////////////////////////////
   // ViewForMobileLayout::constructor
   ////////////////////////////////////////////////////////////////////////
   constructor(p_config) {
      // Input variables
      this._svgMobileElem = p_config.svgMobileElem;
   }

   ////////////////////////////////////////////////////////////////////////
   // ViewForMobileLayout::effectsOnPageLoad
   ////////////////////////////////////////////////////////////////////////
   effectsOnPageLoad() {
      this._svgMobileElem.style.opacity=0;
      return;

      setAnimationClass(
         this._svgDesktopElem,
         'wing-emblem-page-load',
         this._svg_click_animation_duration
      );
   }

   ////////////////////////////////////////////////////////////////////////
   // startAnimationWhileRequestingData
   ////////////////////////////////////////////////////////////////////////
   startAnimationWhileRequestingData() {

      // Guard! :-) ( no try-catch-finally ;-) )
      if (this._renderingAnimation)
         return;
      this._renderingAnimation = true;
      //[_]

      this.setOutputControlsInWaitingState();

      this._stuffToRotateElem.classList.add('rotate');

      // Save properties before changing
         let prevOverflowPropertyVal = this._bodyElem.style.overflow;
         let prevCursorVal = this._svgDesktopElem.style.cursor;
         this._bodyElem.style.overflow = 'hidden';
         this._svgDesktopElem.style.cursor = 'default';
      // [_]

      setAnimationClass(this._svgDesktopElem,'was-clicked',this._svg_click_animation_duration);

      setTimeout(() => 
         {
            this._stuffToRotateElem.classList.remove('rotate')
            this._bodyElem.style.overflow = prevOverflowPropertyVal;
            this._svgDesktopElem.style.cursor = prevCursorVal;

            this._renderingAnimation = false;

            if (this._htmlToDisplay != '')
               this.putHtmlIntoOutputControls();
         },
         this._svg_click_animation_duration
      );

   }//startAnimationWhileRequestingData

   ////////////////////////////////////////////////////////////////////////
   // setOutputControlsInWaitingState
   ////////////////////////////////////////////////////////////////////////
   setOutputControlsInWaitingState() {
      const Elems = Array(this._svgDesktopElem,this._bodhiTreeElem,this._containerForPostElem);
      for(const e of Elems)
         e.classList.add('data-requesting');
   }

   ////////////////////////////////////////////////////////////////////////
   // putHtmlIntoOutputControls
   ////////////////////////////////////////////////////////////////////////
   putHtmlIntoOutputControls() {
      this._containerForPostElem.innerHTML = this._htmlToDisplay;
      // some copy-paste ;-)
      const Elems = Array(this._svgDesktopElem,this._bodhiTreeElem,this._containerForPostElem);
      for(const e of Elems)
         e.classList.remove('data-requesting');
   }

   ////////////////////////////////////////////////////////////////////////
   // setHtmlToDisplay
   ////////////////////////////////////////////////////////////////////////
   setHtmlToDisplay(p_html) {
      this._htmlToDisplay = p_html;
      
      if (!this._renderingAnimation)
         this.putHtmlIntoOutputControls();
   }

};



export default ViewForDesktopLayout;