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
        items.push(makeItem(1, 129, 170.4, 46, "R", 0, "Humiliated", 39, "e", "", false, 0,0, "Humiliated"));
        items.push(makeItem(2, 129, 170.4, 46, "R", 0, "Hopeless", 39, "e", "", false, 0,0, "Hopeless"));
        items.push(makeItem(3, 123.5, 159.5, 46.5, "R", 0, "Ignored", 50, "e", "", false, 0,0, "Ignored"));
        items.push(makeItem(4, 140.5, 145.2, 22, "R", 0, "Isolated", 37, "e", "", false, 0,0, "Isolated"));
        items.push(makeItem(5, 169, 155, 58, "C", 0, "Ashamed", 42, "e", "", false, 0,0, "Ashamed"));
        items.push(makeItem(6, 167, 151, 54, "C", 0, "Worried", 53, "e", "", false, 0,0, "Worried"));        
        items.push(makeItem(7, 165.5, 147, 49.5, "C", 0, "Sad", 43, "e", "", false, 0,0, "Sad"));        
        items.push(makeItem(8, 167, 140, 40, "C", 0, "Guilty", 48, "e", "", false, 0,0, "Guilty"));
        items.push(makeItem(9, 160, 136, 38, "C", 0, "Shy", 54, "e", "", false, 0,0, "Shy"));
        items.push(makeItem(10, 213, 142.5, 64, "C", 0, "Self-doubt", 51, "e", "", false, 0,0, "Questioning self"));
        
        items.push(makeItem(11, 207, 138.5, 70, "C", 1, "Playful", 49, "e", "", false, 0,0, "Playful"));
        items.push(makeItem(12, 200, 134.5, 77, "C", 1, "Pleased for others", 47, "e", "", false, 0,0, "Pleased for others"));       
        items.push(makeItem(13, 194, 130.5, 83, "C", 1, "Concerned for others", 41, "e", "", false, 0,0, "Concerned for others"));
        items.push(makeItem(14, 188, 126.5, 74, "C", 1, "Trusting", 44, "e", "", false, 0,0, "Trusting"));        
        items.push(makeItem(15, 182, 122.5, 62, "C", 1, "Forgiving", 38, "e", "", false, 0,0, "Forgiving"));
        items.push(makeItem(16, 192, 102.5, 40, "L", 1, "Kindly", 40, "e", "", false, 0,0, "Kindly"));
        items.push(makeItem(17, 193.5, 98, 24, "L", 1, "Responsible", 46, "e", "", false, 0,0, "Responsible"));
        items.push(makeItem(18, 194, 94, 35, "L", 1, "Gratitude", 52, "e", "", false, 0,0, "Thankful"));
        items.push(makeItem(19, 193.6, 84, 31, "L", 1, "Belonging", 70, "e", "", false, 0,0, "Belonging"));
        items.push(makeItem(20, 193, 80, 42, "L", 1, "Content", 61, "e", "", false, 0,0, "Content"));
        
        items.push(makeItem(21, 190.5, 72, 63, "L", 2, "          Joyful", 66, "e", "", false, 0,0, "Joyful"));        
        items.push(makeItem(22, 192, 76, 40, "L", 2, "         Valued", 68, "e", "", false, 0,0, "Valued"));
        items.push(makeItem(23, 188.5, 68, 41, "L", 2, "      Admiring", 64, "e", "", false, 0,0, "Admiring"));        
        items.push(makeItem(24, 186, 64, 36, "L", 2, "       Hopeful", 62, "e", "", false, 0,0, "Hopeful"));
        items.push(makeItem(25, 183, 60, 38, "L", 2, "        Curious", 57, "e", "", false, 0,0, "Curious"));
        items.push(makeItem(26, 179, 56, 38, "L", 2, "     Confident", 59, "e", "", false, 0,0, "Confident"));
        items.push(makeItem(27, 175, 52, 35, "L", 2, "          Proud", 67, "e", "", false, 0,0, "Proud"));        
        items.push(makeItem(28, 174, 48, 41, "L", 2, " Enthusiastic", 69, "e", "", false, 0,0, "Enthusiastic"));
        items.push(makeItem(29, 177.5, 44, 13, "L", 2, "  Determined", 71, "e", "", false, 0,0, "Determined"));
        items.push(makeItem(30, 148, 10, 60, "R", 2, "             Bold", 63, "e", "", false, 0,0, "Bold"));

        items.push(makeItem(31, 148, 15, 55, "R", 3, "   Frustrated", 65, "e", "", false, 0,0, "Frustrated"));
        items.push(makeItem(32, 148, 21, 48, "R", 3, "          Bored", 56, "e", "", false, 0,0, "Bored"));
        items.push(makeItem(33, 148, 26, 44, "R", 3, "       Envious", 60, "e", "", false, 0,0, "Envious"));
        items.push(makeItem(34, 148, 32, 36, "R", 3, "          Angry", 55, "e", "", false, 0,0, "Angry"));       
        items.push(makeItem(35, 121, 40, 25, "L", 3, "       Gloating", 3, "i", "", false, 0,0, "Gloating at others' misfortune"));
        items.push(makeItem(36, 115, 32, 30, "L", 3, "      Superior", 15, "i", "", false, 0,0, "Superior"));
        items.push(makeItem(37, 108, 26, 44, "L", 3, "       Entitled", 1, "i", "", false, 0,0, "Special"));
        items.push(makeItem(38, 108, 26, 44, "L", 3, "     Betrayed", 1, "i", "", false, 0,0, "Cheated"));
        items.push(makeItem(39, 101, 21, 48, "L", 3, "     Resentful", 16, "i", "", false, 0,0, "Grudging"));
        items.push(makeItem(40, 95, 15, 55, "L", 3, "       Spiteful", 13, "i", "", false, 0,0, "Spiteful"));

        var stance = [];
        stance.push(makeStance(0, 145, 190, 'Protecting Self'));
        stance.push(makeStance(1, 118, 16, 'Connecting with Others'));
        stance.push(makeStance(2, 30, 16, 'Stretching Self'));
        stance.push(makeStance(3, 30, 190, 'Conflicting with Others'));
        //stance.push(makeStance(4, 164, 110, 'kind'));
        //stance.push(makeStance(5, 117, 98, 'happy'));
        
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
    function makeItem(p, x, y, w, a, s, t, pr, ie, com, rf, ava, iAn, trss) {
        console.log('trss: '+trss)
        var align;
        if (a === "R") {
            align = 'right';
        } else if (a === "C") {
            align = 'center';
        } else {
            align = undefined;
        }
        var item = {};
        var text=t.trim();
        item.x = x;
        item.y = y;
        item.width = w;
        item.align = align;
        item.stance = s;
        item.pos = p;
        item.typeSet=t;
        item.item = text;
        item.pair = pr;
        item.ie = ie;
        item.comment = com;//"Lorem ipsum dolor sit amet, appetere nominati reprehendunt at eam. Eam ex populo eirmod impetus, sed at erat consulatu evertitur. Mei magna voluptaria interpretaris no. In sit soleat nostrud comprehensam, in audire adipiscing vel.Lorem ipsum dolor sit amet, appetere nominati reprehendunt at eam. Eam ex populo eirmod impetus, sed at erat consulatu evertitur. Mei magna voluptaria interpretaris no. In sit soleat nostrud comprehensam, in audire adipiscing vel.Lorem ipsum dolor sit amet, appetere nominati reprehendunt at eam. Eam ex populo eirmod impetus, sed at erat consulatu evertitur. Mei magna voluptaria interpretaris no. In sit soleat nostrud comprehensam, in audire adipiscing vel."//com;
        item.redFlag = rf;
        item.aVa =ava;
        item.aIn=iAn
        item.assemblyCount = 0;
        item.inventoryText=trss;
        item.product=function(){
            return (this.aVa-1)*(this.aIn-1)
        };
        return item;
    }
    return{
        pitPony: aspire,
        pick:makeItem,
        shovel: makeStance
    };
}());


