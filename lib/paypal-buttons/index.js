/* eslint-env node */
'use strict';

module.exports = {
  name: 'paypal-buttons',

  isDevelopingAddon() {
    return true;
  },

  contentFor: function(type, config){
    if(type === 'head'){
      return ''
    } else if(type === 'head-footer'){
      return ''
    } else if(type === 'body'){
      return ''
    } else if(type === 'body-footer'){
      if(config.environment === 'test'){
        return ''
      } else{
      return '<script src="https://www.paypal.com/sdk/js?client-id=AXjEF1VkzAhOT-C-k7kiQkzSz0tJAjcfOdwPgEWlLgm2P-4GkKjSrTGlMJqzs_Zhx-asWEu4Nnl6sVsr"></script>'
      }
    }
  }
};
