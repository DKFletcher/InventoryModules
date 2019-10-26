/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var BERING = BERING || {};
BERING.begining = false;
BERING.content = [];
BERING.end = false;
BERING.title = "Aspire Ring Further";
BERING.intro = "As a learner...";



BERING.title = "Aspire Ring Further";
BERING.outside='Fair to Others';
BERING.inside='Fair to Self';
BERING.attitude='ASPIRATION';



BERING.compat="030916";
BERING.onPage=3;
BERING.UItype=3;
$(document).ready(function () {
    BERING.assets.setAssets();
    BERING.DOMQMenu.make();
    BERING.ring.initRing(BERING.ore.current());
    BERING.questionaire.getUI(3);
});