/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var BERING = BERING || {};
BERING.begining = true;
BERING.content = [];
BERING.end = false;


BERING.title = "Inspire Ring Parent";
BERING.outside='Support';
BERING.inside='Challenge';
BERING.attitude='INSPIRATION';


BERING.intro = "I am the kind of parent who...";
BERING.compat = "110217";
BERING.onPage = 2;
BERING.UItype=4;
$(document).ready(function () {
    BERING.assets.setAssets();
    BERING.DOMQMenu.make();
    BERING.ring.initRing(BERING.ore.current());
    BERING.questionaire.getUI();
});