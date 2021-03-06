/*!
 * jQuery has Attribute Plugin v1.0.0
 *
 * https://github.com/shoter/hasAttr
 *
 * Copyright (c) 2017 Damian Łączak
 * Released under the MIT license
 */
(function($) {

    $.fn.hasAttr = function(name) {
        return $(this).is("[" + name + "]");
    };

    $.fn.hasData = function(name) {
        return $(this).hasAttr("data-" + name);
    }

}(jQuery));