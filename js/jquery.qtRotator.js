;(function($, window, undefined) {

    'use strict';

    var Modernizr = window.Modernizr;

    //Constructor function definition for our new QTRotator object
    $.QTRotator = function (options, element) {

        this.$element = $(element);
        this._init(options);
    };

    //Set up default options
    $.QTRotator.defaults = {
        speed: 700,
        easing: 'ease',
        interval: 8000
    };

    //Create methods for new object
    $.QTRotator.prototype = {
        _init: function (options) {

            //this refers to $.QTRotator
            this.realOptions = $.extend($.QTRotator.defaults, options);

            this._config();

            //show the current quote
            this.$items.eq(this.currentIndex).addClass('quoteCurrent');

            if (this.support){
                this._setTransition();
            }

            //start rotating the quotes
            this._startRotator();

        },
        _config: function () {

            this.$items = $('.quoteContent');

            this.itemsCount = this.$items.length;

            this.currentIndex = 0; //index of the current quote

            this.support = Modernizr.csstransitions;

            if (this.support){
                this.$progressBar = $('<span class="quoteProgress"></span>').appendTo(this.$element);
            } else {
                //do alternative code for browsers that don't support css transitions
            }

        },
        _setTransition: function () {

            setTimeout($.proxy(function(){

                this.$items.css('transition', 'opacity ' + this.realOptions.speed + 'ms '
                + this.realOptions.easing);
                //transition: opacity 500ms ease;

            }, this), 25);

        },
        _startRotator: function () {



        }
    };





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
                    
                    instance = $.data(this, 'qtRotator', new $.QTRotator(options, this));
                    
                }
                
            });
            
        }

        return this; // make our plugin method chainable

    };

})(jQuery, window);