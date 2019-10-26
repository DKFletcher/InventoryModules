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

        items.push(makeItem(39, 125, 150, 50, "L", 0, "shouts at you for nothing", 13, "e", "", false, 0, 5));
        items.push(makeItem(40, 110, 167, 40, "L", 0, "is a bit scary", 11, "e", "", false, 0, 0));



        var stance = [];
        stance.push(makeStance(0, 120, 190, 'humiliating'));
        stance.push(makeStance(1, 30, 170, 'bruising'));
        stance.push(makeStance(2, 200, 170, 'smothering'));
        stance.push(makeStance(3, 30, 30, 'squeezing'));
        stance.push(makeStance(4, 210, 30, 'hugging'));
        stance.push(makeStance(5, 125, 15, 'inspiring'));
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
        pick: makeItem,
        shovel: makeStance
    };
}());


