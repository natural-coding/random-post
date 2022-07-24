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
      this._move_upside_down_animation_duration = p_config.move_upside_down_animation_duration;

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
      this._bodyElem = p_config.bodyElem;

      this._svgMobileElem = p_config.svgMobileElem;
      this._containerForPostElem = p_config.containerForPostElem;
      this._g_randomPostElem = p_config.g_randomPostElem;
      this._g_orbitsElem = p_config.g_orbitsElem;
      this._clippathFor_OrangeOrbit = p_config.clippathFor_OrangeOrbit;
      this._clippathFor_OrangeText = p_config.clippathFor_OrangeText;
      this._ellipse_green = p_config.ellipse_green;

      this._mobile_wing_the_emblem_animation_duration = p_config.mobile_wing_the_emblem_animation_duration;
      this._mobile_svg_click_animation_duration = p_config.mobile_svg_click_animation_duration;

      // State maitenance
      this._htmlToDisplay = '';
      this._renderingAnimation = false;
   }

   ////////////////////////////////////////////////////////////////////////
   // ViewForMobileLayout::effectsOnPageLoad
   ////////////////////////////////////////////////////////////////////////
   effectsOnPageLoad() {
      const Elems = Array(this._g_randomPostElem,this._g_orbitsElem,
         this._clippathFor_OrangeOrbit,this._clippathFor_OrangeText);

      for (let e of Elems)
         setAnimationClass(
            e,
            'wing-emblem-page-load',
            this._mobile_wing_the_emblem_animation_duration
         );
   }

   ////////////////////////////////////////////////////////////////////////
   // ViewForMobileLayout::startAnimationWhileRequestingData
   ////////////////////////////////////////////////////////////////////////
   startAnimationWhileRequestingData() {
      // Guard! :-) ( no try-catch-finally ;-) )
      if (this._renderingAnimation)
         return;
      this._renderingAnimation = true;
      //[_]

      this.setOutputControlsInWaitingState();

      // Save properties before changing
         let prevOverflowPropertyVal = this._bodyElem.style.overflow;
         let prevCursorVal = this._svgMobileElem.style.cursor;
         this._bodyElem.style.overflow = 'hidden';
         this._svgMobileElem.style.cursor = 'default';
      // [_]

      let Elems = Array(this._svgMobileElem,this._clippathFor_OrangeOrbit,
         this._clippathFor_OrangeText,this._ellipse_green);

      for (let e of Elems)
         setAnimationClass(e,'was-clicked',this._mobile_svg_click_animation_duration);

      setTimeout(() => 
         {
            this._bodyElem.style.overflow = prevOverflowPropertyVal;
            this._svgMobileElem.style.cursor = prevCursorVal;

            this._renderingAnimation = false;

            if (this._htmlToDisplay != '')
               this.putHtmlIntoOutputControls();
         },
         this._mobile_svg_click_animation_duration
      );





   }//startAnimationWhileRequestingData

   ////////////////////////////////////////////////////////////////////////
   // ViewForMobileLayout::setOutputControlsInWaitingState
   ////////////////////////////////////////////////////////////////////////
   setOutputControlsInWaitingState() {
      const Elems = Array(this._svgMobileElem,this._containerForPostElem);
      for(const e of Elems)
         e.classList.add('data-requesting');
   }

   ////////////////////////////////////////////////////////////////////////
   // ViewForMobileLayout::putHtmlIntoOutputControls
   ////////////////////////////////////////////////////////////////////////
   putHtmlIntoOutputControls() {
      
      this._containerForPostElem.innerHTML = this._htmlToDisplay;
      // some copy-paste ;-)
      const Elems = Array(this._svgMobileElem,this._containerForPostElem);
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