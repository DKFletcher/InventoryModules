/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

"use strict";
var BERING;
BERING.IOModule = (function () {
    var xmlDoc;
    function iomSave(r, gc) {
        var fileName = new String('test.svg');
        var xmlString = (new XMLSerializer()).serializeToString(xmlDoc);
        var blob = new Blob([xmlString], {type: "text/plain;charset=utf-8"});
        saveAs(blob, fileName);
    }
    return{
        save: iomSave
    };
}());