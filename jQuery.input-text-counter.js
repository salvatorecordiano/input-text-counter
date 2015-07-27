/*!
* jQuery Input Text Counter Plugin v. 0.1
* https://github.com/salvatorecordiano/input-text-counter
*
* Copyright 2015 Salvatore Cordiano
* Released under the MIT license
*/

;(function (jQuery){

    jQuery.fn.inputTextCounter = function(options) {
        
        var thiz = jQuery(this);
        var settings = {
            sentence: "left characters",
            limit: 160
        };
        
        options && jQuery.extend(settings, options);
        jQuery(this).on('keyup focus', function() 
        {
            updateCount();
        });
        updateCount();
        
        function updateCount() 
        {
            var chars = jQuery(thiz).val().length;   
            if(chars>settings.limit) 
            {
                jQuery(thiz).val(jQuery(thiz).val().substr(0, settings.limit));
                chars = settings.limit;
            }
            var amount = settings.limit - chars;
            var container = jQuery(thiz).closest('div');
            if(container.find('.char-left').length<=0) 
            {
                jQuery('<div class="char-left"><span class="amount">' + amount + '</span> ' + settings.sentence + '</div>').insertAfter(thiz);
            } 
            else 
            {
                container.find('.char-left span.amount').html(amount);
            }
            return amount;
        }
        
    return this;

  };
})(jQuery);
