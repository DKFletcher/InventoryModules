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
    var _aspire;
    function aspire_020916() {
        var items = [];
        items.push(makeItem(1, 176, 179, 56, "R", 0, "always showing how disappointed they are with learners", 40, "i", "", !1, 0, 30));
        items.push(makeItem(2, 170, 165, 44, "R", 0, "nags learners", 50, "i", "", !1, 0, 24));
        items.push(makeItem(3, 164, 151.5, 30, "R", 0, "behaves as if they are bored", 37, "i", "", !1, 0, 32));

        items.push(makeItem(4, 200, 170, 45, "C", 2, "makes things seem complicated", 45, "i", "", !1, 0, 27));
        items.push(makeItem(5, 198, 164, 59, "C", 2, "lessons move slowly", 42, "i", "", !1, 0, 26));
        items.push(makeItem(6, 198, 158, 54, "C", 2, "work set is on the easy side for learners", 53, "i", "", !1, 0, 28));
        items.push(makeItem(7, 192, 152, 50, "C", 2, "highlights learners' weaknesses and little else", 43, "i", "", !1, 0, 22));
        items.push(makeItem(8, 186, 146, 40, "C", 2, "can be disorganised", 48, "i", "", !1, 0, 21));
        items.push(makeItem(9, 180, 140, 38, "C", 2, "lessons can be boring", 54, "i", "", !1, 0, 25));

        items.push(makeItem(10, 230, 143, 61.5, "C", 4, "nervous around learners", 51, "i", "", !1, 0, 33));
        items.push(makeItem(11, 230, 139, 72, "C", 4, "easy to ignore", 49, "i", "", !1, 0, 35));
        items.push(makeItem(12, 230, 135, 79, "C", 4, "uncomfortable with their authority", 47, "i", "", !1, 0, 34));
        items.push(makeItem(13, 230, 131, 85, "C", 4, "does too much for learners", 39, "i", "", !1, 0, 31));
        items.push(makeItem(14, 215, 127, 73, "C", 4, "tells learners they're doing well, even if they're not", 44, "i", "", !1, 0, 20));
        items.push(makeItem(15, 200, 123, 63, "C", 4, "shy", 38, "i", "", !1, 0, 23));

        items.push(makeItem(16, 193, 109, 80, "L", 6, "makes a lot of promises but doesn't keep them", 41, "i", "", !1, 0, 29));
        items.push(makeItem(17, 194, 103, 23, "L", 6, "easily distracted", 46, "i", "", !1, 0, 19));
        items.push(makeItem(18, 194, 97, 34, "L", 6, "tries too hard to be liked", 52, "i", "", !1, 0, 36));

        items.push(makeItem(19, 194, 92, 41, "L", 8, "responds to learners' concerns", 72, "i", "", !1, 0, 14));
        items.push(makeItem(20, 194, 88, 31, "L", 8, "reassuring and patient", 70, "i", "", !1, 0, 15));
        items.push(makeItem(21, 194, 84, 42, "L", 8, "shows interest in learners' lives", 62, "i", "", !1, 0, 8));
        items.push(makeItem(22, 193, 80, 40, "L", 8, "speaks sensitively to learners", 67, "i", "", !1, 0, 5));
        items.push(makeItem(23, 191.5, 76, 63, "L", 8, "shares some things about their life with learners", 61, "i", "", !1, 0, 7));
        items.push(makeItem(24, 189.5, 72, 41, "L", 8, "helps learners to work together", 64, "i", "", !1, 0, 3));
        items.push(makeItem(25, 187, 68, 36, "L", 8, "makes learners feel heard", 68, "i", "", !1, 0, 2));
        items.push(makeItem(26, 184, 64, 38, "L", 8, "allows learners centre stage", 57, "i", "", !1, 0, 10));
        items.push(makeItem(27, 180, 60, 38, "L", 8, "enjoys a laugh with the class", 59, "i", "", !1, 0, 16));
        items.push(makeItem(28, 176, 56, 35, "L", 8, "says sorry if in the wrong", 66, "i", "", !1, 0, 1));
        items.push(makeItem(29, 176, 52, 41, "L", 8, "learners enjoy telling things to", 69, "i", "", !1, 0, 17));
        items.push(makeItem(30, 176, 48, 13, "L", 8, "forgiving", 71, "i", "", !1, 0, 4));

        items.push(makeItem(31, 201, 8, 60, "R", 9, "treats learners fairly", 60, "i", "", !1, 0, 18));
        items.push(makeItem(32, 195, 15, 55, "R", 9, "gives learners as much choice as possible", 58, "i", "", !1, 0, 9));
        items.push(makeItem(33, 191.5, 20.5, 48, "R", 9, "funny", 56, "i", "", !1, 0, 6));
        items.push(makeItem(34, 187, 25.5, 60, "R", 9, "asks learner for feedback", 55, "i", "", !1, 0, 13));
        items.push(makeItem(35, 153, 31, 34, "L", 9, "asks learners to suggest ways to do things", 63, "i", "", !1, 0, 11));
        items.push(makeItem(36, 174, 42, 60, "R", 9, "shows they enjoy working with learners", 65, "i", "", !1, 0, 12));

        items.push(makeItem(37, 129, 46, 50, "L", 9, "enthusiastic and loves learning", 3, "e", "", !1, 0, 32));
        items.push(makeItem(38, 121, 38, 50, "L", 9, "makes learning exciting and fun", 15, "e", "", !1, 0, 23));
        items.push(makeItem(39, 115, 28, 44, "L", 9, "praises individuals for effort and achievement", 13, "e", "", !1, 0, 31));
        items.push(makeItem(40, 108, 22, 70, "L", 9, "does what they promise", 1, "e", "", !1, 0, 30));
        items.push(makeItem(41, 102, 15, 55, "L", 9, "builds on learners' strengths", 16, "e", "", !1, 0, 29));
        items.push(makeItem(42, 97, 8, 60, "L", 9, "strict enough", 5, "e", "", !1, 0, 26));

        items.push(makeItem(43, 122, 48, 48, "R", 7, "encourages independence", 7, "e", "", !1, 0, 22));
        items.push(makeItem(44, 122, 52, 23, "R", 7, "highly organised", 14, "e", "", !1, 0, 20));
        items.push(makeItem(45, 122, 56, 14, "R", 7, "confident", 4, "e", "", !1, 0, 27));
        items.push(makeItem(46, 117, 60, 28, "R", 7, "focused on the work", 17, "e", "", !1, 0, 19));
        items.push(makeItem(47, 114, 64, 59, "R", 7, "has high expectations and stretches learners", 12, "e", "", !1, 0, 34));
        items.push(makeItem(48, 111, 68, 53, "R", 7, "tells learners honestly how they're doing", 8, "e", "", !1, 0, 21));
        items.push(makeItem(49, 108, 72, 48, "R", 7, "lessons move at a fast enough pace", 11, "e", "", !1, 0, 35));
        items.push(makeItem(50, 106, 76, 43, "R", 7, "confronts learners if not satisfied", 2, "e", "", !1, 0, 24));
        items.push(makeItem(51, 105, 80, 69, "R", 7, "makes sure learners know what they should be doing", 10, "e", "", !1, 0, 33));
        items.push(makeItem(52, 104, 84, 53, "R", 7, "uncompromising and not here to be liked", 18, "e", "", !1, 0, 36));
        items.push(makeItem(53, 103, 88, 38, "R", 7, "comfortable being in charge", 6, "e", "", !1, 0, 28));
        items.push(makeItem(54, 103, 92, 24, "R", 7, "bit of a performer", 9, "e", "", !1, 0, 25));

        items.push(makeItem(55, 103, 97, 46, "R", 5, "tries too much to impress learners", 34, "e", "", !1, 0, 13));
        items.push(makeItem(56, 104, 103, 33.5, "R", 5, "shows off", 33, "e", "", !1, 0, 6));
        items.push(makeItem(57, 105, 109, 34, "R", 5, "needs to be centre stage", 26, "e", "", !1, 0, 10));

        items.push(makeItem(58, 90, 123, 62, "C", 3, "has favourites", 32, "e", "", !1, 0, 9));
        items.push(makeItem(59, 82, 127, 72, "C", 3, "openly tells some learners they're better than others", 27, "e", "", !1, 0, 16));
        items.push(makeItem(60, 75, 131, 84, "C", 3, "makes most of the decisions", 31, "e", "", !1, 0, 18));
        items.push(makeItem(61, 75, 135, 72, "C", 3, "blames learners", 23, "e", "", !1, 0, 7));
        items.push(makeItem(62, 75, 139, 65, "C", 3, "provokes and criticises learners", 21, "e", "", !1, 0, 8));

        items.push(makeItem(63, 120, 140, 34, "C", 1, "finds learners annoying", 35, "e", "", !1, 0, 11));
        items.push(makeItem(64, 111, 146, 50, "C", 1, "acts as if they are very important", 24, "e", "", !1, 0, 3));
        items.push(makeItem(65, 108, 152, 44, "C", 1, "stingy with compliments", 36, "e", "", !1, 0, 12));
        items.push(makeItem(66, 102, 158, 44, "C", 1, "never talks about their life", 28, "e", "", !1, 0, 1));
        items.push(makeItem(67, 91, 164, 50, "C", 1, "shows little interest in learners' lives outside school", 22, "e", "", !1, 0, 5));
        items.push(makeItem(68, 90, 172.5, 58, "C", 1, "inattentive to learners", 25, "e", "", !1, 0, 2));

        items.push(makeItem(69, 136, 145, 23, "L", 0, "moods change a lot", 29, "e", "", !1, 0, 17));
        items.push(makeItem(70, 127.5, 158, 39, "L", 0, "shouts when annoyed with learners", 20, "e", "", !1, 0, 15));
        items.push(makeItem(71, 121, 171, 30, "L", 0, "takes a long time to forgive learners", 30, "e", "", !1, 0, 4));
        items.push(makeItem(72, 113, 184, 37, "L", 0, "makes throwaway remarks that can be hurtful", 19, "e", "", !1, 0, 14));

        var stance = [];
        stance.push(makeStance(0, 146, 193, "humiliating", 60, "center"));
        stance.push(makeStance(1, 40, 190, "resenting"));
        stance.push(makeStance(2, 240, 190, "fearing", 30, "center"));
        stance.push(makeStance(3, 13, 163, "bruising", 50));
        stance.push(makeStance(4, 263, 163, "smothering", 50, "center"));
        stance.push(makeStance(5, 13, 110, "posing", 50));
        stance.push(makeStance(6, 285, 110, "pleasing", 50, "right"));
        stance.push(makeStance(7, 50, 55, "demanding", 50, "center"));
        stance.push(makeStance(8, 240, 55, "caring", 50, "center"));
        stance.push(makeStance(9, 130, 11, "warmly demanding", 50));
        items.stance = stance;
        //PRODUCTION
        return items.sort(function (a, b) {
            return 0.5 - Math.random();
        });


        //DEBUG
        //return items;
    }
//
//    function aspire() {
//        var items = [];
//        items.push(makeItem(1, 180, 187, 45, "R", 0, "I sometimes feel ashamed of myself", 63, "e", "", false, 0, 12));//111.5
//        items.push(makeItem(2, 175, 176, 56, "R", 0, "I don't look after myself", 53, "e", "", false, 0, 20));//151.5
//        items.push(makeItem(3, 170, 166, 50, "R", 0, "I sometimes feel humiliated and crushed", 52, "e", "", false, 0, 3));//122.5
//        items.push(makeItem(4, 164, 153, 40, "R", 0, "I am very hard on myself", 57, "e", "", false, 0, 21));//130.5
//        items.push(makeItem(5, 220, 183, 30, "C", 2, "I'm easily embarrassed", 51, "e", "", false, 0, 8));
//        items.push(makeItem(6, 218, 178, 84, "C", 2, "If I have a problem, I won’t speak to any adult in school", 66, "e", "", false, 0, 17));
//        items.push(makeItem(7, 210, 173, 30, "C", 2, "I give up easily", 61, "e", "", false, 0, 6));
//        items.push(makeItem(8, 207, 168, 70, "C", 2, "I often know the answer but don`t put my hand up", 65, "e", "", false, 0, 1));
//        items.push(makeItem(9, 205, 163, 35, "C", 2, "I find it hard to ask for help", 62, "e", "", false, 0, 22));
//        items.push(makeItem(10, 190, 158, 45, "C", 2, "I'm not ambitious", 49, "e", "", false, 0, 15));
//        items.push(makeItem(11, 186, 150, 45, "C", 2, "I won't try things if I might look stupid", 90, "e", "", false, 0, 16));
//        items.push(makeItem(12, 182, 142, 35, "C", 2, "I don't pay attention to how I look", 91, "e", "", false, 0, 2));
//        items.push(makeItem(13, 260, 153, 50, "C", 4, "I take things to heart and get upset easily", 72, "e", "", false, 0, 14));
//        items.push(makeItem(14, 260, 149, 50, "C", 4, "People ignore me", 55, "e", "", false, 0, 10));
//        items.push(makeItem(15, 255, 145, 50, "C", 4, "I'm easily led", 59, "e", "", false, 0, 7));
//        items.push(makeItem(16, 245, 141, 50, "C", 4, "If I disappeared no-one would notice", 73, "e", "", false, 0, 4));
//        items.push(makeItem(17, 240, 137, 50, "C", 4, "I don't know what I'm good at", 56, "e", "", false, 0, 11));
//        items.push(makeItem(18, 225, 133, 50, "C", 4, "My worries often distract me", 67, "e", "", false, 0, 18));
//        items.push(makeItem(19, 210, 129, 50, "C", 4, "I feel bullied", 64, "e", "", false, 0, 9));
//        items.push(makeItem(20, 205, 125, 50, "C", 4, "I'm always apologising for myself", 70, "e", "", false, 0, 19));
//        items.push(makeItem(21, 192, 109, 37, "L", 6, "I copy what other people do", 58, "e", "", false, 0, 23));
//        items.push(makeItem(22, 193, 105, 43, "L", 6, "I find it hard to make up my mind", 54, "e", "", false, 0, 13));
//        items.push(makeItem(23, 194, 101, 50, "L", 6, "I often promise to do things then don't", 60, "e", "", false, 0, 24));
//        items.push(makeItem(24, 194, 97, 60, "L", 6, "I'm not too good at getting myself organised", 50, "e", "", false, 0, 5));
//
//        items.push(makeItem(25, 194, 92, 45, "L", 8, "I don't mind when I'm not the best", 71, "e", "", false, 0, 30));
//        items.push(makeItem(26, 194, 88, 44, "L", 8, "I don't mind being told what to do", 85, "e", "", false, 0, 43));
//        items.push(makeItem(27, 193, 84, 66, "L", 8, "I would say nothing if the teacher made a mistake", 69, "e", "", false, 0, 29));
//        items.push(makeItem(28, 192, 80, 38, "L", 8, "If I'm bored I just keep quiet", 81, "e", "", false, 0, 36));
//        items.push(makeItem(29, 190.5, 76, 30, "L", 8, "I'm keen to please", 68, "e", "", false, 0, 40));
//        items.push(makeItem(30, 188.5, 72, 21, "L", 8, "I'm easy going", 82, "e", "", false, 0, 38));
//        items.push(makeItem(31, 186, 68, 50, "L", 8, "If I get a row from the teacher, I take it", 93, "e", "", false, 0, 27));
//        items.push(makeItem(32, 183, 64, 28, "L", 8, "I look out for people", 89, "e", "", false, 0, 46));
//        items.push(makeItem(33, 179, 60, 38, "L", 8, "I take care not to hurt others", 88, "e", "", false, 0, 47));
//        items.push(makeItem(34, 175, 56, 22, "L", 8, "I don't get huffy", 78, "e", "", false, 0, 28));
//        items.push(makeItem(35, 170, 52, 23, "L", 8, "I can take a joke", 80, "e", "", false, 0, 45));
//        items.push(makeItem(36, 174, 48, 58, "L", 8, "I am modest and downplay my strong points", 75, "e", "", false, 0, 26));
//        items.push(makeItem(37, 177, 44, 60, "L", 8, "I have got to know the people in the class well", 77, "e", "", false, 0, 37));
//        items.push(makeItem(38, 180, 40, 30, "L", 8, "I'm patient with others", 79, "e", "", false, 0, 35));
//        items.push(makeItem(39, 184, 36, 46, "L", 8, "I get on with the people in my class", 95, "e", "", false, 0, 44));
//        items.push(makeItem(40, 187, 32, 53, "L", 8, "I compliment other peoples' good points", 76, "e", "", false, 0, 25));
//        items.push(makeItem(41, 191, 28, 55, "L", 8, "I'm good at helping to sort out arguments", 87, "e", "", false, 0, 32));
//        items.push(makeItem(42, 194, 24, 39, "L", 8, "I find it easy to talk to people", 84, "e", "", false, 0, 33));
//        items.push(makeItem(43, 198, 17, 40, "L", 8, "I try to include people when they are left out", 86, "e", "", false, 0, 34));
//        items.push(makeItem(44, 201, 13, 50, "L", 8, "I care about how teachers are feeling", 92, "e", "", false, 0, 31));
//        items.push(makeItem(45, 198, 12, 85, "R", 9, "I'm forgiving", 96, "e", "", false, 0, 41));
//        items.push(makeItem(46, 193, 18, 69, "R", 9, "People see me as mature and dependable", 74, "e", "", false, 0, 38));
//        items.push(makeItem(47, 185, 28, 58, "R", 9, "I get on well with my teachers", 83, "e", "", false, 0, 48));
//        items.push(makeItem(48, 173, 40, 42, "R", 9, "I'm happy for others when they do well", 94, "e", "", false, 0, 42));
//
//
//
//
//
//
//
//        items.push(makeItem(49, 127, 46, 50, "L", 9, "I stay focused on my work", 10, "i", "", false, 0, 15));
//        items.push(makeItem(50, 118, 34, 65, "L", 9, "I get people organised and make things happen", 24, "i", "", false, 0, 5));
//        items.push(makeItem(51, 110, 24, 77, "L", 9, "I take critical feedback well", 5, "i", "", false, 0, 8));
//        items.push(makeItem(52, 100, 12, 93, "L", 9, "People look up to me", 3, "i", "", false, 0, 3));
//        items.push(makeItem(53, 99, 16, 35, "R", 7, "I am good at telling lies", 2, "i", "", false, 0, 20));
//        items.push(makeItem(54, 103, 20, 42, "R", 7, "I'm good at making my mind up", 22, "i", "", false, 0, 13));
//        items.push(makeItem(55, 106, 24, 70, "R", 7, "If I feel strongly about something I don't back down", 14, "i", "", false, 0, 10));
//        items.push(makeItem(56, 109, 28, 32, "R", 7, "I ask for help if I need it", 17, "i", "", false, 0, 11));
//        items.push(makeItem(57, 112, 32, 26, "R", 7, "I am kind to myself", 4, "i", "", false, 0, 21));
//        items.push(makeItem(58, 115, 36, 53, "R", 7, "I'm happy to be the first to try new things", 21, "i", "", false, 0, 23));
//        items.push(makeItem(59, 118, 40, 45, "R", 7, "I keep trying even if it's really hard", 15, "i", "", false, 0, 7));
//        items.push(makeItem(60, 121, 44, 38, "R", 7, "I usually do what I say I'll do", 23, "i", "", false, 0, 24));
//        items.push(makeItem(61, 124, 48, 74, "R", 7, "I can say no if people try to get me involved in bad things", 7, "i", "", false, 0, 6));
//        items.push(makeItem(62, 126, 52, 32, "R", 7, "I know what I'm good at", 9, "i", "", false, 0, 22));
//        items.push(makeItem(63, 121, 56, 28, "R", 7, "I am proud of myself", 1, "i", "", false, 0, 12));
//        items.push(makeItem(64, 116, 60, 55, "R", 7, "I try new things even if I might look stupid", 19, "i", "", false, 0, 9));
//        items.push(makeItem(65, 113, 64, 53, "R", 7, "If I disappeared the class would miss me", 8, "i", "", false, 0, 1));
//        items.push(makeItem(66, 110, 68, 50, "R", 7, "I get people's attention when I need to", 6, "i", "", false, 0, 17));
//        items.push(makeItem(67, 108, 72, 28, "R", 7, "I'm keen to succeed", 18, "i", "", false, 0, 18));
//        items.push(makeItem(68, 107, 76, 27, "R", 7, "I'm keen to impress", 29, "i", "", false, 0, 40));
//        items.push(makeItem(69, 105, 80, 65, "R", 7, "I would correct the teacher if they made a mistake", 27, "i", "", false, 0, 29));
//        items.push(makeItem(70, 104, 88, 37, "R", 7, "I pay attention to how I look", 20, "i", "", false, 0, 19));
//        items.push(makeItem(71, 104, 84, 37, "R", 7, "I always want to be the best", 25, "i", "", false, 0, 30));
//        items.push(makeItem(72, 103, 92, 38, "R", 7, "I enjoy being in the spotlight", 13, "i", "", false, 0, 14));
//        items.push(makeItem(73, 103, 97, 73, "R", 5, "I put my hand up even before I've worked out the answer", 16, "i", "", false, 0, 4));
//        items.push(makeItem(74, 103, 101, 47, "R", 5, "People see me as attention seeking", 46, "i", "", false, 0, 38));
//        items.push(makeItem(75, 104, 105, 30, "R", 5, "I'm a bit of a show-off", 36, "i", "", false, 0, 26));
//        items.push(makeItem(76, 105, 109, 44, "R", 5, "I get jealous when others do well", 40, "i", "", false, 0, 25));
//        items.push(makeItem(77, 90, 125, 50, "C", 3, "I hate being told what to do", 37, "i", "", false, 0, 37));
//        items.push(makeItem(78, 80, 129, 50, "C", 3, "I enjoy playing jokes on others", 34, "i", "", false, 0, 28));
//        items.push(makeItem(79, 70, 133, 50, "C", 3, "I stir up arguments between people", 38, "i", "", false, 0, 35));
//        items.push(makeItem(80, 60, 137, 60, "C", 3, "I make hurtful comments when I'm joking with people", 35, "i", "", false, 0, 45));
//        items.push(makeItem(81, 50, 144, 50, "C", 3, "I get others into trouble", 28, "i", "", false, 0, 36));
//        items.push(makeItem(82, 45, 148, 50, "C", 3, "No-one would want to get on the wrong side of me", 30, "i", "", false, 0, 39));
//        items.push(makeItem(83, 40, 155, 50, "C", 3, "I talk when the teacher is speaking", 47, "i", "", false, 0, 48));
//        items.push(makeItem(84, 40, 159, 50, "C", 3, "I enjoy annoying teachers", 42, "i", "", false, 0, 33));
//        items.push(makeItem(85, 112, 145, 39, "C", 1, "I don't know anything about the people in the class", 26, "i", "", false, 0, 43));
//        items.push(makeItem(86, 105, 153, 38, "C", 1, "I get huffy if I don't get my own way", 43, "i", "", false, 0, 34));
//        items.push(makeItem(87, 100, 160, 38, "C", 1, "I get impatient with others", 41, "i", "", false, 0, 32));
//        items.push(makeItem(88, 95, 164.5, 38, "C", 1, "I can take myself too seriously", 33, "i", "", false, 0, 47));
//        items.push(makeItem(89, 90, 169, 50, "C", 1, "I get bored a lot at school and show it", 32, "i", "", false, 0, 46));
//        items.push(makeItem(90, 85, 173.5, 50, "C", 1, "People think I can be rude", 11, "i", "", false, 0, 16));
//        items.push(makeItem(91, 75, 178, 50, "C", 1, "I don't like my teachers", 12, "i", "", false, 0, 2));
//        items.push(makeItem(92, 75, 182.5, 50, "C", 1, "I find it hard to fit in", 44, "i", "", false, 0, 31));
//        items.push(makeItem(93, 137, 142, 25, "L", 0, "If I get a row from the teacher I get angry", 31, "i", "", false, 0, 27));//136
//        items.push(makeItem(96, 128.5, 158, 40, "L", 0, "I get spiteful and angry with others who do better than me", 48, "i", "", false, 0, 42));//128
//        items.push(makeItem(95, 121, 171, 52, "L", 0, "I find it hard to trust people", 39, "i", "", false, 0, 44));//120
//        items.push(makeItem(96, 116, 181, 60, "L", 0, "I refuse to make up with people who have annoyed me", 45, "i", "", false, 0, 41));//116
//        var stance = [];
//
//        stance.push(makeStance(0, 146, 193, 'OWN WORST ENEMY', 60, "center"));
//        stance.push(makeStance(1, 40, 190, 'SULKING'));
//        stance.push(makeStance(2, 240, 190, 'HIDING', 30, "center"));
//        stance.push(makeStance(3, 13, 163, 'TAKING OVER', 50));
//        stance.push(makeStance(4, 263, 163, 'TAKING THINGS TO HEART', 50, "center"));
//        stance.push(makeStance(5, 13, 110, 'ATTENTION SEEKING', 50));
//        stance.push(makeStance(6, 285, 110, 'PEOPLE PLEASING', 50, 'right'));
//        stance.push(makeStance(7, 50, 55, 'PERFORMING', 50, 'center'));
//        stance.push(makeStance(8, 240, 55, 'TEAM-PLAYING', 50, 'center'));
//        stance.push(makeStance(9, 140, 12, 'LEADING', 50));
//        items.stance = stance;
//
//
//        //PRODUCTION
//        items.sort(function (a, b) {
//            return 0.5 - Math.random();
//        });
//
//        for (var i = 0; i < items.length; i += 2) {
//            for (var j = i; j < items.length; j++) {
//                if (items[i].pos === items[j].pair) {
//                    items.swap(i + 1, j);
//                }
//            }
//        }
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
                        count1++;
                        if (this[j].aVa === 1) {
                            count2++;
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
                    if (this[i].aVa !== -1) {
                        other += 2;
                    }
                } else {
                    if (this[i].aVa !== -1) {
                        self += 2;
                    }
                }
            }
            if (self === 0 && other === 0) {
                ret = null;
            } else if (self === 0 && other !== 0) {
                ret = 100;
            } else if (self !== 0 && other === 0) {
                ret = 0;
            } else {
                ret = Math.round(self / (self + other) * 100);
            }
            return ret;
        };
        theSet.attitude = function () {
            var attPos = 0, attNeg = 0;
            for (var i = 0; i < this.length; i++) {
                if (this[i].aVa !== 0) {
                    if (this[i].stance > 6) {
                        if (this[i].aVa > 0) {
                            attPos++;
                        }
                    } else {
                        if (this[i].aVa > 0) {
                            attNeg++;
                        }
                    }
                }
            }
            return attPos / (attPos + attNeg);
        };
        theSet.nextPage = function (carrot) {
            var returnPage = [];
            if (carrot < 91) {
                var setlim = carrot;
                BERING.begining = false;
                BERING.end = false;
            } else {
                setlim = carrot = 90;
                BERING.begining = false;
                BERING.end = true;
            }
            if (carrot <= this.length) {
                for (var i = setlim; i < setlim + 6; i++) {
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
            carrot = carrot - 12;
            if (carrot >= 0) {
                var setlim = carrot;
                BERING.begining = false;
                BERING.end = false;
            } else {
                BERING.begining = true;
                BERING.end = false;
                setlim = carrot = 0;
            }
            for (var i = setlim; i < setlim + 6; ++i) {
                returnPage.push(this[carrot++]);
            }
            if (carrot - 2 * BERING.onPage < 0) {
                BERING.begining = true;
            }
            return [returnPage, carrot];

        };
        theSet.progress = function (theSet, carrot) {
            var returnPage = [];
            carrot = 6 * theSet;

            for (var i = 6 * theSet; i < 6 * theSet + 6; ++i) {
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
        if (_aspire === undefined) {
            _aspire = activ8(BERING.Miner.pitPony());
        }
        return _aspire;
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
    function makeItem(p, x, y, w, a, s, t, pr, ie, com, rf, ava, num) {
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
//        item.num = num;



        //nums a bum variable, need to remove this
        return BERING.Miner.pick(p, x, y, w, a, s, t, pr, ie, com, rf, ava, num);
    }
    function getBlank() {
        return BERING.Miner.pitPony();
    }
    return{
        current: g_a,
        mi: makeItem,
        ms: makeStance,
        getCompat: aspire_020916,
        gc: getBlank,
        ia: activ8
    };
}());


