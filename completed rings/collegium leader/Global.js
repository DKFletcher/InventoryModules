/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var BERING = BERING || {};
BERING.begining = false;
BERING.content = [];
BERING.end = false;

BERING.title = "Leader";
BERING.outside='Support';
BERING.inside='Challenge';
BERING.attitude='INSPIRATION';
BERING.intro = "Is the kind of leader who...";

BERING.compat="070916";
BERING.onPage=3;
BERING.UItype=3;
$(document).ready(function () {
    BERING.assets.setAssets();
    BERING.DOMQMenu.make();
    BERING.ring.initRing(BERING.ore.current());
    BERING.questionaire.getUI();
});