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
        items.push(makeItem(1, 150, 150, 80, "L", 1, "I am rubbish at everything", 25, "e", "", false, 0, 4));
        items.push(makeItem(2, 150, 144, 80, "L", 1, "People bully me", 23, "e", "", false, 0, 2));
        items.push(makeItem(3, 170, 139, 80, "L", 1, "I don't feel safe in school", 27, "e", "", false, 0, 8));
        items.push(makeItem(4, 177, 134, 80, "L", 1, "I never ask for help", 28, "e", "", false, 0, 7));
        items.push(makeItem(5, 182, 129, 90, "L", 1, "I never want to be chosen for things", 29, "e", "", false, 0, 6));
        items.push(makeItem(6, 186, 124, 80, "L", 1, "I get upset easily", 26, "e", "", false, 0, 5));
        items.push(makeItem(7, 193, 114, 80, "L", 1, "Even if I know the answer, I don’t put my hand up", 30, "e", "", false, 0, 9));
        items.push(makeItem(8, 194, 109, 80, "L", 1, "I worry my teacher doesn't like me", 24, "e", "", false, 0, 3));
        items.push(makeItem(9, 195, 104, 80, "L", 1, "I worry people don't like me", 22, "e", "", false, 0, 1));
        items.push(makeItem(10, 196, 99, 80, "L", 1, "I am shy about showing my work", 21, "e", "", false, 0, 0));       
        
        items.push(makeItem(11, 196, 91, 80, "L", 3, "I like to please my teacher", 34, "e", "", false, 0, 12));
        items.push(makeItem(12, 195, 86, 80, "L", 3, "I try to be kind to others", 40, "e", "", false, 0, 19));
        items.push(makeItem(13, 194, 81, 80, "L", 3, "I don't get huffy", 39, "e", "", false, 0, 18));
        items.push(makeItem(14, 192, 76, 80, "L", 3, "I don't get into trouble", 38, "e", "", false, 0, 17)); 
        items.push(makeItem(15, 190, 71, 80, "L", 3, "I think before I do things", 36, "e", "", false, 0, 15));
        items.push(makeItem(16, 187, 66, 80, "L", 3, "I like to work with others", 32, "e", "", false, 0, 14));
        items.push(makeItem(17, 183, 61, 80, "L", 3, "I try not to show off", 35, "e", "", false, 0, 13));
        items.push(makeItem(18, 178, 56, 80, "L", 3, "I try not to annoy people", 33, "e", "", false, 0, 11));
        items.push(makeItem(19, 168, 51, 80, "L", 3, "I get on with most people", 37, "e", "", false, 0, 16));
        items.push(makeItem(20, 150, 46, 80, "L", 3, "I like to help others", 31, "e", "", false, 0, 10));
        
        items.push(makeItem(21, 147, 46, 80, "R", 2, "I enjoy showing my work", 10, "i", "", false, 0, 0));
        items.push(makeItem(22, 128, 51, 90, "R", 2, "People like me", 9, "i", "", false, 0, 1));
        items.push(makeItem(23, 120, 56, 80, "R", 2, "I stand up for myself", 2, "i", "", false, 0, 2));
        items.push(makeItem(24, 115, 61, 80, "R", 2, "I'm glad my teacher likes me", 8, "i", "", false, 0, 3));
        items.push(makeItem(25, 111, 66, 80, "R", 2, "I feel good about my learning", 1, "i", "", false, 0, 4));
        items.push(makeItem(26, 108, 71, 80, "R", 2, "It takes a lot to upset me", 6, "i", "", false, 0, 5));
        items.push(makeItem(27, 106, 76, 80, "R", 2, "I feel safe in school", 3, "i", "", false, 0, 8));
        items.push(makeItem(28, 104, 81, 80, "R", 2, "I ask for help if I need it", 4, "i", "", false, 0, 7));
        items.push(makeItem(29, 104, 86, 100, "R", 2, "I put my hand up to be chosen for things", 5, "i", "", false, 0, 6));
        items.push(makeItem(30, 102, 91, 80, "R", 2, "I like to be first to answer questions", 7, "i", "", false, 0, 9));   
        
        items.push(makeItem(31, 102, 99, 80, "R", 0, "I mess about in class", 20, "i", "", false, 0, 10));
        items.push(makeItem(32, 102, 104, 85, "R", 0, "I wish I could always work on my own", 16, "i", "", false, 0, 14));
        items.push(makeItem(33, 104, 109, 80, "R", 0, "I like to annoy people", 18, "i", "", false, 0, 11));
        items.push(makeItem(34, 106, 114, 80, "R", 0, "I annoy my teacher", 11, "i", "", false, 0, 12));
        items.push(makeItem(35, 108, 119, 80, "R", 0, "I'm a bit of a show-off", 17, "i", "", false, 0, 13));
        items.push(makeItem(36, 111, 124, 80, "R", 0, "I don’t think before I do things", 15, "i", "", false, 0, 15));
        items.push(makeItem(37, 115, 129, 80, "R", 0, "I fall out with people a lot", 19, "i", "", false, 0, 16));
        items.push(makeItem(38, 120, 134, 80, "R", 0, "I always get the blame", 14, "i", "", false, 0, 17));
        items.push(makeItem(39, 128, 139, 80, "R", 0, "I get huffy a lot", 13, "i", "", false, 0, 18));
        items.push(makeItem(40, 147, 144, 80, "R", 0, "I  often say hurtful things", 12, "i", "", false, 0, 19));
        var stance = [];
        stance.push(makeStance(0, 30, 175, 'bossy'));
        stance.push(makeStance(1, 217, 175, 'nervous'));
        stance.push(makeStance(2, 30, 30, 'chuffed'));
        stance.push(makeStance(3, 225, 30, 'kind'));
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
        pick:makeItem,
        shovel: makeStance
    };
}());


