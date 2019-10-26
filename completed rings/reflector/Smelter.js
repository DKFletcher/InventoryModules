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
    function inspire_050916() {
        var items = [];
        items.push(makeItem(1, 129, 170.4, 46, "R", 0, "resentful", 39, "e", "", false, 0));
        items.push(makeItem(2, 123.5, 159.5, 46.5, "R", 0, "humiliated", 50, "e", "", false, 0));
        items.push(makeItem(3, 140.5, 145.2, 22, "R", 0, "isolated", 37, "e", "", false, 0));
        items.push(makeItem(4, 175, 170, 71, "C", 0, "spiteful", 45, "e", "", false, 0));
        items.push(makeItem(5, 169, 155, 58, "C", 0, "hopeless", 42, "e", "", false, 0));
        items.push(makeItem(6, 167, 151, 54, "C", 0, "sulking", 53, "e", "", false, 0));
        items.push(makeItem(7, 165.5, 147, 49.5, "C", 0, "invisible", 43, "e", "", false, 0));

        items.push(makeItem(8, 167, 140, 40, "C", 2, "giving up", 48, "e", "", false, 0));
        items.push(makeItem(9, 160, 136, 38, "C", 2, "shy", 54, "e", "", false, 0));
        items.push(makeItem(10, 213, 142.5, 64, "C", 2, "bad about self", 51, "e", "", false, 0));
        items.push(makeItem(11, 207, 138.5, 70, "C", 2, "worried", 49, "e", "", false, 0));
        items.push(makeItem(12, 200, 134.5, 77, "C", 2, "sad", 47, "e", "", false, 0));
        items.push(makeItem(13, 194, 130.5, 83, "C", 2, "questioning self", 41, "e", "", false, 0));
        items.push(makeItem(14, 188, 126.5, 74, "C", 2, "pressured", 44, "e", "", false, 0));

        items.push(makeItem(15, 182, 122.5, 62, "C", 4, "calm", 38, "e", "", false, 0));
        items.push(makeItem(16, 192, 102.5, 40, "L", 4, "having fun", 40, "e", "", false, 0));
        items.push(makeItem(17, 193.5, 98, 24, "L", 4, "caring", 46, "e", "", false, 0));
        items.push(makeItem(18, 194, 94, 35, "L", 4, "kind", 52, "e", "", false, 0));
        items.push(makeItem(19, 194, 88, 41, "L", 4, "pleased for others", 72, "e", "", false, 0));
        items.push(makeItem(20, 193.6, 84, 31, "L", 4, "trusting", 70, "e", "", false, 0));
        items.push(makeItem(21, 193, 80, 42, "L", 4, "thankful", 61, "e", "", false, 0));


        items.push(makeItem(22, 192, 76, 40, "L", 5, "contented", 68, "e", "", false, 0));
        items.push(makeItem(23, 190.5, 72, 63, "L", 5, "humility", 66, "e", "", false, 0));
        items.push(makeItem(24, 188.5, 68, 41, "L", 5, "belonging", 64, "e", "", false, 0));
        items.push(makeItem(25, 186, 64, 36, "L", 5, "forgiving", 62, "e", "", false, 0));
        items.push(makeItem(26, 183, 60, 38, "L", 5, "joyful", 57, "e", "", false, 0));
        items.push(makeItem(27, 179, 56, 38, "L", 5, "admiring", 59, "e", "", false, 0));
        items.push(makeItem(28, 175, 52, 35, "L", 5, "valued", 67, "e", "", false, 0));


        items.push(makeItem(29, 174, 48, 41, "L", 3, "hopeful", 69, "e", "", false, 0));
        items.push(makeItem(30, 177.5, 44, 13, "L", 3, "confident", 71, "e", "", false, 0));
        items.push(makeItem(31, 148, 10, 60, "R", 3, "proud", 63, "e", "", false, 0));
        items.push(makeItem(32, 148, 15, 55, "R", 3, "coragous", 65, "e", "", false, 0));
        items.push(makeItem(33, 148, 21, 48, "R", 3, "excited", 56, "e", "", false, 0));
        items.push(makeItem(34, 148, 26, 44, "R", 3, "determined", 60, "e", "", false, 0));
        items.push(makeItem(35, 148, 32, 36, "R", 3, "curious", 55, "e", "", false, 0));


        items.push(makeItem(36, 149, 40, 25, "R", 1, "angry", 58, "e", "", false, 0));
        items.push(makeItem(37, 121, 40, 25, "L", 1, "bored", 3, "i", "", false, 0));
        items.push(makeItem(38, 115, 32, 30, "L", 1, "superior", 15, "i", "", false, 0));
        items.push(makeItem(39, 108, 26, 44, "L", 1, "greedy", 1, "i", "", false, 0));
        items.push(makeItem(40, 101, 21, 48, "L", 1, "gloating", 16, "i", "", false, 0));
        items.push(makeItem(41, 95, 15, 55, "L", 1, "suspicous", 13, "i", "", false, 0));
        items.push(makeItem(42, 90, 10, 60, "L", 1, "envious", 5, "i", "", false, 0));

        var stance = [];
        stance.push(makeStance(0, 143.4, 120, 'miserable'));
        stance.push(makeStance(1, 133, 118, 'mean'));
        stance.push(makeStance(2, 154, 118, 'hard on self'));
        stance.push(makeStance(3, 123, 110, 'chuffed'));
        stance.push(makeStance(4, 164, 110, 'king'));
        stance.push(makeStance(5, 117, 98, 'happy'));
        items.stance = stance;
        //PRODUCTION
        return items.sort(function () {
            return 0.5 - Math.random();
        });


        //DEBUG
        //return items;
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
            return ret;
        };
        theSet.hits = function () {
            var store = [];
            var count1 = 0;
            for (var i = 0; i < this.stance.length; i++) {
                var count2 = 0;
                var count3 = 0;
                var count4 = 0;
                for (var j = 0; j < this.length; j++) {
                    if (this[j].stance === this.stance[i].i) {
                        count1 += (this[j].aVa - 1) * (this[j].aIn - 1);
                        count2 += (this[j].aVa - 1) * (this[j].aIn - 1);
                        count3 += 25;
                        count4++;
                    }
                }
                store.push([this.stance[i].i, Math.round(100 * count2 / count3), count2, Math.round(count2 / count4 * 100) / 100]);
            }
            for (var i = 0; i < store.length; i++) {
                store[i].push(Math.round(100 * store[i][2] / count1));
            }
            return store;
        }
        ;
        theSet.self = function () {
            var other = 0, self = 0, ret;
            for (var i = 0; i < this.length; i++) {
                if (this[i].aVa === 0) {
                    //return null
                } else if (this[i].ie === "i") {
                    other += this[i].aVa - 1;
                } else {
                    self += this[i].aVa - 1;
                }
            }
            if (self === 0 && other === 0) {
                ret = null;
            } else if (self === 0 && other !== 0) {
                ret = 100;
            } else if (self !== 0 && other === 0) {
                ret = 0;
            } else {
                ret = Math.round(other / (other + self) * 100);
            }
            return ret;
        };
        theSet.attitude = function () {
            var attPos = 0, attNeg = 0, uplifting = [], distracting = [];
            for (var i = 0; i < this.length; i++) {
                if (this[i].aVa !== 0) {
                    if (this[i].aIn !== 0) {
                        var prod = (this[i].aVa - 1) * (this[i].aIn - 1);
                        if (this[i].stance === 0 || this[i].stance === 3) {
                            attPos += prod;
                            var tmp = {};
                            tmp.prod = prod;
                            tmp.item = this[i];
                            uplifting.push(tmp);
                        } else {
                            attNeg += prod;
                            var tmp = {};
                            tmp.prod = prod;
                            tmp.item = this[i];
                            distracting.push(tmp);
                        }
                    }
                }
            }
            return [attPos / (attPos + attNeg), distracting, uplifting];
        };
        theSet.altAtt = function () {
            var attPos = 0, attNeg = 0, uplifting = [], distracting = [];
            for (var i = 0; i < this.length; i++) {
                if (this[i].aVa !== 0) {
                    if (this[i].aIn !== 0) {
                        var prod = (this[i].aVa - 1) * (this[i].aIn - 1) * this[i].pole;
                        if (this[i].pole > 0) {
                            attPos += (this[i].aVa - 1) * (this[i].aIn - 1);
                            if (prod > 9) {
                                var tmp = {};
                                tmp.prod = prod;
                                tmp.item = this[i];
                                uplifting.push(tmp);
                            }
                        } else {
                            attNeg += (this[i].aVa - 1) * (this[i].aIn - 1);
                            if (prod > 6) {
                                var tmp = {};
                                tmp.prod = prod;
                                tmp.item = this[i];
                                distracting.push(tmp);
                            }
                        }
                    }
                }
            }
            uplifting.sort(function (a, b) {
                return a.prod - b.prod;
            });
            uplifting.reverse();
            distracting.sort(function (a, b) {
                return a.prod - b.prod;
            });
            return [attPos / (attPos + attNeg), distracting, uplifting];
        };
        theSet.page2 = function () {
            var ret = {};
            var q0 = [];
            var q1 = [];
            var q2 = [];
            var q3 = [];
            for (var i = 0; i < this.length; i++) {
                this[i].prod = (this[i].aVa - 1) * (this[i].aIn - 1);// * this[i].pole;
                switch (this[i].stance) {
                    case 0:
                        q0.push(this[i]);
                        break;
                    case 1:
                        q1.push(this[i]);
                        break;
                    case 2:
                        q2.push(this[i]);
                        break;
                    case 3:
                        q3.push(this[i]);
                        break;
                }
            }
            q0.sort(function (a, b) {
                return a.prod - b.prod;
            });
            q1.sort(function (a, b) {
                return a.prod - b.prod;
            });
            q2.sort(function (a, b) {
                return a.prod - b.prod;
            });
            q3.sort(function (a, b) {
                return a.prod - b.prod;
            });
            ret.q0 = q0.reverse();
            ret.q1 = q1.reverse();
            ret.q2 = q2.reverse();
            ret.q3 = q3.reverse();
            return ret;
        }
        theSet.nextPage = function (carrot) {
            var returnPage = [];
            if (carrot < this.length - BERING.onPage + 1) {
                var setlim = carrot;
                BERING.begining = false;
                BERING.end = false;
            } else {
                setlim = carrot = this.length - BERING.onPage;
                BERING.begining = false;
                BERING.end = true;
            }

            if (carrot <= this.length) {
                for (var i = setlim; i < setlim + BERING.onPage; i++) {
                    returnPage.push(this[carrot++]);
                }
            }
            if (carrot + BERING.onPage > this.length) {
                BERING.end = true;
            }
            return [returnPage, carrot];
        };
        theSet.previousPage = function (carrot) {
            var returnPage = [];
            carrot = carrot - 2 * BERING.onPage;
            if (carrot >= 0) {
                var setlim = carrot;
                BERING.begining = false;
                BERING.end = false;
            } else {
                BERING.begining = true;
                BERING.end = false;
                setlim = carrot = 0;
            }
            for (var i = setlim; i < setlim + BERING.onPage; ++i) {
                returnPage.push(this[carrot++]);
            }
            if (carrot - 2 * BERING.onPage < 0) {
                BERING.begining = true;
            }
            return [returnPage, carrot];
        };
        theSet.progress = function (theSet, carrot) {
            var returnPage = [];
            carrot = BERING.onPage * theSet;
            for (var i = BERING.onPage * theSet; i < BERING.onPage * theSet + BERING.onPage; ++i) {
                returnPage.push(this[carrot++]);
            }
            if (carrot - 2 * BERING.onPage < 0) {
                BERING.begining = true;
            } else {
                BERING.begining = false;
            }
            if (carrot + BERING.onPage > this.length) {
                BERING.end = true;
            } else {
                BERING.end = false;
            }
            return [returnPage, carrot];
        };
        theSet.comon = function () {
            var ret = true;
            for (var i = 0; i < this.length; i++) {
                if (!this[i].isZero) {
                    if (this[i].aVa === 0 || this[i].aIn === 0 || this[i].pole === 0) {
                        ret = false;
                    }
                }
//                console.log(i+'         '+'aVa: '+this[i].aVa+'      aIn: '+this[i].aIn+'      pole: '+this[i].pole+'    zero: '+this[i].isZero+'    ret: '+ret);
            }
            return ret;
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
//        var tmp = {};
//        tmp.x = x;
//        tmp.y = y;
//        tmp.i = i;
//        tmp.t = t;
//        tmp.width = w;
//        tmp.align = a;
        return BERING.Miner.shovel(i, x, y, t, w, a);
    }
    function makeItem(p, x, y, w, a, s, t, pr, ie, com, rf, ava, aIn, trss, smft, pole, fgb) {
//        var align;
//        if (a === "R") {
//            align = 'right';
//        } else if (a === "C") {
//            align = 'center';
//        } else {
//            align = undefined;
//        }
//        var item = {};
//        item.x = x;
//        item.y = y;
//        item.width = w;
//        item.align = align;
//        item.stance = s;
//        item.pos = p;
//        item.item = t;
//        item.pair = pr;
//        item.ie = ie;
//        item.comment = com;//"Lorem ipsum dolor sit amet, appetere nominati reprehendunt at eam. Eam ex populo eirmod impetus, sed at erat consulatu evertitur. Mei magna voluptaria interpretaris no. In sit soleat nostrud comprehensam, in audire adipiscing vel.Lorem ipsum dolor sit amet, appetere nominati reprehendunt at eam. Eam ex populo eirmod impetus, sed at erat consulatu evertitur. Mei magna voluptaria interpretaris no. In sit soleat nostrud comprehensam, in audire adipiscing vel.Lorem ipsum dolor sit amet, appetere nominati reprehendunt at eam. Eam ex populo eirmod impetus, sed at erat consulatu evertitur. Mei magna voluptaria interpretaris no. In sit soleat nostrud comprehensam, in audire adipiscing vel."//com;
//        item.redFlag = rf;
//        item.aVa = ava;


        //nums a bum variable, need to remove this
        return BERING.Miner.pick(p, x, y, w, a, s, t, pr, ie, com, rf, ava, aIn, trss, smft, pole, fgb);
    }
    function getBlank() {
        return BERING.Miner.pitPony();
    }
    return{
        current: g_a,
        mi: makeItem,
        ms: makeStance,
        getCompat: inspire_050916,
        gc: getBlank,
        ia: activ8
    };
}());


