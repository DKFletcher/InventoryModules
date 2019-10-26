/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var BERING = BERING || {};
BERING.begining = true;
BERING.content = [];
BERING.end = false;




BERING.title = "Younger Aspire Ring";
BERING.outside='Fair to Others';
BERING.inside='Fair to Self';
BERING.attitude='ASPIRATION';
BERING.intro = "As a learner...";




BERING.intro = "As a learner...";
BERING.compat = "280915";
BERING.onPage = 4;
BERING.UItype=1;
$(document).ready(function () {
    BERING.assets.setAssets();
    BERING.DOMQMenu.make();
    BERING.ring.initRing(BERING.ore.current());
    BERING.questionaire.getUI(1);
});