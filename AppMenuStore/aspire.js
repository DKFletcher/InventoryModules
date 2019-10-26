/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
BERING.ring = (function () {
    var ring_array = [];
    var carrot = 0;
    function nextPage() {
        var ret=ring_array.nextPage(carrot);
        carrot=ret[1];        
        return ret[0];
    }
    function previousPage() {
        var ret=ring_array.previousPage(carrot);
        carrot=ret[1];
        return ret[0];
    }
    function iR(theSet) {
        ring_array = [];
        ring_array = theSet;

    }
    function makeRing(theSet) {
        carrot = 0;
        ring_array = [];
        ring_array = theSet;
        BERING.begining = true;
        BERING.questionaire.commentIn(true);
        BERING.content = previousPage();
        BERING.questionaire.updateView();
        BERING.questionaire.begend();
    }
    function retRing() {
        return ring_array;
    }
    function pS(theSet) {
        var ret=ring_array.progress(theSet,carrot);
        carrot=ret[1];
        return ret[0];
    }
    function gC() {
        return carrot - BERING.onPage;
    }
    function gB() {
        return ring_array.self();
    }
    function gA() {
        return ring_array.attitude();
    }
    // Return objects exposed to the public
    return {
        // Public alias to a private function
        turnFWD: nextPage,
        turnBACK: previousPage,
        setRing: makeRing,
        getRing: retRing,
        initRing: iR,
        progressSet: pS,
        getPage: gC,
        self: gB,
        attitude: gA
    };
})();