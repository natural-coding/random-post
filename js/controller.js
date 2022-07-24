/**************************************************************************
*   controller.js
**************************************************************************/
import ViewForDesktopLayout from './view.js';
import {ViewForMobileLayout} from './view.js';
import RandomPost from './random-post.js';

class Controller {

   constructor(p_config) {
      this._svgDesktopElem = p_config.svgDesktopElem;
      this._svgMobileElem = p_config.svgMobileElem;

      this._svgDesktopElem.addEventListener('click',this.callback_svgDesktopClick.bind(this));
      this._svgMobileElem.addEventListener('click',this.callback_svgMobileClick.bind(this));

      this._viewDesktop = this.createViewDesktopObject();
      this._viewMobile = this.createViewMobileObject();

      this._randomPost = this.createRandomPost();

      this._viewDesktop.effectsOnPageLoad();
      this._viewMobile.effectsOnPageLoad();

      this._prevFakeRandomPostIndex = -1;

   }

   // ;-) Unobtrusive JavaScripts (striked!)
   // ;-) Unobtrusive modification for portfolio project
   getRandomPostHtmlHardcoded()
   {
      const fakePostsArr = [
         "<h2>Custom parsing of querystring</h2><p>When your web app becomes popular there are some people who do not use it the right way. ;-) It is an excellent excercise from the Perl course I took in the beginning of 2019. It was hard to pass all the tests for this excercise.</p>"
         ,"<h2>Github authorization using OAuth&nbsp;2.0</h2><p>It should be a web application with its own server written in Node.js. The server authorizes a user using his or her Github credentials. It also sends pages of the web app to the browser. It is rather a pet project than a complete app. To make it work I registered the app on Github and got the client ID. When the user wants to authorize, my web app sends its own client ID to Github servers and receives the incoming request from Linus Torvalds :-) with a secret key. After that the user is authorized or is not.</p><p>Probably it sounds too simple, but the main challenge was the learning OAuth2 protocol and doing all the stuff using standard Node.js modules.</p>"
         ,"<h2>CSS timeline</h2><p>The best way to learn something is to investigate the subject's history. Do you find yourself lost looking at all of these super-duper CSS properties and values? (I do!) The CSS timelines come to the rescue.</p><p>Let's divide all the CSS stuff according to the time it was introduced.</p>"
         ,"<h2>Blocking readings</h2><p>I wrote this project in Perl during the time I was studying CGI programming. I found it fascinating to watch all these processes that run simultaneously when they all is trying to read the same file. </p>"
         ,'<h2>Parallel work on front-end project</h2><p>There are some ideas about how to deliver large scale front-end project faster using Pugjs tool and styles decomposition. The last thing means that we put the styles into separate files according to style "level". For example L10_wireframe-design, L11_font-basic, L19_controlled-by-js, L20_visual-design, L21_colors-and-bg-patterns and so on.</p>'
         ,"<h2>HTML and CSS as hierarchical DB</h2>"
         ,"<h2>Pugjs manual as single page</h2><p>I like to read printed PDF-documents but I did not find it on the Pugjs homepage. So I decided create a Pugjs manual in pdf format. During the journey I did use some regex stuff to get the job done.</p>"
         ,"<h2>Fascinating layouts</h2><p>Someones would find this markup and CSS too simple to take a look at. But in my opinion it is a key point for understanding responsive layouts. There are two divs, only to divs but they show us how the DOM tree, the render tree and CSS work together in browser.</p>"
         ,"<h2>Playing music</h2><p>I think there is a correspondence between designing software, writing code and playing music. Probably all that stuff uses the overlapping parts of our brain :-) and it develops one.</p><p>So if you are proficient in playing music and have a talent to create computer software you are likely a good programmer. ;-) My favorite Russian songs I like to play are Рябинушка (The raw tree) and Одинокая гармонь (The lonely button accordeon)</p>"
         ,"<h2>Far away</h2><p>It is an essay I was written several years ago. It is about how do I feel the world around me. The essay shows the nature's beauty and it gives you an attitude I had that time.</p>"
         ,"<h2>Data structure in C++</h2><p>Just for fun. I have decided to refresh my C++ coding skills and here it is. It is a classic double linked list data structure. No libraries used. Just plain C++.</p>"
      ];

      let idx = this._prevFakeRandomPostIndex;
      do {
         idx = Math.floor(Math.random() * fakePostsArr.length)
      } while (idx === this._prevFakeRandomPostIndex);

      this._prevFakeRandomPostIndex = idx;

      return fakePostsArr[idx];
   }

   createViewDesktopObject() {
      const cfg = {
         bodyElem: document.querySelector('body'),
         svgDesktopElem: this._svgDesktopElem,
         stuffToRotateElem: this._svgDesktopElem.querySelector('.stuff-to-rotate-around-athlete'),
         bodhiTreeElem: document.querySelector('.viewport > .container-desktop > .cute-frame-block > .fitted-svg-container > svg .bodhi-tree-dark-green'),
         containerForPostElem: document.querySelector('.viewport > .container-desktop > .cute-frame-block > .fitted-svg-container > .random-post-container'),
         // CSS variables
         svg_click_animation_duration: parseInt(
               getComputedStyle(document.documentElement)
               .getPropertyValue('--svg_click_animation_duration')
            ),
         move_upside_down_animation_duration: parseInt(
               getComputedStyle(document.documentElement)
               .getPropertyValue('--move_upside_down_animation_duration')
            )
      };
               
      return new ViewForDesktopLayout(cfg);
   }

   createViewMobileObject() {
      const cfg = {
         bodyElem: document.querySelector('body'),
         svgMobileElem: this._svgMobileElem,
         containerForPostElem: document.querySelector('.viewport-mobile > .cute-frame-block > .fitted-svg-container > .random-post-container'),
         g_randomPostElem: this._svgMobileElem.querySelector('.text-group-random-post'),
         g_orbitsElem: this._svgMobileElem.querySelector('.group-orbits'),
         clippathFor_OrangeOrbit: this._svgMobileElem.querySelector('.clippath-for-orange-orbit_ellipse'),
         clippathFor_OrangeText: this._svgMobileElem.querySelector('.clippath-for-orange-text_ellipse'),
         ellipse_green: this._svgMobileElem.querySelector('.ellipse-green'),

         // CSS variables
         mobile_svg_click_animation_duration: parseInt(
               getComputedStyle(document.documentElement)
               .getPropertyValue('--mobile_svg_click_animation_duration')
            ),
         mobile_wing_the_emblem_animation_duration: parseInt(
               getComputedStyle(document.documentElement)
               .getPropertyValue('--mobile_wing_the_emblem_animation_duration')
            )
      };

      return new ViewForMobileLayout(cfg);
   }

   createRandomPost() {
      const cfg = {
         randomPostUrl: 'http://localhost/random/',
         callback_ajax_success: this.callback_ajaxSuccess.bind(this)
      };
      return new RandomPost(cfg);
   }

   ////////////////////////////////////////////////////////////////////////
   // *Callbacks
   ////////////////////////////////////////////////////////////////////////
      callback_svgDesktopClick(p_evt) {
         this._viewDesktop.startAnimationWhileRequestingData();
         //this._randomPost.sendRequest();
         this.callback_ajaxSuccess(this.getRandomPostHtmlHardcoded());
      }

      callback_svgMobileClick(p_evt) {
         this._viewMobile.startAnimationWhileRequestingData();
         //this._randomPost.sendRequest();         
         this.callback_ajaxSuccess(this.getRandomPostHtmlHardcoded())
      }

      callback_ajaxSuccess(p_htmlSanitized) {
         this._viewDesktop.setHtmlToDisplay(p_htmlSanitized);
         this._viewMobile.setHtmlToDisplay(p_htmlSanitized);
      }

      callback_ajaxTimeout() {

      }
};

export default Controller;