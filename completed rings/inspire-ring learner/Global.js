var BERING=BERING||{};
BERING.begining=false;
BERING.content=[];
BERING.end=false;






BERING.title = "Inspire Ring (Learner)";
BERING.outside='Support';
BERING.inside='Challenge';
BERING.attitude='INSPIRATION';
BERING.intro = "My teacher is the kind of teacher who...";





BERING.compat="040916";
BERING.onPage=6;
BERING.UItype=2;
$(document).ready(function(){
    BERING.assets.setAssets();
    BERING.DOMQMenu.make();
    BERING.ring.initRing(BERING.ore.current());
    BERING.questionaire.getUI()
});