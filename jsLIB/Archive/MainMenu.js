$(document).ready(function () {
    hfm.makePage();
});
$( window ).resize(function() {
    hfm.resiz();
});
var hfm;
hfm = (function () {
    function init() {
        menu();
        headerFooter('header');
        headerFooter('footer');
    }
    function r_size(){
        headerFooter('header');
        headerFooter('footer');
        
    }
    function headerFooter(theSet) {
        var id = theSet + '_Bering';
        var ringFill = 'none';//"#fffce3";
        var ringRes = 60;
        var innerRing = 35 / 2;
        var outerRing = 60 / 2;
        var _width = 700;
        var _height = 60;
        var quotes = String.fromCharCode(34);
        var linear1b = {fill: ringFill, 'fill-opacity': "1", stroke: "#f1f1f1", strokeWidth: outerRing - innerRing, 'stroke-opacity': 1};
        var linear1i = {fill: "#aaaaaa", 'fill-opacity': "0.6", stroke: "#f1f1f1", strokeWidth: 0, 'stroke-opacity': 0};
        var linear1e = {fill: "#dddfcc", 'fill-opacity': "0.6", stroke: "#f1f1f1", strokeWidth: 0, 'stroke-opacity': 0};
        var linear5 = {stroke: "none", fill: "#9b9b8c", fontFamily: "Helvetica Nueue, Helvetica, sans-serif", fontSize: 20, 'text-anchor': "end"};
        var linear6 = {stroke: "none", fill: "#9b9b8c", fontFamily: "Helvetica Nueue, Helvetica, sans-serif", fontSize: 20, 'text-anchor': "start"};
        $(theSet).empty();
        if ($(window).width() > 750) {
            $(theSet).append("<div style='headarNone'><a href='../' style="+quotes+"text-decoration:none;"+quotes+"><svg width='700' height='64' id='" + id + "' ></svg></a></div>");
            var bering = Snap('#' + id);
            var backRing = bering.circle(_width / 2, _height / 2, innerRing + (outerRing - innerRing) / 2);
            backRing.attr(linear1b);
            var path_str = circleString(innerRing) + spiral() + "Z";
            var bi = bering.path(path_str);
            var path_str2 = circleString(outerRing) + spiral() + "Z";
            var bo = bering.path(path_str2);
            bi.attr(linear1i);
            bo.attr(linear1e);
            var be = bering.group(backRing, bo, bi);
            var sq = 0;
            var rotateAdj = 'r90 t' + String(-sq) + ',' + String(sq);
            be.attr({transform: rotateAdj});
            bering.text(300, 37, 'whatmotivateslearning.com').attr(linear5);
            bering.text(400, 37, 'priming positive identity').attr(linear6);
        } else {
            $(theSet).append(smallLogo5());
        }
    }
    function circleString(radius) {
        var _width = 700;
        var _height = 60;
        var ret = "M" + String(_width / 2) + "," + String(_height / 2);
        ret += "m" + String(radius) + ",0";
        ret += "a" + String(radius) + "," + String(radius) + ",0,1,0,-" + String(radius * 2) + ",0";
        ret += "a" + String(radius) + "," + String(radius) + ",0,1,0," + String(radius * 2) + ",0";
        return ret;
    }
    function spiral() {
        var ringRes = 60;
        var innerRing = 35 / 2;
        var outerRing = 60 / 2;
        var _width = 700;
        var _height = 60;
        var incRad = (outerRing / 2 - innerRing / 2) / ringRes;
        var ret = ' ';
        for (var i = 0; i < ringRes + 1; i++) {
            var pointRatio = i / ringRes;
            var xSteps = Math.cos(pointRatio * 2 * Math.PI);
            var ySteps = Math.sin(pointRatio * 2 * Math.PI);
            var pointX = xSteps * (outerRing - i * 2 * incRad);
            var pointY = ySteps * (outerRing - i * 2 * incRad);
            ret += 'L' + String(pointX + _width / 2) + ' ' + String(pointY + _height / 2) + ' ';
        }
        return ret;
    }
    function smallLogo5() {
        var ret = "<a href='../'><svg width='100' height='60' >";
        ret += "<defs><style>.cls-1, .cls-2, .cls-3, .cls-4, .cls-5 {font-size: 12px;font-family: Myriad Pro;}.cls-1 {fill: #0c9fa5;}.cls-2 {fill: #c3f;}.cls-3 {fill: #a4ea1f;}.cls-4 {fill: #65a598;}</style></defs>";
        ret += "<text class='cls-1' transform='matrix(-0.95, -0.31, 0.31, -0.95, 69.05, 50.35)'>w</text>";
        ret += "<text class='cls-1' transform='matrix(-0.8, -0.61, 0.61, -0.8, 61.54, 47.9)'>h</text>";
        ret += "<text class='cls-1' transform='translate(56.86 44.39) rotate(-127.39)'>a</text>";
        ret += "<text class='cls-1' transform='translate(53.82 40.39) rotate(-115.64)'>t</text>";
        ret += "<text class='cls-2' transform='translate(51.92 37.8) rotate(-98.24)'>m</text>";
        ret += "<text class='cls-2' transform='translate(50.76 28.84) rotate(-77.54)'>o</text>";
        ret += "<text class='cls-2' transform='matrix(0.43, -0.9, 0.9, 0.43, 52.08, 23.16)'>t</text>";
        ret += "<text class='cls-2' transform='matrix(0.55, -0.83, 0.83, 0.55, 53.52, 20.12)'>i</text>";
        ret += "<text class='cls-2' transform='matrix(0.69, -0.72, 0.72, 0.69, 54.55, 18.23)'>v</text>";
        ret += "<text class='cls-2' transform='translate(57.9 14.57) rotate(-32.23)'>a</text>";
        ret += "<text class='cls-2' transform='translate(62.15 11.91) rotate(-20.46)'>t</text>";
        ret += "<text class='cls-2' transform='translate(65.07 10.62) rotate(-8.42)'>e</text>";
        ret += "<text class='cls-2' transform='matrix(1, 0.08, -0.08, 1, 70.27, 9.83)'>s</text>";
        ret += "<text class='cls-3' transform='translate(74.35 10.19) rotate(13.62)'>l</text>";
        ret += "<text class='cls-3' transform='translate(76.52 10.5) rotate(24.42)'>e</text>";
        ret += "<text class='cls-3' transform='translate(81.31 12.58) rotate(38.93)'>a</text>";
        ret += "<text class='cls-3' transform='matrix(0.63, 0.77, -0.77, 0.63, 85.23, 15.77)'>r</text>";
        ret += "<text class='cls-3' transform='translate(87.46 18.11) rotate(63.66)'>n</text>";
        ret += "<text class='cls-3' transform='matrix(0.26, 0.97, -0.97, 0.26, 89.98, 23.48)'>i</text>";
        ret += "<text class='cls-3' transform='translate(90.78 25.48) rotate(86.74)'>n</text>";
        ret += "<text class='cls-3' transform='matrix(-0.23, 0.97, -0.97, -0.23, 91.24, 31.27)'>g</text>";
        ret += "<text class='cls-4' transform='translate(89.8 36.92) rotate(113.89)'>.</text>";
        ret += "<text class='cls-4' transform='matrix(-0.55, 0.84, -0.84, -0.55, 89.2, 38.7)'>c</text>";
        ret += "<text class='cls-4' transform='matrix(-0.74, 0.67, -0.67, -0.74, 86.87, 42.57)'>o</text>";
        ret += "<text class='cls-4' transform='matrix(-0.93, 0.37, -0.37, -0.93, 82.96, 46.76)'>m</text>";
        ret += "<text class='cls-5' transform='translate(0 11.21)'>p<tspan x='6.83' y='0'>r</tspan><tspan x='10.8' y='0'>iming</tspan><tspan x='0' y='22'>positi</tspan><tspan x='27.76' y='22'>v</tspan><tspan x='33.41' y='22'>e</tspan><tspan x='0' y='44'>ide</tspan><tspan x='15.59' y='44'>n</tspan><tspan x='22.2' y='44'>ti</tspan><tspan x='28.98' y='44'>t</tspan><tspan x='33.06' y='44'>y</tspan></text>";
        ret += "</svg></a>";
        return ret;
    }
    
    function menu() {
"use strict";
//$('nav').append("<hr style='margin-bottom: -0.5em;'>")
$('nav').append("<label for='drop' class='toggle' >Menu<span class='hamburger-menu'></span></label><input type='checkbox' id='drop' />");
$('nav').append("<ul class='menu' id='menuRoot'></ul>");

$('#menuRoot').append("<li id='learner'><label for='drop-1' class='toggle'>Learner +</label><a href='#'>Learner</a><input type='checkbox' id='drop-1'/></li>");
$('#learner').append("<ul id='learnerItems'></ul>");
$('#learnerItems').append("<li id='learnerInfo'><label for='drop-3' class='toggle'>Info +</label><a href='#'>Info</a><input type='checkbox' id='drop-3'/>");
$('#learnerInfo').append("<ul id='learnerInfoItems'></ul>");
$('#learnerInfoItems').append("<li><a href='../learnerBackground'>Background</a></li>");
//$('#learnerInfoItems').append("<li><a href='../learnerApplications'>Applications</a></li>");
$('#learnerInfoItems').append("<li><a href='../unifyingModel'>The Unifying Model</a></li>");
$('#learnerInfoItems').append("<li><a href='../learnerPhysics'>The Science of the Ring</a></li>");
$('#learnerItems').append("<li><a href='../aspireRingExpress'>Aspire Ring (Younger Learners)</a></li>");
$('#learnerItems').append("<li><a href='../aspireRing'>Aspire Ring</a></li>");
$('#learnerItems').append("<li><a href='../aspireRingFurther'>Aspire Ring (Further)</a></li>");
$('#learnerItems').append("<li><a href='../learnerDocs'>Explaining the Chart</a></li>");

$('#menuRoot').append("<li id='teacher'><label for='drop-2' class='toggle'>Teacher +</label><a href='#'>Teacher</a><input type='checkbox' id='drop-2'/></li>");
$('#teacher').append("<ul id='teacherItems'></ul>");

$('#teacherItems').append("<li><a href='../teacherBackground'>Background</a></li>");
//$('#teacherItems').append("<li id='teacherInfo'><label for='drop-4' class='toggle'>Info +</label><a href='#'>Info</a><input type='checkbox' id='drop-4'/>");
//$('#teacherInfo').append("<ul id='teacherInfoItems'></ul>");
//$('#teacherInfoItems').append("<li><a href='..//teacherBackground'>Background</a></li>");
//$('#teacherInfoItems').append("<li><a href='..//teacherApplications'>Applications</a></li>");
$('#teacherItems').append("<li><a href='../inspireRingTeacher'>Inspire Ring (Teachers)</a></li>");
$('#teacherItems').append("<li><a href='../inspireRingLearner'>Inspire Ring (Learners)</a></li>");
$('#teacherItems').append("<li><a href='../inspireRingExpress'>Inspire Ring (Younger Learners)</a></li>");
$('#teacherItems').append("<li><a href='../teacherDocs'>Explaining the Chart</a></li>");

$('#menuRoot').append("<li id='collegium'><label for='drop-7' class='toggle'>Teams +</label><a href='#'>Teams</a><input type='checkbox' id='drop-7'/></li>");
$('#collegium').append("<ul id='collegiumItems'></ul>");
$('#collegiumItems').append("<li id='collegiumInfo'><label for='drop-10' class='toggle'>Info +</label><a href='#'>Info</a><input type='checkbox' id='drop-10'/>");
$('#collegiumInfo').append("<ul id='collegiumInfoItems'></ul>");
$('#collegiumInfoItems').append("<li><a href='../collegiumBackground'>Team Member Background</a></li>");
$('#collegiumInfoItems').append("<li><a href='../leaderBackground'>Leader Background</a></li>");
$('#collegiumItems').append("<li><a href='../collegium'>Team Member Profile</a></li>");
$('#collegiumItems').append("<li><a href='../collegiumLeader'>Team Leader Profile</a></li>");

$('#menuRoot').append("<li id='parent'><label for='drop-5' class='toggle'>Parent +</label><a href='#'>Parent</a><input type='checkbox' id='drop-5'/></li>");
$('#parent').append("<ul id='parentItems'></ul>");
//$('#parentItems').append("<li id='parentInfo'><label for='drop-6' class='toggle'>Info +</label><a href='#'>Info</a><input type='checkbox' id='drop-6'/>");
//$('#parentInfo').append("<ul id='parentInfoItems'></ul>");
//$('#parentInfoItems').append("<li><a href='..//parentBackground'>Background</a></li>");
//$('#parentInfoItems').append("<li><a href='..//parentApplications'>Applications</a></li>");
$('#parentItems').append("<li><a href='../parentBackground'>Background</a></li>");
$('#parentItems').append("<li><a href='../inspireRingParent'>Inspire Ring Parent</a></li>");
$('#parentItems').append("<li><a href='../inspireRingParenting'>Inspire Ring Parenting</a></li>");

$('#menuRoot').append("<li id='emotions'><label for='drop-11' class='toggle'>Emotions +</label><a href='#'>Emotions</a><input type='checkbox' id='drop-11'/></li>");
$('#emotions').append("<ul id='emotionsItems'></ul>");
$('#emotionsItems').append("<li id='eBackground'><a href='../emotionsBackground'>Emotional Quadrants</a></li>");
$('#emotionsItems').append("<li id='reflector'><a href='../reflector'>Reflector</a></li>");
$('#emotionsItems').append("<li id='granulator'><a href='../granularity'>Granulator</a></li>");

$('#menuRoot').append("<li id='contact'><label for='drop-9' class='toggle'>Resources +</label><a href='#'>Resources</a><input type='checkbox' id='drop-9'/></li>");
$('#contact').append("<ul id='contactItems'></ul>");
$('#contactItems').append("<li><a href='../sprialProgramme'>The Spiral Programme</a></li>");
$('#contactItems').append("<li><a href='../compendium'>The Compendium of Emotions</a></li>");
$('#contactItems').append("<li><a href='../groupsProfiles'>Group Profiles</a></li>");
$('#contactItems').append("<li><a href='../except'>Except</a></li>");
$('#contactItems').append("<li id='toolSet'><label for='drop-12' class='toggle'>Books +</label><a href='#'>Books</a><input type='checkbox' id='drop-12'/></li>");
$('#toolSet').append("<ul id='toolSetItems'></ul>");
$('#toolSetItems').append("<li><a href='../tms'>The Motivated School</a></li>");
$('#toolSetItems').append("<li><a href='../mel'>Motivating Every Learner</a></li>");
$('#toolSetItems').append("<li><a href='../kg'>Knowing and Growing</a></li>");
//$('#toolSetItems').append("<li><a href='../bespoke'>Bespoke</a></li>");
$('#contactItems').append("<li><a href='../contact'>Contact</a></li>");
$('#contactItems').append("<li><a href='../login'>Login</a></li>");
$('#contactItems').append("<li><a href='../about'>About Us</a></li>");
//$('#contactItems').append("<li><a href='../legacy'>Archived Applications</a></li>");
$('#contactItems').append("<li><a href='../sitePolicy'>Site Policy</a></li>");
 }
    return{
        makePage: init,
        resiz: r_size
    };
}());