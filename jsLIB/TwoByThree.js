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
        $("body").find("div.itemDisplay").append($("<div id='endbeg'></div>"));
    }
    function uiRS() {
        uiBE();
    }
    function uiBE() {
        $("#begend").remove();
        $("#endbeg").remove();
        if (BERING.begining || BERING.end) {
            if ($("body").find("div.commentDisplay").children().length === 0) {
                if (BERING.begining) {
                    $("body").find("div.commentDisplay").append($("<section class='beginEnd' id='begend'></section>"));
                    var msg = "<h3>START</h3><p>" + BERING.intro + "</p>";
                    var cont = "#begend";
                } else {

                    $("body").find("div.itemDisplay").append($("<section class beginEnd id='endbeg' style='width: 75%;'></section>"));
                    msg ="<h3>END</h3><p>This is the last item, don't forget to put your name in the name box above.</p><p><br></p>";
                    cont = '#endbeg';
                }
                $(cont).html(msg);
                var tmp = String($(cont).find('p').css('height'));
                tmp = String(Number(tmp.slice(0, tmp.length - 2)) + 10) + 'px';
                $(cont).css('height', tmp).css('margin-top', '0.5em');
            }
        }
    }
    function fairRepresentation(i) {
        var inventoryText = BERING.content[i].inventoryText;
        var smallText = BERING.content[i].smallFontText;
        var chartText = BERING.content[i].item;
        var ret = chartText;
        if (chartText !== inventoryText) {
            ret = chartText + ",<span style='font-size: x-large;'> " + inventoryText + "</span>";
        }
        if (chartText !== smallText) {
            ret += "<span style='font-size: medium;'>: " + smallText + "</span>";
        }
//        if (chartText==="Gloating"){
//            ret=inventoryText;
//        }
        //console.log(ret)
        return ret;
    }
    function make5() {
        BERING.content = BERING.Command.execute("init");
        var itemSection = $("body").find("div.itemDisplay");
        itemSection.css("background-image", "url('../images/tree.png')");
        itemSection.append($("<hr id='hr01'>"));
        itemSection.append($("<div id='item0' ></div>"));
        $('#item0').append($("<div id='regular0'></div>"));
        $("#regular0").css("background-color", "#fffce3");
        $("#regular0").append($("<div style='text-align: center;' >How Often?</div>"));
        $("#regular0").append($("<div class='rateRoc' id='0s'></div>"));
        makeRatePromo('#0s');
        $("#item0").append($("<hr id='hr02'><p class='item' id='0'>" + fairRepresentation(0) + "</p>"));
        $('#item0').append($("<hr id='hr11'><div id='intense0'></div>"));
        $("#intense0").css("background-color", "#fffce3");
        $("#intense0").append($("<div style='text-align: center;' >How Strongly?</div>"));
        $("#intense0").append($("<div class='rateRoc' id='0i'></div>"));
        makeRatePromo2('#0i');
        var chartText = String(BERING.content[0].urEx).toLowerCase();
        $('#item0').append($("<hr id='hr12'><br><div style='text-align: center;font-size: large;'id='feelingLine'>Does your recent experience of feeling " + chartText + " make you feel good or bad?</div><br><div id='pol0' style='text-align: center;'><button class='butPol' id='upl0'>feels good</button><br><br><button class='butPol' id='dis0'>feels bad</button></div>"));
        //makeRatePromo2('#1i');
        itemSection.find("div").children("p").addClass("park").css("cursor", "pointer").css("font-family", "sans-serif").css("line-height", "60%").css("font-size", "xx-large").css("padding", "15px 10px 15px 10px").css('margin-top', '0em').css('margin-bottom', '0em').css('text-align', 'left');
        uiBE();
        $(".rateBut").click(function () {
            var evtPass = String(String(this.id.charAt(3)) + String(this.id.charAt(4)));
            $(this).trigger("ratingChoice:toggle", evtPass);
        });
        $(".rateBut").on('touchstart', function () {
            var evtPass = String(String(this.id.charAt(3)) + String(this.id.charAt(4)));
            $(this).trigger("ratingChoice:toggle", evtPass);
        });
        $(".intenseBut").click(function () {
            var evtPass = String(String(this.id.charAt(3)) + String(this.id.charAt(4)));
            $(this).trigger("intenseChoice:toggle", evtPass);
        });
        $(".intenseBut").on('touchstart', function () {
            var evtPass = String(String(this.id.charAt(3)) + String(this.id.charAt(4)));
            $(this).trigger("intenseChoice:toggle", evtPass);
        });

//        $(".item").click(function () {
//            $(this).trigger("itemChoice:toggle");
//        });
        $(".rateBut").on("ratingChoice:toggle", function () {
            if (commentControl) {
                uiC(false);
            }
            if ($(this).is(".rateButOff")) {
                $(this).parent().children('button').removeClass("rateButOn");
                $(this).addClass('rateButOn');
                var item = $(this).parent().parent().parent().children('p');
                item.removeClass('onFeelGood');
                item.removeClass('onFeelBad');
                item.removeClass('');
                if ($(String('#' + String(this.id.charAt(3) + 'i'))).children().is(".intenseButOn") && $(String('#pol' + String(this.id.charAt(3)))).children().is(".butPolOn")) {
                    if (item.is('.off')) {
                        item.removeClass('off');
                    }
                    if ($('#dis0').is('.butPolOn')) {
                        if (item.is('.onFeelGood')) {
                            item.removeClass('onFeelGood');
                        }
                        item.addClass('onFeelBad');
                    } else {
                        if (item.is('.onFeelBad')) {
                            item.removeClass('onFeelBad');
                        }
                        item.addClass('onFeelGood');
                    }
                }
                if ($(this).attr('id').charAt(4) === '0' && $('#regular0').css('opacity') !== '0') {
                    $('#intense0').css('opacity', '0');
                    $('#pol0').css('opacity', '0');
                    $('#feelingLine').css('opacity', '0');
                    $('#hr11').css('opacity', '0');
                    $('#hr12').css('opacity', '0');
                    $('p#0').removeClass('onFeelGood');
                    $('p#0').removeClass('onFeelBad');
                    $('p#0').addClass('on');
                    BERING.content[0].isZero = true;
                } else if ($('#regular0').css('opacity') !== '0') {
                    $('#intense0').css('opacity', '1');
                    $('#pol0').css('opacity', '1');
                    $('#feelingLine').css('opacity', '1');
                    $('#hr11').css('opacity', '1');
                    $('#hr12').css('opacity', '1');
                    BERING.content[0].isZero = false;
                }
            }
            BERING.content.forEach(setMODEL);
            isEnd();
        });
//        $(".item").on("itemChoice:toggle", function () {
//            if (commentControl) {
//                uiC(false);
//            }
//            $("body").find("div.itemDisplay").find("div").children("p").removeClass("itemFocusOn");
//            itemFocus = $(this).attr("id");
//            $(this).addClass("itemFocusOn");
//        });
        $(".intenseBut").on("intenseChoice:toggle", function () {
            if (commentControl) {
                uiC(false);
            }
            if ($(this).is(".intenseButOff")) {
                $(this).parent().children('button').removeClass("intenseButOn");
                $(this).addClass('intenseButOn');
                if ($(String('#' + String(this.id.charAt(3) + 's'))).children().is(".rateButOn") && $(String('#pol' + String(this.id.charAt(3)))).children().is(".butPolOn")) {
                    var item = $(this).parent().parent().parent().children('p');
                    if (item.is('.off')) {
                        item.removeClass('off')
                    }
                    if ($('#dis0').is('.butPolOn')) {
                        if (item.is('.onFeelGood')) {
                            item.removeClass('onFeelGood')
                        }
                        item.addClass('onFeelBad');
                    } else {
                        if (item.is('.onFeelBad')) {
                            item.removeClass('onFeelBad');
                        }
                        item.addClass('onFeelGood');
                    }
                }
                if ($(this).attr('id').charAt(4) === '0' && $('#intense0').css('opacity') !== '0') {
                    $('#regular0').css('opacity', '0')
                    $('#pol0').css('opacity', '0')
                    $('#feelingLine').css('opacity', '0')
                    $('p#0').removeClass('onFeelGood');
                    $('p#0').removeClass('onFeelBad');
                    $('p#0').addClass('on');
                    $('#hr01').css('opacity', '0');
                    $('#hr02').css('opacity', '0');
                    BERING.content[0].isZero = true;
                } else if ($('#intense0').css('opacity') !== '0') {
                    $('#regular0').css('opacity', '1')
                    $('#feelingLine').css('opacity', '1')
                    $('#pol0').css('opacity', '1');
                    $('#hr01').css('opacity', '1');
                    $('#hr02').css('opacity', '1');
                    BERING.content[0].isZero = false;
                }
            }
            BERING.content.forEach(setMODEL);
            isEnd();
        });
        $(".butPol").click(function () {
            $(this).trigger("polarity:toggle");
        });
        $(".butPol").on('touchstart',function () {
            $(this).trigger("polarity:toggle");
        });
        $(".butPol").on("polarity:toggle", function () {
            if (commentControl) {
                uiC(false);
            }
            $(this).parent().children('button').removeClass('butPolOn');
            $(this).addClass('butPolOn');
            if ($(String('#' + String(this.id.charAt(3) + 's'))).children().is(".rateButOn") && $(String('#' + String(this.id.charAt(3) + 'i'))).children().is(".intenseButOn")) {
                var item = $(this).parent().parent().children('p');
                if (item.is('.off')) {
                    item.removeClass('off')
                }
                if ($(this).attr('id') === 'dis0') {
                    if (item.is('.onFeelGood')) {
                        item.removeClass('onFeelGood')
                    }
                    item.addClass('onFeelBad');
                } else {
                    if (item.is('.onFeelBad')) {
                        item.removeClass('onFeelBad');
                    }
                    item.addClass('onFeelGood');
                }
            }
            BERING.content.forEach(setMODEL);
            isEnd();
        });
    }
    function make1() {
        var overStore;
        BERING.content = BERING.Command.execute("init");
        var itemSection = $("body").find("div.itemDisplay");
        itemSection.css("background-image", "url('../images/tree.png')");
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
//        $(".item").on('touchstart',function () {
//            $(this).trigger("itemChoice:toggle", overStore);
//        });
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
        itemSection.css("background-image", "url('../images/tree.png')");
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
//         $(".item").on('touchstart',function () {
//            $(this).trigger("itemChoice:toggle", false);
//        });
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
        itemSection.css("background-image", "url('../images/tree.png')");
        itemSection.append($("<div id='item0' ></div>"));
        $("#item0").append($("<p class='item' id='0'></p>").text(BERING.content[0].item));
        $("#item0").append($("<div class='rateRoc' id='0s'></div><br>"));
        makeRate('#0s');
        itemSection.append($("<br>"));
        itemSection.append($("<div id='item1' ></div>"));
        $("#item1").append($("<p class='item' id='1'></p>").text(BERING.content[1].item));
        $("#item1").append($("<div class='rateRoc' id='1s'></div><br>"));
        makeRate('#1s');
        itemSection.append($("<br>"));
        itemSection.append($("<div id='item2' ></div>"));
        $("#item2").append($("<p class='item' id='2'></p>").text(BERING.content[2].item));
        $("#item2").append($("<div class='rateRoc' id='2s'></div>"));
        makeRate('#2s');

        itemSection.append($("<br><br><br>"));
        itemSection.find("div").children("p").addClass("park").css("cursor", "pointer").css("font-family", "sans-serif").css("line-height", "120%").css("font-size", "1em").css("padding", "2px 10px 2px 10px");
        uiBE();
        $(".rateBut").click(function () {
            var evtPass = String(String(this.id.charAt(3)) + String(this.id.charAt(4)));
            $(this).trigger("ratingChoice:toggle", evtPass);
        });
        $(".rateBut").on('touchstart', function () {
            var evtPass = String(String(this.id.charAt(3)) + String(this.id.charAt(4)));
            $(this).trigger("ratingChoice:toggle", evtPass);
        });
//        $(".item").click(function () {
//            $(this).trigger("itemChoice:toggle");
//        });
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
//        $(".item").on("itemChoice:toggle", function () {
//            if (commentControl) {
//                uiC(false);
//            }
//            $("body").find("div.itemDisplay").find("div").children("p").removeClass("itemFocusOn");
//            itemFocus = $(this).attr("id");
//            $(this).addClass("itemFocusOn");
//        });
    }
    function make4() {
        BERING.content = BERING.Command.execute("init");
        var itemSection = $("body").find("div.itemDisplay");
        itemSection.css("background-image", "url('../images/tree.png')");
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
        itemSection.append($("<br>"));
        itemSection.append($("<br>"));
        itemSection.append($("<br>"));
        itemSection.append($("<br>"));
        itemSection.append($("<br>"));
        makeRate('#1s');

        itemSection.find("div").children("p").addClass("park").css("cursor", "pointer").css("font-family", "sans-serif").css("line-height", "120%").css("font-size", "1em").css("padding", "2px 10px 2px 10px");
        uiBE();
        $(".rateBut").click(function () {
            var evtPass = String(String(this.id.charAt(3)) + String(this.id.charAt(4)));
            $(this).trigger("ratingChoice:toggle", evtPass);
        });

        $(".rateBut").on('touchstart', function () {
            var evtPass = String(String(this.id.charAt(3)) + String(this.id.charAt(4)));
            $(this).trigger("ratingChoice:toggle", evtPass);
        });
//        $(".item").click(function () {
//            $(this).trigger("itemChoice:toggle");
//        });
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
//        $(".item").on("itemChoice:toggle", function () {
//            if (commentControl) {
//                uiC(false);
//            }
//            $("body").find("div.itemDisplay").find("div").children("p").removeClass("itemFocusOn");
//            itemFocus = $(this).attr("id");
//            $(this).addClass("itemFocusOn");
//        });
    }
    function isEnd() {
        if (!hasSet) {
            if (BERING.ring.getRing().comon()) {
                hasSet = true;
                $('.buttonCalculate').css('display', 'inline-block');
                //BERING.ModalDisplay.publish('<div><h3>Create Your Chart</h3><p>Put your name in the name box and select <i><b>your chart</b></i> in the menu.</p><p>Depending on your browser a preview of <i><b>your chart</b></i> will be displayed which can be printed. A pdf file will also be saved onto your device. If no preview appears open your pdf to print your chart.</p></div>');
                BERING.ModalDisplay.publish("<p>Congratulations, you've completed the " + BERING.title + ". Select <b><i>OK</i></b> to create your chart.</p>");
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
        var toolTipText = ['never', 'hardly ever', 'sometimes', 'often', 'most of the time', 'all of the time'];
        for (var i = 0; i < 6; i++) {
            var id = String(String(theSet.charAt(1)) + String(i));
            //$(theSet).append($("<button class='rateBut' style='margin-bottom: -0.2em;' id='sB_" + id + "'><div class='tooltip'>"+String(i)+"<span class='tooltiptext'>"+toolTipText[i]+"</span></div></button>"));
            if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
                $(theSet).append($("<button class='rateBut' title='" + toolTipText[i] + "' style='margin-bottom: -0.2em;' id='sB_" + id + "'>" + String(i) + "</button>"));
            } else {
                $(theSet).append($("<button class='rateBut' style='margin-bottom: -0.2em;' id='sB_" + id + "'><abbr title='" + toolTipText[i] + "' rel='tooltip'>" + String(i) + "</abbr></button>"));
            }
            $("#sB_" + id).addClass('rateButOff');
            //$("#sB_" + id).text(String(i));
        }
        $('button.rateBut').css('width', "16.49%");
    }
    function makeRatePromo2(theSet) {
        var toolTipText = ['no feeling', 'very mild', 'mild effect', 'strong effect', 'very strong', 'intense'];
        for (var i = 0; i < 6; i++) {
            var id = String(String(theSet.charAt(1)) + String(i));
            //$(theSet).append($("<button class='intenseBut' style='margin-bottom: -0.2em;' id='iB_" + id + "'><div class='tooltip'>"+String(i)+"<span class='tooltiptext'>"+toolTipText[i]+"</span></div></button>"));
            if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
                $(theSet).append($("<button class='intenseBut' title ='" + toolTipText[i] + "' style='margin-bottom: -0.1em;margin-top: 0.1em;' id='iB_" + id + "'>" + String(i) + "</button>"));
            } else {
                $(theSet).append($("<button class='intenseBut' style='margin-bottom: -0.1em;margin-top: 0.1em;' id='iB_" + id + "'><abbr title='" + toolTipText[i] + "' rel='tooltip'>" + String(i) + "</abbr></button>"));
            }
            $("#iB_" + id).addClass('intenseButOff');
            //$("#iB_" + id).text(String(i));
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
            if (b2_on !== undefined) {
                uiItem.aIn = Number(b2_on.charAt(4)) + 1;
            }
            var poles = $(String('#pol' + String(index)));
            if (!poles.children().is(".butPolOn")) {
                uiItem.pole = 0;
            } else if (poles.find('#dis' + index).is(".butPolOn")) {
                uiItem.pole = -1;
            } else if (poles.find('#upl' + index).is(".butPolOn")) {
                uiItem.pole = 1;
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
                var chartText = "Does your recent experience of feeling " + String(BERING.content[0].urEx).toLowerCase() + " make you feel good or bad?"
                var feelingLine = $('#feelingLine');
                feelingLine.text('');
                feelingLine.append(chartText);
                tmp.removeClass("onFeelGood");
                tmp.removeClass("onFeelBad");
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

            var poles = $(String('#pol' + String(index)));
            poles.children().removeClass('butPolOn');
            $('p#0').removeClass('onFeelBad');
            $('p#0').removeClass('onFeelGood');
            $('p#0').removeClass('on');
            $('#hr01').css('opacity', '1');
            $('#hr02').css('opacity', '1');
            $('#hr11').css('opacity', '1');
            $('#hr12').css('opacity', '1');
            if (uiItem.aVa !== 0 && uiItem.aIn !== 0) {
                switch (uiItem.pole) {
                    case -1:
                        poles.find('#dis' + index).addClass('butPolOn');
                        $('p#0').addClass('onFeelBad');
                        break;
                    case 0:
                        poles.children().removeClass('butPolOn');
                        $('p#0').addClass('on');
                        break;
                    case 1:
                        poles.find('#upl' + index).addClass('butPolOn');
                        $('p#0').addClass('onFeelGood');
                        break
                    default:
                        poles.children().removeClass('butPolOn');
                        break;
                }
            }

            $('#regular0').css('opacity', '1')
            $('#intense0').css('opacity', '1')
            $('#pol0').css('opacity', '1');
            if (uiItem.aVa === 1) {
                $('#intense0').css('opacity', '0');
                $('p#0').removeClass('onFeelBad');
                $('p#0').removeClass('onFeelGood');
                $('p#0').addClass('on');
                $('#pol0').css('opacity', '0');
                $('#hr11').css('opacity', '0');
                $('#hr12').css('opacity', '0');
            }
            if (uiItem.aIn === 1) {
                $('#regular0').css('opacity', '0');
                $('p#0').removeClass('onFeelBad');
                $('p#0').removeClass('onFeelGood');
                $('p#0').addClass('on');
                $('#pol0').css('opacity', '0');
                $('#hr01').css('opacity', '0');
                $('#hr02').css('opacity', '0');
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
        // if (BERING.content[index].comment.length > 0) {
        //     tmp.html(BERING.content[index].item + "<BR><span style ='font-size: 0.5em;'>" + "COMMENT: " + BERING.content[index].comment) + "</span>";
        // }
    }
    function uiRF() {
        if (itemFocus !== -1) {
            var item = getFocus(itemFocus);
            item.trigger("itemChoice:toggle", true);
        } else {
            BERING.Modal.publish('<p>In order to set a questionnaire item to a red flag, you must first select.</p>');
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
                var prepend = BERING.content[itemFocus].item + "<BR><span style='font-size: 0.5em;'>" + "COMMENT: " + inp + "</span>";
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
            BERING.Modal.publish('<p>Select a description then attach a comment</p>');
        }
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
                var prepend = BERING.content[itemFocus].item + "COMMENT: " + inp;
                getFocus(itemFocus).html(prepend);
            }
            itemSection.remove();
            commentControl = false;
        }
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
