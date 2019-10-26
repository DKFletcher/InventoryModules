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
        items.push(makeItem(1, 129, 170.4, 46, "R", 0, "Humiliated", 39, "e", "", false, 0, 0, "Humiliated", "People put me down in front of others. It makes me hate them and want to get back at them, or get away from them.", 0, "Humiliated"));
        items.push(makeItem(2, 129, 170.4, 46, "R", 0, "Overwhelmed", 39, "e", "", false, 0, 0, "Overwhelmed", "I feel I have too much to do. It is getting me down and I feel like giving up.", 0, "Overwhelmed"));
        items.push(makeItem(3, 123.5, 159.5, 46.5, "R", 0, "Ignored", 50, "e", "", false, 0, 0, "inferior", "I feel less important than others and am not taken seriously. I put myself down.", 0, "Ignored"));
        items.push(makeItem(4, 140.5, 145.2, 22, "R", 0, "Excluded", 37, "e", "", false, 0, 0, "lonely", "I feel cut off from others but I want to be with them.", 0, "Excluded"));
        items.push(makeItem(5, 169, 155, 58, "C", 0, "Ashamed", 42, "e", "", false, 0, 0, "Ashamed", " I have let myself down and I worry that I am a bad person. I just want to hide.", 0, "Ashamed"));
        items.push(makeItem(6, 167, 151, 54, "C", 0, "Worried", 53, "e", "", false, 0, 0, "afraid", "I feel like something bad might happen. It's always on my mind. I need to escape or get help.", 0, "Worried"));
        items.push(makeItem(7, 165.5, 147, 49.5, "C", 0, "Sad", 43, "e", "", false, 0, 0, "upset", "Something bad has happened. I need reassurance from someone who can help me.", 0, "Sad"));
        items.push(makeItem(8, 167, 140, 40, "C", 0, "Guilty", 48, "e", "", false, 0, 0, "Guilty", "I have done something wrong. I feel I need to say sorry and make up for it.", 0, "Guilty"));
        items.push(makeItem(9, 160, 136, 38, "C", 0, "Shy", 54, "e", "", false, 0, 0, "embarrassed", "I feel awkward meeting new people or being the centre of attention. I keep quiet.", 0, "Shy"));
        items.push(makeItem(10, 213, 142.5, 64, "C", 0, "Self-doubt", 51, "e", "", false, 0, 0, "Self-doubt", "I question my ability to do something. It is holding me back.", 0, "Self-doubt"));

        items.push(makeItem(11, 207, 138.5, 70, "C", 1, "Playful", 49, "e", "", false, 0, 0, "camaraderie", "I am having fun with others. We enjoy being together and we laugh a lot.", 0, "Playful"));
        items.push(makeItem(12, 200, 134.5, 77, "C", 1, "Pleased for others", 47, "e", "", false, 0, 0, "Pleased for others", "Something good has happened to somebody. I celebrate with them.", 0, "Pleased for others"));
        items.push(makeItem(13, 194, 130.5, 83, "C", 1, "Concerned for others", 41, "e", "", false, 0, 0, "Concerned for others", "I notice others are in need or upset. I want to do something to help them.", 0, "Concerned for others"));
        items.push(makeItem(14, 188, 126.5, 74, "C", 1, "Trusting", 44, "e", "", false, 0, 0, "Trusting", "I believe the people I am with care about me. I feel safe and am happy to go along with them.", 0, "Trusting"));
        items.push(makeItem(15, 182, 122.5, 62, "C", 1, "Forgiving", 38, "e", "", false, 0, 0, "Forgiving", "Someone has been mean to me, but I don't make a fuss. I choose to let it go.", 0, "Forgiving"));
        items.push(makeItem(16, 192, 102.5, 40, "L", 1, "Kindly", 40, "e", "", false, 0, 0, "Kindly", "I feel warm towards others. I want the best for them. I share with them and care for them.", 0, "Kindly"));
        items.push(makeItem(17, 193.5, 98, 24, "L", 1, "Responsible", 46, "e", "", false, 0, 0, "dutiful", "I want to play my part as well as I can. I am careful in what I choose to do and how I do it.", 0, "Responsible"));
        items.push(makeItem(18, 194, 94, 35, "L", 1, "Thankful", 52, "e", "", false, 0, 0, "Thankful", "People are good to me and I enjoy and appreciate their kindness.", 0, "Thankful"));
        items.push(makeItem(19, 193.6, 84, 31, "L", 1, "Belonging", 70, "e", "", false, 0, 0, "Included", "I feel that I fit in well and am accepted. It makes me secure and I can be myself.", 0, "included"));
        items.push(makeItem(20, 193, 80, 42, "L", 1, "Content", 61, "e", "", false, 0, 0, "Content", "I feel calm and at ease with my situation. I am satisfied with what I have.", 0, "Content"));

        items.push(makeItem(21, 190.5, 72, 63, "L", 2, "          Joyful", 66, "e", "", false, 0, 0, "Joyful", "I really like where I am and what Im doing. I'm doing well and feel excited. It makes me smile and be cheery.", 0, "Joyful"));
        items.push(makeItem(22, 192, 76, 40, "L", 2, "         Valued", 68, "e", "", false, 0, 0, "trusted", "People listen to me and trust me. I feel I matter to them. I want to keep playing my part.", 0, "Valued"));
        items.push(makeItem(23, 188.5, 68, 41, "L", 2, "      Admiring", 64, "e", "", false, 0, 0, "Admiring", "I see other people’s good qualities. I want to learn from them and be like them.", 0, "Admiring"));
        items.push(makeItem(24, 186, 64, 36, "L", 2, "       Hopeful", 62, "e", "", false, 0, 0, "optimistic", "I feel things will turn out fine in the future. This helps me keep going.", 0, "Hopeful"));
        items.push(makeItem(25, 183, 60, 38, "L", 2, "        Curious", 57, "e", "", false, 0, 0, "Curious", "I have a chance to learn. I want to find out about new things and ideas.", 0, "Curious"));
        items.push(makeItem(26, 179, 56, 38, "L", 2, "     Confident", 59, "e", "", false, 0, 0, "Confident", "I can cope with what I have to do. I believe in myself and think I will succeed.", 0, "Confident"));
        items.push(makeItem(27, 175, 52, 35, "L", 2, "          Proud", 67, "e", "", false, 0, 0, "Proud", "I have been doing well and my success is down to me. I tell people about it and keep pushing myself.", 0, "Proud"));
        items.push(makeItem(28, 174, 48, 41, "L", 2, " Enthusiastic", 69, "e", "", false, 0, 0, "excited", "I'm really keen on what I'm doing. I give my best and try my hardest.", 0, " Enthusiastic"));
        items.push(makeItem(29, 177.5, 44, 13, "L", 2, "  Determined", 71, "e", "", false, 0, 0, "passionate", "I'm doing something important to me. I really want to do my best and I keep going.", 0, "Determined"));
        items.push(makeItem(30, 148, 10, 60, "R", 2, "             Bold", 63, "e", "", false, 0, 0, "brave", "I have opportunities to take up risky challenges.  I feel up for it.", 0, "Bold"));

        items.push(makeItem(31, 148, 15, 55, "R", 3, "   Frustrated", 65, "e", "", false, 0, 0, "Frustrated", "I can’t stand it. I feel blocked from what I want to do. I try to sort it, or get back at what's stopping me.", 0, "Frustrated"));
        items.push(makeItem(32, 148, 21, 48, "R", 3, "          Bored", 56, "e", "", false, 0, 0, "Bored", "I am not interested in what is going on. Time passes slowly. I switch off.", 0, "Bored"));
        items.push(makeItem(33, 148, 26, 44, "R", 3, "       Envious", 60, "e", "", false, 0, 0, "jealous", "I would like what someone else has got. It brings out bad feelings towards them.", 0, "Envious"));
        items.push(makeItem(34, 148, 32, 36, "R", 3, "          Angry", 55, "e", "", false, 0, 0, "Angry", "People are being unfair and it makes me mad. I'm doing something about it and this makes me feel powerful.", 0, "Angry"));
        items.push(makeItem(35, 121, 40, 25, "L", 3, "       Gloating", 3, "i", "", false, 0, 0, "schadenfreude", "Unfortunate things happen to someone. I am pleased about it.", 0, "Gloating"));
        items.push(makeItem(36, 115, 32, 30, "L", 3, "     Superior", 15, "i", "", false, 0, 0, "arrogance", "I feel I am always right. I am bossy and take over.", 0, "Superior"));
        items.push(makeItem(37, 108, 26, 44, "L", 3, "      Entitled", 1, "i", "", false, 0, 0, "special", "I think I am better than others. I like to to be treated as special.", 0, "Entitled"));
        items.push(makeItem(38, 108, 26, 44, "L", 3, "    Betrayed", 1, "i", "", false, 0, 0, "cheated", "People have gone behind my back, given away my secrets or lied to, or about me. I don't trust them.", 0, "Betrayed"));
        items.push(makeItem(39, 101, 21, 48, "L", 3, "    Resentful", 16, "i", "", false, 0, 0, "Resentful", "I have to accept something I don't want. I feel grudging but I hide my anger.", 0, "Resentful"));
        items.push(makeItem(40, 95, 15, 55, "L", 3, "      Spiteful", 13, "i", "", false, 0, 0, "hateful", "I feel badly treated by someone I trusted. I want to get back at them even if it would be bad for me.", 0, "Spiteful"));

        var stance = [];
        stance.push(makeStance(0, 205, 190, 'Protecting Self'));
        stance.push(makeStance(1, 205, 15, 'Connecting with Others'));
        stance.push(makeStance(2, 30, 15, 'Stretching Self'));
        stance.push(makeStance(3, 30, 190, 'Conflicting with Others'));

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
    function makeItem(p, x, y, w, a, s, t, pr, ie, com, rf, ava, iAn, trss, smft, pole, fgb) {
//        
//        console.log(t);
        var align;
        if (a === "R") {
            align = 'right';
        } else if (a === "C") {
            align = 'center';
        } else {
            align = undefined;
        }
        var item = {};
        var text = t.trim();
        item.x = x;
        item.y = y;
        item.width = w;
        item.align = align;
        item.stance = s;
        item.pos = p;
        item.typeSet = t;
        item.item = text;
        item.pair = pr;
        item.ie = ie;
        item.comment = com;//"Lorem ipsum dolor sit amet, appetere nominati reprehendunt at eam. Eam ex populo eirmod impetus, sed at erat consulatu evertitur. Mei magna voluptaria interpretaris no. In sit soleat nostrud comprehensam, in audire adipiscing vel.Lorem ipsum dolor sit amet, appetere nominati reprehendunt at eam. Eam ex populo eirmod impetus, sed at erat consulatu evertitur. Mei magna voluptaria interpretaris no. In sit soleat nostrud comprehensam, in audire adipiscing vel.Lorem ipsum dolor sit amet, appetere nominati reprehendunt at eam. Eam ex populo eirmod impetus, sed at erat consulatu evertitur. Mei magna voluptaria interpretaris no. In sit soleat nostrud comprehensam, in audire adipiscing vel."//com;
        item.redFlag = rf;
        item.aVa = ava;
        item.aIn = iAn;
        item.assemblyCount = 0;
        item.inventoryText = trss;
        item.smallFontText = smft;
        item.pole = pole;
        item.urEx = fgb;
        item.product = function () {
            return (this.aVa - 1) * (this.aIn - 1);
        };
        if (item.aVa === 1 || item.aIn === 1) {
            item.isZero = true;
        } else {
            item.isZero = false;
        }
        return item;
    }
    return{
        pitPony: aspire,
        pick: makeItem,
        shovel: makeStance
    };
}());


