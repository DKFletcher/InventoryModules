/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

"use strict";
var BERING;
BERING.MetaModule = (function () {
    var xmlMet;
    var xmlDoc;
    function sM(r, gc) {
        var ring = r;
        var dat = new Date();
        var xmlString = "<node></node>";
        var parser = new DOMParser();
        xmlDoc = parser.parseFromString(xmlString, "text/xml");
        var tmp = xmlDoc.getElementsByTagName('node');
        tmp[0].setAttribute('xi', '126');
        tmp[0].setAttribute('yi', '60.5');
        tmp[0].setAttribute('xe', '167');
        tmp[0].setAttribute('ye', '58');
        tmp[0].setAttribute('y', dat.getFullYear());
        tmp[0].setAttribute('m', dat.getMonth());
        tmp[0].setAttribute('d', dat.getDate());
        tmp[0].setAttribute('idk', BERING.IDKey.get());
        tmp[0].setAttribute('n', BERING.XMLFilter.filterOut($('input.nameI').val()));
        tmp[0].setAttribute('compat', BERING.compat);
        var stance = xmlDoc.createElement('stance');
        var test = xmlDoc.getElementsByTagName('node')[0].appendChild(stance);
        for (var i = 0; i < ring.stance.length; i++) {
            xmlDoc.getElementsByTagName('stance')[0].appendChild(makeStance(ring.stance[i]));
        }
        if (gc.length > 0) {
            var node = xmlDoc.createElement('node');
            var textNode = xmlDoc.createTextNode(gc);
            node.appendChild(textNode);
            stance.appendChild(node);
        }
        if (BERING.compat === "311217") {
            var inventory = xmlDoc.createElement('inventory');
            xmlDoc.getElementsByTagName('node')[0].appendChild(inventory);
            for (var i = 0; i < ring.length; i++) {
                var newEle = xmlDoc.createElement('inventory');
                var newText = xmlDoc.createTextNode(ring[i].inventoryText);
                newEle.appendChild(newText);
                newEle.setAttribute('pos', ring[i].pos);
                xmlDoc.getElementsByTagName('inventory')[0].appendChild(newEle);
            }            
            var secondText = xmlDoc.createElement('secondText');
            xmlDoc.getElementsByTagName('node')[0].appendChild(secondText);
            for (var i = 0; i < ring.length; i++) {
                var newEle = xmlDoc.createElement('secondText');
                var newText = xmlDoc.createTextNode(ring[i].smallFontText);
                newEle.appendChild(newText);
                newEle.setAttribute('pos', ring[i].pos);
                xmlDoc.getElementsByTagName('secondText')[0].appendChild(newEle);
            }
                       
            var conText = xmlDoc.createElement('conText');
            xmlDoc.getElementsByTagName('node')[0].appendChild(conText);
            for (var i = 0; i < ring.length; i++) {
                var newEle = xmlDoc.createElement('conText');
                var newText = xmlDoc.createTextNode(ring[i].urEx);
                newEle.appendChild(newText);
                newEle.setAttribute('pos', ring[i].pos);
                xmlDoc.getElementsByTagName('conText')[0].appendChild(newEle);
            }
        }
        for (i = 0; i < ring.length; i++) {
            if (BERING.compat === "311217") {
                var theText = xmlDoc.createTextNode(ring[i].typeSet);
            } else {
                var theText = xmlDoc.createTextNode(ring[i].item);
            }
            var node = xmlDoc.createElement('node');
            node.appendChild(theText);
            xmlDoc.getElementsByTagName('node')[0].appendChild(node);
            if (BERING.compat === "311217") {
                makePromotion(ring[i], node);
            } else {
                makeItem(ring[i], node);
            }
        }
        return BERING.XMLFilter.filterOut((new XMLSerializer()).serializeToString(xmlDoc));
    }
    function makePromotion(r, theElement) {
        theElement.setAttribute('x', r.x);
        theElement.setAttribute('y', r.y);
        theElement.setAttribute('width', r.width);
        if (r.align === "center") {
            var align = "C";
        } else if (r.align === undefined) {
            align = "L";
        } else {
            align = "R";
        }
        theElement.setAttribute('align', align);
        theElement.setAttribute('aVa', r.aVa);
        theElement.setAttribute('aIn', r.aIn)
        theElement.setAttribute('stance', r.stance);
        theElement.setAttribute('pos', r.pos);
        theElement.setAttribute('pair', r.pair);
        theElement.setAttribute('ie', r.ie);
        theElement.setAttribute('pole', r.pole)
        if (r.comment.length > 0) {
            var node = xmlDoc.createElement('node');
            var comment = xmlDoc.createTextNode(BERING.XMLFilter.filterOut(r.comment));
            node.appendChild(comment);
            theElement.appendChild(node);
        }
        if (r.redFlag) {
            theElement.setAttribute('rg', '1');
        }
    }
    function makeItem(r, theElement) {
        theElement.setAttribute('x', r.x);
        theElement.setAttribute('y', r.y);
        theElement.setAttribute('width', r.width);
        if (r.align === "center") {
            var align = "C";
        } else if (r.align === undefined) {
            align = "L";
        } else {
            align = "R";
        }
        theElement.setAttribute('align', align);
        theElement.setAttribute('aVa', r.aVa);
        theElement.setAttribute('stance', r.stance);
        theElement.setAttribute('pos', r.pos);
        theElement.setAttribute('pair', r.pair);
        theElement.setAttribute('ie', r.ie);
        if (r.comment.length > 0) {
            var node = xmlDoc.createElement('node');
            var comment = xmlDoc.createTextNode(BERING.XMLFilter.filterOut(r.comment));
            node.appendChild(comment);
            theElement.appendChild(node);
        }
        if (r.redFlag) {
            theElement.setAttribute('rg', '1');
        }
    }
    function makeStance(r) {
        var newEle = xmlDoc.createElement('stance');
        var newText = xmlDoc.createTextNode(r.t);
        newEle.appendChild(newText);
        newEle.setAttribute('x', r.x);
        newEle.setAttribute('y', r.y);
        newEle.setAttribute('id', r.i);
        return newEle;
    }
    function get_childNodes(n) {
        var y = n.childNodes;
        for (var i = 0; i < y.length; i++) {
            if (y[i].nodeType !== 1) {
                var x = n.childNodes[i];
                x.parentNode.removeChild(x);
            }
        }
        return y;
    }
    function gM(theMet) {
        function get_childNodes(n) {
            var y = n.childNodes;
            for (var i = 0; i < y.length; i++) {
                if (y[i].nodeType !== 1) {
                    var x = n.childNodes[i];
                    x.parentNode.removeChild(x);
                }
            }
            return y;
        }
        var ret = false;
        var end = theMet.search('</jspdf:metadata>');
        if (end > 0) {
            var begin = theMet.search('<jspdf:metadata>') + 16;
            var tmp = BERING.XMLFilter.filterIn(theMet.slice(begin, end));
            var xmlDoc = $.parseXML(tmp);
            
        //console.log(new XMLSerializer().serializeToString(xmlDoc))
            var cont = get_childNodes(xmlDoc.documentElement);
            var meta = xmlDoc.getElementsByTagName('node')[0];
            var compat = meta.getAttribute('compat');
            if (compat === BERING.compat) {
                BERING.IDKey.set(meta.getAttribute('idk'));
                if (meta.getAttribute('n') !== null) {
                    $('input.nameI').val(BERING.XMLFilter.filterIn(meta.getAttribute('n')));
                }
                var stances = [];
                var inventory = [];
                var secondText=[];
                var conText=[];
                var items = [];
                for (var i = 0; i < cont.length; i++) {
                    if (cont[i].nodeName === 'stance') {
                        var st = get_childNodes(cont[i]);
                        for (var j = 0; j < st.length; j++) {
                            var stanceText = st[j].childNodes[0];
                            stances.push(BERING.ore.ms(Number(st[j].getAttribute('id')), Number(st[j].getAttribute('x')), Number(st[j].getAttribute('y')), stanceText.nodeValue));
                        }
                    } else if (cont[i].nodeName === 'inventory') {
                        var iv = get_childNodes(cont[i]);
                        for (var j = 0; j < iv.length; j++) {
                            var tmp={};
                            var inventoryText=iv[j].childNodes[0]
                            tmp.item=inventoryText.nodeValue;
                            tmp.pos=Number(iv[j].getAttribute('pos'));
                            inventory.push(tmp);
                        }
                    }else if (cont[i].nodeName === 'secondText') {
                        var iv = get_childNodes(cont[i]);
                        for (var j = 0; j < iv.length; j++) {
                            var tmp={};
                            var inventoryText=iv[j].childNodes[0]
                            tmp.item=inventoryText.nodeValue;
                            tmp.pos=Number(iv[j].getAttribute('pos'));
                            secondText.push(tmp);
                        }
                    }else if (cont[i].nodeName === 'conText') {
                        var iv = get_childNodes(cont[i]);
                        for (var j = 0; j < iv.length; j++) {
                            var tmp={};
                            var inventoryText=iv[j].childNodes[0]
                            tmp.item=inventoryText.nodeValue;
                            tmp.pos=Number(iv[j].getAttribute('pos'));
                            conText.push(tmp);
                        }
                    }else {
                        if (BERING.compat === "311217") {
                            //console.log('first access: '+inventory.length)
                            items.push(mine3(cont[i],inventory,secondText,conText));
                        } else {
                            items.push(mine2(cont[i]));
                        }
                    }
                }
                items.stance = stances;
                var iad = BERING.ore.ia(items);
                var comIt = items.compat(iad, BERING.ore.gc());
                BERING.ring.setRing(iad);
                BERING.progress.set();
                BERING.PDF.pdfLoad();
            } else {
                BERING.Modal.feedBack(compat);
            }
            ret = true;
        }
        return ret;
    }
    function getComment(t) {
        var par = get_childNodes(t);
        try {
            var ret = par[0].firstChild.nodeValue;
        } catch (err) {
            ret = '';
        }
        return ret;
    }
    function getPear(t) {
        var s = BERING.ore.current();
        for (var i = 0; i < s.length; i++) {
            if (s[i].item === t) {
                return s[i].pair;
            }
        }
    }
    function mine2(oneBit) {
        var rf = true;
        if (oneBit.getAttribute('rg') === null) {
            rf = false;
        }
        return BERING.ore.mi(
                Number(oneBit.getAttribute('pos')),
                Number(oneBit.getAttribute('x')),
                Number(oneBit.getAttribute('y')),
                Number(oneBit.getAttribute('width')),
                oneBit.getAttribute('align'),
                Number(oneBit.getAttribute('stance')),
                oneBit.firstChild.nodeValue,
                Number(getPear(oneBit.firstChild.nodeValue)),
                oneBit.getAttribute('ie'),
                getComment(oneBit),
                rf,
                Number(oneBit.getAttribute('aVa')));
    }
    function mine3(oneBit,inventory, secondText,conText) {
        var thePos=Number(oneBit.getAttribute('pos'));
        var iText=oneBit.firstChild.nodeValue;
        var sText=oneBit.firstChild.nodeValue;
        var cText=oneBit.firstChild.nodeValue;
        for (var i=0; i<inventory.length; i++){
            if (thePos===inventory[i].pos){
                iText=inventory[i].item;
                //console.log(iText)
            }
        }
        for (var i=0; i<secondText.length; i++){
            if (thePos===secondText[i].pos){
                sText=secondText[i].item;
                //console.log(iText)
            }
        }
        for (var i=0; i<conText.length; i++){
            if (thePos===conText[i].pos){
                cText=conText[i].item;
                //console.log(iText)
            }
        }
        var rf = true;
        if (oneBit.getAttribute('rg') === null) {
            rf = false;
        }
        return BERING.ore.mi(
                thePos,
                Number(oneBit.getAttribute('x')),
                Number(oneBit.getAttribute('y')),
                Number(oneBit.getAttribute('width')),
                oneBit.getAttribute('align'),
                Number(oneBit.getAttribute('stance')),
                oneBit.firstChild.nodeValue,
                Number(getPear(oneBit.firstChild.nodeValue)),
                oneBit.getAttribute('ie'),
                getComment(oneBit),
                rf,
                Number(oneBit.getAttribute('aVa')),
                Number(oneBit.getAttribute('aIn')),
                iText,
                sText,
                Number(oneBit.getAttribute('pole')),
                cText);
    }
    function gt() {
        return xmlMet;
    }
    return{
        save: sM,
        open: gM,
        getMet: gt
    };
}());
