/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var BERING = BERING || {};
BERING.begining = false;
BERING.content = [];
BERING.end = false;


BERING.title = "Team Member";
BERING.outside='Support';
BERING.inside='Challenge';
BERING.attitude='ASPIRATION';
BERING.intro = "I am the kind of collegue who...";


BERING.compat="060916";
BERING.onPage=3;
BERING.UItype=3;
$(document).ready(function () {
    BERING.assets.setAssets();
    BERING.DOMQMenu.make();
    BERING.ring.initRing(BERING.ore.current());
    BERING.questionaire.getUI();
});