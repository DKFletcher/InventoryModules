"use strict";
var BERING;
BERING.Page2 = (function () {
    var width = 240;
    var height = 170;
    var cor_x = 30;
    var cor_y = 20;
    var purpleFade=[[152,38,235],
        [163,32,244],
        [174,86,235],
        [180,86,244],
        [196,131,231],
        [206,136,236],
        [217,163,237],
        [234,190,218],
        [238,214,210],
        [249,241,197]];
    var greenFade=[[109,201,3],
        [75,207,72],
        [93,212,50],
        [123,224,118],
        [138,224,140],
        [163,238,184],
        [179,235,141],
        [199,240,150],
        [221,236,168],
        [241,251,182]];
    var blueFade=[
        [36,193,214],
        [84,175,250],
        [52,178,236],
        [64,187,234],
        [106,197,237],
        [147,225,217],
        [172,235,214],
        [183,228,216],
        [208,237,211],
        [239,250,196]];
    var blackFade=[30,40,60,88,116,144,172,200,227,240];
    function init(doc) {
        doc.addPage();
        doc.setFillColor(255, 255, 191);
        doc.setDrawColor(170, 170, 170);
        doc.setLineWidth(1);
        doc.rect(cor_x, cor_y, width, height, 'FD');
        doc.line(cor_x, height / 2 + cor_y, width + cor_x, height / 2 + cor_y);
        doc.line(cor_x + width / 2, cor_y, width / 2 + cor_x, height + cor_y);
        percentages(doc);
    }
    function colorText(doc, stance) {
        switch (stance) {
            case 0:
                doc.setTextColor(0, 155, 255);
                //doc.setTextColor(255, 0, 0)
                break;
            case 1:
                //doc.setTextColor(0, 255, 255)
                doc.setTextColor(50, 200, 0);
                break;
            case 2:
                doc.setTextColor(150, 0, 255);
                break;
            case 3:
                doc.setTextColor(0, 0, 0);
                //doc.setTextColor(0, 0, 255)
                break;
            case 4:
                doc.setTextColor(0, 255, 0);
                break;
            case 5:
                doc.setTextColor(0, 0, 0);
                break;
            default:
                doc.setTextColor(0, 0, 0);
                break;
        }
    }
    function fair(item) {
        var inventoryText = item.inventoryText;
        var smallText = item.smallFontText;
        var chartText = item.item;
        var ret = chartText;
        if (chartText !== inventoryText) {
            ret = chartText + ", " + inventoryText;

        }
        if (chartText !== smallText) {
            ret += ": " + smallText;
        }
        ret +='     ' + item.prod;
        return ret;
    }
    function percentages(doc) {
        var fontCor = 0;
        var ring = BERING.ring.getRing();
        var store = ring.hits();
        var stance = ring.stance;
        var quads = ring.page2();
        for (var i = 0; i < stance.length; i++) {
            colorText(doc, stance[i].i);
            switch (stance[i].i) {
                case 0:
                    doc.setFontSize(18);
                    var inity = height / 2 + 6 + cor_y;
                    doc.text(String(stance[0].t), width / 2 + 35, inity);
                    inity+=4;
                    doc.setFontSize(8);
                    for (var j = 0; j < quads.q0.length; j++) {
                        doc.setTextColor(blueFade[j][0],blueFade[j][1],blueFade[j][2])
                        var inputText = fair(quads.q0[j])
                        var textWrap = doc.splitTextToSize(inputText, 110, false);
                        doc.text(textWrap, width / 2 + 35, inity);
                        inity += 7.7
                    }
                    break;
                case 1:
                    doc.setFontSize(18);
                    doc.text(String(stance[1].t), width / 2 + 35, cor_y + 6);
                    var inity = 10 + cor_y;
                    doc.setFontSize(8);
                    for (var j = 0; j < quads.q1.length; j++) {
                        doc.setTextColor(greenFade[j][0],greenFade[j][1],greenFade[j][2])
                        var inputText = fair(quads.q1[j])
                        var textWrap = doc.splitTextToSize(inputText, 110, false);
                        doc.text(textWrap, width / 2 + 35, inity);
                        inity += 7.7
                    }
                    break;
                case 2:
                    doc.setFontSize(18);
                    doc.text(String(stance[2].t), cor_x + 5, cor_y + 6);
                    var inity = 10 + cor_y;
                    doc.setFontSize(8);
                    for (var j = 0; j < quads.q2.length; j++) {
                        doc.setTextColor(purpleFade[j][0],purpleFade[j][1],purpleFade[j][2])
                        var inputText = fair(quads.q2[j])
                        var textWrap = doc.splitTextToSize(inputText, 110, false);
                        doc.text(textWrap, cor_x+5, inity);
                        inity += 7.7
                    }
                    break;
                case 3:
                    doc.setFontSize(18);
                    var inity = height / 2 + 6 + cor_y;
                    doc.text(String(stance[3].t), cor_x + 5, inity);
                    inity+=4;
                    doc.setFontSize(8);
                    for (var j = 0; j < quads.q3.length; j++) {
                        doc.setTextColor(blackFade[j],blackFade[j],blackFade[j])
                        var inputText = fair(quads.q3[j])
                        var textWrap = doc.splitTextToSize(inputText, 110, false);
                        doc.text(textWrap,cor_x+5, inity);
                        inity += 7.7
                    }
                    break;
            }
        }
    }
    return{
        make: init
    };
}());