/**************************************************************************
*   random-post.js
**************************************************************************/
class RandomPost {
   constructor(p_config) {
      this._post_url = p_config.randomPostUrl;
      this._callback_ajax_success = p_config.callback_ajax_success;

      this._xhr = new XMLHttpRequest();
   }

   sendRequest() {
      this._xhr.open('GET',this._post_url);
      this._xhr.onreadystatechange = () => {
         if (this._xhr.readyState === 4) {
            if (this._xhr.status >= 200 && this._xhr.status <= 300) {
               this._callback_ajax_success(this._xhr.responseText);
               //alert(this._xhr.responseText);
            }

         }
      }
      this._xhr.send();
   }
}

export default RandomPost;