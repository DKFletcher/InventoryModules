/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var BERING = BERING || {};
BERING.begining = false;
BERING.content = [];
BERING.end = false;
BERING.title = "Inspire Ring";
BERING.intro = "How well do these statements describe me as a teacher...";
BERING.compat="050916";
BERING.onPage=3;
BERING.UItype=3;
$(document).ready(function () {
    BERING.assets.setAssets();
    BERING.DOMQMenu.make();
    BERING.ring.initRing(BERING.ore.current());
    BERING.questionaire.getUI(3);
});