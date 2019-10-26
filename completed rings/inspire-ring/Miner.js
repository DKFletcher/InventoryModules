/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//teacher inspire ring

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
        items.push(makeItem(1, 175, 176, 56, "R", 0, "always showing how disappointed they are with learners", 39, "e", "", false, 0));
        items.push(makeItem(2, 170, 164, 50, "R", 0, "nags learners", 50, "e", "", false, 0));
        items.push(makeItem(3, 162, 150, 30, "R", 0, "behaves as if they are bored", 37, "e", "", false, 0));


        items.push(makeItem(4, 210, 176, 40, "C", 2, "makes things seem complicated", 45, "e", "", false, 0));
        items.push(makeItem(5, 207, 171, 70, "C", 2, "lessons move slowly", 42, "e", "", false, 0));
        items.push(makeItem(6, 185, 163, 35, "L", 2, "work set is on the easy side for learners", 53, "e", "", false, 0));
        items.push(makeItem(7, 182, 155, 35, "L", 2, "highlights learners' weaknesses and little else", 43, "e", "", false, 0));
        items.push(makeItem(8, 186, 150, 45, "C", 2, "can be disorganised", 48, "e", "", false, 0));
        items.push(makeItem(9, 180, 145, 35, "C", 2, "lessons can be boring", 54, "e", "", false, 0));


        items.push(makeItem(10, 220, 145, 50, "C", 4, "nervous around learners", 51, "e", "", false, 0));
        items.push(makeItem(11, 220, 141, 50, "C", 4, "learners tend to ignore", 49, "e", "", false, 0));
        items.push(makeItem(12, 220, 137, 50, "C", 4, "uncomfortable with their authority", 47, "e", "", false, 0));
        items.push(makeItem(13, 210, 133, 50, "C", 4, "does too much for learners", 41, "e", "", false, 0));
        items.push(makeItem(14, 210, 129, 65, "C", 4, "tells learners they're doing well, even if they're not", 44, "e", "", false, 0));
        items.push(makeItem(15, 205, 125, 50, "C", 4, "shy", 38, "e", "", false, 0));


        items.push(makeItem(16, 193, 105, 60, "L", 6, "makes a lot of promises but doesn't keep them", 40, "e", "", false, 0));
        items.push(makeItem(17, 194, 101, 50, "L", 6, "easily distracted", 46, "e", "", false, 0));
        items.push(makeItem(18, 194, 97, 60, "L", 6, "tries too hard to be liked", 52, "e", "", false, 0));


        items.push(makeItem(19, 194, 92, 45, "L", 8, "responds to learners' concerns", 72, "e", "", false, 0));
        items.push(makeItem(20, 194, 88, 44, "L", 8, "reassuring and patient", 70, "e", "", false, 0));
        items.push(makeItem(21, 193, 84, 66, "L", 8, "shows interest in learners' lives", 61, "e", "", false, 0));
        items.push(makeItem(22, 192, 80, 38, "L", 8, "speaks sensitively to learners", 68, "e", "", false, 0));
        items.push(makeItem(23, 190.5, 76, 60, "L", 8, "shares some things about their life with learners", 66, "e", "", false, 0));
        items.push(makeItem(24, 188.5, 72, 40, "L", 8, "helps learners to work together", 64, "e", "", false, 0));
        items.push(makeItem(25, 186, 68, 50, "L", 8, "makes learners feel heard", 62, "e", "", false, 0));
        items.push(makeItem(26, 183, 64, 40, "L", 8, "allows learners centre stage", 57, "e", "", false, 0));
        items.push(makeItem(27, 179, 60, 38, "L", 8, "enjoys a laugh with the class", 59, "e", "", false, 0));
        items.push(makeItem(28, 175, 56, 40, "L", 8, "says sorry if in the wrong", 67, "e", "", false, 0));
        items.push(makeItem(29, 170, 52, 40, "L", 8, "learners enjoy telling things to", 69, "e", "", false, 0));
        items.push(makeItem(30, 174, 48, 58, "L", 8, "forgiving", 71, "e", "", false, 0));


        items.push(makeItem(31, 201, 8, 85, "R", 9, "treats learners fairly", 63, "e", "", false, 0));
        items.push(makeItem(32, 191, 18, 50, "R", 9, "gives learners as much choice as possible", 65, "e", "", false, 0));
        items.push(makeItem(33, 198, 13, 85, "R", 9, "funny", 56, "e", "", false, 0));
        items.push(makeItem(34, 187, 26, 69, "R", 9, "asks learners for feedback", 60, "e", "", false, 0));
        items.push(makeItem(35, 180.5, 34, 70, "R", 9, "asks learners to suggest other ways to do things", 55, "e", "", false, 0));
        items.push(makeItem(36, 174, 42, 50, "R", 9, "shows they enjoy working with learners", 58, "e", "", false, 0));



        items.push(makeItem(37, 127, 46, 50, "L", 9, "enthusiastic and loves learning", 3, "i", "", false, 0));
        items.push(makeItem(38, 121, 38, 65, "L", 9, "makes learning exciting and fun", 15, "i", "", false, 0));
        items.push(makeItem(39, 115, 30, 77, "L", 9, "praises individuals for effort and achievement", 1, "i", "", false, 0));
        items.push(makeItem(40, 108, 22, 93, "L", 9, "does what they promise", 16, "i", "", false, 0));
        items.push(makeItem(41, 104, 14, 25, "L", 9, "builds on learners' strengths", 13, "i", "", false, 0));
        items.push(makeItem(42, 97, 8, 93, "L", 9, "strict enough", 5, "i", "", false, 0));


        items.push(makeItem(43, 124, 48, 74, "R", 7, "encourages independence", 7, "i", "", false, 0));
        items.push(makeItem(44, 126, 52, 32, "R", 7, "highly organised", 14, "i", "", false, 0));
        items.push(makeItem(45, 121, 56, 28, "R", 7, "confident", 4, "i", "", false, 0));
        items.push(makeItem(46, 116, 60, 55, "R", 7, "focused on the work", 17, "i", "", false, 0));
        items.push(makeItem(47, 113, 64, 70, "R", 7, "has high expectations and stretches learners", 12, "i", "", false, 0));
        items.push(makeItem(48, 110, 68, 50, "R", 7, "tells learners honestly how they're doing", 8, "i", "", false, 0));
        items.push(makeItem(49, 108, 72, 50, "R", 7, "lessons move at a fast enough pace", 11, "i", "", false, 0));
        items.push(makeItem(50, 107, 76, 50, "R", 7, "confronts learners if not satisfied", 2, "i", "", false, 0));
        items.push(makeItem(51, 105, 80, 75, "R", 7, "makes sure learners know what they should be doing", 10, "i", "", false, 0));
        items.push(makeItem(52, 104, 84, 60, "R", 7, "uncompromising and not here to be liked", 18, "i", "", false, 0));
        items.push(makeItem(53, 104, 88, 37, "R", 7, "comfortable being in charge", 6, "i", "", false, 0));
        items.push(makeItem(54, 103, 92, 38, "R", 7, "bit of a performer", 9, "i", "", false, 0));


        items.push(makeItem(55, 103, 97, 73, "R", 5, "tries too much to impress learners", 35, "i", "", false, 0));
        items.push(makeItem(56, 103, 101, 47, "R", 5, "shows off", 33, "i", "", false, 0));
        items.push(makeItem(57, 104, 105, 40, "R", 5, "needs to be centre stage", 26, "i", "", false, 0));


        items.push(makeItem(58, 95, 125, 50, "C", 3, "has favourites", 36, "i", "", false, 0));
        items.push(makeItem(59, 90, 129, 50, "C", 3, "openly tells some learners they're better than others", 27, "i", "", false, 0));
        items.push(makeItem(60, 80, 136, 50, "C", 3, "makes most of the decisions", 34, "i", "", false, 0));
        items.push(makeItem(61, 80, 140, 60, "C", 3, "blames learners", 21, "i", "", false, 0));
        items.push(makeItem(62, 70, 144, 50, "C", 3, "provokes and criticises learners", 25, "i", "", false, 0));


        items.push(makeItem(63, 117, 145, 39, "C", 1, "finds learners annoying", 31, "i", "", false, 0));
        items.push(makeItem(64, 108, 153, 38, "C", 1, "acts as if they are very important", 24, "i", "", false, 0));
        items.push(makeItem(65, 105, 160, 38, "C", 1, "stingy with compliments", 32, "i", "", false, 0));
        items.push(makeItem(66, 100, 164.5, 38, "C", 1, "never talks about their life", 23, "i", "", false, 0));
        items.push(makeItem(67, 93, 169, 50, "C", 1, "shows little interest in learners' lives outside school", 28, "i", "", false, 0));
        items.push(makeItem(68, 90, 176, 50, "C", 1, "inattentive to learners", 22, "i", "", false, 0));


        items.push(makeItem(69, 137, 142, 20, "L", 0, "moods change a lot", 29, "i", "", false, 0));
        items.push(makeItem(70, 128.5, 158, 40, "L", 0, "shouts when annoyed with learners", 20, "i", "", false, 0));
        items.push(makeItem(71, 121, 170, 52, "L", 0, "takes a long time to forgive learners", 30, "i", "", false, 0));
        items.push(makeItem(72, 114, 183, 60, "L", 0, "makes throwaway remarks that can be hurtful", 19, "i", "", false, 0));



        var stance = [];
        stance.push(makeStance(0, 146, 193, 'humiliating', 60, "center"));
        stance.push(makeStance(1, 60, 190, 'resenting'));
        stance.push(makeStance(2, 220, 190, 'fearing', 30, "center"));
        stance.push(makeStance(3, 33, 163, 'bruising', 50));
        stance.push(makeStance(4, 250, 163, 'smothering', 50, "center"));
        stance.push(makeStance(5, 33, 110, 'posing', 50));
        stance.push(makeStance(6, 265, 110, 'pleasing', 50, 'right'));
        stance.push(makeStance(7, 50, 55, 'demanding', 50, 'center'));
        stance.push(makeStance(8, 250, 55, 'caring', 50, 'center'));
        stance.push(makeStance(9, 130, 12, 'warmly demanding', 50));
        items.stance = stance;

        items.numBut = items.length / BERING.onPage;
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
        item.num = num;
        item.assemblyCount = 0;
        return item;
    }
    return{
        pitPony: aspire,
        pick:makeItem,
        shovel: makeStance
    };
}());


