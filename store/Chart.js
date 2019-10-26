/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var BERING;
BERING.Chart = (function () {
    var inPage = 20;
    var chartCenter=180;
    function p_pdf(doc) {
        upperBack(doc);
        lowerBack(doc);
        lines(doc);
        ringBack(doc, 44, 229, 230, 219);
        fillSpiral(doc);
        spiral(doc, 44, 31);
        ringBack(doc, 31.15, 249, 249, 249);
        shim(doc, 44, 31);
        hangins(doc, 44, 31);
        return doc;
    }
    function promo_pdf(doc) {
        upperBack(doc);
        lowerBack(doc);
        ringBack2(doc, 44, 198, 198, 198);
        promoSpiral(doc, 44, 31);
        ringBack2(doc, 31.15, 198, 198, 198);
        shim(doc, 44, 31);
        promoKey(doc, 44, 31);
    }

    function promoKey(doc, outerRing, innerRing) {
        var ringRes = 42;
        var incRad = (outerRing - innerRing) / ringRes;
        var _width = 170;//282;
        var _height = 191;
        var oR = 10;
        doc.setDrawColor(229, 230, 219);
        doc.setDrawColor(240, 240, 240);
        doc.setLineWidth(0.5);
        doc.line(149 - 112 / 2, 93.5 + 31, 149 - 112 / 2, 93.5 + 44);
        var pp_x = 149 - 112 / 2;
        var pp_y = 124.5;
        var c = 360 / 42;
        var count = 0;
        var pos_ar = [];
        for (var i = 0; i < 42; i++) {
            pos_ar.push(Math.round(i * c * 10) / 10);
        }
        var shim = -1.5
        var offset=Math.round(360/84);
        doc.setFontSize(14);
        
        var ring = BERING.ring.getRing();
        ring.sort(function (a, b) {
            return a.pos - b.pos;
        });
        for (var i = 0; i < 90; i++) {
            if (i === Math.round(pos_ar[count])) {
                var pointRatio = pos_ar[count]+offset+1;
                var xSteps = Math.cos(pointRatio / 360 * 2 * Math.PI);
                var ySteps = Math.sin(pointRatio / 360 * 2 * Math.PI);
                var pointX = -xSteps * (oR + outerRing -10);// + 6.75;
                var pointY = ySteps * (oR + outerRing -10);// - 1;
                var cirX = -xSteps * (oR + outerRing + 18);
                var cirY = ySteps * (oR + outerRing + 18);
                doc.line(149 - 112 / 2, _height / 2 + shim, pointX + 149 - 112 / 2, pointY + _height / 2 + shim);
                doc.setFillColor(269, 269, 269);
               // doc.circle(cirX + 149 - 112 / 2, cirY + _height / 2 + shim, 4, 'FD');
                count++;
                var pos=count + 30;
                
                doc.text(ring[pos].typeSet, cirX + 149 - 112 / 2, cirY + _height / 2 + shim + 1.7,null,pointRatio);
            }
        }
        for (var i = 90; i < 180; i++) {
            if (i === Math.round(pos_ar[count])) {
                var pointRatio = pos_ar[count]+offset-2;
                var xSteps = Math.cos(pointRatio / 360 * 2 * Math.PI);
                var ySteps = Math.sin(pointRatio / 360 * 2 * Math.PI);
                var pointX = -xSteps * (oR + outerRing -10);// + 9;
                var pointY = ySteps * (oR + outerRing -10);// - 1;
                var cirX = -xSteps * (oR + outerRing-7);
                var cirY = ySteps * (oR + outerRing-7);
                doc.line(149 - 112 / 2, _height / 2 + shim, pointX + 149 - 112 / 2, pointY + _height / 2 + shim);
                doc.setFillColor(269, 269, 269);
                //doc.circle(cirX + 149 - 112 / 2, cirY + _height / 2 + shim, 4, 'FD');
                count++;
                var pos=count - 12;
                doc.text(ring[pos].typeSet, cirX + 149 - 112 / 2, cirY + _height / 2 + shim,null,pointRatio+180);
            }
        }
        for (var i = 180; i < 270; i++) {
            if (i === Math.round(pos_ar[count])) {
                var pointRatio = pos_ar[count]+offset;
                var xSteps = Math.cos(pointRatio / 360 * 2 * Math.PI);
                var ySteps = Math.sin(pointRatio / 360 * 2 * Math.PI);
                var pointX = -xSteps * (oR + outerRing -10);// + 9;
                var pointY = ySteps * (oR + outerRing -10);// - 3;
                var cirX = -xSteps * (oR + outerRing - 7);
                var cirY = ySteps * (oR + outerRing - 7);
                doc.line(149 - 112 / 2, _height / 2 + shim, pointX + 149 - 112 / 2, pointY + _height / 2 + shim);
                doc.setFillColor(269, 269, 269);
                //doc.circle(cirX + 149 - 112 / 2, cirY + _height / 2 + shim, 4, 'FD');
                count++;
                var pos=count - 12;
                doc.text(ring[pos].typeSet, cirX + 149 - 112 / 2, cirY + _height / 2 + shim,null,pointRatio+180)
            }
        }
        for (var i = 270; i < 360; i++) {
            if (i === Math.round(pos_ar[count])) {
                var pointRatio = pos_ar[count]+offset+2;
                var xSteps = Math.cos(pointRatio / 360 * 2 * Math.PI);
                var ySteps = Math.sin(pointRatio / 360 * 2 * Math.PI);
                var pointX = -xSteps * (oR + outerRing-10);// + 7;
                var pointY = ySteps * (oR + outerRing-10);// - 3;
                var cirX = -xSteps * (oR + outerRing + 17);
                var cirY = ySteps * (oR + outerRing + 17);
                doc.line(149 - 112 / 2, _height / 2 + shim, pointX + 149 - 112 / 2, pointY + _height / 2 + shim);
                doc.setFillColor(269, 269, 269);
                //doc.circle(cirX + 149 - 112 / 2, cirY + _height / 2 + shim, 4, 'FD');
                count++;
                var pos=count - 12
                doc.text(ring[pos].typeSet,cirX + 149 - 112 / 2, cirY + _height / 2 + shim,null,pointRatio);
                //doc.text(ring[pos].item, cirX + 149 - 112 / 2, cirY + _height / 2 + shim + 1.7,null,pointRatio, 'center');
            }
        }
//        doc.setFontSize(10);
//        var ring = BERING.ring.getRing();
//        ring.sort(function (a, b) {
//            return a.pos - b.pos;
//        });
//        var theX = 160;
//        var theY = 20;
//        var y_inc = 12;
//        for (var i = 0; i < ring.length; i++) {
//            var theText = String(ring[i].pos) + '. ' + ring[i].item;
//            //console.log(theText);
//            doc.text(theText, theX, theY);
//            theY += y_inc;
//            if (i===13){
//                theX=200;
//                theY=20;
//                
//            }else if (i===27){
//                theX=240;
//                theY=20;
//            }
//        }
    }
    function promoSpiral(doc, outerRing, innerRing) {
        var ringRes = 360;
        var incRad = (outerRing - innerRing) / ringRes;
        var _width = 170;//282;
        var _height = 191;
        var oR = 30;
        doc.setDrawColor(229, 230, 219);
        doc.setDrawColor(198, 198, 198);
        doc.setLineWidth(0.5);
        doc.line(149 - 112 / 2, 93.5 + 31, 149 - 112 / 2, 93.5 + 44);
        var pp_x = 149 - 112 / 2;
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
    function ringBack2(doc, rad, r, g, b) {
        doc.setFillColor(269, 269, 269);
        doc.setDrawColor(r, g, b);
        doc.setLineWidth(0.5);
        doc.circle(149 - 112 / 2, 93.5, rad, 'FD');
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
            if (i === 181) {
            }
        }
        doc.line(187.8, 92.5, 185.7, 89)
        doc.line(187.8, 92.5, 189.7, 89)
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
        doc.line(113.2, 93.7, 111.2, 90.2)
        doc.line(113.2, 93.7, 115.2, 90.2)

    }
    function shim(doc, outerShim, innerShim) {
        doc.setDrawColor(170, 170, 170);
        doc.setLineWidth(.1);
        doc.setDrawColor(229, 230, 219);
        //doc.circle(149, 93.5, outerShim, 'D');
        doc.setDrawColor(198, 198, 198);
        //doc.circle(149, 93.5, innerShim, 'D');
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
                block1(doc)
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
        doc.line(82, 5, 168, 93.5)
        doc.line(79.5, 196, 170.5, 93.5)
        doc.line(218.5, 196, 128.5, 93.5)
        doc.line(220, 5, 130.5, 93.5)
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