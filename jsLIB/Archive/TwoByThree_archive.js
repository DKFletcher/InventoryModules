"use strict";
var BERING;
BERING.questionaire = (function () {
    var itemFocus = -1;
    var generalComment = new String();
    var commentControl = false;
    var hasSet = false;
    function init() {
        switch (BERING.UItype) {
            case 1:
                make1();
                break;
            case 2:
                make2();
                break;
            case 3:
                make3();
                break;
            case 4:
                make4();
                break;
            case 5:
                make5();
                break;
        }
    }
    function uiRS() {
        uiBE();
    }
    function uiBE() {
        $("#begend").remove();
        if (BERING.begining || BERING.end) {
            if ($("body").find("div.commentDisplay").children().length === 0) {
                if (BERING.begining) {
                    var msg = "<h3>The start</h3><p>" + BERING.intro + "</p>";
                } else {
                    msg = '<h3>The end</h3><p><br></p>';
                }
                $("body").find("div.commentDisplay").append($("<section class='beginEnd' id='begend'></section>"));
                $("#begend").html(msg);
                var tmp = String($("#begend").find('p').css('height'));
                tmp = String(Number(tmp.slice(0, tmp.length - 2)) + 10) + 'px';
                $("#begend").css('height', tmp).css('margin-top', '0.5em');
            }
        }
    }
    function fairRepresentation(i) {
        var inventoryText=BERING.content[i].inventoryText;
        var smallText = BERING.content[i].smallFontText;
        var chartText = BERING.content[i].item;
        
        var ret = chartText;
        if (chartText !== inventoryText) {
            ret=chartText+",<span style='font-size: large'> "+inventoryText+"</span>";
            
        }
        if (chartText !== smallText){
                ret+=",<span style='font-size: medium'> "+smallText+"</span>"
            }
        if (chartText==="Gloating"){
            ret=inventoryText;
        }
        //console.log(ret)
        return ret;
    } 
    function make5() {
        BERING.content = BERING.Command.execute("init");
        var itemSection = $("body").find("div.itemDisplay");
        itemSection.append($("<hr>"));
        itemSection.append($("<div id='item0' ></div>"));
        $('#item0').append($("<div id='regular0'></div>"));
        $("#regular0").css("background-color", "#bcecfe");
        $("#regular0").append($("<div style='margin-left: 1em;' >FREQUENCY</div>"));
        $("#regular0").append($("<div class='rateRoc' id='0s'></div>"));
        makeRatePromo('#0s');
        $("#item0").append($("<p class='item' id='0'>"+fairRepresentation(0)+"</p>"));
        $('#item0').append($("<div id='intense0'></div>"));
        $("#intense0").css("background-color", "#c4d1e3");
        $("#intense0").append($("<div style='margin-left: 1em;' >INTENSITY</div>"));
        $("#intense0").append($("<div class='rateRoc' id='0i'></div>"));
        makeRatePromo2('#0i');
        itemSection.append($("<hr>"));
        //itemSection.append($('<br>'));
        itemSection.append($("<hr>"));
        itemSection.append($("<div id='item1' ></div>"));
        $('#item1').append($("<div id='regular1'></div>"))
        $("#regular1").css("background-color", "#bcecfe");
        $("#regular1").append($("<div style='margin-left: 1em;' >FREQUENCY</div>"));
        $("#regular1").append($("<div class='rateRoc' id='1s'></div>"));
        makeRatePromo('#1s');
        $("#item1").append($("<p class='item' id='1'>"+fairRepresentation(1)+"</p>"));
//        $("#item1").append($("<p class='item' id='1'></p>").text(fairRepresentation(1)));
//        if (BERING.content[1].item !== BERING.content[1].smallFontText) {
//            $("#1").append($("<span style='font-size: large'> " + BERING.content[1].smallFontText + "</span>"));
//        }
        $('#item1').append($("<div id='intense1'></div>"));
        $("#intense1").css("background-color", "#c4d1e3");
        $("#intense1").append($("<div style='margin-left: 1em;' >INTENSITY</div>"));
        $("#intense1").append($("<div class='rateRoc' id='1i'></div>"));
        makeRatePromo2('#1i');
        itemSection.append($("<hr>"));
        itemSection.find("div").children("p").addClass("park").css("cursor", "pointer").css("font-family", "sans-serif").css("line-height", "120%").css("font-size", "200%").css("padding", "15px 10px 15px 10px").css('margin-top', '0em').css('margin-bottom', '0em').css('text-align', 'center');
        uiBE();
        $(".rateBut").click(function () {
            var evtPass = String(String(this.id.charAt(3)) + String(this.id.charAt(4)));
            $(this).trigger("ratingChoice:toggle", evtPass);
        });
        $(".item").click(function () {
            $(this).trigger("itemChoice:toggle");
        });
        $(".rateBut").on("ratingChoice:toggle", function () {
            if (commentControl) {
                uiC(false);
            }
            if ($(this).is(".rateButOff")) {
                $(this).parent().children('button').removeClass("rateButOn");
                $(this).addClass('rateButOn');
                if ($(String('#' + String(this.id.charAt(3) + 'i'))).children().is(".intenseButOn")) {
                    $(this).parent().parent().parent().children('p').addClass('on');
                }
            }
            BERING.content.forEach(setMODEL);
            isEnd();
        });
        $(".item").on("itemChoice:toggle", function () {
            if (commentControl) {
                uiC(false);
            }
            $("body").find("div.itemDisplay").find("div").children("p").removeClass("itemFocusOn");
            itemFocus = $(this).attr("id");
            $(this).addClass("itemFocusOn");
        });
        $(".intenseBut").click(function () {
            var evtPass = String(String(this.id.charAt(3)) + String(this.id.charAt(4)));
            $(this).trigger("intenseChoice:toggle", evtPass);
        });
//        $(".item").click(function () {
//            $(this).trigger("itemChoice:toggle");
//        });
        $(".intenseBut").on("intenseChoice:toggle", function () {
            if (commentControl) {
                uiC(false);
            }
            if ($(this).is(".intenseButOff")) {
                $(this).parent().children('button').removeClass("intenseButOn");
                $(this).addClass('intenseButOn');
                if ($(String('#' + String(this.id.charAt(3) + 's'))).children().is(".rateButOn")) {
                    $(this).parent().parent().parent().children('p').addClass('on');
                }
            }
            BERING.content.forEach(setMODEL);
            isEnd();
        });

        function itemDone(sw1, sw2) {
            console.log('init')
        }
//        $(".item").on("itemChoice:toggle", function () {
//            if (commentControl) {
//                uiC(false);
//            }
//            $("body").find("div.itemDisplay").find("div").children("p").removeClass("itemFocusOn");
//            itemFocus = $(this).attr("id");
//            $(this).addClass("itemFocusOn");
//        });





    }
    function make1() {
        var overStore;
        BERING.content = BERING.Command.execute("init");
        var itemSection = $("body").find("div.itemDisplay");
        itemSection.css("background-image", "url('../images/tree.jpg')");
        itemSection.append($("<div id='item0' ></div>"));
        $("#item0").append($("<p class='item' id='0'></p>").text(BERING.content[0].item));
        $("#item0").append($("<p class='item' id='1'></p>").text(BERING.content[1].item));
        itemSection.append($("<br>"));
        itemSection.append($("<div id='item1' ></div>"));
        $("#item1").append($("<p class='item' id='2'></p>").text(BERING.content[2].item));
        $("#item1").append($("<p class='item' id='3'></p>").text(BERING.content[3].item));
        itemSection.find("div").children("p").addClass("park").css("cursor", "pointer").css("font-family", "sans-serif").css("line-height", "120%").css("font-size", "1.5em").css("padding", "2px 10px 2px 10px");
        uiBE();
        $(".item").click(function () {
            $(this).trigger("itemChoice:toggle", overStore);
        });
        $(".item").mouseover(function () {
            $(this).addClass("redFlag");
        });
        $(".item").mouseout(function () {
            $(this).removeClass("redFlag");
        });
        $(".item").on("itemChoice:toggle", function (event) {
            $(this).removeClass("redFlag");
            if (commentControl) {
                uiC(false);
            }
            if ($(this).is(".on")) {
                cEventConditional($(this), "itemChoice:off");
            } else if ($(this).is(".off")) {
                cEventConditional($(this), "itemChoice:on");
            } else if ($(this).is(".park")) {
                itemFocus = $(this).attr("id");
                $("body").find("div.itemDisplay").find("div").children("p").removeClass("itemFocusOn");
                $(this).addClass("itemFocusOn");
                $(this).trigger("itemChoice:park");
            }
            BERING.content.forEach(setMODEL);
            isEnd();
        }).on("itemChoice:on", function (event) {
            $(this).removeClass("off").removeClass("redFlag").addClass("on");
            BERING.content[itemFocus].redFlag = false;
        }).on("itemChoice:off", function (event) {
            $(this).removeClass("on").addClass("off");
        }).on("itemChoice:park", function (event) {
            $(this).siblings(".item").removeClass("park").addClass("off");
            $(this).removeClass("park").addClass("on");
        });
    }
    function make2() {
        BERING.content = BERING.Command.execute("init");
        var itemSection = $("body").find("div.itemDisplay");
        itemSection.css("background-image", "url('../images/tree.jpg')");
        itemSection.append($("<div id='item0' ></div>"));
        $("#item0").append($("<p class='item' id='0'></p>").text(BERING.content[0].item));
        $("#item0").append($("<p class='item' id='1'></p>").text(BERING.content[1].item));
        itemSection.append($("<br>"));
        itemSection.append($("<div id='item1' ></div>"));
        $("#item1").append($("<p class='item' id='2'></p>").text(BERING.content[2].item));
        $("#item1").append($("<p class='item' id='3'></p>").text(BERING.content[3].item));
        itemSection.append($("<br>"));
        itemSection.append($("<div id='item2' ></div>"));
        $("#item2").append($("<p class='item' id='4'></p>").text(BERING.content[4].item));
        $("#item2").append($("<p class='item' id='5'></p>").text(BERING.content[5].item));
        itemSection.find("div").children("p").addClass("park").css("cursor", "pointer").css("font-family", "sans-serif").css("line-height", "120%").css("font-size", "1em").css("padding", "2px 10px 2px 10px");
        uiBE();
        $(".item").click(function () {
            $(this).trigger("itemChoice:toggle", false);
        });
        $(".item").mouseover(function () {
            $(this).addClass("redFlag");
        });
        $(".item").mouseout(function () {
            $(this).removeClass("redFlag");
        });
        $(".item").on("itemChoice:toggle", function (event) {
            $(this).removeClass("redFlag");
            if (commentControl) {
                uiC(false);
            }
            if ($(this).is(".on")) {
                cEventConditional($(this), "itemChoice:off");
            } else if ($(this).is(".off")) {
                cEventConditional($(this), "itemChoice:on");
            } else if ($(this).is(".park")) {
                itemFocus = $(this).attr("id");
                $("body").find("div.itemDisplay").find("div").children("p").removeClass("itemFocusOn");
                $(this).addClass("itemFocusOn");
                $(this).trigger("itemChoice:park");
            }
            BERING.content.forEach(setMODEL);
            isEnd();
        }).on("itemChoice:on", function (event) {
            $(this).removeClass("off").removeClass("redFlag").addClass("on");
            BERING.content[itemFocus].redFlag = false;
        }).on("itemChoice:off", function (event) {
            $(this).removeClass("on").addClass("off");
        }).on("itemChoice:park", function (event) {
            $(this).siblings(".item").removeClass("park").addClass("off");
            $(this).removeClass("park").addClass("on");
        });
    }
    function cEventConditional(itemChoice, tr) {
        if (itemChoice.attr("id") === itemFocus) {
            itemChoice.trigger(tr);
        } else {
            itemFocus = itemChoice.attr("id");
            $("body").find("div.itemDisplay").find("div").children("p").removeClass("itemFocusOn");
            itemChoice.addClass("itemFocusOn");
        }
    }
    function make3() {
        BERING.content = BERING.Command.execute("init");
        var itemSection = $("body").find("div.itemDisplay");
        itemSection.css("background-image", "url('../images/tree.jpg')");
        itemSection.append($("<div id='item0' ></div>"));
        $("#item0").append($("<p class='item' id='0'></p>").text(BERING.content[0].item));
        $("#item0").append($("<div class='rateRoc' id='0s'></div>"));
        makeRate('#0s');
        itemSection.append($("<br>"));
        itemSection.append($("<div id='item1' ></div>"));
        $("#item1").append($("<p class='item' id='1'></p>").text(BERING.content[1].item));
        $("#item1").append($("<div class='rateRoc' id='1s'></div>"));
        makeRate('#1s');
        itemSection.append($("<br>"));
        itemSection.append($("<div id='item2' ></div>"));
        $("#item2").append($("<p class='item' id='2'></p>").text(BERING.content[2].item));
        $("#item2").append($("<div class='rateRoc' id='2s'></div>"));
        makeRate('#2s');
        itemSection.find("div").children("p").addClass("park").css("cursor", "pointer").css("font-family", "sans-serif").css("line-height", "120%").css("font-size", "1em").css("padding", "2px 10px 2px 10px");
        uiBE();
        $(".rateBut").click(function () {
            var evtPass = String(String(this.id.charAt(3)) + String(this.id.charAt(4)));
            $(this).trigger("ratingChoice:toggle", evtPass);
        });
        $(".item").click(function () {
            $(this).trigger("itemChoice:toggle");
        });
        $(".rateBut").on("ratingChoice:toggle", function () {
            if (commentControl) {
                uiC(false);
            }
            if ($(this).is(".rateButOff")) {
                $(this).parent().children('button').removeClass("rateButOn");
                $(this).parent().parent().children('p').addClass('on');
                $(this).addClass('rateButOn');
            }
            BERING.content.forEach(setMODEL);
            isEnd();
        });
        $(".item").on("itemChoice:toggle", function () {
            if (commentControl) {
                uiC(false);
            }
            $("body").find("div.itemDisplay").find("div").children("p").removeClass("itemFocusOn");
            itemFocus = $(this).attr("id");
            $(this).addClass("itemFocusOn");
        });
    }
    function make4() {
        BERING.content = BERING.Command.execute("init");
        var itemSection = $("body").find("div.itemDisplay");
        itemSection.css("background-image", "url('../images/tree.jpg')");
        itemSection.append($("<br>"));
        itemSection.append($("<div id='item0' ></div>"));
        $("#item0").append($("<p class='item' id='0'></p>").text(BERING.content[0].item));
        $("#item0").append($("<div class='rateRoc' id='0s'></div>"));
        itemSection.append($("<br>"));
        makeRate('#0s');
        itemSection.append($("<br>"));
        itemSection.append($("<br>"));
        itemSection.append($("<div id='item1' ></div>"));
        $("#item1").append($("<p class='item' id='1'></p>").text(BERING.content[1].item));
        $("#item1").append($("<div class='rateRoc' id='1s'></div>"));
        itemSection.append($("<br>"));
        makeRate('#1s');

        itemSection.find("div").children("p").addClass("park").css("cursor", "pointer").css("font-family", "sans-serif").css("line-height", "120%").css("font-size", "1em").css("padding", "2px 10px 2px 10px");
        uiBE();
        $(".rateBut").click(function () {
            var evtPass = String(String(this.id.charAt(3)) + String(this.id.charAt(4)));
            $(this).trigger("ratingChoice:toggle", evtPass);
        });
        $(".item").click(function () {
            $(this).trigger("itemChoice:toggle");
        });
        $(".rateBut").on("ratingChoice:toggle", function () {
            if (commentControl) {
                uiC(false);
            }
            if ($(this).is(".rateButOff")) {
                $(this).parent().children('button').removeClass("rateButOn");
                $(this).parent().parent().children('p').addClass('on');
                $(this).addClass('rateButOn');
            }
            BERING.content.forEach(setMODEL);
            isEnd();
        });
        $(".item").on("itemChoice:toggle", function () {
            if (commentControl) {
                uiC(false);
            }
            $("body").find("div.itemDisplay").find("div").children("p").removeClass("itemFocusOn");
            itemFocus = $(this).attr("id");
            $(this).addClass("itemFocusOn");
        });
    }
    function isEnd() {
        if (!hasSet) {
            if (BERING.ring.getRing().comon()) {
                hasSet = true;
                BERING.Modal.publish('<div><h3>Create Your Chart</h3><p>Put your name in the name box and select <i><b>your chart</b></i> in the menu.</p><p>Depending on your browser a preview of <i><b>your chart</b></i> will be displayed which can be printed. A pdf file will also be saved onto your device. If no preview appears open your pdf to print your chart.</p></div>');
            }
        }
    }
    function makeRate(theSet) {
        for (var i = 0; i < 6; i++) {
            var id = String(String(theSet.charAt(1)) + String(i));
            $(theSet).append($("<button class='rateBut'id='sB_" + id + "'></button>"));
            $("#sB_" + id).addClass('rateButOff');
            $("#sB_" + id).text(String(i));
        }
        $('button.rateBut').css('width', "16.49%");
    }
    function makeRatePromo(theSet) {
        for (var i = 0; i < 6; i++) {
            var id = String(String(theSet.charAt(1)) + String(i));
            $(theSet).append($("<button class='rateBut' style='margin-bottom: -0.2em;' id='sB_" + id + "'></button>"));
            $("#sB_" + id).addClass('rateButOff');
            $("#sB_" + id).text(String(i));
        }
        $('button.rateBut').css('width', "16.49%");
    }
    function makeRatePromo2(theSet) {
        for (var i = 0; i < 6; i++) {
            var id = String(String(theSet.charAt(1)) + String(i));
            $(theSet).append($("<button class='intenseBut' style='margin-bottom: -0.1em;margin-top: 0.1em;' id='iB_" + id + "'></button>"));
            $("#iB_" + id).addClass('intenseButOff');
            $("#iB_" + id).text(String(i));
        }
        $('button.intenseBut').css('width', "16.49%");
    }
    function uIM() {
        $("body").find("div.itemDisplay").find("div").children("p").removeClass("itemFocusOn");
        BERING.content.forEach(setMODEL);
    }
    function setMODEL(uiItem, index) {
        if (BERING.UItype === 3 || BERING.UItype === 4) {
            var b_bar = $("body").find("div.itemDisplay").find("div#" + index + "s");
            var b_on = b_bar.find('button.rateButOn').attr('id');
            if (b_on !== undefined) {
                uiItem.aVa = Number(b_on.charAt(4)) + 1;
            }
        } else if (BERING.UItype === 5) {
            var b_bar = $("body").find("div.itemDisplay").find("div#" + index + "s");
            var b_on = b_bar.find('button.rateButOn').attr('id');
            if (b_on !== undefined) {
                uiItem.aVa = Number(b_on.charAt(4)) + 1;
            }
            var b2_bar = $("body").find("div.itemDisplay").find("div#" + index + "i");
            var b2_on = b2_bar.find('button.intenseButOn').attr('id');
            console.log()
            if (b2_on !== undefined) {
                uiItem.aIn = Number(b2_on.charAt(4)) + 1;
            }
        } else {
            var tmp = $("body").find("div.itemDisplay").find("p#" + index);
            if (tmp.is(".on")) {
                uiItem.aVa = 1;
            } else if (tmp.is(".off")) {
                uiItem.aVa = -1;
            } else if (tmp.is(".park")) {
                uiItem.aVa = 0;
            }
        }
    }
    function uIV() {
        itemFocus = -1;
        BERING.content.forEach(getMODEL);
        uiBE();
        if (!hasSet) {
            if (BERING.ring.getRing().comon()) {
                hasSet = true;
            }
        }
    }
    function getFocus(ind) {
        return $("body").find("div.itemDisplay").find("p#" + ind);
    }
    function getMODEL(uiItem, index) {
        var tmp = getFocus(index);
        tmp.removeClass("on");
        tmp.removeClass("off");
        tmp.removeClass("park");
        try {
            if (BERING.UItype === 5) {
                tmp.text('');
                tmp.append(fairRepresentation(index));
            } else {
                tmp.text(uiItem.item);
            }
        } catch (error) {
            console.log('getModel222');
        }
        if (BERING.UItype === 3 || BERING.UItype === 4) {
            var b_bar = $("body").find("div.itemDisplay").find("div#" + index + "s");
            var b_on = b_bar.find('button.rateButOn').removeClass('rateButOn').addClass('rateButOff');
            if (uiItem.aVa !== 0) {
                tmp.addClass("on");
                var f_s = String(String(index) + String(uiItem.aVa - 1));
                b_bar.find('#sB_' + f_s).addClass('rateButOn');
            }
            if (uiItem.aVa > 0) {
                tmp.addClass("on");
            } else {
                tmp.addClass("park");
            }

        } else if (BERING.UItype === 5) {
            var b_bar = $("body").find("div.itemDisplay").find("div#" + index + "s");
            var b2_bar = $("body").find("div.itemDisplay").find("div#" + index + "i");
            var b_on = b_bar.find('button.rateButOn').removeClass('rateButOn').addClass('rateButOff');
            var b2_on = b2_bar.find('button.intenseButOn').removeClass('intenseButOn').addClass('intenseButOff');
            if (uiItem.aVa !== 0) {
                var f_s = String(String(index) + String(uiItem.aVa - 1));
                b_bar.find('#sB_' + f_s).addClass('rateButOn');
            }
            if (uiItem.aIn !== 0) {
                var f_s = String(String(index) + String(uiItem.aIn - 1));
                b2_bar.find('#iB_' + f_s).addClass('intenseButOn');
            }
            if (uiItem.aVa > 0 && uiItem.aIn > 0) {
                tmp.addClass("on");
            } else {
                tmp.addClass("park");
            }

        } else {
            if (uiItem.aVa === 0) {
                tmp.addClass("park");
            } else if (uiItem.aVa === -1) {
                tmp.addClass("off");
            } else if (uiItem.redFlag) {
                tmp.addClass("redFlag");
            } else if (uiItem.aVa === 1) {
                tmp.addClass("on");
            }
        }
        if (BERING.content[index].comment.length > 0) {
            tmp.html(BERING.content[index].item + "<BR>" + "COMMENT: " + BERING.content[index].comment);
        }
    }
    function uiRF() {
        if (itemFocus !== -1) {
            var item = getFocus(itemFocus);
            item.trigger("itemChoice:toggle", true);
        } else {
            BERING.Modal.publish('<p>In order to set a questionnaire item to a red flag, you must first select.</p>');
            //alert("In order to set a questionnaire item to a red flag, you must first select.");
        }
    }
    function uiC(pageTurn) {
        if (commentControl) {
            itemSection = $("body").find("textarea#cText");
            var inp = itemSection.val();
            if (inp.length === 0) {
                BERING.content[itemFocus ].comment = "";
                getFocus(itemFocus).text(BERING.content[itemFocus ].item);
            } else {
                BERING.content[itemFocus ].comment = itemSection.val();
                var prepend = BERING.content[itemFocus].item + "<BR>" + "COMMENT: " + inp;
                getFocus(itemFocus).html(prepend);
            }
            itemSection.remove();
            commentControl = false;
        } else if (!commentControl && itemFocus !== -1 && !pageTurn) {
            var itemSection = $("body").find("div.commentDisplay");
            itemSection.append($("<textarea type='text' name='comment' class='commentText' id='cText' ></textarea>"));
            commentControl = true;
            if (BERING.content[itemFocus ].comment.length !== 0) {
                itemSection = $("body").find("textarea#cText").val(BERING.content[itemFocus ].comment);
            } else {
                BERING.content[itemFocus ].comment = "";
                getFocus(itemFocus).text(BERING.content[itemFocus ].item);
            }
        } else if (itemFocus === -1 && !pageTurn) {
            //alert('Select a description then atatch a comment');
            BERING.Modal.publish('<p>Select a description then atatch a comment</p>');
        }
//        } else if (!commentControl && itemFocus === -1 && !generalCommentControl && !pageTurn) {
//            generalCommentControl = true;
//            var itemSection = $("body").find("div.commentDisplay");
//            itemSection.append($("<textarea type='text' name='genComment' class='genComText' id='cgText'></textarea>"));
//            if (generalComment.length !== 0) {
//                $("textarea#cgText").text(generalComment);
//            }
//        } else if (!commentControl && itemFocus === -1 && generalCommentControl) {
//            itemSection = $("body").find("textarea#cgText");
//            inp = itemSection.val();
//            if (inp.length > 0) {
//                generalComment = inp;
//            }
//            itemSection.remove();
//            generalCommentControl = false;
//        }
    }
    function uiS() {
        if (commentControl) {
            var itemSection = $("body").find("textarea#cText");
            var inp = itemSection.val();
            if (inp.length === 0) {
                BERING.content[itemFocus ].comment = "";
                getFocus(itemFocus).text(BERING.content[itemFocus ].item);
            } else {
                BERING.content[itemFocus ].comment = itemSection.val();
                var prepend = BERING.content[itemFocus].item + "<BR>" + "COMMENT: " + inp;
                getFocus(itemFocus).html(prepend);
            }
            itemSection.remove();
            commentControl = false;
        }// else if (generalCommentControl) {
//            itemSection = $("body").find("textarea#cgText");
//            inp = itemSection.val();
//            if (inp.length > 0) {
//                generalComment = inp;
//            }
//            itemSection.remove();
//            generalCommentControl = false;
//        }
        uIM();
        return generalComment;
    }
    ;
    return{
        prepSave: uiS,
        getUI: init,
        updateModel: uIM,
        updateView: uIV,
        commentIn: uiC,
        redFlag: uiRF,
        begend: uiBE,
        resize: uiRS
    };
}());

