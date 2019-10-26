/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var BERING = BERING || {};
BERING.begining = true;
BERING.content = [];
BERING.end = false;


BERING.title = "Inspire Ring Parenting";
BERING.outside='Support';
BERING.inside='Challenge';
BERING.attitude='INSPIRATION';




BERING.title = "Inspire Ring Parenting";
BERING.intro = "My parent is the kind of parent who...";
BERING.compat = "120217";
BERING.onPage = 4;
BERING.UItype=1;
$(document).ready(function () {
    BERING.assets.setAssets();
    BERING.DOMQMenu.make();
    BERING.ring.initRing(BERING.ore.current());
    BERING.questionaire.getUI();
});