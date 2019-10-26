'use strict';
var BERING;
var PDFObject;
BERING.PositionTable = (function () {
    $('div.positionTable').append("<button class='rateButE' id='p1' style='width: 100%;' onClick='BERING.PositionTable.publish();') ><i>Position Table</i></button>");
    var multiPage = false;
    var inPage = 20;
    function p_pdf() {

        if (BERING.compat === "311217") {
            var doc = makePromotion();
        } else {
            var doc = makeDoc();
        }
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf('MSIE ');
        var edge = ua.indexOf('Edge/');
        var trident = ua.indexOf('Trident/');
        var isPREVIEW = true;
        if (navigator && navigator.mimeTypes && navigator.mimeTypes['application/pdf']) {
            isPREVIEW = true;
        } else {
            isPREVIEW = false;
        }
        if (msie > 0 || edge > 0 || trident > 0) {
            isPREVIEW = false;
        }
        if (isPREVIEW) {
            $('iframe').remove();
            $('section.previewer').append("<iframe id='pdf_preview' type='application/pdf' src=''  width='100%' height='600px'></iframe>");
            $('iframe').attr('src', doc.output('datauristring'));
        }
        doc.addMetadata(BERING.MetaModule.save(BERING.ring.getRing(), BERING.questionaire.prepSave()));
        if ($("input:text").val().length > 0) {
            //doc.save($("input:text").val() + ' Position Table for ' + BERING.title + '.pdf');
        } else {
            //doc.save('Position Table for ' + BERING.title + '.pdf');
        }
    }
    function makePromotion() {
        var doc = new jsPDF("l", "mm", "a4");
        var height = doc.internal.pageSize.height * 1.365;
        var h1 = 5;
        var aspectwidth1 = (height - h1) * (10.8 / 16);
        BERING.Chart.makePromotion(doc);
        return doc;
    }
    function makeDoc() {
        var doc = new jsPDF("l", "mm", "a4");
        makeChart(doc);
        populateChart(doc);
        doc.addPage();
        makeTable(doc);
        return doc;
    }
    function makeChart(doc) {
        upperBack(doc);
        lowerBack(doc);
        lines(doc);
        ringBack(doc, 44, 229, 230, 219);
        fillSpiral(doc);
        spiral(doc, 44, 31);
        ringBack(doc, 31.15, 249, 249, 249);
        shim(doc, 44, 31);
        hangins(doc, 44, 31);
    }
    function hangins(doc, outerRing, innerRing) {
        doc.setFontType("normal");
        doc.setFontSize(11);
        doc.setTextColor(198, 198, 198);
        doc.text(BERING.outside, 149, 54.7, 'center');
        doc.setTextColor(229, 230, 219);
        doc.text(BERING.inside, 149, 61, 'center');
        doc.setFontSize(18);
        doc.setTextColor(170, 170, 170);
        doc.text(BERING.attitude, 155, 113.5, 'center', 90);
        var x_ = 8 + inPage;
        var y_ = 205;
        doc.setTextColor(12, 159, 165);
        doc.text("what", x_, y_);
        doc.setTextColor(204, 51, 255);
        doc.text("motivates", x_ + 14, y_);
        doc.setTextColor(164, 234, 31);
        doc.text("learning", x_ + 41.5, y_);
        doc.setTextColor(101, 165, 152);
        doc.text(".com", x_ + 64.5, y_);
        doc.setTextColor(0, 0, 0);
        doc.text(BERING.title, 290 - inPage, y_, 'right');



        var ringRes = 360;
        var incRad = (outerRing - innerRing) / ringRes;
        var _width = 282;
        var _height = 191;
        var pp_x = 187.8;
        var pp_y = 91;


        doc.setDrawColor(198, 198, 198);
        doc.setLineWidth(0.5);

        var oR = 34.5;
        for (var i = 180; i < 210; i++) {
            var pointRatio = i / ringRes;
            var xSteps = Math.cos(pointRatio * 2 * Math.PI);
            var ySteps = Math.sin(pointRatio * 2 * Math.PI);
            var pointX = -xSteps * (oR + (i - 90) * incRad) + 9;// * ( oR+ (i-90) * 2 * incRad);
            var pointY = ySteps * (oR + (i - 90) * incRad) - 3;// * (oR + (i-90) * 2 * incRad);
            doc.line(pp_x, pp_y, pointX + _width / 2, pointY + _height / 2);
            pp_x = pointX + _width / 2;
            pp_y = pointY + _height / 2;
        }
        doc.line(187.8, 92.5, 185.7, 89);
        doc.line(187.8, 92.5, 189.7, 89);
        doc.setDrawColor(229, 230, 219);
        oR = 25;
        pp_x = 118.5;
        pp_y = 76.1;
        for (var i = 330; i < 363; i++) {
            var pointRatio = i / ringRes;
            var xSteps = Math.cos(pointRatio * 2 * Math.PI);
            var ySteps = Math.sin(pointRatio * 2 * Math.PI);
            var pointX = -xSteps * (oR + (i - 90) * incRad) + 7;// * ( oR+ (i-90) * 2 * incRad);
            var pointY = ySteps * (oR + (i - 90) * incRad) - 3;// * (oR + (i-90) * 2 * incRad);
            doc.line(pp_x, pp_y, pointX + _width / 2, pointY + _height / 2);
            pp_x = pointX + _width / 2;
            pp_y = pointY + _height / 2;
        }
        doc.line(113.2, 93.7, 111.2, 90.2);
        doc.line(113.2, 93.7, 115.2, 90.2);

    }
    function shim(doc, outerShim, innerShim) {
        doc.setDrawColor(170, 170, 170);
        doc.setLineWidth(.1);
        doc.setDrawColor(229, 230, 219);
        doc.setDrawColor(198, 198, 198);
    }
    function fillSpiral(doc) {
        doc.setFillColor(198, 198, 198);
        doc.rect(144, 125, 5, 12, 'F');
        doc.rect(143, 124, 6, 12, 'F');
        doc.rect(130, 115, 19, 17, 'F');
        doc.circle(141, 131.5, 5, 'F');
        doc.circle(135, 128, 5, 'F');
        doc.circle(137, 125, 10, 'F');
        doc.circle(133, 110, 20, 'F');
        doc.circle(129, 126, 5.4, 'F');
        doc.circle(134, 102, 25, 'F');
        doc.circle(138, 94, 30, 'F');
        doc.circle(152, 94.5, 30, 'F');
        doc.circle(152.8, 94, 30, 'F');
        doc.circle(152.2, 91, 31, 'F');
        doc.circle(152.5, 92, 31, 'F');
        doc.circle(146.6, 86.8, 31, 'F');
        doc.circle(149, 90, 34, 'F');
        doc.circle(144, 90, 33.5, 'F');
        doc.rect(148.1, 135.6, 1, 2, 'F');
        doc.circle(144, 132.1, 5, 'F');
        doc.circle(143, 132, 5, 'F');
        doc.circle(142, 129.7, 7, 'F');
        doc.circle(139, 125.6, 10, 'F');
        doc.circle(139.8, 129.2, 7, 'F');
        doc.circle(145, 135.3, 2, 'F');
        doc.circle(147, 135.4, 2, 'F');
        doc.circle(145.9, 135.4, 2, 'F');
        doc.circle(147.7, 136.5, 1, 'F');
        doc.circle(139.5, 91.8, 31, 'F');
        doc.circle(140, 90.8, 31, 'F');
        doc.circle(133, 98, 25, 'F');
        doc.circle(133, 104, 23.3, 'F');
        doc.circle(128, 110, 16.1, 'F');
        doc.circle(129, 120, 10, 'F');
        doc.circle(134, 123, 10.3, 'F');
    }
    function spiral(doc, outerRing, innerRing) {
        var ringRes = 360;
        var incRad = (outerRing - innerRing) / ringRes;
        var _width = 282;
        var _height = 191;
        var oR = 30;
        doc.setDrawColor(229, 230, 219);
        doc.setDrawColor(198, 198, 198);
        doc.setLineWidth(0.5);
        doc.line(149, 93.5 + 31, 149, 93.5 + 44);
        var pp_x = 149;
        var pp_y = 124.5;
        for (var i = 90; i < 180; i++) {
            var pointRatio = i / ringRes;
            var xSteps = Math.cos(pointRatio * 2 * Math.PI);
            var ySteps = Math.sin(pointRatio * 2 * Math.PI);
            var pointX = -xSteps * (oR + (i - 90) * incRad) + 9;// * ( oR+ (i-90) * 2 * incRad);
            var pointY = ySteps * (oR + (i - 90) * incRad) - 1;//+(i-90)*incRad// * (oR + (i-90) * 2 * incRad);
            doc.line(pp_x, pp_y, pointX + _width / 2, pointY + _height / 2);
            pp_x = pointX + _width / 2;
            pp_y = pointY + _height / 2;
        }
        for (var i = 180; i < 270; i++) {
            var pointRatio = i / ringRes;
            var xSteps = Math.cos(pointRatio * 2 * Math.PI);
            var ySteps = Math.sin(pointRatio * 2 * Math.PI);
            var pointX = -xSteps * (oR + (i - 90) * incRad) + 9;// * ( oR+ (i-90) * 2 * incRad);
            var pointY = ySteps * (oR + (i - 90) * incRad) - 3;// * (oR + (i-90) * 2 * incRad);
            doc.line(pp_x, pp_y, pointX + _width / 2, pointY + _height / 2);
            pp_x = pointX + _width / 2;
            pp_y = pointY + _height / 2;
        }

        for (var i = 270; i < 360; i++) {
            var pointRatio = i / ringRes;
            var xSteps = Math.cos(pointRatio * 2 * Math.PI);
            var ySteps = Math.sin(pointRatio * 2 * Math.PI);
            var pointX = -xSteps * (oR + (i - 90) * incRad) + 7;// * ( oR+ (i-90) * 2 * incRad);
            var pointY = ySteps * (oR + (i - 90) * incRad) - 3;// * (oR + (i-90) * 2 * incRad);
            doc.line(pp_x, pp_y, pointX + _width / 2, pointY + _height / 2);
            pp_x = pointX + _width / 2;
            pp_y = pointY + _height / 2;
        }


        for (var i = 0; i < 92; i++) {
            var pointRatio = i / ringRes;
            var xSteps = Math.cos(pointRatio * 2 * Math.PI);
            var ySteps = Math.sin(pointRatio * 2 * Math.PI);
            var pointX = -xSteps * (oR + (i + 270) * incRad) + 6.75;// * ( oR+ (i-90) * 2 * incRad);
            var pointY = ySteps * (oR + (i + 270) * incRad) - 1;// * (oR + (i-90) * 2 * incRad);
            doc.line(pp_x, pp_y, pointX + _width / 2, pointY + _height / 2);
            pp_x = pointX + _width / 2;
            pp_y = pointY + _height / 2;
        }
    }
    function lines(doc) {
        doc.setDrawColor(170, 170, 170);
        doc.setLineWidth(1);
        switch (BERING.compat) {
            case '280915':
                block2(doc);
                break;
            case '090915':
                block3(doc);
                break;
            case '110217':
                block4(doc);
                break;
            case '120217':
                block4(doc);
                break;
            default:
                block1(doc);
        }
    }
    function block4(doc) {
        doc.line(8 + inPage, 196, 169, 93.5);
        doc.line(8 + inPage, 134.7, 175, 93.5);
        doc.line(104.5, 196, 162, 93.5);
        doc.line(187, 196, 138, 93.5);
        doc.line(290 - inPage, 196, 130, 93.5);
        doc.line(290 - inPage, 134.7, 118, 93.5);
        doc.line(80, 5, 170.5, 93.5);
        doc.line(217.5, 5, 127.5, 93.5);
    }
    function block3(doc) {
        doc.line(82, 5, 168, 93.5);
        doc.line(79.5, 196, 170.5, 93.5);
        doc.line(218.5, 196, 128.5, 93.5);
        doc.line(220, 5, 130.5, 93.5);
    }
    function block2(doc) {
        doc.line(149, 5, 149, 196);
    }
    function block1(doc) {
        doc.line(8 + inPage, 196, 169, 93.5);
        doc.line(8 + inPage, 134.7, 175, 93.5);
        doc.line(104.5, 196, 162, 93.5);
        doc.line(187, 196, 138, 93.5);
        doc.line(290 - inPage, 196, 130, 93.5);
        doc.line(290 - inPage, 134.7, 118, 93.5);
        doc.line(93.5, 5, 163.5, 93.5);
        doc.line(205, 5, 134.5, 93.5);
    }
    function ringBack(doc, rad, r, g, b) {

        doc.setFillColor(r, g, b);
        doc.setDrawColor(r, g, g);
        doc.setLineWidth(0.1);
        doc.circle(149, 93.5, rad, 'FD');
    }
    function upperBack(doc) {
        doc.setFillColor(255, 255, 191);
        doc.setDrawColor(170, 170, 170);
        doc.setLineWidth(1);
        doc.rect(8 + inPage, 5, 282 - 2 * inPage, 89, 'FD');
    }

    function lowerBack(doc) {
        doc.setFillColor(221, 221, 221);
        doc.setDrawColor(170, 170, 170);
        doc.setLineWidth(1);
        doc.rect(8 + inPage, 94, 282 - 2 * inPage, 102, 'FD');
    }
    function find(pos) {
        var test = BERING.Miner.pitPony();
        for (var i = 0; i < test.length; i++) {
            if (test[i].pos === pos) {
                return test[i].item;
                break;
            }
        }
    }
    function makeTable(doc) {
        var ring = BERING.Miner.pitPony();
        ring.sort(function (a, b) {
            return a.pos - b.pos;
        });
        var rows = [];
        if (BERING.UItype === 3 || BERING.UItype === 4) {
            var columns = ["Position Number", "Item"];
        } else {
            var columns = ["Position Number", "Item", "Pair"];
        }
        for (var i = 0; i < ring.length; i++) {
            if (BERING.UItype === 3 || BERING.UItype === 4) {
                rows.push([ring[i].pos, ring[i].item]);
            } else {
                rows.push([ring[i].pos, ring[i].item, String(ring[i].pair) + ': ' + find(ring[i].pair)]);
            }
        }
        doc.autoTable(columns, rows, {
            addPageContent: function (data) {
                doc.text("Position Table for " + BERING.title, 40, 30);
            },
            margin: {top: 45}
        });
    }
    function populateChart(doc) {
        var height = doc.internal.pageSize.height * 1.365;
        var h1 = 5;
        var aspectwidth1 = (height - h1) * (10.8 / 16);
        doc.setFontSize(12);
        if ($("input:text").val().length > 0) {
            var inputText = 'Position Chart for ' + BERING.title;
            var textWrap = doc.splitTextToSize(inputText, 50, false);
            doc.text(textWrap, 10, 10, undefined);
        }
        if (BERING.UItype === 1 && BERING.compat !== "120217") {
            doc.setFontSize(12);
        } else {
            doc.setFontSize(8);
        }
        var genCom = BERING.questionaire.prepSave();
        var ring = BERING.ring.getRing();
        if (BERING.UItype === 1 || BERING.UItype === 2) {
            for (var i = 0; i < ring.length; i++) {
                var textWrap = doc.splitTextToSize(ring[i].item, ring[i].width, false);
                doc.text(textWrap, ring[i].x, ring[i].y, ring[i].align);
                doc.setTextColor(0, 0, 0);
                doc.setFontType("normal");
            }
        } else {
            for (var i = 0; i < ring.length; i++) {
                var textWrap = doc.splitTextToSize(ring[i].item, ring[i].width, false);
                doc.text(textWrap, ring[i].x, ring[i].y, ring[i].align);
                doc.setTextColor(0, 0, 0);
                doc.setFontType("normal");
            }
        }
        if (BERING.UItype === 1 && BERING.compat !== "120217") {
            doc.setFontSize(25);
        } else {
            doc.setFontSize(10);
        }
        var hits = ring.hits();
        var tmp = BERING.ore.current();
        doc.setTextColor(255, 127, 0);
        for (var j = 0; j < tmp.stance.length; j++) {
            var text = tmp.stance[j].t + " " + String(100) + "%";
            var textWrap = doc.splitTextToSize(text, tmp.stance[j].width);
            doc.text(textWrap, tmp.stance[j].x, tmp.stance[j].y, tmp.stance[j].align);
        }
        if (ring.self() !== null) {
            var self = doc.splitTextToSize(String(ring.self()) + "%", 40);
            var others = String(100 - ring.self()) + "%";
            doc.setFontSize(11);
            doc.setTextColor(255, 0, 0);
            doc.text(self, 129, 68.5, 39, "center");
            doc.text(others, 175, 61, -39, "center");
        }
    }
    return{
        publish: p_pdf
    };
}());




