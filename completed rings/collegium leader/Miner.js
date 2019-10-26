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
        items.push(makeItem(1, 178, 182, 62.5, "R", 0, "brings people down", 0, "i", "", false, 0, 0));
        items.push(makeItem(2, 174, 173, 52, "R", 0, "over reacts to problems", 0, "i", "", false, 0, 0));
        items.push(makeItem(3, 170, 164, 41, "R", 0, "nags and pleads with colleagues", 0, "i", "", false, 0, 0));
        items.push(makeItem(4, 166, 154.5, 38, "R", 0, "takes things very personally", 0, "i", "", false, 0, 0));

        items.push(makeItem(5, 210, 182, 89, "C", 2, "brushes issues under the carpet", 0, "i", "", false, 0, 0));
        items.push(makeItem(6, 210, 176, 84, "C", 2, "lacks credibility", 0, "i", "", false, 0, 0));
        items.push(makeItem(7, 200, 170, 78, "C", 2, "is laissez-faire in their approach", 0, "i", "", false, 0, 0));
        items.push(makeItem(8, 197, 164, 59, "C", 2, "avoids giving challenging feedback", 0, "i", "", false, 0, 0));
        items.push(makeItem(9, 193, 158, 54, "C", 2, "doesn't expect much of colleagues", 0, "i", "", false, 0, 0));
        items.push(makeItem(10, 185, 152, 48, "C", 2, "lacks drive", 0, "i", "", false, 0, 0));
        items.push(makeItem(11, 180, 146, 42, "C", 2, "is confusing", 0, "i", "", false, 0, 0));
        items.push(makeItem(12, 175, 140, 34, "C", 2, "seems disorganised", 0, "i", "", false, 0, 0));

        items.push(makeItem(13, 235, 154, 50, "C", 4, "is uncomfortable being the leader", 0, "i", "", false, 0, 0));
        items.push(makeItem(14, 235, 149, 50, "C", 4, "feels responsible for everything", 0, "i", "", false, 0, 0));
        items.push(makeItem(15, 235, 144, 80, "C", 4, "tells colleagues they're doing well, even if they're not", 0, "i", "", false, 0, 0));
        items.push(makeItem(16, 235, 139, 77, "C", 4, "is easily swayed", 0, "i", "", false, 0, 0));
        items.push(makeItem(17, 235, 134, 85, "C", 4, "is apologetic", 0, "i", "", false, 0, 0));
        items.push(makeItem(18, 210, 130, 69, "C", 4, "needs pushed to make decisions", 0, "i", "", false, 0, 0));
        items.push(makeItem(19, 210, 126, 55, "C", 4, "lacks presence", 0, "i", "", false, 0, 0));
        items.push(makeItem(20, 195, 120, 15, "C", 4, "tries to help too much", 0, "i", "", false, 0, 0));

        items.push(makeItem(21, 193, 109, 75, "L", 6, "is over-familiar", 0, "i", "", false, 0, 0));
        items.push(makeItem(22, 194, 105, 85, "L", 6, "is inconsistent", 0, "i", "", false, 0, 0));
        items.push(makeItem(23, 194.5, 101, 30, "L", 6, "is easily distracted", 0, "i", "", false, 0, 0));
        items.push(makeItem(24, 195, 97, 85, "L", 6, "tries to please everybody", 0, "i", "", false, 0, 0));
        
        items.push(makeItem(25, 194, 91.5, 86, "L", 8, "allows colleagues to stay in their comfort zone", 0, "i", "", false, 0, 0));
        items.push(makeItem(26, 193.5, 87.5, 85, "L", 8, "picks up on colleagues' concerns", 0, "i", "", false, 0, 0));
        items.push(makeItem(27, 192.5, 83.5, 86, "L", 8, "talks about their life outside work", 0, "i", "", false, 0, 0));
        items.push(makeItem(28, 192, 79.5, 86, "L", 8, "shows that they understand individuals", 0, "i", "", false, 0, 0));
        items.push(makeItem(29, 190, 75.5, 86, "L", 8, "buffers the team from external pressures", 0, "i", "", false, 0, 0));
        items.push(makeItem(30, 188, 71.5, 91, "L", 8, "comes across as calmly reassuring", 0, "i", "", false, 0, 0));
        items.push(makeItem(31, 186, 67.5, 93, "L", 8, "is patient with everyone", 0, "i", "", false, 0, 0));
        items.push(makeItem(32, 183, 63.5, 95, "L", 8, "would say sorry if they had done something wrong", 0, "i", "", false, 0, 0));
        items.push(makeItem(33, 179, 59.5, 100, "L", 8, "compliments colleagues whenever they can", 0, "i", "", false, 0, 0));
        items.push(makeItem(34, 175, 55.5, 62, "L", 8, "knows when to ease off", 0, "i", "", false, 0, 0));
        items.push(makeItem(35, 174, 51.5, 49, "L", 8, "is able to laugh at themselves", 0, "i", "", false, 0, 0));
        items.push(makeItem(36, 175, 47.5, 101, "L", 8, "has a good sense of humour", 0, "i", "", false, 0, 0));
        items.push(makeItem(37, 178, 43.5, 97, "L", 8, "enables colleagues to work together", 0, "i", "", false, 0, 0));
        items.push(makeItem(38, 182, 39.5, 93, "L", 8, "makes colleagues feel valued", 0, "i", "", false, 0, 0));
        items.push(makeItem(39, 184, 35.5, 89, "L", 8, "shares credit for success", 0, "i", "", false, 0, 0));
        items.push(makeItem(40, 188, 31.5, 85, "L", 8, "encourages colleagues to say what they think", 8, "i", "", false, 0, 0));
        items.push(makeItem(41, 191, 27.5, 81, "L", 8, "is forgiving", 0, "i", "", false, 0, 0));
        items.push(makeItem(42, 194, 23.5, 77, "L", 8, "involves colleagues in making decisions", 0, "i", "", false, 0, 0));
        items.push(makeItem(43, 198, 19.5, 73, "L", 8, "admires colleagues", 0, "i", "", false, 0, 0));
        items.push(makeItem(44, 200, 15.5, 69, "L", 8, "inspires loyalty", 0, "i", "", false, 0, 0));

        items.push(makeItem(45, 154, 45, 50, "R", 9, "is humble", 0, "i", "", false, 0, 0));
        items.push(makeItem(46, 184, 28.5, 70, "R", 9, "is open to being influenced by feedback from colleagues", 0, "i", "", false, 0, 0));
        items.push(makeItem(47, 189, 23, 95, "R", 9, "unifies the team through consensus", 0, "i", "", false, 0, 0));
        items.push(makeItem(48, 192, 19, 109, "R", 9, "treats everyone fairly and with respect", 0, "i", "", false, 0, 0));
        
        items.push(makeItem(49, 103, 15, 60, "L", 9, "forward thinking and sets clear direction", 0, "e", "", false, 0, 0));
        items.push(makeItem(50, 106, 19, 40, "L", 9, "gets priorities right", 0, "e", "", false, 0, 0));
        items.push(makeItem(51, 109, 23, 85, "L", 9, "delegates well", 0, "e", "", false, 0, 0));
        items.push(makeItem(52, 132.5, 34, 40, "L", 9, "maximises colleagues' strengths and interests", 0, "e", "", false, 0, 0));

        items.push(makeItem(53, 97, 15.5, 71, "R", 7, "enthuses colleagues with their passion and drive", 0, "e", "", false, 0, 0));
        items.push(makeItem(54, 101, 19.5, 75, "R", 7, "advocates well for the team", 0, "e", "", false, 0, 0));
        items.push(makeItem(55, 104, 23.5, 79, "R", 7, "encourages innovative practice", 0, "e", "", false, 0, 0));
        items.push(makeItem(56, 107, 27.5, 79, "R", 7, "expects staff to set their own priorities", 0, "e", "", false, 0, 0));
        items.push(makeItem(57, 111, 31.5, 87, "R", 7, "does what they promise", 0, "e", "", false, 0, 0));
        items.push(makeItem(58, 114, 35.5, 91, "R", 7, "is decisive", 0, "e", "", false, 0, 0));
        items.push(makeItem(59, 117, 39.5, 95, "R", 7, "treats mistakes as a good way to learn", 0, "e", "", false, 0, 0));
        items.push(makeItem(60, 120, 43.5, 99, "R", 7, "sets challenging goals", 0, "e", "", false, 0, 0));
        items.push(makeItem(61, 124, 47.5, 103, "R", 7, "creates a sense of excitement", 0, "e", "", false, 0, 0));
        items.push(makeItem(62, 126, 51.5, 51, "R", 7, "is well prepared and organised", 0, "e", "", false, 0, 0));
        items.push(makeItem(63, 121, 55.5, 60, "R", 7, "clarifies the point and relevance of the work", 0, "e", "", false, 0, 0));
        items.push(makeItem(64, 117, 59.5, 100, "R", 7, "is focused", 0, "e", "", false, 0, 0));
        items.push(makeItem(65, 114, 63.5, 96, "R", 7, "enjoys being in charge", 0, "e", "", false, 0, 0));
        items.push(makeItem(66, 111.5, 67.5, 93, "R", 7, "ensures colleagues know what they should be doing", 0, "e", "", false, 0, 0));
        items.push(makeItem(67, 109, 71.5, 91, "R", 7, "pulls people up when necessary", 0, "e", "", false, 0, 0));
        items.push(makeItem(68, 107, 75.5, 89, "R", 7, "tells colleagues honestly how they're doing", 0, "e", "", false, 0, 0));
        items.push(makeItem(69, 105, 79.5, 88, "R", 7, "is not there to be liked", 0, "e", "", false, 0, 0));
        items.push(makeItem(70, 104, 83.5, 87, "R", 7, "lets the team know who is in charge", 0, "e", "", false, 0, 0));
        items.push(makeItem(71, 103.5, 87.5, 86, "R", 7, "sticks rigidly to guidelines", 0, "e", "", false, 0, 0));
        items.push(makeItem(72, 103, 91.5, 86, "R", 7, "sets standards that are hard to live up to", 0, "e", "", false, 0, 0));

        items.push(makeItem(73, 103, 97, 86, "R", 5, "likes to hold court", 0, "e", "", false, 0, 0));
        items.push(makeItem(74, 103.5, 101, 50, "R", 5, "is always trying to impress", 0, "e", "", false, 0, 0));
        items.push(makeItem(75, 104, 105, 86, "R", 5, "looks for praise from colleagues", 0, "e", "", false, 0, 0));
        items.push(makeItem(76, 105, 109, 67, "R", 5, "gets jealous of colleagues", 0, "e", "", false, 0, 0));

        items.push(makeItem(77, 100, 120, 25, "C", 3, "is over-controlling", 0, "e", "", false, 0, 0));
        items.push(makeItem(78, 92, 125, 55, "C", 3, "makes hurtful sarcastic comments", 0, "e", "", false, 0, 0));
        items.push(makeItem(79, 85, 130, 70, "C", 3, "blames colleagues when things go wrong", 0, "e", "", false, 0, 0));
        items.push(makeItem(80, 75, 135, 84, "C", 3, "is impossible to please", 0, "e", "", false, 0, 0));
        items.push(makeItem(81, 75, 140, 77, "C", 3, "is divisive", 0, "e", "", false, 0, 0));
        items.push(makeItem(82, 65, 145, 69, "C", 3, "dumps tasks on colleagues", 0, "e", "", false, 0, 0));
        items.push(makeItem(83, 65, 150, 47, "C", 3, "picks on people", 0, "e", "", false, 0, 0));
        items.push(makeItem(84, 65, 155, 38, "C", 3, "makes threats", 0, "e", "", false, 0, 0));

        items.push(makeItem(85, 122, 140, 32, "C", 1, "tends to patronise", 0, "e", "", false, 0, 0));
        items.push(makeItem(86, 117, 144, 30, "C", 1, "never talks about their personal life", 0, "e", "", false, 0, 0));
        items.push(makeItem(87, 110, 152, 42, "C", 1, "knows little about colleagues", 0, "e", "", false, 0, 0));
        items.push(makeItem(88, 110, 158, 58, "C", 1, "doesn't listen", 0, "e", "", false, 0, 0));
        items.push(makeItem(89, 110, 164, 69, "C", 1, "is distant", 0, "e", "", false, 0, 0));
        items.push(makeItem(90, 100, 170, 75, "C", 1, "has favourites", 0, "e", "", false, 0, 0));
        items.push(makeItem(91, 90, 176, 80, "C", 1, "thinks success is down to them", 0, "e", "", false, 0, 0));
        items.push(makeItem(92, 80, 182, 84, "C", 1, "free with criticism but withholds praise", 0, "e", "", false, 0, 0));

        items.push(makeItem(93, 137, 143, 20, "L", 0, "takes frustration out and shouts at colleagues", 0, "e", "", false, 0, 0));
        items.push(makeItem(94, 127, 159, 47, "L", 0, "is unpredictable", 0, "e", "", false, 0, 0));
        items.push(makeItem(95, 121, 169, 57, "L", 0, "holds onto grudges with colleagues", 0, "e", "", false, 0, 0));
        items.push(makeItem(96, 116, 178, 67, "L", 0, "disliked by colleagues", 0, "e", "", false, 0, 0));




        var stance = [];
        stance.push(makeStance(0, 146, 193, 'humiliating', 60, "center"));
        stance.push(makeStance(1, 60, 190, 'resenting'));
        stance.push(makeStance(2, 220, 190, 'fearing', 30, "center"));
        stance.push(makeStance(3, 33, 163, 'bruising', 50));
        stance.push(makeStance(4, 243, 163, 'smothering', 50, "center"));
        stance.push(makeStance(5, 33, 110, 'posing', 50));
        stance.push(makeStance(6, 265, 110, 'pleasing', 50, 'right'));
        stance.push(makeStance(7, 50, 55, 'demanding', 50, 'center'));
        stance.push(makeStance(8, 240, 55, 'caring', 50, 'center'));
        stance.push(makeStance(9, 130, 10, 'warmly demanding', 50));
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


