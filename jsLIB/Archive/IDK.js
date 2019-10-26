/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

"use strict"
var BERING;
BERING.IDKey = (function (){ 
    var _key
    function g_k() {
        if (_key===undefined) {
            _key = new String();
            for (var i = 0; i < 8; i++) {
                if (i / 2 - Math.floor(i / 2) > 0) {
                    _key += get_let();
                } else {
                    _key += get_num();
                }
            }
        }
        return _key;
    }
    function s_k(theSet) {
        _key=theSet
    }
    function get_let() {
        return String.fromCharCode(97 + Math.round(Math.random() * 25));
    }
    function get_num() {
        return new String(Math.round(Math.random() * 9));
    }
    return{
        get: g_k,
        set: s_k
    };
}());

