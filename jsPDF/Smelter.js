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
BERING.ore = (function () {
    var _inspire;
    function inspire_050916() {
        var items = [];
        items.push(makeItem(1, 129, 170.4, 46, "R", 0, "always showing how disappointed they are with learners", 39, "e", "", false, 0));
        items.push(makeItem(2, 123.5, 159.5, 46.5, "R", 0, "nags learners", 50, "e", "", false, 0));
        items.push(makeItem(3, 140.5, 145.2, 22, "R", 0, "behaves as if they are bored", 37, "e", "", false, 0));


        items.push(makeItem(4, 175, 170, 71, "C", 2, "makes things seem complicated", 45, "e", "", false, 0));
        items.push(makeItem(5, 169, 155, 58, "C", 2, "lessons move slowly", 42, "e", "", false, 0));
        items.push(makeItem(6, 167, 151, 54, "C", 2, "work set is on the easy side for learners", 53, "e", "", false, 0));
        items.push(makeItem(7, 165.5, 147, 49.5, "C", 2, "highlights learners' weaknesses and little else", 43, "e", "", false, 0));
        items.push(makeItem(8, 167, 140, 40, "C", 2, "can be disorganised", 48, "e", "", false, 0));
        items.push(makeItem(9, 160, 136, 38, "C", 2, "lessons can be boring", 54, "e", "", false, 0));


        items.push(makeItem(10, 213, 142.5, 64, "C", 4, "nervous around learners", 51, "e", "", false, 0));
        items.push(makeItem(11, 207, 138.5, 70, "C", 4, "easy to ignore", 49, "e", "", false, 0));
        items.push(makeItem(12, 200, 134.5, 77, "C", 4, "uncomfortable with their authority", 47, "e", "", false, 0));
        items.push(makeItem(13, 194, 130.5, 83, "C", 4, "does too much for learners", 41, "e", "", false, 0));
        items.push(makeItem(14, 188, 126.5, 74, "C", 4, "tells learners they're doing well, even if they're not", 44, "e", "", false, 0));
        items.push(makeItem(15, 182, 122.5, 62, "C", 4, "shy", 38, "e", "", false, 0));


        items.push(makeItem(16, 192, 102.5, 40, "L", 6, "makes a lot of promises but doesn't keep them", 40, "e", "", false, 0));
        items.push(makeItem(17, 193.5, 98, 24, "L", 6, "easily distracted", 46, "e", "", false, 0));
        items.push(makeItem(18, 194, 94, 35, "L", 6, "tries too hard to be liked", 52, "e", "", false, 0));


        items.push(makeItem(19, 194, 88, 41, "L", 8, "responds to learners' concerns", 72, "e", "", false, 0));
        items.push(makeItem(20, 193.6, 84, 31, "L", 8, "reassuring and patient", 70, "e", "", false, 0));
        items.push(makeItem(21, 193, 80, 42, "L", 8, "shows interest in learners' lives", 61, "e", "", false, 0));
        items.push(makeItem(22, 192, 76, 40, "L", 8, "speaks sensitively to learners", 68, "e", "", false, 0));
        items.push(makeItem(23, 190.5, 72, 63, "L", 8, "shares some things about their life with learners", 66, "e", "", false, 0));
        items.push(makeItem(24, 188.5, 68, 41, "L", 8, "helps learners to work together", 64, "e", "", false, 0));
        items.push(makeItem(25, 186, 64, 36, "L", 8, "makes learners feel heard", 62, "e", "", false, 0));
        items.push(makeItem(26, 183, 60, 38, "L", 8, "allows learners centre stage", 57, "e", "", false, 0));
        items.push(makeItem(27, 179, 56, 38, "L", 8, "enjoys a laugh with the class", 59, "e", "", false, 0));
        items.push(makeItem(28, 175, 52, 35, "L", 8, "says sorry if in the wrong", 67, "e", "", false, 0));
        items.push(makeItem(29, 174, 48, 41, "L", 8, "learners enjoy telling things to", 69, "e", "", false, 0));
        items.push(makeItem(30, 177.5, 44, 13, "L", 8, "forgiving", 71, "e", "", false, 0));



        items.push(makeItem(31, 148, 10, 60, "R", 9, "treats learners fairly", 63, "e", "", false, 0));
        items.push(makeItem(32, 148, 15, 55, "R", 9, "gives learners as much choice as possible", 65, "e", "", false, 0));
        items.push(makeItem(33, 148, 21, 48, "R", 9, "funny", 56, "e", "", false, 0));
        items.push(makeItem(34, 148, 26, 44, "R", 9, "asks learners for feedback", 60, "e", "", false, 0));
        items.push(makeItem(35, 148, 32, 36, "R", 9, "asks learners to suggest other ways to do things", 55, "e", "", false, 0));
        items.push(makeItem(36, 149, 40, 25, "R", 9, "shows they enjoy working with learners", 58, "e", "", false, 0));

        items.push(makeItem(37, 121, 40, 25, "L", 9, "enthusiastic and loves learning", 3, "i", "", false, 0));
        items.push(makeItem(38, 115, 32, 30, "L", 9, "makes learning exciting and fun", 15, "i", "", false, 0));
        items.push(makeItem(39, 108, 26, 44, "L", 9, "praises individuals for effort and achievement", 1, "i", "", false, 0));
        items.push(makeItem(40, 101, 21, 48, "L", 9, "does what they promise", 16, "i", "", false, 0));
        items.push(makeItem(41, 95, 15, 55, "L", 9, "builds on learners' strengths", 13, "i", "", false, 0));
        items.push(makeItem(42, 90, 10, 60, "L", 9, "strict enough", 5, "i", "", false, 0));




        items.push(makeItem(43, 83, 44, 36, "R", 7, "encourages independence", 7, "i", "", false, 0));
        items.push(makeItem(44, 100.5, 48, 23, "R", 7, "highly organised", 14, "i", "", false, 0));
        items.push(makeItem(45, 108.5, 52, 14, "R", 7, "confident", 4, "i", "", false, 0));
        items.push(makeItem(46, 89.5, 56, 28, "R", 7, "focused on the work", 17, "i", "", false, 0));
        items.push(makeItem(47, 54.5, 60, 59, "R", 7, "has high expectations and stretches learners", 12, "i", "", false, 0));
        items.push(makeItem(48, 57.5, 64, 53, "R", 7, "tells learners honestly how they're doing", 8, "i", "", false, 0));
        items.push(makeItem(49, 60, 68, 48, "R", 7, "lessons move at a fast enough pace", 11, "i", "", false, 0));
        items.push(makeItem(50, 63.5, 72, 43, "R", 7, "confronts learners if not satisfied", 2, "i", "", false, 0));
        items.push(makeItem(51, 36, 76, 69, "R", 7, "makes sure learners know what they should be doing", 10, "i", "", false, 0));
        items.push(makeItem(52, 50.5, 80, 53, "R", 7, "uncompromising and not here to be liked", 18, "i", "", false, 0));
        items.push(makeItem(53, 65, 84, 38, "R", 7, "comfortable being in charge", 6, "i", "", false, 0));
        items.push(makeItem(54, 79, 88, 24, "R", 7, "bit of a performer", 9, "i", "", false, 0));




        items.push(makeItem(55, 57, 94, 46, "R", 5, "tries too much to impress learners", 35, "i", "", false, 0));
        items.push(makeItem(56, 69.5, 98, 33.5, "R", 5, "shows off", 33, "i", "", false, 0));
        items.push(makeItem(57, 69.5, 102, 34, "R", 5, "needs to be centre stage", 26, "i", "", false, 0));




        items.push(makeItem(58, 53, 123, 62, "C", 3, "has favourites", 36, "i", "", false, 0));
        items.push(makeItem(59, 36, 127, 72, "C", 3, "openly tells some learners they're better than others", 27, "i", "", false, 0));
        items.push(makeItem(60, 18, 131, 84, "C", 3, "makes most of the decisions", 34, "i", "", false, 0));
        items.push(makeItem(61, 18, 139, 72, "C", 3, "blames learners", 21, "i", "", false, 0));
        items.push(makeItem(62, 18, 143, 65, "C", 3, "provokes and criticises learners", 25, "i", "", false, 0));




        items.push(makeItem(63, 101, 135.5, 34, "C", 1, "finds learners annoying", 31, "i", "", false, 0));
        items.push(makeItem(64, 94.5, 139.5, 37, "C", 1, "acts as if they are very important", 24, "i", "", false, 0));
        items.push(makeItem(65, 84, 145.2, 44, "C", 1, "stingy with compliments", 32, "i", "", false, 0));
        items.push(makeItem(66, 82, 149, 44, "C", 1, "never talks about their life", 23, "i", "", false, 0));
        items.push(makeItem(67, 72, 153, 56, "C", 1, "shows little interest in learners' lives outside school", 28, "i", "", false, 0));
        items.push(makeItem(68, 66, 159, 58, "C", 1, "inattentive", 22, "i", "", false, 0));




        items.push(makeItem(69, 136, 138, 23, "L", 0, "moods change a lot", 29, "i", "", false, 0));
        items.push(makeItem(70, 127.5, 152.5, 39, "L", 0, "shouts when annoyed with learners", 20, "i", "", false, 0));
        items.push(makeItem(71, 121, 163.5, 30, "L", 0, "takes a long time to forgive learners", 30, "i", "", false, 0));
        items.push(makeItem(72, 113, 177.5, 37, "L", 0, "makes throwaway remarks that can be hurtful", 19, "i", "", false, 0));



        var stance = [];
        stance.push(makeStance(0, 143.4, 120, 'humiliating'));
        stance.push(makeStance(1, 133, 118, 'resenting'));
        stance.push(makeStance(2, 154, 118, 'feering'));
        stance.push(makeStance(3, 123, 110, 'bruising'));
        stance.push(makeStance(4, 164, 110, 'smothering'));
        stance.push(makeStance(5, 117, 98, 'posing'));
        stance.push(makeStance(6, 6, 170, 'pleasing'));
        stance.push(makeStance(7, 121, 75, 'demanding'));
        stance.push(makeStance(8, 166, 75, 'caring'));
        stance.push(makeStance(9, 143.4, 62, 'warmly demanding'));
        items.stance = stance;
        //PRODUCTION
        return items.sort(function () {
            return 0.5 - Math.random();
        });


        //DEBUG
        //return items;
    }
//
//    function inspire() {
//        var items = [];
//        items.push(makeItem(1, 175, 176, 56, "R", 0, "always showing how disappointed they are with learners", 39, "e", "", false, 0));
//        items.push(makeItem(2, 170, 164, 50, "R", 0, "nags learners", 50, "e", "", false, 0));
//        items.push(makeItem(3, 162, 150, 30, "R", 0, "behaves as if they are bored", 37, "e", "", false, 0));
//
//
//        items.push(makeItem(4, 210, 173, 40, "C", 2, "makes things seem complicated", 45, "e", "", false, 0));
//        items.push(makeItem(5, 207, 168, 70, "C", 2, "lessons move slowly", 42, "e", "", false, 0));
//        items.push(makeItem(6, 205, 163, 50, "C", 2, "work set is on the easy side for learners", 53, "e", "", false, 0));
//        items.push(makeItem(7, 195, 155, 45, "C", 2, "highlights learners' weaknesses and little else", 43, "e", "", false, 0));
//        items.push(makeItem(8, 186, 150, 45, "C", 2, "can be disorganised", 48, "e", "", false, 0));
//        items.push(makeItem(9, 182, 142, 35, "C", 2, "lessons can be boring", 54, "e", "", false, 0));
//
//
//        items.push(makeItem(10, 255, 145, 50, "C", 4, "nervous around learners", 51, "e", "", false, 0));
//        items.push(makeItem(11, 245, 141, 50, "C", 4, "learners tend to ignore", 49, "e", "", false, 0));
//        items.push(makeItem(12, 240, 137, 50, "C", 4, "uncomfortable with their authority", 47, "e", "", false, 0));
//        items.push(makeItem(13, 225, 133, 50, "C", 4, "does too much for learners", 41, "e", "", false, 0));
//        items.push(makeItem(14, 220, 129, 65, "C", 4, "tells learners they're doing well, even if they're not", 44, "e", "", false, 0));
//        items.push(makeItem(15, 205, 125, 50, "C", 4, "shy", 38, "e", "", false, 0));
//
//
//        items.push(makeItem(16, 193, 105, 60, "L", 6, "makes a lot of promises but doesn't keep them", 40, "e", "", false, 0));
//        items.push(makeItem(17, 194, 101, 50, "L", 6, "easily distracted", 46, "e", "", false, 0));
//        items.push(makeItem(18, 194, 97, 60, "L", 6, "tries too hard to be liked", 52, "e", "", false, 0));
//
//
//        items.push(makeItem(19, 194, 92, 45, "L", 8, "responds to learners' concerns", 72, "e", "", false, 0));
//        items.push(makeItem(20, 194, 88, 44, "L", 8, "reassuring and patient", 70, "e", "", false, 0));
//        items.push(makeItem(21, 193, 84, 66, "L", 8, "shows interest in learners' lives", 61, "e", "", false, 0));
//        items.push(makeItem(22, 192, 80, 38, "L", 8, "speaks sensitively to learners", 68, "e", "", false, 0));
//        items.push(makeItem(23, 190.5, 76, 60, "L", 8, "shares some things about their life with learners", 66, "e", "", false, 0));
//        items.push(makeItem(24, 188.5, 72, 40, "L", 8, "helps learners to work together", 64, "e", "", false, 0));
//        items.push(makeItem(25, 186, 68, 50, "L", 8, "makes learners feel heard", 62, "e", "", false, 0));
//        items.push(makeItem(26, 183, 64, 40, "L", 8, "allows learners centre stage", 57, "e", "", false, 0));
//        items.push(makeItem(27, 179, 60, 38, "L", 8, "enjoys a laugh with the class", 59, "e", "", false, 0));
//        items.push(makeItem(28, 175, 56, 40, "L", 8, "says sorry if in the wrong", 67, "e", "", false, 0));
//        items.push(makeItem(29, 170, 52, 40, "L", 8, "learners enjoy telling things to", 69, "e", "", false, 0));
//        items.push(makeItem(30, 174, 48, 58, "L", 8, "forgiving", 71, "e", "", false, 0));
//
//
//        items.push(makeItem(31, 201, 8, 85, "R", 9, "treats learners fairly", 63, "e", "", false, 0));
//        items.push(makeItem(32, 191, 18, 50, "R", 9, "gives learners as much choice as possible", 65, "e", "", false, 0));
//        items.push(makeItem(33, 198, 13, 85, "R", 9, "funny", 56, "e", "", false, 0));
//        items.push(makeItem(34, 187, 26, 69, "R", 9, "asks learners for feedback", 60, "e", "", false, 0));
//        items.push(makeItem(35, 180.5, 34, 70, "R", 9, "asks learners to suggest other ways to do things", 55, "e", "", false, 0));
//        items.push(makeItem(36, 174, 42, 50, "R", 9, "shows they enjoy working with learners", 58, "e", "", false, 0));
//
//
//
//        items.push(makeItem(37, 127, 46, 50, "L", 9, "enthusiastic and loves learning", 3, "i", "", false, 0));
//        items.push(makeItem(38, 121, 38, 65, "L", 9, "makes learning exciting and fun", 15, "i", "", false, 0));
//        items.push(makeItem(39, 115, 30, 77, "L", 9, "praises individuals for effort and achievement", 1, "i", "", false, 0));
//        items.push(makeItem(40, 108, 22, 93, "L", 9, "does what they promise", 16, "i", "", false, 0));
//        items.push(makeItem(41, 104, 14, 25, "L", 9, "builds on learners' strengths", 13, "i", "", false, 0));
//        items.push(makeItem(42, 97, 8, 93, "L", 9, "strict enough", 5, "i", "", false, 0));
//
//
//        items.push(makeItem(43, 124, 48, 74, "R", 7, "encourages independence", 7, "i", "", false, 0));
//        items.push(makeItem(44, 126, 52, 32, "R", 7, "highly organised", 14, "i", "", false, 0));
//        items.push(makeItem(45, 121, 56, 28, "R", 7, "confident", 4, "i", "", false, 0));
//        items.push(makeItem(46, 116, 60, 55, "R", 7, "focused on the work", 17, "i", "", false, 0));
//        items.push(makeItem(47, 113, 64, 70, "R", 7, "has high expectations and stretches learners", 12, "i", "", false, 0));
//        items.push(makeItem(48, 110, 68, 50, "R", 7, "tells learners honestly how they're doing", 8, "i", "", false, 0));
//        items.push(makeItem(49, 108, 72, 50, "R", 7, "lessons move at a fast enough pace", 11, "i", "", false, 0));
//        items.push(makeItem(50, 107, 76, 50, "R", 7, "confronts learners if not satisfied", 2, "i", "", false, 0));
//        items.push(makeItem(51, 105, 80, 75, "R", 7, "makes sure learners know what they should be doing", 10, "i", "", false, 0));
//        items.push(makeItem(52, 104, 84, 60, "R", 7, "uncompromising and not here to be liked", 18, "i", "", false, 0));
//        items.push(makeItem(53, 104, 88, 37, "R", 7, "comfortable being in charge", 6, "i", "", false, 0));
//        items.push(makeItem(54, 103, 92, 38, "R", 7, "bit of a performer", 9, "i", "", false, 0));
//
//
//        items.push(makeItem(55, 103, 97, 73, "R", 5, "tries too much to impress learners", 35, "i", "", false, 0));
//        items.push(makeItem(56, 103, 101, 47, "R", 5, "shows off", 33, "i", "", false, 0));
//        items.push(makeItem(57, 104, 105, 40, "R", 5, "needs to be centre stage", 26, "i", "", false, 0));
//
//
//        items.push(makeItem(58, 90, 125, 50, "C", 3, "has favourites", 36, "i", "", false, 0));
//        items.push(makeItem(59, 80, 129, 50, "C", 3, "openly tells some learners they're better than others", 27, "i", "", false, 0));
//        items.push(makeItem(60, 70, 136, 50, "C", 3, "makes most of the decisions", 34, "i", "", false, 0));
//        items.push(makeItem(61, 60, 140, 60, "C", 3, "blames learners", 21, "i", "", false, 0));
//        items.push(makeItem(62, 50, 144, 50, "C", 3, "provokes and criticises learners", 25, "i", "", false, 0));
//
//
//        items.push(makeItem(63, 112, 145, 39, "C", 1, "finds learners annoying", 31, "i", "", false, 0));
//        items.push(makeItem(64, 105, 153, 38, "C", 1, "acts as if they are very important", 24, "i", "", false, 0));
//        items.push(makeItem(65, 100, 160, 38, "C", 1, "stingy with compliments", 32, "i", "", false, 0));
//        items.push(makeItem(66, 95, 164.5, 38, "C", 1, "never talks about their life", 23, "i", "", false, 0));
//        items.push(makeItem(67, 90, 169, 50, "C", 1, "shows little interest in learners' lives outside school", 28, "i", "", false, 0));
//        items.push(makeItem(68, 85, 176, 50, "C", 1, "inattentive", 22, "i", "", false, 0));
//
//
//        items.push(makeItem(69, 137, 142, 25, "L", 0, "moods change a lot", 29, "i", "", false, 0));
//        items.push(makeItem(70, 128.5, 158, 40, "L", 0, "shouts when annoyed with learners", 20, "i", "", false, 0));
//        items.push(makeItem(71, 121, 170, 52, "L", 0, "takes a long time to forgive learners", 30, "i", "", false, 0));
//        items.push(makeItem(72, 114, 183, 60, "L", 0, "makes throwaway remarks that can be hurtful", 19, "i", "", false, 0));
//
//
//
//        var stance = [];
//        stance.push(makeStance(0, 146, 193, 'humiliating', 60, "center"));
//        stance.push(makeStance(1, 40, 190, 'resenting'));
//        stance.push(makeStance(2, 240, 190, 'fearing', 30, "center"));
//        stance.push(makeStance(3, 13, 163, 'bruising', 50));
//        stance.push(makeStance(4, 263, 163, 'smothering', 50, "center"));
//        stance.push(makeStance(5, 13, 110, 'posing', 50));
//        stance.push(makeStance(6, 285, 110, 'pleasing', 50, 'right'));
//        stance.push(makeStance(7, 50, 55, 'demanding', 50, 'center'));
//        stance.push(makeStance(8, 240, 55, 'caring', 50, 'center'));
//        stance.push(makeStance(9, 130, 12, 'warmly demanding', 50));
//        items.stance = stance;
//
//
//        //PRODUCTION
//        items.sort(function () {
//            return 0.5 - Math.random();
//        });
//
////        for (var i=0; i<items.length; i+=2){
////            for (var j=i; j<items.length; j++){
////                if (items[i].pos===items[j].pair){
////                    items.swap(i+1,j);
////                }
////            }
////        }
//        items.numBut = items.length / BERING.onPage;
//        return activ8(items);
//    }
    function activ8(theSet) {
         theSet.comon = function () {
            var ret = true;
            for (var i = 0; i < this.length; i++) {
                if (this[i].aVa === 0) {
                    ret = false;
                    break;
                }
            }
            return ret;
        };
        theSet.hits = function () {
            var store = [];
            for (var i = 0; i < this.stance.length; i++) {
                var count1 = 0;
                var count2 = 0;
                for (var j = 0; j < this.length; j++) {
                    if (this[j].stance === this.stance[i].i) {
                        count1 += 5;
                        if (this[j].aVa - 1 >= 0) {
                            count2 += this[j].aVa - 1;
                        }
                    }
                }
                store.push([this.stance[i].i, Math.round(100 * count2 / count1)]);
            }
            return store;
        };
        theSet.self = function () {
            var other = 0, self = 0, ret;
            for (var i = 0; i < this.length; i++) {
                if (this[i].aVa === 0) {
                    //return null
                } else if (this[i].ie === "i") {
                    other += this[i].aVa - 1;
                } else {
                    self += this[i].aVa - 1;
                }
            }
            if (self === 0 && other === 0) {
                ret = null;
            } else if (self === 0 && other !== 0) {
                ret = 100;
            } else if (self !== 0 && other === 0) {
                ret = 0;
            } else {
                ret = Math.round(other / (other + self) * 100);
            }
            return ret;
        };
        theSet.attitude = function () {
            var attPos = 0, attNeg = 0;
            for (var i = 0; i < this.length; i++) {
                if (this[i].aVa !== 0) {
                    if (this[i].stance > 6) {
                        attPos += this[i].aVa - 1;
                    } else {
                        attNeg += this[i].aVa - 1;
                    }
                }
            }
            return attPos / (attPos + attNeg);
        };
        theSet.nextPage = function (carrot) {
            var returnPage = [];
            if (carrot < this.length - BERING.onPage + 1) {
                var setlim = carrot;
                BERING.begining = false;
                BERING.end = false;
            } else {
                setlim = carrot = this.length - BERING.onPage;
                BERING.begining = false;
                BERING.end = true;
            }

            if (carrot <= this.length) {
                for (var i = setlim; i < setlim + BERING.onPage; i++) {
                    returnPage.push(this[carrot++]);
                }
            }
            if (carrot + BERING.onPage > this.length) {
                BERING.end = true;
            }
            return [returnPage, carrot];
        };
        theSet.previousPage = function (carrot) {
            var returnPage = [];
            carrot = carrot - 2 * BERING.onPage;
            if (carrot >= 0) {
                var setlim = carrot;
                BERING.begining = false;
                BERING.end = false;
            } else {
                BERING.begining = true;
                BERING.end = false;
                setlim = carrot = 0;
            }
            for (var i = setlim; i < setlim + BERING.onPage; ++i) {
                returnPage.push(this[carrot++]);
            }
            if (carrot - 2 * BERING.onPage < 0) {
                BERING.begining = true;
            }
            return [returnPage, carrot];
        };
        theSet.progress = function (theSet, carrot) {
            var returnPage = [];
            carrot = BERING.onPage * theSet;
            for (var i = BERING.onPage * theSet; i < BERING.onPage * theSet + BERING.onPage; ++i) {
                returnPage.push(this[carrot++]);
            }
            if (carrot - 2 * BERING.onPage < 0) {
                BERING.begining = true;
            } else {
                BERING.begining = false;
            }
            if (carrot + BERING.onPage > this.length) {
                BERING.end = true;
            } else {
                BERING.end = false;
            }
            return [returnPage, carrot];
        };
        theSet.comon = function () {
            var ret = true;
            for (var i = 0; i < this.length; i++) {
                if (this[i].aVa === 0)
                    ret = false;
            }
            return ret;
        };
        theSet.compat = function (theSet, com) {
            var clone = theSet.slice(0);
            clone.stance = theSet.stance.slice(0);
            activ8(clone);
            for (var i = 0; i < clone.length; i++) {
                for (var j = 0; j < com.length; j++) {
                    if (clone[i].pos === com[j].pos) {
                        clone[i].x = com[j].x;
                        clone[i].y = com[j].y;
                        clone[i].width = com[j].width;
                        clone[i].ie = com[j].ie;
                    }
                }
            }
            return clone;
        };
        return theSet;
    }
    //PRODUCTION
    //return items.sort(function(a, b){return 0.5 - Math.random()});


    //DEBUG
    function g_a() {
        if (_inspire === undefined) {
            _inspire = activ8(BERING.Miner.pitPony());
        }
        return _inspire;
    }
    function makeStance(i, x, y, t, w, a) {
//        var tmp = {};
//        tmp.x = x;
//        tmp.y = y;
//        tmp.i = i;
//        tmp.t = t;
//        tmp.width = w;
//        tmp.align = a;
        return BERING.Miner.shovel(i, x, y, t, w, a);
    }
    function makeItem(p, x, y, w, a, s, t, pr, ie, com, rf, ava) {
//        var align;
//        if (a === "R") {
//            align = 'right';
//        } else if (a === "C") {
//            align = 'center';
//        } else {
//            align = undefined;
//        }
//        var item = {};
//        item.x = x;
//        item.y = y;
//        item.width = w;
//        item.align = align;
//        item.stance = s;
//        item.pos = p;
//        item.item = t;
//        item.pair = pr;
//        item.ie = ie;
//        item.comment = com;//"Lorem ipsum dolor sit amet, appetere nominati reprehendunt at eam. Eam ex populo eirmod impetus, sed at erat consulatu evertitur. Mei magna voluptaria interpretaris no. In sit soleat nostrud comprehensam, in audire adipiscing vel.Lorem ipsum dolor sit amet, appetere nominati reprehendunt at eam. Eam ex populo eirmod impetus, sed at erat consulatu evertitur. Mei magna voluptaria interpretaris no. In sit soleat nostrud comprehensam, in audire adipiscing vel.Lorem ipsum dolor sit amet, appetere nominati reprehendunt at eam. Eam ex populo eirmod impetus, sed at erat consulatu evertitur. Mei magna voluptaria interpretaris no. In sit soleat nostrud comprehensam, in audire adipiscing vel."//com;
//        item.redFlag = rf;
//        item.aVa = ava;
        return BERING.Miner.pick(p, x, y, w, a, s, t, pr, ie, com, rf, ava, num);
    }
    function getBlank() {
        return BERING.Miner.pitPony();
    }
    return{
        current: g_a,
        mi: makeItem,
        ms: makeStance,
        getCompat: inspire_050916,
        gc: getBlank,
        ia: activ8
    };
}());


