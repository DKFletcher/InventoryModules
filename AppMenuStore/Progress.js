/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

"use strict";
var BERING;
BERING.progress = (function () {
    var comp = 0;
    var numBut = BERING.ore.current().numBut;
    function i_p() {
        var tmp = Math.round(1000 / numBut * 100) / 1000;
//        if (BERING.compat === "070916") {
//            //tmp-=0.06
//        }
        var wid = String(tmp) + "%";
        for (var i = 0; i < numBut; i++) {
//            $('div.progRoc').append($("<button class='progBut' onclick='BERING.progress.prog(" + i + ")' id='pB_" + String(i) + "'></button>"));

            $('div.progRoc').append($("<div class='progButOff' id='pB_" + String(i) + "'></div>"));
        }
        $('div.progButOff').css('width', wid);
        d_p(0);
    }
    function nbc(evt) {
        BERING.Command.progress(evt);
    }
    function g_p() {
        var ret;
        return ret;
    }
    function s_p() {
        var ring = BERING.ring.getRing();
        var btnC = 0;
        var btn = 0;
        var numUsed = 0;
        if (BERING.onPage === 6 || BERING.onPage === 4) {
            var ink = 2;
        } else {
            ink = 1;
        }
        if (BERING.onPage === 4 || BERING.onPage === 2) {
            var complete = 2;
        } else if (BERING.onPage === 1){
                complete=1;
        }else{
            complete = 3;
        }
        for (var i = 0; i < ring.length; i += ink) {
            btnC++;
            if (BERING.UItype === 5) {
                var notZero=ring[i].aVa !== 0 && ring[i].aIn !== 0 && ring[i].pole!== 0;
                if (notZero || ring[i].isZero ) {
                    numUsed++;
                }

            } else {
                if (ring[i].aVa !== 0) {
                    numUsed++;
                }
            }
//            if (btnC === complete) {
//                $("div.progRoc").find(".progBut#pB_" + String(btn)).removeClass('progButUsed');
//                if (numUsed === complete) {
//                    $("div.progRoc").find(".progBut#pB_" + String(btn)).addClass('progButUsed');
//                }
//                numUsed = 0;
//                btn++;
//                btnC = 0;
//            }
            if (btnC === complete) {
                $("div.progRoc").find(".progButOff#pB_" + String(btn)).removeClass('progButUsed');
                if (numUsed === complete) {
                    $("div.progRoc").find(".progButOff#pB_" + String(btn)).addClass('progButUsed');
                }
                numUsed = 0;
                btn++;
                btnC = 0;
            }
        }
        comp += ink;
        d_p(BERING.ring.getPage());
    }
//    
//    function d_p(theSet) {
//        for (var i = 0; i < numBut; i++) {
//            $("div.progRoc").find(".progBut#pB_" + String(i)).removeClass('progButUp');
//        }
//        if (theSet > 0) {
//            $("div.progRoc").find(".progBut#pB_" + theSet / BERING.onPage).removeClass('progButUsed');
//            $("div.progRoc").find(".progBut#pB_" + theSet / BERING.onPage).addClass('progButUp');
//        } else {
//            $("div.progRoc").find(".progBut#pB_0").removeClass('progButUsed');
//            $("div.progRoc").find(".progBut#pB_0").addClass('progButUp');
//        }
//    }
    function d_p(theSet) {
        for (var i = 0; i < numBut; i++) {
            $("div.progRoc").find(".progButOff#pB_" + String(i)).removeClass('progButUp');
        }
        if (theSet > 0) {
            $("div.progRoc").find(".progButOff#pB_" + theSet / BERING.onPage).removeClass('progButUsed');
            $("div.progRoc").find(".progButOff#pB_" + theSet / BERING.onPage).addClass('progButUp');
        } else {
            $("div.progRoc").find(".progButOff#pB_0").removeClass('progButUsed');
            $("div.progRoc").find(".progButOff#pB_0").addClass('progButUp');
        }
    }
    return{
        get: g_p,
        set: s_p,
        init: i_p,
        prog: nbc,
        disp: d_p
    };
}());




