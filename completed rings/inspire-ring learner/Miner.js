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
BERING.Miner = (function () {
    function aspire() {
        var items = [];
        items.push(makeItem(1, 176, 179, 56, "R", 0, "always showing how disappointed they are with learners", 40, "i", "", !1, 0, 30));
        items.push(makeItem(2, 170, 165, 44, "R", 0, "nags learners", 50, "i", "", !1, 0, 24));
        items.push(makeItem(3, 164, 151.5, 30, "R", 0, "behaves as if they are bored", 37, "i", "", !1, 0, 32));

        items.push(makeItem(4, 200, 171, 45, "C", 2, "makes things seem complicated", 45, "i", "", !1, 0, 27));
        items.push(makeItem(5, 198, 166, 59, "C", 2, "lessons move slowly", 42, "i", "", !1, 0, 26));
        items.push(makeItem(6, 192, 158, 40, "C", 2, "work set is on the easy side for learners", 53, "i", "", !1, 0, 28));
        items.push(makeItem(7, 175, 150, 33, "L", 2, "highlights learners' weaknesses and little else", 43, "i", "", !1, 0, 22));
        items.push(makeItem(8, 180, 146, 40, "C", 2, "can be disorganised", 48, "i", "", !1, 0, 21));
        items.push(makeItem(9, 175, 140, 38, "C", 2, "lessons can be boring", 54, "i", "", !1, 0, 25));

        items.push(makeItem(10, 230, 148, 61.5, "C", 4, "nervous around learners", 51, "i", "", !1, 0, 33));
        items.push(makeItem(11, 230, 144, 72, "C", 4, "easy to ignore", 49, "i", "", !1, 0, 35));
        items.push(makeItem(12, 230, 140, 79, "C", 4, "uncomfortable with their authority", 47, "i", "", !1, 0, 34));
        items.push(makeItem(13, 230, 136, 85, "C", 4, "does too much for learners", 39, "i", "", !1, 0, 31));
        items.push(makeItem(14, 215, 132, 73, "C", 4, "tells learners they're doing well, even if they're not", 44, "i", "", !1, 0, 20));
        items.push(makeItem(15, 200, 128, 63, "C", 4, "shy", 38, "i", "", !1, 0, 23));

        items.push(makeItem(16, 193, 109, 80, "L", 6, "makes a lot of promises but doesn't keep them", 41, "i", "", !1, 0, 29));
        items.push(makeItem(17, 194, 103, 23, "L", 6, "easily distracted", 46, "i", "", !1, 0, 19));
        items.push(makeItem(18, 194, 97, 34, "L", 6, "tries too hard to be liked", 52, "i", "", !1, 0, 36));

        items.push(makeItem(19, 194, 92, 41, "L", 8, "responds to learners' concerns", 72, "i", "", !1, 0, 14));
        items.push(makeItem(20, 194, 88, 31, "L", 8, "reassuring and patient", 70, "i", "", !1, 0, 15));
        items.push(makeItem(21, 194, 84, 42, "L", 8, "shows interest in learners' lives", 62, "i", "", !1, 0, 8));
        items.push(makeItem(22, 193, 80, 40, "L", 8, "speaks sensitively to learners", 67, "i", "", !1, 0, 5));
        items.push(makeItem(23, 191.5, 76, 63, "L", 8, "shares some things about their life with learners", 61, "i", "", !1, 0, 7));
        items.push(makeItem(24, 189.5, 72, 41, "L", 8, "helps learners to work together", 64, "i", "", !1, 0, 3));
        items.push(makeItem(25, 187, 68, 36, "L", 8, "makes learners feel heard", 68, "i", "", !1, 0, 2));
        items.push(makeItem(26, 184, 64, 38, "L", 8, "allows learners centre stage", 57, "i", "", !1, 0, 10));
        items.push(makeItem(27, 180, 60, 38, "L", 8, "enjoys a laugh with the class", 59, "i", "", !1, 0, 16));
        items.push(makeItem(28, 176, 56, 35, "L", 8, "says sorry if in the wrong", 66, "i", "", !1, 0, 1));
        items.push(makeItem(29, 176, 52, 41, "L", 8, "learners enjoy telling things to", 69, "i", "", !1, 0, 17));
        items.push(makeItem(30, 176, 48, 13, "L", 8, "forgiving", 71, "i", "", !1, 0, 4));

        items.push(makeItem(31, 201, 8, 60, "R", 9, "treats learners fairly", 60, "i", "", !1, 0, 18));
        items.push(makeItem(32, 195, 15, 55, "R", 9, "gives learners as much choice as possible", 58, "i", "", !1, 0, 9));
        items.push(makeItem(33, 191.5, 20.5, 48, "R", 9, "funny", 56, "i", "", !1, 0, 6));
        items.push(makeItem(34, 187, 25.5, 60, "R", 9, "asks learner for feedback", 55, "i", "", !1, 0, 13));
        items.push(makeItem(35, 153, 31, 34, "L", 9, "asks learners to suggest ways to do things", 63, "i", "", !1, 0, 11));
        items.push(makeItem(36, 174, 42, 60, "R", 9, "shows they enjoy working with learners", 65, "i", "", !1, 0, 12));

        items.push(makeItem(37, 129, 46, 50, "L", 9, "enthusiastic and loves learning", 3, "e", "", !1, 0, 32));
        items.push(makeItem(38, 121, 38, 50, "L", 9, "makes learning exciting and fun", 15, "e", "", !1, 0, 23));
        items.push(makeItem(39, 115, 28, 44, "L", 9, "praises individuals for effort and achievement", 13, "e", "", !1, 0, 31));
        items.push(makeItem(40, 108, 22, 70, "L", 9, "does what they promise", 1, "e", "", !1, 0, 30));
        items.push(makeItem(41, 102, 15, 55, "L", 9, "builds on learners' strengths", 16, "e", "", !1, 0, 29));
        items.push(makeItem(42, 97, 8, 60, "L", 9, "strict enough", 5, "e", "", !1, 0, 26));

        items.push(makeItem(43, 122, 48, 48, "R", 7, "encourages independence", 7, "e", "", !1, 0, 22));
        items.push(makeItem(44, 122, 52, 23, "R", 7, "highly organised", 14, "e", "", !1, 0, 20));
        items.push(makeItem(45, 122, 56, 14, "R", 7, "confident", 4, "e", "", !1, 0, 27));
        items.push(makeItem(46, 117, 60, 28, "R", 7, "focused on the work", 17, "e", "", !1, 0, 19));
        items.push(makeItem(47, 114, 64, 59, "R", 7, "has high expectations and stretches learners", 12, "e", "", !1, 0, 34));
        items.push(makeItem(48, 111, 68, 53, "R", 7, "tells learners honestly how they're doing", 8, "e", "", !1, 0, 21));
        items.push(makeItem(49, 108, 72, 48, "R", 7, "lessons move at a fast enough pace", 11, "e", "", !1, 0, 35));
        items.push(makeItem(50, 106, 76, 43, "R", 7, "confronts learners if not satisfied", 2, "e", "", !1, 0, 24));
        items.push(makeItem(51, 105, 80, 69, "R", 7, "makes sure learners know what they should be doing", 10, "e", "", !1, 0, 33));
        items.push(makeItem(52, 104, 84, 53, "R", 7, "uncompromising and not here to be liked", 18, "e", "", !1, 0, 36));
        items.push(makeItem(53, 103, 88, 38, "R", 7, "comfortable being in charge", 6, "e", "", !1, 0, 28));
        items.push(makeItem(54, 103, 92, 24, "R", 7, "bit of a performer", 9, "e", "", !1, 0, 25));

        items.push(makeItem(55, 103, 97, 46, "R", 5, "tries too much to impress learners", 34, "e", "", !1, 0, 13));
        items.push(makeItem(56, 104, 103, 33.5, "R", 5, "shows off", 33, "e", "", !1, 0, 6));
        items.push(makeItem(57, 105, 109, 34, "R", 5, "needs to be centre stage", 26, "e", "", !1, 0, 10));

        items.push(makeItem(58, 90, 128, 62, "C", 3, "has favourites", 32, "e", "", !1, 0, 9));
        items.push(makeItem(59, 82, 132, 72, "C", 3, "openly tells some learners they're better than others", 27, "e", "", !1, 0, 16));
        items.push(makeItem(60, 75, 136, 84, "C", 3, "makes most of the decisions", 31, "e", "", !1, 0, 18));
        items.push(makeItem(61, 75, 140, 72, "C", 3, "blames learners", 23, "e", "", !1, 0, 7));
        items.push(makeItem(62, 75, 144, 65, "C", 3, "provokes and criticises learners", 21, "e", "", !1, 0, 8));

        items.push(makeItem(63, 124, 138, 25, "C", 1, "finds learners annoying", 35, "e", "", !1, 0, 11));
        items.push(makeItem(64, 116, 145, 40, "C", 1, "acts as if they are very important", 24, "e", "", !1, 0, 3));
        items.push(makeItem(65, 108, 152, 44, "C", 1, "stingy with compliments", 36, "e", "", !1, 0, 12));
        items.push(makeItem(66, 102, 158, 44, "C", 1, "never talks about their life", 28, "e", "", !1, 0, 1));
        items.push(makeItem(67, 99, 164, 50, "C", 1, "shows little interest in learners' lives outside school", 22, "e", "", !1, 0, 5));
        items.push(makeItem(68, 90, 172.5, 58, "C", 1, "inattentive to learners", 25, "e", "", !1, 0, 2));

        items.push(makeItem(69, 136, 145, 23, "L", 0, "moods change a lot", 29, "e", "", !1, 0, 17));
        items.push(makeItem(70, 127.5, 158, 39, "L", 0, "shouts when annoyed with learners", 20, "e", "", !1, 0, 15));
        items.push(makeItem(71, 121, 171, 30, "L", 0, "takes a long time to forgive learners", 30, "e", "", !1, 0, 4));
        items.push(makeItem(72, 113, 184, 37, "L", 0, "makes throwaway remarks that can be hurtful", 19, "e", "", !1, 0, 14));

        var stance = [];
        stance.push(makeStance(0, 146, 193, "humiliating", 60, "center"));
        stance.push(makeStance(1, 60, 190, "resenting"));
        stance.push(makeStance(2, 220, 190, "fearing", 30, "center"));
        stance.push(makeStance(3, 33, 163, "bruising", 50));
        stance.push(makeStance(4, 253, 163, "smothering", 50, "center"));
        stance.push(makeStance(5, 33, 110, "posing", 50));
        stance.push(makeStance(6, 265, 115, "pleasing", 50, "right"));
        stance.push(makeStance(7, 50, 55, "demanding", 50, "center"));
        stance.push(makeStance(8, 240, 55, "caring", 50, "center"));
        stance.push(makeStance(9, 130, 11, "warmly demanding", 50));
        items.stance = stance;
        //PRODUCTION
        items.sort(function (a, b) {
            return 0.5 - Math.random();
        });

        for (var i = 0; i < items.length; i += 2) {
            for (var j = i; j < items.length; j++) {
                if (items[i].pos === items[j].pair) {
                    items.swap(i + 1, j);
                }
            }
        }
        items.numBut = items.length / BERING.onPage;
        return items;
    }

    function makeStance(i, x, y, t, w, a) {
        var tmp = {};
        tmp.x = x;
        tmp.y = y;
        tmp.i = i;
        tmp.t = t;
        tmp.width = w;
        tmp.align = a;
        tmp.totalStance = 0;
        tmp.climateStance = 0;
        return tmp;
    }
    function makeItem(p, x, y, w, a, s, t, pr, ie, com, rf, ava, num) {
        if (t === 'I get spiteful and angry with others who do better than me') {
            p = 94;
        }
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
        //item.num = num;
        item.assemblyCount = 0;
        return item;
    }
    return{
        pitPony: aspire,
        pick: makeItem,
        shovel: makeStance
    };
}());


