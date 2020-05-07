/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var BERING;
BERING.Chart = (function () {
    var inPage = 20;
    var fine = 10;
    var lateral = 149 - 112 / 2 + fine;
    var va = 9;
    var ca = 15;
    var wb= '';
    function p_pdf(doc) {
        upperBack(doc);
        lowerBack(doc);
        lines(doc);
        ringBack(doc, 44, 229, 230, 219);
        fillSpiral(doc, 0, 0);
        spiral(doc, 44, 31);
        ringBack(doc, 31.15, 249, 249, 249);
        shim(doc, 44, 31);
        // hangins(doc, 44, 31);
        promoHangings(doc);
        return doc;
    }
    function promo_pdf(doc) {
        //upperBack(doc);
        lateral = 149 - 112 / 2 + fine + ca;
        lowerBackPromo(doc);
        ringBack2(doc, 44, 198, 198, 198);
        fillSpiral(doc, -46 + ca, va);
        promoSpiral(doc, 44, 31);
        ringBack2(doc, 31.15, 255, 255, 255);
        //shim(doc, 44, 31);
        target(doc);
        promoKey(doc, 44, 31);
        promoHangings(doc);
        rankedEmotions(doc);
        percentages(doc);
        //attitude(doc);
        altAttitude(doc);
    }
    function attitude(doc) {
        dataBar(doc);
        tables(doc);
    }
    function altAttitude(doc) {
        altTables(doc);
    }
    function altTables(doc) {
        var width = 207 + ca;
        var bringItIn = 0;
        var attitudePositivity = BERING.ring.getRing().altAtt();
        var attitudeWellbeing = BERING.ring.getRing().attitude();
        var positivity = String(Math.round((attitudePositivity[0]) * 100)) + "%";
        var wellbeing = String(Math.round((attitudeWellbeing[0]) * 100)) + "%";
        wellbeing = String(wb) + "%";
        var t_width = 55;
        doc.setFillColor(255, 255, 191);
        doc.setDrawColor(170, 170, 170);
        doc.setLineWidth(1);
        doc.rect(width - 10, 8.25 + bringItIn, t_width + 10, 16, 'FD');
        doc.rect(width - 10, 8.25 + bringItIn+20, t_width + 10, 16, 'FD');
//        doc.setFillColor(255, 255, 191);
//        doc.rect(width , 8.25 - bringItIn, t_width, 186/2, 'FD');
//        doc.setFillColor(254,254,254);
//        doc.rect(width , 186/2+8.25 + bringItIn, t_width, 10, 'FD');
//        doc.rect(width , 8.25 - bringItIn, t_width, 10, 'FD');
        doc.setFontSize(22);
        doc.setTextColor(170, 170, 170);
        doc.text("Feel Good: " + positivity, width-8, 19);
        doc.text("Wellbeing: " + wellbeing, width-8, 39);
//        drawRank(doc,ul,15);
//        drawRank(doc,dt,108);
//        doc.setFontSize(20);
//        colorText(doc, 3)
//        doc.text('Feel Good Percentage: '+val2,width-5,140,90);
        doc.setFontSize(100);
        //doc.text('Emotional', width + 13.5, 197.4, 90);
        //doc.text('Reflection', width + 55.5, 197.4, 90)
        //doc.text('Emo.Re', width + 55.5/3+20, 197.4-20, 90);
    }
    function drawRank(doc, theArray, theY) {
        var theX = 225;
        doc.setFontSize(12);
        theY += 10;
        for (var i = 0; i < theArray.length; i++) {
            colorText(doc, theArray[i].item.stance);
            doc.text(theArray[i].item.item + ": " + String(Math.sqrt(theArray[i].prod * theArray[i].prod)), theX, theY);
            theY += 8;
        }
    }
    function rankedEmotions(doc) {
        var width = 207 + ca;
        var bringItIn = 0;
        var t_width = 55;

        doc.setFillColor(255, 255, 191);
        doc.setDrawColor(170, 170, 170);
        doc.setLineWidth(1);
        doc.rect(width - 10, 48 + bringItIn, t_width + 10, 146.2, 'FD');
        doc.setFontSize(22);
        var ring = BERING.ring.getRing().slice(0);
        ring.sort(function (a, b) {
            return a.product() - b.product();
        });
        ring.reverse();
        var theX = width-8;
        var theY = 58;
        doc.setTextColor(170, 170, 170);
        doc.text('Big Hitters', width-8, theY);
        doc.setFontSize(14);
        theY += 10;
        var count=0
        for (var i = 0; i < ring.length; i++) {
            colorText(doc, ring[i].stance);
            if (ring[i].product()>14 && count<10){
            doc.text(ring[i].item + ": " + String(ring[i].product()), theX, theY);
            count++;
        }
            theY += 10;
        }
    }
    function tables(doc) {
        var width = 207 + ca;
        var bringItIn = 0;
        var attitude = BERING.ring.getRing().attitude();
        var uplifting = attitude[2];
        var distracting = attitude[1];
        var ul = [], dt = [];
        uplifting.sort(function (a, b) {
            return a.prod - b.prod;
        });
        uplifting.reverse();

        distracting.sort(function (a, b) {
            return a.prod - b.prod;
        });
        distracting.reverse();
        if (uplifting.length > 10) {
            ul = uplifting.slice(0, 10);
        } else {
            ul = uplifting;
        }
        if (distracting.length > 10) {
            dt = distracting.slice(0, 10);
        } else {
            dt = distracting;
        }
        var t_width = 55;
        doc.setFillColor(245, 245, 245);
        doc.setDrawColor(170, 170, 170);
        doc.setLineWidth(1);
        doc.rect(width, 186 / 2 + 8.25 + bringItIn, t_width, 186 / 2, 'FD');
        doc.setFillColor(255, 255, 191);
        doc.rect(width, 8.25 - bringItIn, t_width, 186 / 2, 'FD');
        doc.setFillColor(254, 254, 254);
        doc.rect(width, 186 / 2 + 8.25 + bringItIn, t_width, 10, 'FD');
        doc.rect(width, 8.25 - bringItIn, t_width, 10, 'FD');
        doc.setFontSize(10);
        doc.text("Strongest Uplifting Emotions", width + 3 + 2.5, 14);
        doc.text("Strongest Distracting Emotions", width + 1 + 2.5, 186 / 2 + 14);
        drawRank(doc, ul, 15);
        drawRank(doc, dt, 108);
    }
    function percentages(doc) {
        var ring = BERING.ring.getRing();
        var store = ring.hits();
        var stance = ring.stance;
        wb=store[1][4]+store[2][4];
        for (var i = 0; i < store.length; i++) {
            colorText(doc, store[i][0]);
            switch (store[i][0]) {
                case 0:
                    doc.setFontSize(20);
                    doc.text(String(stance[0].t), stance[0].x, stance[0].y - 10, 'right');
                    doc.setFontSize(12);
                    doc.text('Average Quadrant Rating: ' + String(store[i][3]), stance[0].x, stance[0].y - 5, 'right');
                    doc.setFontSize(12);
                    doc.text('Quadrant share of ratings: ' + String(store[i][4] + "%"), stance[0].x, stance[0].y, 'right');
                    break;
                case 1:
                    doc.setFontSize(20);
                    doc.text(String(stance[1].t), stance[1].x, stance[1].y + 12, 'right');
                    doc.setFontSize(12);
                    doc.text('Average Quadrant Rating: ' + String(store[i][3]), stance[1].x, stance[1].y + 5, 'right');
                    doc.setFontSize(12);
                    doc.text('Quadrant share of ratings: ' + String(store[i][4] + "%"), stance[1].x, stance[1].y, 'right');
                    break;
                case 2:
                    doc.setFontSize(20);
                    doc.text(String(stance[2].t), stance[2].x, stance[2].y + 12);
                    doc.setFontSize(12);
                    doc.text('Average Quadrant Rating: ' + String(store[i][3]), stance[2].x, stance[2].y + 5);
                    doc.setFontSize(12);
                    doc.text('Quadrant share of ratings: ' + String(store[i][4] + "%"), stance[2].x, stance[2].y);
                    break;
                case 3:
                    doc.setFontSize(20);
                    doc.text(String(stance[3].t), stance[3].x, stance[3].y - 10);
                    doc.setFontSize(12);
                    doc.text('Average Quadrant Rating: ' + String(store[i][3]), stance[3].x, stance[3].y - 5);
                    doc.setFontSize(12);
                    doc.text('Quadrant share of ratings: ' + String(store[i][4] + "%"), stance[3].x, stance[3].y);
                    break;
            }
        }
    }
    function dataBar(doc) {
//        var width = 207 + ca;//205 + ca;
//        var bringItIn = 0;//9;
//        var attitude = BERING.ring.getRing().attitude()[0];
//        var interface = (186 - 2 * bringItIn) * (1 - attitude);
//        doc.setFillColor(245, 245, 245);
//        doc.setDrawColor(170, 170, 170);
//        doc.setLineWidth(1);
//        doc.rect(width - 12, 8.25 + bringItIn, 10, 186 - 2 * bringItIn, 'FD');
//        //doc.circle(width-6.96,190,3.9,'FD');
//        doc.setFillColor(255, 255, 191);
//        doc.rect(width - 12, 8.25 - bringItIn, 10, interface, 'FD');
//        //doc.circle(width-6.96,12.5,3.9,'FD');
//        //doc.line(width-11,179.1+11,width-3,179.1+11);
//        //doc.line(width-11,12.5,width-3,12.5);
//        //doc.line(width-6.96,8.5,width-6.96,16.5);
//        var val1 = String(Math.round((1 - attitude) * 100)) + "%";
//        var val2 = String(Math.round(attitude * 100)) + "%";
//        doc.setFontSize(10);
//        doc.setTextColor(0, 0, 0);
//        if (attitude !== 0) {
//            doc.text(val2, width - 7, interface + 12.75, 'center');
//        }
//        if (attitude !== 1) {
//            doc.text(val1, width - 7, interface + 6.5, 'center');
//        }
    }
    function lowerBackPromo(doc) {
        var width = 205;
        var shim = -1.75;
        //doc.setFillColor(245, 245, 245);
        doc.setFillColor(255, 255, 191);
        doc.setDrawColor(170, 170, 170);
        doc.setLineWidth(1);
        doc.rect(8 + inPage, 94 + shim, width - 2 * inPage + ca, 102, 'FD');

        doc.setFillColor(255, 255, 191);
        doc.setDrawColor(170, 170, 170);
        doc.setLineWidth(1);
        doc.rect(8 + inPage, 10 + shim, width - 2 * inPage + ca, 84 + va, 'FD');
        doc.line(width / 2 + ca, 10 + shim, width / 2 + ca, width - 11);
    }
    function target(doc) {
        var _height = 191;
        var shim = -2;
        doc.setFillColor(255, 255, 255);
        //doc.setFillColor(198, 198, 198);
        doc.circle(lateral, _height / 2 + shim + va, 31, 'F');
        //doc.setFillColor(198, 198, 198);
        //doc.setFillColor(229, 230, 219)
        //doc.circle(lateral, _height / 2 + shim, 24, 'FD');
        //doc.setFillColor(229, 230, 219)
        //doc.setFillColor(198, 198, 198);
        //doc.circle(lateral, _height / 2 + shim, 18, 'F');
        //doc.setFillColor(198, 198, 198);
        //doc.setFillColor(229, 230, 219)
        //doc.circle(lateral, _height / 2 + shim, 12, 'FD');
        //doc.setFillColor(229, 230, 219)
        //doc.setFillColor(198, 198, 198);
        //doc.circle(lateral, _height / 2 + shim, 6, 'F');
    }
    function promoKey(doc, outerRing, innerRing) {
        var ringRes = 40;
        var incRad = (outerRing - innerRing) / ringRes;
        var _width = 170;//282;
        var _height = 191;
        var oR = 10;
        doc.setDrawColor(229, 230, 219);
        doc.setLineWidth(1);
        doc.line(lateral, 93.5 + 31 + va, lateral, 93.5 + 44.1 + va);
        doc.setLineWidth(0.1);
        var pp_x = lateral;
        var pp_y = 124.5;
        var c = 360 / 40;
        var count = 0;
        var pos_ar = [];
        for (var i = 0; i < 40; i++) {
            pos_ar.push(Math.round(i * c * 10) / 10);
        }
        var shim = -2;
        var offset = Math.round(360 / 84);
        var ring = BERING.ring.getRing().slice(0);
        var sr = -16;
        doc.setFontSize(14);
        ring.sort(function (a, b) {
            return a.pos - b.pos;
        });
        for (var i = 0; i < 90; i++) {
            if (i === Math.round(pos_ar[count])) {
                doc.setDrawColor(229, 230, 219);
                var pointRatio = pos_ar[count] + offset;// + 1;
                var xSteps = Math.cos(pointRatio / 360 * 2 * Math.PI);
                var ySteps = Math.sin(pointRatio / 360 * 2 * Math.PI);
                var pointX = -xSteps * (oR + outerRing - 10);// + 6.75;
                var pointY = ySteps * (oR + outerRing - 10);// - 1;
                var cirX = -xSteps * (oR + outerRing + 18);
                var cirY = ySteps * (oR + outerRing + 18);
                var scoresX = -xSteps * (oR + outerRing + sr + 0);
                var scoresY = ySteps * (oR + outerRing + sr + 0);
                doc.line(lateral, _height / 2 + shim + va, pointX + lateral, pointY + _height / 2 + shim + va);
                count++;
                var pos = count + 29;
                colorText(doc, ring[pos].stance);
                doc.text(ring[pos].typeSet, cirX + lateral, cirY + _height / 2 + shim + 1.7 + va, null, pointRatio);
                doc.text(String((ring[pos].aVa - 1) * (ring[pos].aIn - 1)), scoresX + lateral, scoresY + _height / 2 + shim + 1.7 + va, null, pointRatio);
                var needX = -xSteps * 30 * ((ring[pos].aVa - 1) * (ring[pos].aIn - 1) / 25);
                var needY = ySteps * 30 * ((ring[pos].aVa - 1) * (ring[pos].aIn - 1) / 25);
                colorLine(doc, ring[pos].stance);
                doc.line(lateral, _height / 2 + shim + va, needX + lateral, needY + _height / 2 + shim + va);
            }
        }
        for (var i = 90; i < 180; i++) {
            if (i === Math.round(pos_ar[count])) {
                doc.setDrawColor(229, 230, 219);
                var pointRatio = pos_ar[count] + offset;// + -1//-2;
                var xSteps = Math.cos(pointRatio / 360 * 2 * Math.PI);
                var ySteps = Math.sin(pointRatio / 360 * 2 * Math.PI);
                var scoresOffset = -2;
                var xStepsScores = Math.cos((pointRatio + scoresOffset) / 360 * 2 * Math.PI);
                var yStepsScores = Math.sin((pointRatio + scoresOffset) / 360 * 2 * Math.PI);
                var pointX = -xSteps * (oR + outerRing - 10);// + 9;
                var pointY = ySteps * (oR + outerRing - 10);// - 1;
                var cirX = -xStepsScores * (oR + outerRing - 8);
                var cirY = yStepsScores * (oR + outerRing - 8);
                var scoresX = -xStepsScores * (oR + outerRing + sr - 1);
                var scoresY = yStepsScores * (oR + outerRing + sr - 1);
                doc.line(lateral, _height / 2 + shim + va, pointX + lateral, pointY + _height / 2 + shim + va);
                doc.setFillColor(269, 269, 269);
                //doc.circle(cirX + lateral, cirY + _height / 2 + shim, 4, 'FD');
                count++;
                var pos = count - 11;
                colorText(doc, ring[pos].stance);
                doc.text(ring[pos].typeSet, cirX + lateral, cirY + _height / 2 + shim + va, null, pointRatio + 180);
                doc.text(String((ring[pos].aVa - 1) * (ring[pos].aIn - 1)), scoresX + lateral, scoresY + _height / 2 + shim + va, null, pointRatio + 180);
                var needX = -xSteps * 30 * ((ring[pos].aVa - 1) * (ring[pos].aIn - 1) / 25);
                var needY = ySteps * 30 * ((ring[pos].aVa - 1) * (ring[pos].aIn - 1) / 25);
                colorLine(doc, ring[pos].stance);
                doc.line(lateral, _height / 2 + shim + va, needX + lateral, needY + _height / 2 + shim + va);
            }
        }
        for (var i = 180; i < 270; i++) {
            if (i === Math.round(pos_ar[count])) {
                doc.setDrawColor(229, 230, 219);
                var pointRatio = pos_ar[count] + offset;
                var xSteps = Math.cos(pointRatio / 360 * 2 * Math.PI);
                var ySteps = Math.sin(pointRatio / 360 * 2 * Math.PI);
                var scoresOffset = -2;
                var xStepsScores = Math.cos((pointRatio + scoresOffset) / 360 * 2 * Math.PI);
                var yStepsScores = Math.sin((pointRatio + scoresOffset) / 360 * 2 * Math.PI);
                var xStepsText = Math.cos((pointRatio + scoresOffset + 1.2) / 360 * 2 * Math.PI);
                var yStepsText = Math.sin((pointRatio + scoresOffset + 1.2) / 360 * 2 * Math.PI);
                var pointX = -xSteps * (oR + outerRing - 10);// + 9;
                var pointY = ySteps * (oR + outerRing - 10);// - 3;
                var cirX = -xStepsText * (oR + outerRing - 8.5);
                var cirY = yStepsText * (oR + outerRing - 8.5);
                var scoresX = -xStepsScores * (oR + outerRing + sr - 1);
                var scoresY = yStepsScores * (oR + outerRing + sr - 1);
                doc.line(lateral, _height / 2 + shim + va, pointX + lateral, pointY + _height / 2 + shim + va);
                doc.setFillColor(269, 269, 269);
                //doc.circle(cirX + lateral, cirY + _height / 2 + shim, 4, 'FD');
                count++;
                var pos = count - 11;
                colorText(doc, ring[pos].stance);
                doc.text(ring[pos].typeSet, cirX + lateral, cirY + _height / 2 + shim + va, null, pointRatio + 180);
                doc.text(String((ring[pos].aVa - 1) * (ring[pos].aIn - 1)), scoresX + lateral, scoresY + _height / 2 + shim + va, null, pointRatio + 180);
                var needX = -xSteps * 30 * ((ring[pos].aVa - 1) * (ring[pos].aIn - 1) / 25);
                var needY = ySteps * 30 * ((ring[pos].aVa - 1) * (ring[pos].aIn - 1) / 25);
                colorLine(doc, ring[pos].stance);
                doc.line(lateral, _height / 2 + shim + va, needX + lateral, needY + _height / 2 + shim + va);
            }
        }
        var cumulative = 0;
        for (var i = 270; i < 360; i++) {
            if (i === Math.round(pos_ar[count])) {
                doc.setDrawColor(229, 230, 219);
                var pointRatio = pos_ar[count] + offset;// + 2;
                var xSteps = Math.cos(pointRatio / 360 * 2 * Math.PI);
                var ySteps = Math.sin(pointRatio / 360 * 2 * Math.PI);
                var scoresOffset = 2.5;
                var xStepsScores = Math.cos((pointRatio + scoresOffset) / 360 * 2 * Math.PI);
                var yStepsScores = Math.sin((pointRatio + scoresOffset) / 360 * 2 * Math.PI);

                var xStepsLine = Math.cos((pointRatio + scoresOffset - 1 + cumulative) / 360 * 2 * Math.PI);
                var yStepsLine = Math.sin((pointRatio + scoresOffset - 1 + cumulative) / 360 * 2 * Math.PI);
                cumulative -= 0.1;
                var pointX = -xSteps * (oR + outerRing - 10);// + 7;
                var pointY = ySteps * (oR + outerRing - 10);// - 3;
                var cirX = -xStepsLine * (oR + outerRing + 19);
                var cirY = yStepsLine * (oR + outerRing + 19);
                var scoresX = -xStepsScores * (oR + outerRing + sr + 1);
                var scoresY = yStepsScores * (oR + outerRing + sr + 1);
                doc.line(lateral, _height / 2 + shim + va, pointX + lateral, pointY + _height / 2 + shim + va);
                doc.setFillColor(269, 269, 269);
                //doc.circle(cirX + lateral, cirY + _height / 2 + shim, 4, 'FD');
                count++;
                var pos = count - 11;
                colorText(doc, ring[pos].stance);
                doc.text(ring[pos].typeSet, cirX + lateral, cirY + _height / 2 + shim + va, null, pointRatio);
                doc.text(String((ring[pos].aVa - 1) * (ring[pos].aIn - 1)), scoresX + lateral, scoresY + _height / 2 + shim + va, null, pointRatio);
                var needX = -xSteps * 30 * ((ring[pos].aVa - 1) * (ring[pos].aIn - 1) / 25);
                var needY = ySteps * 30 * ((ring[pos].aVa - 1) * (ring[pos].aIn - 1) / 25);
                colorLine(doc, ring[pos].stance);
                doc.line(lateral, _height / 2 + shim + va, needX + lateral, needY + _height / 2 + shim + va);
                //doc.text(ring[pos].item, cirX + lateral, cirY + _height / 2 + shim + 1.7,null,pointRatio, 'center');
            }

        }
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

    function colorLine(doc, stance) {
        switch (stance) {
            case 0:
                doc.setDrawColor(0, 155, 255);
                //doc.setTextColor(255, 0, 0)
                break;
            case 1:
                //doc.setTextColor(0, 255, 255)
                doc.setDrawColor(50, 200, 0);
                break;
            case 2:
                doc.setDrawColor(150, 0, 255);
                break;
            case 3:
                doc.setDrawColor(0, 0, 0);
                //doc.setTextColor(0, 0, 255)
                break;
            case 4:
                doc.setDrawColor(0, 255, 0);
                break;
            case 5:
                doc.setDrawColor(0, 0, 0);
                break;
            default:
                doc.setDrawColor(0, 0, 0);
                break;
        }
    }
    function promoSpiral(doc, outerRing, innerRing) {
        var ringRes = 360;
        var incRad = (outerRing - innerRing) / ringRes;
        var _width = 170 + 2 * ca;//282;
        var _height = 191;
        var oR = 30;
        //doc.setDrawColor(229, 230, 219);
        doc.setDrawColor(198, 198, 198);
        doc.setLineWidth(0.5);
        doc.line(lateral, 93.5 + 31 + va, lateral, 93.5 + 44 + va);
        var pp_x = lateral;
        var pp_y = 124.5 + va;
        for (var i = 90; i < 180; i++) {
            var pointRatio = i / ringRes;
            var xSteps = Math.cos(pointRatio * 2 * Math.PI);
            var ySteps = Math.sin(pointRatio * 2 * Math.PI);
            var pointX = -xSteps * (oR + (i - 90) * incRad) + 9;// * ( oR+ (i-90) * 2 * incRad);
            var pointY = ySteps * (oR + (i - 90) * incRad) - 1;//+(i-90)*incRad// * (oR + (i-90) * 2 * incRad);
            doc.line(pp_x, pp_y, pointX + _width / 2 + fine, pointY + _height / 2 + va);
            pp_x = pointX + _width / 2 + fine;
            pp_y = pointY + _height / 2 + va;
        }
        for (var i = 180; i < 270; i++) {
            var pointRatio = i / ringRes;
            var xSteps = Math.cos(pointRatio * 2 * Math.PI);
            var ySteps = Math.sin(pointRatio * 2 * Math.PI);
            var pointX = -xSteps * (oR + (i - 90) * incRad) + 9;// * ( oR+ (i-90) * 2 * incRad);
            var pointY = ySteps * (oR + (i - 90) * incRad) - 3;// * (oR + (i-90) * 2 * incRad);
            doc.line(pp_x, pp_y, pointX + _width / 2 + fine, pointY + _height / 2 + va);
            pp_x = pointX + _width / 2 + fine;
            pp_y = pointY + _height / 2 + va;
        }
        for (var i = 270; i < 360; i++) {
            var pointRatio = i / ringRes;
            var xSteps = Math.cos(pointRatio * 2 * Math.PI);
            var ySteps = Math.sin(pointRatio * 2 * Math.PI);
            var pointX = -xSteps * (oR + (i - 90) * incRad) + 7;// * ( oR+ (i-90) * 2 * incRad);
            var pointY = ySteps * (oR + (i - 90) * incRad) - 3;// * (oR + (i-90) * 2 * incRad);
            doc.line(pp_x, pp_y, pointX + _width / 2 + fine, pointY + _height / 2 + va);
            pp_x = pointX + _width / 2 + fine;
            pp_y = pointY + _height / 2 + va;
        }
        for (var i = 0; i < 92; i++) {
            var pointRatio = i / ringRes;
            var xSteps = Math.cos(pointRatio * 2 * Math.PI);
            var ySteps = Math.sin(pointRatio * 2 * Math.PI);
            var pointX = -xSteps * (oR + (i + 270) * incRad) + 6.75;// * ( oR+ (i-90) * 2 * incRad);
            var pointY = ySteps * (oR + (i + 270) * incRad) - 1;// * (oR + (i-90) * 2 * incRad);
            doc.line(pp_x, pp_y, pointX + _width / 2 + fine, pointY + _height / 2 + va);
            pp_x = pointX + _width / 2 + fine;
            pp_y = pointY + _height / 2 + va;
        }
    }
    function ringBack2(doc, rad, r, g, b) {
        doc.setDrawColor(229, 230, 219);
        doc.setFillColor(229, 230, 219);
        doc.setLineWidth(0.5);
        doc.circle(lateral, 93.5 + va, rad, 'FD');
    }
    function promoHangings(doc) {
        doc.setFontSize(18);
        var x_ = 8 + inPage;
        var y_ = 203;
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
        if ($("input:text").val().length > 0) {
            var inputText = $("input:text").val();
            var textWrap = doc.splitTextToSize(inputText, 50, false);
            doc.setFontSize(12);
            doc.text(inputText, 26, 196, undefined, 90);
        }
//        var ring = BERING.ring.getRing().stance;
//        doc.setFontSize(20);
//        for (var i = 0; i < ring.length; i++) {
//            colorText(doc, i);
//            doc.text(ring[i].t, ring[i].x, ring[i].y);
//        }

        doc.setFontSize(12);
        var dat = new Date();
        var year = dat.getFullYear();
        var month = dat.getMonth() + 1;
        var date = dat.getDate()+10;
        doc.text(date + ' - ' + month + ' - ' + year, 26, 32, 90);

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
        doc.text(BERING.attitude, 150, 113.5, 'center', 90);
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
//            if (i === 181) {
//            }
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
        //doc.circle(149, 93.5, outerShim, 'D');
        doc.setDrawColor(198, 198, 198);
        //doc.circle(149, 93.5, innerShim, 'D');
    }
    function fillSpiral(doc, adj, adj2) {
        doc.setFillColor(198, 198, 198);
        doc.rect(144 + adj, 125 + adj2, 5, 12, 'F');
        doc.rect(143 + adj, 124 + adj2, 6, 12, 'F');
        doc.rect(130 + adj, 115 + adj2, 19, 17, 'F');
        doc.circle(141 + adj, 131.5 + adj2, 5, 'F');
        doc.circle(135 + adj, 128 + adj2, 5, 'F');
        doc.circle(137 + adj, 125 + adj2, 10, 'F');
        doc.circle(133 + adj, 110 + adj2, 20, 'F');
        doc.circle(129 + adj, 126 + adj2, 5.4, 'F');
        doc.circle(134 + adj, 102 + adj2, 25, 'F');
        doc.circle(138 + adj, 94 + adj2, 30, 'F');
        doc.circle(152 + adj, 94.5 + adj2, 30, 'F');
        doc.circle(152.8 + adj, 94 + adj2, 30, 'F');
        doc.circle(152.2 + adj, 91 + adj2, 31, 'F');
        doc.circle(152.5 + adj, 92 + adj2, 31, 'F');
        doc.circle(146.6 + adj, 86.8 + adj2, 31, 'F');
        doc.circle(149 + adj, 90 + adj2, 34, 'F');
        doc.circle(144 + adj, 90 + adj2, 33.5, 'F');
        doc.rect(148.1 + adj, 135.6 + adj2, 1, 2, 'F');
        doc.circle(144 + adj, 132.1 + adj2, 5, 'F');
        doc.circle(143 + adj, 132 + adj2, 5, 'F');
        doc.circle(142 + adj, 129.7 + adj2, 7, 'F');
        doc.circle(139 + adj, 125.6 + adj2, 10, 'F');
        doc.circle(139.8 + adj, 129.2 + adj2, 7, 'F');
        doc.circle(145 + adj, 135.3 + adj2, 2, 'F');
        doc.circle(147 + adj, 135.4 + adj2, 2, 'F');
        doc.circle(145.9 + adj, 135.4 + adj2, 2, 'F');
        doc.circle(147.7 + adj, 136.5 + adj2, 1, 'F');
        doc.circle(139.5 + adj, 91.8 + adj2, 31, 'F');
        doc.circle(140 + adj, 90.8 + adj2, 31, 'F');
        doc.circle(133 + adj, 98 + adj2, 25, 'F');
        doc.circle(133 + adj, 104 + adj2, 23.3, 'F');
        doc.circle(128 + adj, 110 + adj2, 16.1, 'F');
        doc.circle(129 + adj, 120 + adj2, 10, 'F');
        doc.circle(134 + adj, 123 + adj2, 10.3, 'F');
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
        //doc.line(,,149,93.5);
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

    return{
        makeChart: p_pdf,
        makePromotion: promo_pdf
    };
}());
