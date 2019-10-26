"use strict";
var BERING;
BERING.iOS = (function () {
    var offMessage = '<h1>SWITCH TO <B><I>SAFARI</I></B></h1><br>Please change your browser to <B><I>SAFARI</I></B> to continue.';
    function appleDevice() {
        return /^iP(hone|[ao]d)/.test(navigator.platform);
    }
    function isSafari() {
        return !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
    }
    function isEdge() {
        return navigator.userAgent.match(/EdgiOS/g)
    }
    function isExplorer(){
        return navigator.userAgent.match(/EdgiOS/g)
    }
    function isChrome(){
        return navigator.userAgent.match(/Chrome/g)
    }
    function cr() {
        var app = appleDevice();
        if ((app && !isSafari()) || (app && isEdge()) || (app && isExplorer())) {
            //BERING.ModalDisplay.iOSResponse(offMessage);//Enable for Production;
        } else {
//                $('.instructions').empty();
//                $('.instructions').append('Browser: '+navigator.userAgent);
        }
    }
    function rem() {
        $('.qCon').empty();
        $('#topher').empty();
        $('#inUp').empty();
        $('.instructions').empty();
        $('#mainModal').empty();
        $('.qCon').append('<section><div>' + offMessage + '</div></section>');
    }
    return {
        isIOS: cr,
        disable: rem,
        isChrom: isChrome,
        isEd: isEdge,
        isApl: appleDevice
    };
})();