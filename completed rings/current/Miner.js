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
        items.push(makeItem(1, 175, 175, 60, "R", 0, "shows how upset they are when disappointed with children", 53, "i", "", false, 0, 12));
        items.push(makeItem(2, 169, 162, 45, "R", 0, "nags children", 48, "i", "", false, 0, 16));
        items.push(makeItem(3, 164, 152, 34, "R", 0, "possessive, lives through children", 47, "i", "", false, 0, 18));
        
        items.push(makeItem(4, 206, 172, 40, "C", 2, "too accepting", 50, "i", "", false, 0, 14));
        items.push(makeItem(5, 198, 165, 40, "C", 2, "tells children they're doing well, even if not", 51, "i", "", false, 0, 8));
        items.push(makeItem(6, 192, 158, 44, "C", 2, "leaves children to work out what they should be doing", 55, "i", "", false, 0, 9));
        items.push(makeItem(7, 186, 151, 48, "C", 2, "makes a fuss about children's weaknesses", 60, "i", "", false, 0, 19));
        items.push(makeItem(8, 182, 147, 44.5, "C", 2, "discourages competitiveness", 45, "i", "", false, 0, 15));
        items.push(makeItem(9, 176, 139, 25, "C", 2, "not sure how to occupy children", 59, "i", "", false, 0, 10));
        
        items.push(makeItem(10, 240, 153, 65, "C", 4, "does everything for children", 46, "i", "", false, 0, 0));
        items.push(makeItem(11, 240, 149, 70, "C", 4, "nervous about children's activities", 56, "i", "", false, 0, 6));
        items.push(makeItem(12, 240, 145, 75, "C", 4, "easy to ignore", 58, "i", "", false, 0, 7));
        items.push(makeItem(13, 240, 141, 80, "C", 4, "always apologising", 54, "i", "", false, 0, 5));
        items.push(makeItem(14, 240, 137, 82, "C", 4, "easily persuadable", 49, "i", "", false, 0, 13));
        items.push(makeItem(15, 230, 133, 72, "C", 4, "clears every hurdle for children", 42, "i", "", false, 0, 1));
        items.push(makeItem(16, 225, 129, 60, "C", 4, "spoils children", 57, "i", "", false, 0, 17));
        items.push(makeItem(17, 205, 125, 60, "C", 4, "involved in everything children do", 43, "i", "", false, 0, 11));
        
        items.push(makeItem(18, 192, 109, 35, "L", 6, "can't make up their mind", 52, "i", "", false, 0, 4));
        items.push(makeItem(19, 193, 103, 60, "L", 6, "makes a lot of promises but doesn't keep them", 44, "i", "", false, 0, 2));
        items.push(makeItem(20, 194, 97, 39, "L", 6, "wants to be children's friend", 41, "i", "", false, 0, 3));
        
        items.push(makeItem(21, 193.5, 91.5, 57, "L", 8, "tends to be unconditional/ non-judgemental", 65, "i", "", false, 0, 39));
        items.push(makeItem(22, 193, 87.5, 47, "L", 8, "careful not to hurt children's feelings", 75, "i", "", false, 0, 35));
        items.push(makeItem(23, 192.5, 83.5, 29, "L", 8, "calm and reassuring", 78, "i", "", false, 0, 36));
        items.push(makeItem(24, 191.5, 79.5, 54, "L", 8, "shares things about their life with children", 66, "i", "", false, 0, 29));
        items.push(makeItem(25, 190.5, 75.5, 34, "L", 8, "takes parenting seriously", 61, "i", "", false, 0, 20));
        items.push(makeItem(26, 188.5, 71.5, 47, "L", 8, "asks questions rather than criticise", 73, "i", "", false, 0, 24));
        items.push(makeItem(27, 186, 67.5, 56, "L", 8, "speaks patiently and sensitively to children", 76, "i", "", false, 0, 34));
        items.push(makeItem(28, 183, 63.5, 63, "L", 8, "helps children to fit in and cooperate with others", 70, "i", "", false, 0, 37));
        items.push(makeItem(29, 179, 59.5, 64, "L", 8, "enjoys having fun and laughter with their children", 69, "i", "", false, 0, 33));
        items.push(makeItem(30, 175, 55.5, 42, "L", 8, "shows interest in children's lives", 62, "i", "", false, 0, 21));
        items.push(makeItem(31, 174, 51.5, 36, "L", 8, "makes children feel heard", 64, "i", "", false, 0, 22));
        items.push(makeItem(32, 177.5, 47.5, 37, "L", 8, "allows children's centre stage", 63, "i", "", false, 0, 31));
        items.push(makeItem(33, 181.5, 43.5, 13, "L", 8, "forgiving", 77, "i", "", false, 0, 28));
        
        items.push(makeItem(34, 207, 14, 60, "R", 9, "accepts and validates how children are feeling", 80, "i", "", false, 0, 38));
        items.push(makeItem(35, 204, 17, 126, "R", 9, "invites children's views about their parenting", 68, "i", "", false, 0, 30));
        items.push(makeItem(36, 198.5, 22, 60, "R", 9, "supports children to develop their own interests", 74, "i", "", false, 0, 26));
        items.push(makeItem(37, 193.5, 27.5, 47.5, "R", 9, "treats children even handedly", 67, "i", "", false, 0, 27));
        items.push(makeItem(38, 190.5, 30.5, 90, "R", 9, "gives reasons for expectations and comes and goes on boundaries", 72, "i", "", false, 0, 25));
        items.push(makeItem(39, 184, 36.5, 70, "R", 9, "involves children in family decisions whenever possible", 71, "i", "", false, 0, 23));
        items.push(makeItem(40, 178, 42.6, 64, "R", 9, "giving of themselves", 79, "i", "", false, 0, 32));
        
        items.push(makeItem(41, 123, 46, 58, "L", 9, "comfortable being the adult", 20, "e", "", false, 0, 3));
        items.push(makeItem(42, 117, 40, 71, "L", 9, "spots and builds on children's talents", 15, "e", "", false, 0, 1));
        items.push(makeItem(43, 111, 33.5, 83, "L", 9, "exciting & fun", 17, "e", "", false, 0, 11));
        items.push(makeItem(44, 104, 27.5, 47.5, "L", 9, "does what they promise", 19, "e", "", false, 0, 2));
        items.push(makeItem(45, 101.5, 24.5, 70, "L", 9, "praises children for their effort and achievement", 8, "e", "", false, 0, 15));
        items.push(makeItem(46, 96, 19.5, 60, "L", 9, "encourages initiative and independence", 10, "e", "", false, 0, 0));
        items.push(makeItem(47, 93, 17, 33, "L", 9, "lets children take the lead", 3, "e", "", false, 0, 18));
        
        items.push(makeItem(48, 116, 43.5, 50, "R", 7, "rewards children for their successes", 2, "e", "", false, 0, 16));
        items.push(makeItem(49, 120, 47, 80, "R", 7, "makes sure children know what they should be doing", 14, "e", "", false, 0, 13));
        items.push(makeItem(50, 125, 51.5, 30, "R", 7, "can say no to children", 4, "e", "", false, 0, 14));
        items.push(makeItem(51, 122, 55.5, 37, "R", 7, "makes demands of children", 5, "e", "", false, 0, 8));
        items.push(makeItem(52, 117, 59.5, 13, "R", 7, "decisive", 18, "e", "", false, 0, 4));
        items.push(makeItem(53, 113, 63.5, 58, "R", 7, "has high expectations and stretches children", 1, "e", "", false, 0, 12));
        items.push(makeItem(54, 110, 67.5, 66, "R", 7, "tells children honestly how they think they're doing", 13, "e", "", false, 0, 5));
        items.push(makeItem(55, 108, 71.5, 49, "R", 7, "sticks to the rules and consequences", 6, "e", "", false, 0, 9));
        items.push(makeItem(56, 106, 75.5, 70, "R", 7, "encourages children to take up adventurous activities", 11, "e", "", false, 0, 6));
        items.push(makeItem(57, 105, 79.5, 44, "R", 7, "pushes children to be competitive", 16, "e", "", false, 0, 17));
        items.push(makeItem(58, 104, 83.5, 43, "R", 7, "confronts children if not satisfied", 12, "e", "", false, 0, 7));
        items.push(makeItem(59, 103.5, 87.5, 61, "R", 7, "gives children opportunities to be self-sufficient", 9, "e", "", false, 0, 10));
        items.push(makeItem(60, 103, 91.5, 29, "R", 7, "allows children to fail", 7, "e", "", false, 0, 19));
        
        items.push(makeItem(61, 103, 97, 34, "R", 5, "always trying to be funny", 25, "e", "", false, 0, 20));
        items.push(makeItem(62, 104, 103, 22, "R", 5, "focused on self", 30, "e", "", false, 0, 21));
        items.push(makeItem(63, 105, 109, 34, "R", 5, "needs to be centre stage", 32, "e", "", false, 0, 31));
        
        items.push(makeItem(64, 100, 125, 40, "C", 3, "makes all the decisions", 31, "e", "", false, 0, 22));
        items.push(makeItem(65, 87, 129, 60, "C", 3, "gives a 'because I say so' explanation for rules", 21, "e", "", false, 0, 39));
        items.push(makeItem(66, 65, 133, 66, "C", 3, "provokes children", 24, "e", "", false, 0, 29));
        items.push(makeItem(67, 65, 137, 76, "C", 3, "expects children to follow interests set by them", 37, "e", "", false, 0, 27));
        items.push(makeItem(68, 65, 141, 87, "C", 3, "makes throwaway remarks that can be hurtful", 35, "e", "", false, 0, 30));
        items.push(makeItem(69, 65, 145, 81, "C", 3, "shouts when annoyed with children", 29, "e", "", false, 0, 33));
        items.push(makeItem(70, 65, 149, 50, "C", 3, "licenses children to challenge others, including teachers", 28, "e", "", false, 0, 37));
        
        items.push(makeItem(71, 117, 143, 35, "C", 1, "distant & uninvolved", 39, "e", "", false, 0, 23));
        items.push(makeItem(72, 100, 147, 30, "L", 1, "tends to be critical/judgemental", 38, "e", "", false, 0, 25));
        items.push(makeItem(73, 107, 155, 40, "C", 1, "never talks with children about their life", 26, "e", "", false, 0, 24));
        items.push(makeItem(74, 105, 162, 49, "C", 1, "has favourites", 36, "e", "", false, 0, 26));
        items.push(makeItem(75, 100, 166, 67, "C", 1, "stingy with compliments", 22, "e", "", false, 0, 35));
        items.push(makeItem(76, 95, 170, 71, "C", 1, "finds children annoying", 27, "e", "", false, 0, 34));
        
        items.push(makeItem(77, 137, 143.5, 23, "L", 0, "takes a long time to forgive children", 33, "e", "", false, 0, 28));
        items.push(makeItem(78, 128, 158, 41, "L", 0, "moods change a lot", 23, "e", "", false, 0, 36));
        items.push(makeItem(79, 123, 167, 50, "L", 0, "reminds children of everything they've done for them", 40, "e", "", false, 0, 32));
        items.push(makeItem(80, 114, 182, 64, "L", 0, "tries to tell their children what they should be feeling", 34, "e", "", false, 0, 38));


        var stance = [];

        stance.push(makeStance(0, 135, 190, 'humiliating'));
        stance.push(makeStance(1, 75, 182, 'resenting'));
        stance.push(makeStance(2, 200, 182, 'fearing'));
        stance.push(makeStance(3, 40, 162, 'bruising'));
        stance.push(makeStance(4, 230, 162, 'cushioning'));
        stance.push(makeStance(5, 30, 110, 'posing'));
        stance.push(makeStance(6, 245, 110, 'pleasing'));
        stance.push(makeStance(7, 40, 55, 'demanding'));
        stance.push(makeStance(8, 240, 55, 'caring'));
        stance.push(makeStance(9, 135, 10, 'warmly demanding'));
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


