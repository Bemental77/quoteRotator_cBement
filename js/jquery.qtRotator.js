;(function($, window, undefined) {








    $.fn.qtRotator = function (options) {



        if (typeof options === 'string') {
            
            // not as common, leave off code for now...
            
        }
        else {  // options !== 'string', usually meaning it is an object
            
            // here, this refers the jQuery object that was used
            // to call this plugin method ($('#quoteRotator'))
            this.each(function() {

                //here, inside of each() function, this refers to div#quoteRotator
                var instance = $.data(this, 'qtRotator');
                
                if (instance) {
                    instance._init();
                }
                else {
                    
                    instance = $.data(this, 'qtRotator', new
                    $.QTRotator(options, this));
                    
                }
                
            });
            
        }

        return this; // make our plugin method chainable

    };

})(jQuery, window);