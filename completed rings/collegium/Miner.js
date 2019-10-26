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
        items.push(makeItem(1, 178, 182, 62.5, "R", 0, "feels they are a burden to the team", 0, "i", "", false, 0, 0));
        items.push(makeItem(2, 174, 173, 52, "R", 0, "feels overwhelmed", 0, "i", "", false, 0, 0));
        items.push(makeItem(3, 170, 164, 41, "R", 0, "often feels humiliated", 0, "i", "", false, 0, 0));
        items.push(makeItem(4, 166, 154.5, 38, "R", 0, "is stuck in a rut", 0, "i", "", false, 0, 0));

        items.push(makeItem(5, 220, 182, 89, "C", 2, "doesn't feel safe here", 0, "i", "", false, 0, 0));
        items.push(makeItem(6, 210, 174, 40, "C", 2, "merges into the background so as not to mess things up", 0, "i", "", false, 0, 0));
        items.push(makeItem(7, 200, 170, 78, "C", 2, "works hard to hide their anxiety", 0, "i", "", false, 0, 0));
        items.push(makeItem(8, 195, 162, 40, "C", 2, "keeps their thoughts and feelings to themselves", 0, "i", "", false, 0, 0));
        items.push(makeItem(9, 195, 157.5, 54, "C", 2, "finds it hard to ask for help", 0, "i", "", false, 0, 0));
        items.push(makeItem(10, 190, 153, 48, "C", 2, "avoids conflict", 0, "i", "", false, 0, 0));
        items.push(makeItem(11, 183, 148, 42, "C", 2, "worries they will be found out", 0, "i", "", false, 0, 0));
        items.push(makeItem(12, 175, 140, 30, "C", 2, "is a perfectionist and hard on themselves", 0, "i", "", false, 0, 0));

        items.push(makeItem(13, 240, 159, 50, "C", 4, "is like an emotional sponge", 0, "i", "", false, 0, 0));
        items.push(makeItem(14, 240, 154, 50, "C", 4, "colleagues take advantage of", 0, "i", "", false, 0, 0));
        items.push(makeItem(15, 240, 149, 80, "C", 4, "is ignored by colleagues", 0, "i", "", false, 0, 0));
        items.push(makeItem(16, 240, 144, 77, "C", 4, "looks for sympathy", 0, "i", "", false, 0, 0));
        items.push(makeItem(17, 240, 139, 85, "C", 4, "is not sure what they contribute", 0, "i", "", false, 0, 0));
        items.push(makeItem(18, 220, 134, 69, "C", 4, "worries colleagues don't like them", 0, "i", "", false, 0, 0));
        items.push(makeItem(19, 210, 129, 65, "C", 4, "worries that the team leader doesn't value them", 0, "i", "", false, 0, 0));
        items.push(makeItem(20, 200, 122, 30, "C", 4, "feels guilty if they don’t work in the holidays", 0, "i", "", false, 0, 0));

        items.push(makeItem(21, 193, 109, 75, "L", 6, "is not good at organising themselves", 0, "i", "", false, 0, 0));
        items.push(makeItem(22, 194, 105, 85, "L", 6, "finds it hard to prioritise", 0, "i", "", false, 0, 0));
        items.push(makeItem(23, 194.5, 101, 60, "L", 6, "promises to do things then doesn't", 0, "i", "", false, 0, 0));
        items.push(makeItem(24, 195, 97, 85, "L", 6, "is easily distracted", 0, "i", "", false, 0, 0));
        
        items.push(makeItem(25, 194, 91.5, 86, "L", 8, "is happy to work away in the background", 0, "i", "", false, 0, 0));
        items.push(makeItem(26, 193.5, 87.5, 85, "L", 8, "shares the credit for any success", 0, "i", "", false, 0, 0));
        items.push(makeItem(27, 192.5, 83.5, 86, "L", 8, "goes out of their way to help others", 0, "i", "", false, 0, 0));
        items.push(makeItem(28, 192, 79.5, 86, "L", 8, "would never challenge or question the team leader", 0, "i", "", false, 0, 0));
        items.push(makeItem(29, 190, 75.5, 86, "L", 8, "takes care not to hurt others", 0, "i", "", false, 0, 0));
        items.push(makeItem(30, 188, 71.5, 91, "L", 8, "looks for reassurance", 0, "i", "", false, 0, 0));
        items.push(makeItem(31, 186, 67.5, 93, "L", 8, "looks out for colleagues", 0, "i", "", false, 0, 0));
        items.push(makeItem(32, 183, 63.5, 95, "L", 8, "would get upset if they were pulled up by the team leader", 0, "i", "", false, 0, 0));
        items.push(makeItem(33, 179, 59.5, 100, "L", 8, "trusts colleagues", 0, "i", "", false, 0, 0));
        items.push(makeItem(34, 175, 55.5, 62, "L", 8, "values all of their colleagues", 0, "i", "", false, 0, 0));
        items.push(makeItem(35, 174, 51.5, 49, "L", 8, "is easy going", 0, "i", "", false, 0, 0));
        items.push(makeItem(36, 175, 47.5, 101, "L", 8, "compliments colleagues whenever they can", 0, "i", "", false, 0, 0));
        items.push(makeItem(37, 178, 43.5, 97, "L", 8, "cares about how the team leader is feeling", 0, "i", "", false, 0, 0));
        items.push(makeItem(38, 182, 39.5, 93, "L", 8, "enjoys a laugh with the team", 0, "i", "", false, 0, 0));
        items.push(makeItem(39, 184, 35.5, 89, "L", 8, "identifies strongly with the team", 0, "i", "", false, 0, 0));
        items.push(makeItem(40, 188, 31.5, 85, "L", 8, "is interested in what colleagues think", 8, "i", "", false, 0, 0));
        items.push(makeItem(41, 191, 27.5, 81, "L", 8, "works best with others", 0, "i", "", false, 0, 0));
        items.push(makeItem(42, 194, 23.5, 77, "L", 8, "shares responsibility when things go wrong", 0, "i", "", false, 0, 0));
        items.push(makeItem(43, 198, 19.5, 73, "L", 8, "tries to include colleagues when they're left out", 0, "i", "", false, 0, 0));
        items.push(makeItem(44, 200, 15.5, 69, "L", 8, "contributes to the sense of shared purpose", 0, "i", "", false, 0, 0));

        items.push(makeItem(45, 175, 42, 60, "R", 9, "is good at resolving differences of opinion", 0, "i", "", false, 0, 0));
        items.push(makeItem(46, 180, 34, 70, "R", 9, "shares their knowledge and skills", 0, "i", "", false, 0, 0));
        items.push(makeItem(47, 187, 26, 95, "R", 9, "is pleased for colleagues when they do well", 0, "i", "", false, 0, 0));
        items.push(makeItem(48, 193, 18, 109, "R", 9, "is respected by the team", 0, "i", "", false, 0, 0));
        
        items.push(makeItem(49, 103, 14, 60, "L", 9, "people go to for advice", 0, "e", "", false, 0, 0));
        items.push(makeItem(50, 108, 22, 50, "L", 9, "is good at taking people with them", 0, "e", "", false, 0, 0));
        items.push(makeItem(51, 115, 30, 85, "L", 9, "speaks up for the team", 0, "e", "", false, 0, 0));
        items.push(makeItem(52, 121, 38, 40, "L", 9, "is a problem solver", 0, "e", "", false, 0, 0));

        items.push(makeItem(53, 97, 15.5, 71, "R", 7, "thinks creatively", 0, "e", "", false, 0, 0));
        items.push(makeItem(54, 101, 19.5, 75, "R", 7, "handles pressure well", 0, "e", "", false, 0, 0));
        items.push(makeItem(55, 104, 23.5, 79, "R", 7, "gets people organised", 0, "e", "", false, 0, 0));
        items.push(makeItem(56, 107, 27.5, 79, "R", 7, "gets started on tasks right away", 0, "e", "", false, 0, 0));
        items.push(makeItem(57, 111, 31.5, 87, "R", 7, "shows initiative", 0, "e", "", false, 0, 0));
        items.push(makeItem(58, 114, 35.5, 91, "R", 7, "is good at making up their mind", 0, "e", "", false, 0, 0));
        items.push(makeItem(59, 117, 39.5, 95, "R", 7, "copes well with uncertainty", 0, "e", "", false, 0, 0));
        items.push(makeItem(60, 120, 43.5, 99, "R", 7, "is proud of their contribution", 0, "e", "", false, 0, 0));
        items.push(makeItem(61, 124, 47.5, 103, "R", 7, "takes critical feedback well", 0, "e", "", false, 0, 0));
        items.push(makeItem(62, 126, 51.5, 51, "R", 7, "likes putting foward their ideas", 0, "e", "", false, 0, 0));
        items.push(makeItem(63, 121, 55.5, 60, "R", 7, "enjoys explaining things to others", 0, "e", "", false, 0, 0));
        items.push(makeItem(64, 117, 59.5, 100, "R", 7, "tries to impress the team leader", 0, "e", "", false, 0, 0));
        items.push(makeItem(65, 114, 63.5, 96, "R", 7, "the team would miss if they left", 0, "e", "", false, 0, 0));
        items.push(makeItem(66, 111.5, 67.5, 93, "R", 7, "doesn't let people take advantage of them", 0, "e", "", false, 0, 0));
        items.push(makeItem(67, 109, 71.5, 91, "R", 7, "likes to forge ahead on their own", 0, "e", "", false, 0, 0));
        items.push(makeItem(68, 107, 75.5, 89, "R", 7, "takes risks and works beyond their comfort zone", 0, "e", "", false, 0, 0));
        items.push(makeItem(69, 105, 79.5, 88, "R", 7, "questions the way things are done", 0, "e", "", false, 0, 0));
        items.push(makeItem(70, 104, 83.5, 87, "R", 7, "makes sure they get the credit for their success", 0, "e", "", false, 0, 0));
        items.push(makeItem(71, 103.5, 87.5, 86, "R", 7, "calls attention to their strengths", 0, "e", "", false, 0, 0));
        items.push(makeItem(72, 103, 91.5, 86, "R", 7, "prioritises personal advancement over collegiality", 0, "e", "", false, 0, 0));

        items.push(makeItem(73, 103, 97, 86, "R", 5, "is a bit of a prima donna", 0, "e", "", false, 0, 0));
        items.push(makeItem(74, 103.5, 101, 50, "R", 5, "gets jealous when colleagues do well", 0, "e", "", false, 0, 0));
        items.push(makeItem(75, 104, 105, 86, "R", 5, "volunteers even before they've worked out if they can do it", 0, "e", "", false, 0, 0));
        items.push(makeItem(76, 105, 109, 67, "R", 5, "can be attention seeking", 0, "e", "", false, 0, 0));

        items.push(makeItem(77, 98, 120, 25, "C", 3, "sets unrealistically high goals", 0, "e", "", false, 0, 0));
        items.push(makeItem(78, 88, 127, 55, "C", 3, "hates being told what to do", 0, "e", "", false, 0, 0));
        items.push(makeItem(79, 78, 131, 70, "C", 3, "enjoys provoking the team leader", 0, "e", "", false, 0, 0));
        items.push(makeItem(80, 78, 135, 84, "C", 3, "makes hurtful comments when joking with collegues", 0, "e", "", false, 0, 0));
        items.push(makeItem(81, 78, 140, 77, "C", 3, "is quick to attribute blame to others", 0, "e", "", false, 0, 0));
        items.push(makeItem(82, 68, 145, 69, "C", 3, "likes to hold court", 0, "e", "", false, 0, 0));
        items.push(makeItem(83, 68, 150, 47, "C", 3, "ignores some colleagues", 0, "e", "", false, 0, 0));
        items.push(makeItem(84, 58, 155, 38, "C", 3, "no-one would want to get on the wrong side of", 0, "e", "", false, 0, 0));

        items.push(makeItem(85, 107, 140, 30, "L", 1, "gets impatient with some team members", 0, "e", "", false, 0, 0));
        items.push(makeItem(86, 115, 148, 30, "C", 1, "is quick to take offence", 0, "e", "", false, 0, 0));
        items.push(makeItem(87, 110, 152, 42, "C", 1, "looks out for themselves", 0, "e", "", false, 0, 0));
        items.push(makeItem(88, 105, 158, 58, "C", 1, "finds it hard to fit in", 0, "e", "", false, 0, 0));
        items.push(makeItem(89, 95, 162.5, 35, "C", 1, "doesn't feel they get the credit they deserve", 0, "e", "", false, 0, 0));
        items.push(makeItem(90, 90, 172, 75, "C", 1, "gets bored easily and shows it", 0, "e", "", false, 0, 0));
        items.push(makeItem(91, 86, 177, 80, "C", 1, "has a tendency to be cynical about the work", 0, "e", "", false, 0, 0));
        items.push(makeItem(92, 82, 182, 84, "C", 1, "finds it hard to say sorry", 0, "e", "", false, 0, 0));

        items.push(makeItem(93, 137, 143, 20, "L", 0, "gets spiteful with colleagues who do well", 0, "e", "", false, 0, 0));
        items.push(makeItem(94, 127, 159, 47, "L", 0, "finds it hard to trust people", 0, "e", "", false, 0, 0));
        items.push(makeItem(95, 121, 169, 57, "L", 0, "holds grudges with colleagues", 0, "e", "", false, 0, 0));
        items.push(makeItem(96, 116, 178, 67, "L", 0, "is disillusioned", 0, "e", "", false, 0, 0));

        var stance = [];
        stance.push(makeStance(0, 146, 193, 'own worst enemy', 60, "center"));
        stance.push(makeStance(1, 60, 190, 'sulking'));
        stance.push(makeStance(2, 220, 190, 'hiding', 30, "center"));
        stance.push(makeStance(3, 33, 168, 'taking over', 50));
        stance.push(makeStance(4, 250, 168, 'taking things to heart', 30, "center"));
        stance.push(makeStance(5, 33, 115, 'attention seeking', 50));
        stance.push(makeStance(6, 265, 115, 'people pleasing', 50, 'right'));
        stance.push(makeStance(7, 50, 55, 'performing', 50, 'center'));
        stance.push(makeStance(8, 240, 55, 'team playing', 50, 'center'));
        stance.push(makeStance(9, 140, 10, 'leading', 50));
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


