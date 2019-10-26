/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var BERING = BERING || {};
BERING.begining = false;
BERING.content = [];
BERING.end = false;




BERING.title = "Emotional Profile (YP)";
BERING.outside='Others';
BERING.inside='Self';
BERING.attitude='ATTITUDE';
BERING.intro = "Within the particular context you are thinking about, how much do you feel this emotion?";




BERING.compat="110218";
BERING.onPage=2;
BERING.UItype=5;
$(document).ready(function () {
    BERING.assets.setAssets();
    BERING.DOMQMenu.make();
    BERING.ring.initRing(BERING.ore.current());
    BERING.questionaire.getUI(3);
    BERING.EmoproIns.ratingScale();
});