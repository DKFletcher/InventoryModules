'use strict';
var BERING;
var PDFObject;
BERING.PDF = (function () {
    var multiPage = false;
    function p_pdf() {
        try {
            if ($(location).attr('hostname') != 'localhost') {
                ga('send', 'event', BERING.title, 'Inventory Chart Produced');
            }
        } catch (err) {
        }
        if (BERING.compat === "311217") {
            var doc = makePromotion();
        } else {
            var doc = makeDoc();
        }
//        var ua = window.navigator.userAgent;
//        var msie = ua.indexOf('MSIE ');
//        var edge = ua.indexOf('Edge/');
//        var trident = ua.indexOf('Trident/');
//        var isPREVIEW = true;
//        if (navigator && navigator.mimeTypes && navigator.mimeTypes['application/pdf']) {
//            isPREVIEW = true;
//        } else {
//            isPREVIEW = false;
//        }
//        if (msie > 0 || edge > 0 || trident > 0) {
//            isPREVIEW = false;
//        }
//        if (isPREVIEW) {
//            $('iframe').remove();
//            $('section.previewer').append("<iframe id='pdf_preview' type='application/pdf' src=''  width='100%' height='600px'></iframe>");
//            $('iframe').attr('src', doc.output('datauristring'));
//        }
        doc.addMetadata(BERING.MetaModule.save(BERING.ring.getRing(), BERING.questionaire.prepSave()));
        if (BERING.iOS.isApl()) {
            //var blobPDF = doc.output('dataurlnewwindow');
            //
//https://stackoverflow.com/questions/39689171/rename-blob-form-append            
//             var blob = doc.output("blob");
//            var data=new FormData();
//            data.append('file',blob,'test.pdf')
//            var tmp=URL.createObjectURL(data);

            var blob = doc.output("blob");
            var tmp=URL.createObjectURL(blob)
            window.open(tmp);
            //var myWindow = window.open("data:application/pdf," + encodeURIComponent(blobPDF),"_blank", "width=200,height=100");
            //myWindow.focus();

        } else {
            if ($("input:text").val().length > 0) {
                doc.save($("input:text").val() + ' ' + BERING.title + ' ' + BERING.IDKey.get() + '.pdf');
            } else {
                doc.save('anon ' + BERING.title + ' ' + BERING.IDKey.get() + '.pdf');
            }
        }
//        var blob = doc.output("blob");
//        var w=window.open(URL.createObjectURL(blob));
        //w.document.title='anon ' + BERING.title + ' ' + BERING.IDKey.get() + '.pdf'
//        PDFObject.embed(doc.output('datauristring'),'#viewer');
    }
    function makePromotion() {
        var doc = new jsPDF("l", "mm", "a4");
        var height = doc.internal.pageSize.height * 1.365;
        var h1 = 5;
        var aspectwidth1 = (height - h1) * (10.8 / 16);
        BERING.Chart.makePromotion(doc);
        BERING.Page2.make(doc);
        //BERING.Page3.make(doc);
        return doc;
    }

    function makeDoc() {
        var doc = new jsPDF("l", "mm", "a4");
        var height = doc.internal.pageSize.height * 1.365;
        var h1 = 5;
        var aspectwidth1 = (height - h1) * (10.8 / 16);
        BERING.Chart.makeChart(doc);
        doc.setFontSize(12);
        if ($("input:text").val().length > 0) {
            var inputText = $("input:text").val();
            var textWrap = doc.splitTextToSize(inputText, 50, false);
            doc.text(inputText, 25, 196, undefined, 90);
        }
        if (BERING.UItype === 1 && BERING.compat !== "120217") {
            doc.setFontSize(12);
        } else {
            doc.setFontSize(8);
        }
        var genCom = BERING.questionaire.prepSave();
        var ring = BERING.ring.getRing();
        var isComment = [];
        if (genCom.length > 0) {
            isComment.genCom = genCom;
        }
        if (BERING.UItype === 1 || BERING.UItype === 2) {
            for (var i = 0; i < ring.length; i++) {
                if (ring[i].comment.length > 0) {
                    isComment.push(ring[i]);
                }
                if (ring[i].aVa === 1) {
                    var textWrap = doc.splitTextToSize(ring[i].item, ring[i].width, false);
                    doc.text(textWrap, ring[i].x, ring[i].y, ring[i].align);
                    doc.setTextColor(0, 0, 0);
                    doc.setFontType("normal");
                }
            }
        } else {
            for (var i = 0; i < ring.length; i++) {
                if (ring[i].comment.length > 0) {
                    isComment.push(ring[i]);
                }
                if (ring[i].aVa > 3) {
                    if (ring[i].aVa === 6) {
                        doc.setTextColor(109, 217, 0);
                    }
                    var textWrap = doc.splitTextToSize(ring[i].item, ring[i].width, false);
                    doc.text(textWrap, ring[i].x, ring[i].y, ring[i].align);
                    doc.setTextColor(0, 0, 0);
                    doc.setFontType("normal");
                }
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
        for (i = 0; i < hits.length; i++) {
            for (var j = 0; j < tmp.stance.length; j++) {
                if (hits[i][0] === tmp.stance[j].i) {
                    var text = tmp.stance[j].t + " " + String(hits[i][1]) + "%";
                    var textWrap = doc.splitTextToSize(text, tmp.stance[i].width);
                    doc.text(textWrap, tmp.stance[i].x, tmp.stance[i].y, tmp.stance[i].align);
                }
            }
        }
        if (ring.self() !== null) {
            makeNeedle(ring, doc);
            var self = doc.splitTextToSize(String(ring.self()) + "%", 40);
            var others = String(100 - ring.self()) + "%";
            doc.setFontSize(11);
            doc.setTextColor(255, 0, 0);
            doc.text(self, 129, 68.5, 39, "center");
            doc.text(others, 175, 61, -39, "center");
        }
        if (isComment.length > 0) {
            makeComment(isComment, doc);
        }
        return doc;
    }
    function makeDoc_old() {
        var doc = new jsPDF("l", "mm", "a4");
        doc.addImage(BERING.assets.getAssets().chart, 'jpg', 8, 5, 282, 191);
        doc.setFontSize(12);
        if ($("input:text").val().length > 0) {
            var inputText = $("input:text").val();
            var textWrap = doc.splitTextToSize(inputText, 50, false);
            doc.text(textWrap, 10, 10, undefined);
        }
        //var chartText=inputText+'\n'+
        if (BERING.UItype === 1 && BERING.compat !== "120217") {
            doc.setFontSize(14);
        } else {
            doc.setFontSize(8);
        }
        var genCom = BERING.questionaire.prepSave();
        var ring = BERING.ring.getRing();
        var isComment = [];
        if (genCom.length > 0) {
            isComment.genCom = genCom;
        }
        if (BERING.UItype === 1 || BERING.UItype === 2) {
            for (var i = 0; i < ring.length; i++) {
                if (ring[i].comment.length > 0) {
                    isComment.push(ring[i]);
                }
                if (ring[i].aVa === 1) {
                    var textWrap = doc.splitTextToSize(ring[i].item, ring[i].width, false);
                    doc.text(textWrap, ring[i].x, ring[i].y, ring[i].align);
                    doc.setTextColor(0, 0, 0);
                    doc.setFontType("normal");
                }
            }
        } else {
            for (var i = 0; i < ring.length; i++) {
                if (ring[i].comment.length > 0) {
                    isComment.push(ring[i]);
                }
                if (ring[i].aVa > 3) {
                    if (ring[i].aVa === 6) {
                        doc.setTextColor(0, 255, 0);
                    }
                    var textWrap = doc.splitTextToSize(ring[i].item, ring[i].width, false);
                    doc.text(textWrap, ring[i].x, ring[i].y, ring[i].align);
                    doc.setTextColor(0, 0, 0);
                    doc.setFontType("normal");
                }
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
        for (i = 0; i < hits.length; i++) {
            for (var j = 0; j < tmp.stance.length; j++) {
                if (hits[i][0] === tmp.stance[j].i) {
                    var text = tmp.stance[j].t + " " + String(hits[i][1]) + "%";
                    var textWrap = doc.splitTextToSize(text, tmp.stance[i].width);
                    doc.text(textWrap, tmp.stance[i].x, tmp.stance[i].y, tmp.stance[i].align);
                }
            }
        }
        if (ring.self() !== null) {
            makeNeedle(ring, doc);
            var self = doc.splitTextToSize(String(ring.self()) + "%", 40);
            var others = String(100 - ring.self()) + "%";
            doc.setFontSize(11);
            doc.setTextColor(255, 0, 0);
            doc.text(self, 129, 68.5, 39, "center");
            doc.text(others, 175, 61, -39, "center");
        }
        if (isComment.length > 0) {
            makeComment(isComment, doc);
        }
        return doc;
    }
    function makeComment(theSet, doc) {
        doc.addPage();
        var columns = ["Description", "Comment"];
        var rows = [];
        for (var i = 0; i < theSet.length; i++) {
            rows.push([theSet[i].item, theSet[i].comment])
        }
        doc.autoTable(columns, rows, {
            addPageContent: function (data) {
                doc.text("Comments", 40, 30)
            },
            margin: {top: 45},
            styles: {overflow: 'linebreak', columnWidth: 'auto'},
            columnStyles: {0: {columnWidth: 45}}
        });
    }
    function makeNeedle(theSet, doc) {
        doc.setFontSize(12)
        var lineHeight = 47;
        var start = 70;
        var increment = lineHeight / 10;
        var xPos = 149;
        var lineWidth = 0.1;
        doc.setTextColor(0, 0, 255);
        doc.setDrawColor(0, 0, 255);
        doc.line(xPos, start, xPos, start + lineHeight);
        var checkLength = 3;
        var chY = start;
        var pS = 100;
        var flipFlop = true;
        for (var i = 0; i < 11; i++) {
            if (flipFlop) {
                flipFlop = false;
                doc.setLineWidth(lineWidth);
                doc.line(xPos, chY, xPos + checkLength, chY);
                doc.text(String(pS) + "%", xPos + checkLength + 1, chY + 0.7, undefined);
            } else {
                doc.line(xPos, chY, xPos + checkLength / 2, chY);
                flipFlop = true;
            }
            chY += increment;
            pS -= 10;
        }
        doc.setLineWidth(0.5);
        var att = theSet.attitude();
        var self = -theSet.self();
        var tAtt = start + lineHeight - att * lineHeight;
        var cAtt = start + lineHeight - 0.5 * lineHeight;
        var selfRadian = 36 * Math.PI * self / 1800 - 6 * Math.PI / 4;
        var C = 8.5 + lineHeight * 0.5 + Math.abs(self) * 14 / 100;
        var xRad = C * Math.cos(selfRadian);
        var yRad = C * Math.sin(selfRadian);
        doc.setDrawColor(255, 0, 0);
        doc.line(xPos, tAtt, xPos + xRad, cAtt + yRad);
        doc.setFillColor(255, 0, 0);
        doc.circle(xPos, tAtt, 1.5, 'F');
        doc.setFontSize(12);
        doc.text(String(Math.round(att * 100)) + "%", xPos - 9, tAtt + 1.5, 'center');
    }
    function pdf() {
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
    }
    ;
    return{
        publish: p_pdf,
        pdfLoad: pdf
    };
}());




