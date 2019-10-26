/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";
var BERING;
BERING.IOModule = (function () {
    var xmlDoc;
    var funRun = [];
    var finishLine = 1;
    function iomSave(r, gc) {
        var numX = 1;
        var ring = r.compat(r, BERING.ore.getCompat());
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
        if (BERING.compat === "070916" || BERING.compat === "060916") {
            for (i = 0; i < ring.length; i++) {
                var theText = xmlDoc.createTextNode(ring[i].item);
                var node = xmlDoc.createElement('node');
                node.appendChild(theText);
                xmlDoc.getElementsByTagName('node')[0].appendChild(node);
                makeItem2(ring[i], node);
            }
        } else {
            for (var i = 0; i < ring.length; i += 2) {
                for (var j = i; j < ring.length; j++) {
                    if (ring[i].pos === ring[j].pair) {
                        ring.swap(i + 1, j);
                    }
                }
            }
            for (i = 0; i < ring.length; i += 2) {
                if (ring[i].ie === "i") {
                    var iP = ring[i];
                    var eP = ring[i + 1];
                } else {
                    iP = ring[i + 1];
                    eP = ring[i];
                }
                var node = xmlDoc.createElement('node');
                if (ring[i].num !== undefined) {
                    node.setAttribute('num', ring[i].num);
                } else {
                    node.setAttribute('num', numX++);
                }
                var internal = xmlDoc.createElement('internal');
                var internalText = xmlDoc.createTextNode(iP.item); //WARNING: internals are externals and vice-versa
                var externalText = xmlDoc.createTextNode(eP.item);
                var external = xmlDoc.createElement('external');
                internal.appendChild(internalText);
                external.appendChild(externalText);
                node.appendChild(internal);
                node.appendChild(external);
                xmlDoc.getElementsByTagName('node')[0].appendChild(node);
                makeItem(iP, internal);
                makeItem(eP, external);
            }
        }
        var fileName = new String();
        if ($("input:text").val().length > 0) {
            fileName = $("input:text").val() + " " + BERING.title + " " + BERING.IDKey.get() + ".xml";
        } else {
            fileName = "anon " + BERING.title + " " + BERING.IDKey.get() + ".xml";
        }
        var xmlString = (new XMLSerializer()).serializeToString(xmlDoc);
        var blob = new Blob([xmlString], {type: "text/plain;charset=utf-8"});
        saveAs(blob, fileName);
        r.compat(r, BERING.ore.gc());
    }
    function makeItem2(r, theElement) {
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
        theElement.setAttribute('num', r.pos);
        theElement.setAttribute('pair', r.pair);
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
    function iomLoad() {
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
        if (window.File && window.FileReader && window.FileList && window.Blob) {
            var readSingleFile = function (evt) {
                finishLine = evt.target.files.length;
                for (var fileCount = 0; fileCount < evt.target.files.length; fileCount++) {
                    var f = evt.target.files[fileCount];
                    if (f) {
                        var r = new FileReader();
                        r.onload = function (e) {
                            var tmp_f = e.target.result;
                            if (!BERING.MetaModule.open(tmp_f)) {
                                try {
                                    var xmlDoc = $.parseXML(tmp_f);
                                    var cont = get_childNodes(xmlDoc.documentElement);
                                    try {
                                        var meta = xmlDoc.getElementsByTagName('node')[0];
                                        var compat = meta.getAttribute('compat');
                                        if (compat === null) {
                                            BERING.Modal.lfb('0');
                                            //alert('This file is not a .xml file made by WML.');
                                        } else {
                                            if (compat === BERING.compat) {
                                                var stances = [];
                                                var items = [];
                                                BERING.IDKey.set(meta.getAttribute('idk'));
                                                if (meta.getAttribute('n') !== null) {
                                                    $('input.nameI').val(BERING.XMLFilter.filterIn(meta.getAttribute('n')));
                                                    items.name = BERING.XMLFilter.filterIn(meta.getAttribute('n'));
                                                }
                                                for (var i = 0; i < cont.length; i++) {
                                                    if (cont[i].nodeName === 'stance') {
                                                        var st = get_childNodes(cont[i]);
                                                        for (var j = 0; j < st.length; j++) {
                                                            var stanceText = st[j].childNodes[0];
                                                            stances.push(BERING.ore.ms(Number(st[j].getAttribute('id')), Number(st[j].getAttribute('x')), Number(st[j].getAttribute('y')), stanceText.nodeValue));
                                                        }
                                                    } else {
                                                        if (compat === "070916" || compat === "060916") {
                                                            var item = cont[i];
                                                            var gfm = 'i'
                                                            if (item.getAttribute('gfmgfo') === '0') {
                                                                gfm = 'e';
                                                            }
                                                            items.push(mine2(item, gfm));
                                                        } else {
                                                            var item = get_childNodes(cont[i]);
                                                            if (item[0].nodeName === "internal") {
                                                                var internalControl = 0;
                                                                var externalControl = 1;
                                                            } else {
                                                                internalControl = 1;
                                                                externalControl = 0;
                                                            }
                                                            if (item[internalControl].getAttribute('pos') === null) {
                                                                break;
                                                            }
                                                            items.push(mine(item[internalControl], 'i'));
                                                            items.push(mine(item[externalControl], 'e'));
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
                                                BERING.Modal.feedBack(compat)
                                            }
                                        }
                                    } catch (err) {
                                        BERING.Modal.publish('<p>Can not use this XML file.</p>');
                                    }
                                } catch (err) {
                                    BERING.Modal.publish('<p>Unable to read this file, it is not an XML file.</p>');
                                }
                            }
                            ;
                        };
                        r.readAsText(f);
                        var $el = $('#fileInput');
                        $el.wrap('<form>').closest('form').get(0).reset();
                        $el.unwrap();
                    }
                }
            };
            var inputElement = document.getElementById('fileInput');
            inputElement.intermediate = true;
            inputElement.addEventListener('change', readSingleFile, false);
            var ua = window.navigator.userAgent;
            var msie = ua.indexOf('MSIE ');
            var edge = ua.indexOf('Edge/');
            var trident = ua.indexOf('Trident/');
            if (msie > 0 || edge > 0 || trident > 0) {
                $(function () {
                    $(document).on('click', '#fileInput', function () {
                        if (this.indeterminate) {
                            $(this).trigger('change');
                        }
                    });
                });
            }
            document.getElementById('fileInput').click();
        } else {
            BERING.Modal.publish('<p>This function is not available on this browswer as javascript file APIs are not fully supported.</p>');
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
        function mine2(oneBit, polarity) {
            var rf = true;
            if (oneBit.getAttribute('rg') === null) {
                rf = false;
            }
            return BERING.ore.mi(
                    Number(oneBit.getAttribute('num')),
                    Number(oneBit.getAttribute('x')),
                    Number(oneBit.getAttribute('y')),
                    Number(oneBit.getAttribute('width')),
                    oneBit.getAttribute('align'),
                    Number(oneBit.getAttribute('stance')),
                    oneBit.firstChild.nodeValue,
                    Number(getPear(oneBit.firstChild.nodeValue)),
                    polarity,
                    getComment(oneBit),
                    rf,
                    Number(oneBit.getAttribute('aVa')));
        }
        function mine(oneBit, polarity) {
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
                    polarity,
                    getComment(oneBit),
                    rf,
                    Number(oneBit.getAttribute('aVa')));
        }
    }
    return{
        load: iomLoad,
        save: iomSave
    };
}());