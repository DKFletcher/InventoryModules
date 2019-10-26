"use strict";
var BERING;
(function () {
    BERING.Command = {
        init: function () {
            BERING.progress.init();
            function resizeListener() {
                BERING.Command.execute("resize");
            }
            window.addEventListener("resize", resizeListener);
            return BERING.ring.turnBACK();
        },
        doFORWARD: function () {
            if (!BERING.end) {
                BERING.questionaire.commentIn(true);
                BERING.questionaire.updateModel();
                BERING.content = BERING.ring.turnFWD();
                BERING.questionaire.updateView();
                BERING.progress.set();
            }
        },
        doBACK: function () {
            BERING.questionaire.commentIn(true);
            BERING.questionaire.updateModel();
            BERING.content = BERING.ring.turnBACK();
            BERING.questionaire.updateView();
            BERING.progress.set();
        },
        doDATA: function () {
            var gc = BERING.questionaire.prepSave();
            BERING.IOModule.save(BERING.ring.getRing(), gc);
        },
        doPDF: function () {
            if (BERING.ring.getRing().comon()) {
                BERING.questionaire.prepSave();
                BERING.PDF.publish();
            } else {
                BERING.Modal.publish('<div><h3>Cannot create your chart, this profile is incomplete</h3><p>Check the progress bar for complete pages (green) and incomplete pages (black)</p>');
            }
        },
        doOPEN: function () {
            //document.getElementById('fileInput').value = null;
            BERING.IOModule.load();
        },
        comment: function () {
            BERING.questionaire.commentIn(false);
        },
        comment2: function () {
            BERING.questionaire.commentIn(true);
        },
        progress: function (theSet) {
            BERING.questionaire.commentIn(true);
            BERING.questionaire.updateModel();
            BERING.content = BERING.ring.progressSet(theSet);
            BERING.questionaire.updateView();
            BERING.progress.set();
        },
        resize: function () {
            BERING.questionaire.resize();
        }
    };
    BERING.Command.execute = function (name) {
        return BERING.Command[name] && BERING.Command[name].apply(BERING.Command, [].slice.call(arguments, 1));
    };
})();