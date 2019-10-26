/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

"use strict";
var BERING;
Array.prototype.swap = function (x, y) {
    var b = this[x];
    this[x] = this[y];
    this[y] = b;
    return this;
};
BERING.ore = (function () {
    var _inspire;
    function inspire_090915() {
        var items = [];
        items.push(makeItem(1, 145, 170, 40, "R", 0, "treats me like a baby", 22, "i", "", false, 0, 12));
        items.push(makeItem(2, 139, 150, 40, "R", 0, "makes me feel stupid", 25, "i", "", false, 0, 11));

        items.push(makeItem(3, 170, 135, 80, "L", 2, "tries to help too much", 21, "i", "", false, 0, 10));
        items.push(makeItem(4, 170, 135, 80, "L", 2, "makes our work too easy", 28, "i", "", false, 0, 16));
        items.push(makeItem(5, 176, 128, 80, "L", 2, "gives us too many choices", 24, "i", "", false, 0, 18));
        items.push(makeItem(6, 184, 121, 100, "L", 2, "tells me I am doing well, even when I am not", 27, "i", "", false, 0, 15));
        items.push(makeItem(7, 188, 114, 80, "L", 2, "makes me feel bored", 23, "i", "", false, 0, 13));
        items.push(makeItem(8, 191.5, 107, 80, "L", 2, "goes to slowly", 26, "i", "", false, 0, 17));
        items.push(makeItem(9, 193, 100, 80, "L", 2, "too soft", 29, "i", "", false, 0, 14));
        items.push(makeItem(10, 194, 93, 80, "L", 2, "is easy to put off the lesson", 30, "i", "", false, 0, 19));

        items.push(makeItem(11, 194, 86, 80, "L", 4, "makes me feel safe", 40, "i", "", false, 0, 0));
        items.push(makeItem(12, 193, 79, 80, "L", 4, "likes our class", 36, "i", "", false, 0, 3));
        items.push(makeItem(13, 191, 72, 80, "L", 4, "speaks kindly", 39, "i", "", false, 0, 5));
        items.push(makeItem(14, 188, 65, 80, "L", 4, "I enjoy telling them things", 35, "i", "", false, 0, 4));
        items.push(makeItem(15, 182, 57, 80, "L", 4, "says nice things about me", 37, "i", "", false, 0, 7));
        items.push(makeItem(16, 175, 50, 80, "L", 4, "helps me when I make mistakes", 33, "i", "", false, 0, 8));
        items.push(makeItem(17, 160, 43, 80, "L", 4, "knows me well", 31, "i", "", false, 0, 2));

        items.push(makeItem(18, 180, 14, 20, "R", 5, "is fun", 38, "i", "", false, 0, 6));
        items.push(makeItem(19, 150, 23, 40, "R", 5, "asks me what I think and feel", 32, "i", "", false, 0, 9));
        items.push(makeItem(20, 168, 35, 10, "R", 5, "is fair", 34, "i", "", false, 0, 1));

        items.push(makeItem(21, 118, 35, 40, "L", 5, "lets us decide some things", 3, "e", "", false, 0, 10));
        items.push(makeItem(22, 107, 28, 30, "L", 5, "trusts me", 22, "e", "", false, 0, 12));
        items.push(makeItem(23, 105, 21, 40, "L", 5, "loves learning", 7, "e", "", false, 0, 13));

        items.push(makeItem(24, 35, 40, 80, "R", 3, "I'm glad my teacher likes me", 5, "e", "", false, 0, 18));
        items.push(makeItem(25, 50, 47, 70, "R", 3, "makes me feel I can do well", 2, "e", "", false, 0, 11));
        items.push(makeItem(26, 55, 58, 60, "R", 3, "makes lessons go quickly", 8, "e", "", false, 0, 17));
        items.push(makeItem(27, 19, 65, 90, "R", 3, "is pleased with me when I try my best", 6, "e", "", false, 0, 15));
        items.push(makeItem(28, 46, 72, 60, "R", 3, "makes us work hard", 4, "e", "", false, 0, 16));
        items.push(makeItem(29, 43, 79, 60, "R", 3, "keeps the class in control", 9, "e", "", false, 0, 14));
        items.push(makeItem(30, 43, 86, 60, "R", 3, "keeps to the lesson", 10, "e", "", false, 0, 19));

        items.push(makeItem(31, 43, 93, 60, "R", 1, "doesn't know me well", 17, "e", "", false, 0, 2));
        items.push(makeItem(32, 34, 100, 75, "R", 1, "never asks me what I think", 19, "e", "", false, 0, 9));
        items.push(makeItem(33, 26, 107, 80, "R", 1, "gets cross when I make mistakes", 16, "e", "", false, 0, 8));
        items.push(makeItem(34, 28, 114, 80, "R", 1, "always picks the same pupils", 20, "e", "", false, 0, 1));
        items.push(makeItem(35, 34, 121, 80, "R", 1, "is hard to talk to", 14, "e", "", false, 0, 4));
        items.push(makeItem(36, 42, 128, 80, "R", 1, "finds the class annoying", 12, "e", "", false, 0, 3));
        items.push(makeItem(37, 46, 135, 80, "R", 1, "never says anything nice about me", 15, "e", "", false, 0, 7));
        items.push(makeItem(38, 40, 142, 80, "R", 1, "gets annoyed easily", 18, "e", "", false, 0, 6));

        items.push(makeItem(39, 128, 138, 50, "L", 0, "shouts at you for nothing", 13, "e", "", false, 0, 5));
        items.push(makeItem(40, 110, 160, 40, "L", 0, "is a bit scary", 11, "e", "", false, 0, 0));


        var stance = [];
        stance.push(makeStance(0, 143.4, 120, 'humiliating'));
        stance.push(makeStance(1, 133, 118, 'bruising'));
        stance.push(makeStance(2, 154, 118, 'smothering'));
        stance.push(makeStance(3, 123, 110, 'squeezing'));
        stance.push(makeStance(4, 123, 110, 'hugging'));
        stance.push(makeStance(5, 123, 110, 'inspiring'));
        items.stance = stance;
        //PRODUCTION
        return items.sort(function (a, b) {
            return 0.5 - Math.random()
        });


        //DEBUG
        //return items;
    }

    function inspire() {
        var items = [];
        items.push(makeItem(1, 195, 175, 60, "R", 0, "treats me like a baby", 22, "i", "", false, 0, 12));
        items.push(makeItem(2, 180, 158, 60, "R", 0, "makes me feel stupid", 25, "i", "", false, 0, 11));

        items.push(makeItem(3, 180, 149, 80, "L", 2, "tries to help too much", 21, "i", "", false, 0, 10));
        items.push(makeItem(4, 172, 142, 80, "L", 2, "makes our work too easy", 28, "i", "", false, 0, 16));
        items.push(makeItem(5, 174, 135, 80, "L", 2, "gives us too many choices", 24, "i", "", false, 0, 18));
        items.push(makeItem(6, 182, 128, 100, "L", 2, "tells me I am doing well, even when I am not", 27, "i", "", false, 0, 15));
        items.push(makeItem(7, 187, 121, 80, "L", 2, "makes me feel bored", 23, "i", "", false, 0, 13));
        items.push(makeItem(8, 191, 114, 80, "L", 2, "goes to slowly", 26, "i", "", false, 0, 17));
        items.push(makeItem(9, 194, 107, 80, "L", 2, "too soft", 29, "i", "", false, 0, 14));
        items.push(makeItem(10, 195, 100, 80, "L", 2, "is easy to put off the lesson", 30, "i", "", false, 0, 19));

        items.push(makeItem(11, 195, 91, 80, "L", 4, "makes me feel safe", 40, "i", "", false, 0, 0));
        items.push(makeItem(12, 194, 84, 80, "L", 4, "likes our class", 36, "i", "", false, 0, 3));
        items.push(makeItem(13, 192, 77, 80, "L", 4, "speaks kindly", 39, "i", "", false, 0, 5));
        items.push(makeItem(14, 190, 70, 80, "L", 4, "I enjoy telling them things", 35, "i", "", false, 0, 4));
        items.push(makeItem(15, 183, 63, 80, "L", 4, "says nice things about me", 37, "i", "", false, 0, 7));
        items.push(makeItem(16, 179, 56, 80, "L", 4, "helps me when I make mistakes", 33, "i", "", false, 0, 8));
        items.push(makeItem(17, 180, 49, 80, "L", 4, "knows me well", 31, "i", "", false, 0, 2));

        items.push(makeItem(18, 208, 14, 20, "R", 5, "is fun", 38, "i", "", false, 0, 6));
        items.push(makeItem(19, 198, 24, 80, "R", 5, "asks me what I think and feel", 32, "i", "", false, 0, 9));
        items.push(makeItem(20, 188, 34, 20, "R", 5, "is fair", 34, "i", "", false, 0, 1));

        items.push(makeItem(21, 118, 39, 80, "L", 5, "lets us decide some things", 3, "e", "", false, 0, 10));
        items.push(makeItem(22, 107, 29, 30, "L", 5, "trusts me", 22, "e", "", false, 0, 12));
        items.push(makeItem(23, 97, 19, 40, "L", 5, "loves learning", 7, "e", "", false, 0, 13));

        items.push(makeItem(24, 119, 49, 80, "R", 3, "I'm glad my teacher likes me", 5, "e", "", false, 0, 18));
        items.push(makeItem(25, 120, 56, 70, "R", 3, "makes me feel I can do well", 2, "e", "", false, 0, 11));
        items.push(makeItem(26, 114, 63, 60, "R", 3, "makes lessons go quickly", 8, "e", "", false, 0, 17));
        items.push(makeItem(27, 108, 70, 90, "R", 3, "is pleased with me when I try my best", 6, "e", "", false, 0, 15));
        items.push(makeItem(28, 106, 77, 60, "R", 3, "makes us work hard", 4, "e", "", false, 0, 16));
        items.push(makeItem(29, 104, 84, 60, "R", 3, "keeps the class in control", 9, "e", "", false, 0, 14));
        items.push(makeItem(30, 103, 91, 60, "R", 3, "keeps to the lesson", 10, "e", "", false, 0, 19));

        items.push(makeItem(31, 103, 100, 60, "R", 1, "doesn't know me well", 17, "e", "", false, 0, 2));
        items.push(makeItem(32, 103, 107, 75, "R", 1, "never asks me what I think", 19, "e", "", false, 0, 9));
        items.push(makeItem(33, 106, 114, 80, "R", 1, "gets cross when I make mistakes", 16, "e", "", false, 0, 8));
        items.push(makeItem(34, 110, 121, 80, "R", 1, "always picks the same pupils", 20, "e", "", false, 0, 1));
        items.push(makeItem(35, 115, 128, 80, "R", 1, "is hard to talk to", 14, "e", "", false, 0, 4));
        items.push(makeItem(36, 121, 135, 80, "R", 1, "finds the class annoying", 12, "e", "", false, 0, 3));
        items.push(makeItem(37, 123, 142, 80, "R", 1, "never says anything nice about me", 15, "e", "", false, 0, 7));
        items.push(makeItem(38, 118, 149, 80, "R", 1, "gets annoyed easily", 18, "e", "", false, 0, 6));

        items.push(makeItem(39, 129, 145, 50, "L", 0, "shouts at you for nothing", 13, "e", "", false, 0, 5));
        items.push(makeItem(40, 110, 167, 40, "L", 0, "is a bit scary", 11, "e", "", false, 0, 0));



        var stance = [];
        stance.push(makeStance(0, 120, 190, 'humiliating'));
        stance.push(makeStance(1, 10, 180, 'bruising'));
        stance.push(makeStance(2, 220, 180, 'smothering'));
        stance.push(makeStance(3, 10, 40, 'squeezing'));
        stance.push(makeStance(4, 195, 40, 'hugging'));
        stance.push(makeStance(5, 125, 13, 'inspiring'));
        items.stance = stance;


        //PRODUCTION
        items.sort(function(a, b){return 0.5 - Math.random()});

        for (var i = 0; i < items.length; i += 2) {
            for (var j = i; j < items.length; j++) {
                if (items[i].pos === items[j].pair) {
                    items.swap(i + 1, j);
                }
            }
        }
        items.numBut = items.length / BERING.onPage;
        return activ8(items);
    }
    function activ8(theSet) {
        theSet.comon = function () {
            var ret = true;
            for (var i = 0; i < this.length; i++) {
                if (this[i].aVa === 0) {
                    ret = false;
                    break;
                }
            }
            return ret
        };
        theSet.hits = function () {
            var store = [];
            for (var i = 0; i < this.stance.length; i++) {
                var count1 = 0;
                var count2 = 0;
                for (var j = 0; j < this.length; j++) {
                    if (this[j].stance === this.stance[i].i) {
                        count1++;
                        if (this[j].aVa === 1) {
                            count2++;
                        }
                    }
                }
                store.push([this.stance[i].i, Math.round(100 * count2 / count1)]);
            }
            return store;
        };
        theSet.self = function () {
            var other = 0, self = 0, ret;
            for (var i = 0; i < this.length; i++) {
                if (this[i].aVa === 0) {
                    //return null
                } else if (this[i].ie === "i") {
                    if (this[i].aVa !== -1) {
                        other += 2;
                    }
                } else {
                    if (this[i].aVa !== -1) {
                        self += 2;
                    }
                }
            }
            if (self === 0 && other === 0) {
                ret = null;
            } else if (self === 0 && other !== 0) {
                ret = 0;
            } else if (self !== 0 && other === 0) {
                ret = 100;
            } else {
                ret = Math.round(self / (self + other) * 100);
            }
            return ret;
        };
        theSet.attitude = function () {
            var attPos = 0, attNeg = 0;
            for (var i = 0; i < this.length; i++) {
                if (this[i].aVa !== 0) {
                    if (this[i].stance > 2) {
                        if (this[i].aVa > 0) {
                            attPos++;
                        }
                    } else {
                        if (this[i].aVa > 0) {
                            attNeg++;
                        }
                    }
                }
            }
            return attPos / (attPos + attNeg);
        };
        theSet.nextPage = function (carrot) {
            var returnPage = [];
            if (carrot < 37) {
                var setlim = carrot;
                BERING.begining = false;
                BERING.end = false;
            } else {
                setlim = carrot = 36;
                BERING.begining = false;
                BERING.end = true;
            }
            if (carrot <= this.length) {
                for (var i = setlim; i < setlim + 4; i++) {
                    returnPage.push(this[carrot++]);
                }
            }
            if (carrot + BERING.onPage > this.length) {
                BERING.end = true
            }
            return [returnPage, carrot];
        };
        theSet.previousPage = function (carrot) {
            var returnPage = [];
            carrot = carrot - 8;
            if (carrot >= 0) {
                var setlim = carrot;
                BERING.begining = false;
                BERING.end = false;
            } else {
                BERING.begining = true;
                BERING.end = false;
                setlim = carrot = 0;
            }
            for (var i = setlim; i < setlim + 4; ++i) {
                returnPage.push(this[carrot++]);
            }
            if (carrot - 2 * BERING.onPage < 0) {
                BERING.begining = true
            }
            return [returnPage, carrot];

        };
        theSet.progress = function (theSet, carrot) {
            var returnPage = [];
            carrot = 4 * theSet;

            for (var i = 4 * theSet; i < 4 * theSet + 4; ++i) {
                returnPage.push(this[carrot++]);
            }
            if (carrot - 2 * BERING.onPage < 0) {
                BERING.begining = true
            } else {
                BERING.begining = false
            }
            if (carrot + BERING.onPage > this.length) {
                BERING.end = true
            } else {
                BERING.end = false;
            }
            return [returnPage, carrot];
        };
        theSet.compat = function (theSet, com) {
            var clone = theSet.slice(0);
            clone.stance = theSet.stance.slice(0);
            activ8(clone);
            for (var i = 0; i < clone.length; i++) {
                for (var j = 0; j < com.length; j++) {
                    if (clone[i].pos === com[j].pos) {
                        clone[i].x = com[j].x;
                        clone[i].y = com[j].y;
                        clone[i].width = com[j].width;
                        clone[i].ie = com[j].ie;
                    }
                }
            }
            return clone;
        };
        return theSet;
    }
    //PRODUCTION
    //return items.sort(function(a, b){return 0.5 - Math.random()});


    //DEBUG
    function g_a() {
        if (_inspire === undefined) {
            _inspire = activ8(BERING.Miner.pitPony());
        }
        return _inspire;
    }
    function makeStance(i, x, y, t, w, a) {
        var tmp = {};
        tmp.x = x;
        tmp.y = y;
        tmp.i = i;
        tmp.t = t;
        tmp.width = w;
        tmp.align = a;
        return BERING.Miner.shovel(i, x, y, t, w, a);
    }
    function makeItem(p, x, y, w, a, s, t, pr, ie, com, rf, ava, num) {
        var align;
        if (a === "R") {
            align = 'right';
        } else if (a === "C") {
            align = 'center';
        } else {
            align = undefined;
        }
        var item = {};
        item.x = x;
        item.y = y;
        item.width = w;
        item.align = align;
        item.stance = s;
        item.pos = p;
        item.item = t;
        item.pair = pr;
        item.ie = ie;
        item.comment = com;//"Lorem ipsum dolor sit amet, appetere nominati reprehendunt at eam. Eam ex populo eirmod impetus, sed at erat consulatu evertitur. Mei magna voluptaria interpretaris no. In sit soleat nostrud comprehensam, in audire adipiscing vel.Lorem ipsum dolor sit amet, appetere nominati reprehendunt at eam. Eam ex populo eirmod impetus, sed at erat consulatu evertitur. Mei magna voluptaria interpretaris no. In sit soleat nostrud comprehensam, in audire adipiscing vel.Lorem ipsum dolor sit amet, appetere nominati reprehendunt at eam. Eam ex populo eirmod impetus, sed at erat consulatu evertitur. Mei magna voluptaria interpretaris no. In sit soleat nostrud comprehensam, in audire adipiscing vel."//com;
        item.redFlag = rf;
        item.aVa = ava;
        item.num = num
        
        
        //nums a bum variable, need to remove this
        return BERING.Miner.pick(p, x, y, w, a, s, t, pr, ie, com, rf, ava, num);
    }
    function getBlank() {
        return inspire();
    }
    return{
        current: g_a,
        mi: makeItem,
        ms: makeStance,
        getCompat: inspire_090915,
        gc: getBlank,
        ia: activ8
    };
}());


