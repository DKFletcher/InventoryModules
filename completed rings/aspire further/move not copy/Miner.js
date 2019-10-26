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
        items.push(makeItem(1, 180, 187, 45, "R", 0, "I sometimes feel ashamed of myself", 63, "e", "", false, 0, 12));//111.5
        items.push(makeItem(2, 175, 176, 56, "R", 0, "I don't look after myself", 53, "e", "", false, 0, 20));//151.5
        items.push(makeItem(3, 170, 166, 50, "R", 0, "I sometimes feel humiliated", 52, "e", "", false, 0, 3));//122.5
        items.push(makeItem(4, 164, 153, 40, "R", 0, "I am very hard on myself", 57, "e", "", false, 0, 21));//130.5

        items.push(makeItem(5, 220, 183, 30, "C", 2, "I'm easily embarrassed", 51, "e", "", false, 0, 8));
        items.push(makeItem(6, 218, 178, 84, "C", 2, "If I have a problem, I won’t speak to anyone in college", 66, "e", "", false, 0, 17));
        items.push(makeItem(7, 210, 173, 30, "C", 2, "I give up easily", 61, "e", "", false, 0, 6));
        items.push(makeItem(8, 207, 168, 70, "C", 2, "I often know the answer but don`t put my hand up", 65, "e", "", false, 0, 1));
        items.push(makeItem(9, 205, 163, 35, "C", 2, "I find it hard to ask for help", 62, "e", "", false, 0, 22));
        items.push(makeItem(10, 190, 158, 45, "C", 2, "I'm not ambitious", 49, "e", "", false, 0, 15));
        items.push(makeItem(11, 186, 150, 45, "C", 2, "I won't try things if I might look stupid", 90, "e", "", false, 0, 16));
        items.push(makeItem(12, 182, 142, 35, "C", 2, "I don't pay attention to how I look", 91, "e", "", false, 0, 2));
        items.push(makeItem(13, 260, 153, 50, "C", 4, "I take things to heart and get upset easily", 72, "e", "", false, 0, 14));
        items.push(makeItem(14, 260, 149, 50, "C", 4, "People ignore me", 55, "e", "", false, 0, 10));
        items.push(makeItem(15, 255, 145, 50, "C", 4, "I'm easily led", 59, "e", "", false, 0, 7));
        items.push(makeItem(16, 245, 141, 50, "C", 4, "If I disappeared no-one would notice", 73, "e", "", false, 0, 4));
        items.push(makeItem(17, 240, 137, 50, "C", 4, "I don't know what I'm good at", 56, "e", "", false, 0, 11));
        items.push(makeItem(18, 225, 133, 50, "C", 4, "My worries often distract me", 67, "e", "", false, 0, 18));
        items.push(makeItem(19, 210, 129, 50, "C", 4, "I feel bullied", 64, "e", "", false, 0, 9));
        items.push(makeItem(20, 205, 125, 50, "C", 4, "I'm always apologising for myself", 70, "e", "", false, 0, 19));
        items.push(makeItem(21, 192, 109, 37, "L", 6, "I copy what other people do", 58, "e", "", false, 0, 23));
        items.push(makeItem(22, 193, 105, 43, "L", 6, "I find it hard to make up my mind", 54, "e", "", false, 0, 13));
        items.push(makeItem(23, 194, 101, 50, "L", 6, "I often promise to do things then don't", 60, "e", "", false, 0, 24));
        items.push(makeItem(24, 194, 97, 60, "L", 6, "I'm not too good at getting myself organised", 50, "e", "", false, 0, 5));

        items.push(makeItem(25, 194, 92, 45, "L", 8, "I don't mind when I'm not the best", 71, "e", "", false, 0, 30));
        items.push(makeItem(26, 194, 88, 44, "L", 8, "I don't mind being told what to do", 85, "e", "", false, 0, 43));
        items.push(makeItem(27, 193, 84, 66, "L", 8, "I would say nothing if the lecturer made a mistake", 69, "e", "", false, 0, 29));
        items.push(makeItem(28, 192, 80, 38, "L", 8, "If I'm bored I just keep quiet", 81, "e", "", false, 0, 36));
        items.push(makeItem(29, 190.5, 76, 30, "L", 8, "I'm keen to please", 68, "e", "", false, 0, 40));
        items.push(makeItem(30, 188.5, 72, 21, "L", 8, "I'm easy going", 82, "e", "", false, 0, 38));
        items.push(makeItem(31, 186, 68, 50, "L", 8, "If I get a row from the lecturer, I take it", 93, "e", "", false, 0, 27));
        items.push(makeItem(32, 183, 64, 28, "L", 8, "I look out for people", 89, "e", "", false, 0, 46));
        items.push(makeItem(33, 179, 60, 38, "L", 8, "I take care not to hurt others", 88, "e", "", false, 0, 47));
        items.push(makeItem(34, 175, 56, 22, "L", 8, "I don't get huffy", 78, "e", "", false, 0, 28));
        items.push(makeItem(35, 170, 52, 23, "L", 8, "I can take a joke", 80, "e", "", false, 0, 45));
        items.push(makeItem(36, 174, 48, 58, "L", 8, "I am modest and downplay my strong points", 75, "e", "", false, 0, 26));
        items.push(makeItem(37, 177, 44, 60, "L", 8, "I have got to know the people in my course well", 77, "e", "", false, 0, 37));
        items.push(makeItem(38, 180, 40, 30, "L", 8, "I'm patient with others", 79, "e", "", false, 0, 35));
        items.push(makeItem(39, 184, 36, 46, "L", 8, "I get on with the people in my course", 95, "e", "", false, 0, 44));
        items.push(makeItem(40, 187, 32, 53, "L", 8, "I compliment other peoples' good points", 76, "e", "", false, 0, 25));
        items.push(makeItem(41, 191, 28, 55, "L", 8, "I'm good at helping to sort out arguments", 87, "e", "", false, 0, 32));
        items.push(makeItem(42, 194, 24, 39, "L", 8, "I find it easy to talk to people", 84, "e", "", false, 0, 33));
        items.push(makeItem(43, 198, 17, 40, "L", 8, "I try to include people when they are left out", 86, "e", "", false, 0, 34));
        items.push(makeItem(44, 201, 13, 70, "L", 8, "I care about how the lecturers are feeling", 92, "e", "", false, 0, 31));
        items.push(makeItem(45, 198, 12, 85, "R", 9, "I'm forgiving", 96, "e", "", false, 0, 41));
        items.push(makeItem(46, 193, 18, 69, "R", 9, "People see me as mature and dependable", 74, "e", "", false, 0, 38));
        items.push(makeItem(47, 185, 28, 58, "R", 9, "I get on well with my lecturers", 83, "e", "", false, 0, 48));
        items.push(makeItem(48, 173, 40, 42, "R", 9, "I'm happy for others when they do well", 94, "e", "", false, 0, 42));







        items.push(makeItem(49, 127, 46, 50, "L", 9, "I stay focused on my work", 10, "i", "", false, 0, 15));
        items.push(makeItem(50, 118, 34, 65, "L", 9, "I get people organised and make things happen", 24, "i", "", false, 0, 5));
        items.push(makeItem(51, 110, 24, 77, "L", 9, "I take critical feedback well", 5, "i", "", false, 0, 8));
        items.push(makeItem(52, 100, 12, 93, "L", 9, "People look up to me", 3, "i", "", false, 0, 3));
        items.push(makeItem(53, 99, 16, 25, "R", 7, "I look after myself", 2, "i", "", false, 0, 20));
        items.push(makeItem(54, 103, 20, 42, "R", 7, "I'm good at making my mind up", 22, "i", "", false, 0, 13));
        items.push(makeItem(55, 106, 24, 51, "R", 7, "I know who to go to if I have a problem", 14, "i", "", false, 0, 10));
        items.push(makeItem(56, 109, 28, 32, "R", 7, "I ask for help if I need it", 17, "i", "", false, 0, 11));
        items.push(makeItem(57, 112, 32, 26, "R", 7, "I am kind to myself", 4, "i", "", false, 0, 21));
        items.push(makeItem(58, 115, 36, 53, "R", 7, "I'm happy to be the first to try new things", 21, "i", "", false, 0, 23));
        items.push(makeItem(59, 118, 40, 45, "R", 7, "I keep trying even if it's really hard", 15, "i", "", false, 0, 7));
        items.push(makeItem(60, 121, 44, 38, "R", 7, "I usually do what I say I'll do", 23, "i", "", false, 0, 24));
        items.push(makeItem(61, 124, 48, 74, "R", 7, "I can say no if people try to get me involved in bad things", 7, "i", "", false, 0, 6));
        items.push(makeItem(62, 126, 52, 32, "R", 7, "I know what I'm good at", 9, "i", "", false, 0, 22));
        items.push(makeItem(63, 121, 56, 28, "R", 7, "I am proud of myself", 1, "i", "", false, 0, 12));
        items.push(makeItem(64, 116, 60, 55, "R", 7, "I try new things even if I might look stupid", 19, "i", "", false, 0, 9));
        items.push(makeItem(65, 113, 64, 53, "R", 7, "If I disappeared my course would miss me", 8, "i", "", false, 0, 1));
        items.push(makeItem(66, 110, 68, 50, "R", 7, "I get people's attention when I need to", 6, "i", "", false, 0, 17));
        items.push(makeItem(67, 108, 72, 28, "R", 7, "I'm keen to succeed", 18, "i", "", false, 0, 18));
        items.push(makeItem(68, 107, 76, 27, "R", 7, "I'm keen to impress", 29, "i", "", false, 0, 40));
        items.push(makeItem(69, 105, 80, 65, "R", 7, "I would correct the lecturer if they made a mistake", 27, "i", "", false, 0, 29));
        items.push(makeItem(70, 104, 84, 37, "R", 7, "I pay attention to how I look", 20, "i", "", false, 0, 19));
        items.push(makeItem(71, 104, 88, 37, "R", 7, "I always want to be the best", 25, "i", "", false, 0, 30));
        items.push(makeItem(72, 103, 92, 38, "R", 7, "I enjoy being in the spotlight", 13, "i", "", false, 0, 14));
        items.push(makeItem(73, 103, 97, 73, "R", 5, "I put my hand up even before I've worked out the answer", 16, "i", "", false, 0, 4));
        items.push(makeItem(74, 103, 101, 47, "R", 5, "People see me as attention seeking", 46, "i", "", false, 0, 38));
        items.push(makeItem(75, 104, 105, 30, "R", 5, "I'm a bit of a show-off", 36, "i", "", false, 0, 26));
        items.push(makeItem(76, 105, 109, 60, "R", 5, "I get jealous when others are center stage", 40, "i", "", false, 0, 25));
        items.push(makeItem(77, 90, 125, 50, "C", 3, "I hate being told what to do", 37, "i", "", false, 0, 37));
        items.push(makeItem(78, 80, 129, 50, "C", 3, "I enjoy playing jokes on others", 34, "i", "", false, 0, 28));
        items.push(makeItem(79, 70, 133, 50, "C", 3, "I stir up arguments between people", 38, "i", "", false, 0, 35));
        items.push(makeItem(80, 60, 137, 60, "C", 3, "I make hurtful comments when I'm joking with people", 35, "i", "", false, 0, 45));
        items.push(makeItem(81, 50, 144, 50, "C", 3, "I get others into trouble", 28, "i", "", false, 0, 36));
        items.push(makeItem(82, 45, 148, 50, "C", 3, "No-one would want to get on the wrong side of me", 30, "i", "", false, 0, 39));
        items.push(makeItem(83, 40, 155, 50, "C", 3, "I think I can get away with anything", 47, "i", "", false, 0, 48));
        items.push(makeItem(84, 40, 159, 50, "C", 3, "I enjoy annoying lecturers", 42, "i", "", false, 0, 33));
        items.push(makeItem(85, 112, 145, 39, "C", 1, "I don't know anything about the people in my course", 26, "i", "", false, 0, 43));
        items.push(makeItem(86, 105, 153, 38, "C", 1, "I get huffy if I don't get my own way", 43, "i", "", false, 0, 34));
        items.push(makeItem(87, 100, 160, 38, "C", 1, "I get impatient with others", 41, "i", "", false, 0, 32));
        items.push(makeItem(88, 95, 164.5, 38, "C", 1, "I take myself too seriously", 33, "i", "", false, 0, 47));
        items.push(makeItem(89, 90, 169, 50, "C", 1, "I get bored a lot at college and show it", 32, "i", "", false, 0, 46));
        items.push(makeItem(90, 85, 173.5, 50, "C", 1, "People think I can be rude", 11, "i", "", false, 0, 16));
        items.push(makeItem(91, 75, 178, 50, "C", 1, "I don't get on well with my lecturers", 12, "i", "", false, 0, 2));
        items.push(makeItem(92, 75, 182.5, 50, "C", 1, "I find it hard to fit in", 44, "i", "", false, 0, 31));
        items.push(makeItem(93, 137, 142, 25, "L", 0, "If I get a row from the lecturer I get angry", 31, "i", "", false, 0, 27));//136
        items.push(makeItem(94, 130, 158, 40, "L", 0, "I get spiteful and angry with others who do better than me", 48, "i", "", false, 0, 42));//128
        items.push(makeItem(95, 121, 171, 52, "L", 0, "I find it hard to trust people", 39, "i", "", false, 0, 44));//120
        items.push(makeItem(96, 116, 181, 60, "L", 0, "I refuse to make up with people who have annoyed me", 45, "i", "", false, 0, 41));//116
        var stance = [];

        stance.push(makeStance(0, 146, 193, 'own worst enemy', 60, "center"));
        stance.push(makeStance(1, 40, 190, 'sulking'));
        stance.push(makeStance(2, 240, 190, 'hiding', 30, "center"));
        stance.push(makeStance(3, 13, 163, 'taking over', 50));
        stance.push(makeStance(4, 263, 163, 'taking things to heart', 50, "center"));
        stance.push(makeStance(5, 13, 110, 'attention seeking', 50));
        stance.push(makeStance(6, 285, 110, 'people pleasing', 50, 'right'));
        stance.push(makeStance(7, 50, 55, 'performing', 50, 'center'));
        stance.push(makeStance(8, 240, 55, 'team-playing', 50, 'center'));
        stance.push(makeStance(9, 140, 12, 'leading', 50));
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


