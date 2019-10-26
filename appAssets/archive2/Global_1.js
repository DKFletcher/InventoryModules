/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var BERING = BERING || {};
BERING.begining = true;
BERING.content = [];
BERING.end = false;
BERING.title = "Aspire Ring";
BERING.intro = "As a learner...";
BERING.compat = "020916";
BERING.onPage = 6;
BERING.UItype=2;
$(document).ready(function () {
    BERING.assets.setAssets();
    BERING.DOMQMenu.make();
    BERING.ring.initRing(BERING.ore.current());
    BERING.questionaire.getUI(2);
});