/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var BERING = BERING || {};
BERING.begining = false;
BERING.content = [];
BERING.end = false;




BERING.title = "Reflector";
BERING.outside='Others';
BERING.inside='Self';
BERING.attitude='ATTITUDE';
BERING.intro = "Within the context you are thinking about, or in life in general, how often and how strongly have you felt these emotions recently?<br>Press <b>FORWARD</b> to go to the next page.";




BERING.compat="311217";
BERING.onPage=1;
BERING.UItype=5;
$(document).ready(function () {
    BERING.assets.setAssets();
    BERING.DOMQMenu.make();
    BERING.ring.initRing(BERING.ore.current());
    BERING.questionaire.getUI(3);
    BERING.EmoproIns.ratingScale();
    BERING.ToolTip.bindToolTips();
});