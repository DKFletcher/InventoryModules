/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
BERING.XMLFilter = (function () {
    var csOut = new Array(
            [new RegExp(/\u201C/g), String("*#1*")],
            [new RegExp(/\u201D/g), String("*#2*")],
            [new RegExp(/\u2019/g), String("*#3*")],
            [new RegExp(/\u0026/g), String("*#4*")],
            [new RegExp(/\u003C/g), String("*#5*")],
            [new RegExp(/\u003E/g), String("*#6*")],
            [new RegExp(/\\/g), String("*#7*")],
            [new RegExp(/\u002D/g), String("*#8*")],
            [new RegExp(/\u0022/g), String("*#9*")],
            [new RegExp(/\u0027/g), String("*#10*")],
            [new RegExp(/\u0025/g), String("*#11*")],
            [new RegExp(/\u000D/g), String.fromCharCode(10)],
            [new RegExp(/\//g), String("*#12*")]);
    var csIn = new Array(
            [new RegExp("\\*\\#1\\*", "g"), String.fromCharCode(8220)],
            [new RegExp("\\*\\#2\\*", "g"), String.fromCharCode(8221)],
            [new RegExp("\\*\\#3\\*", "g"), String.fromCharCode(8217)],
            [new RegExp("\\*\\#4\\*", "g"), String.fromCharCode(38)],
            [new RegExp("\\*\\#5\\*", "g"), String.fromCharCode(60)],
            [new RegExp("\\*\\#6\\*", "g"), String.fromCharCode(62)],
            [new RegExp("\\*\\#7\\*", "g"), String.fromCharCode(92)],
            [new RegExp("\\*\\#8\\*", "g"), String.fromCharCode(45)],
            [new RegExp("\\*\\#9\\*", "g"), String.fromCharCode(34)],
            [new RegExp("\\*\\#10\\*", "g"), String.fromCharCode(39)],
            [new RegExp("\\*\\#11\\*", "g"), String.fromCharCode(37)],
            [new RegExp("\\*\\#12\\*", "g"), String.fromCharCode(47)]);

    var fnOut = [new RegExp(/\\/g),
                new RegExp(/\//g),
                new RegExp(/\u003A/g),
                new RegExp(/\u003F/g),
                new RegExp(/\u002A/g),
                new RegExp(/\u0022/g),
                new RegExp(/\u003C/g),
                new RegExp(/\u003E/g),
                new RegExp(/\u007C/g)];

    function f_o(nc) {
        if (nc != null) {
            for (var i = 0; i < csOut.length; i++) {
                nc = nc.replace(csOut[i][0], csOut[i][1]);
            }
        }
        return nc;
    }
    function fn_o(nc) {
        if (nc != null) {
            for (var i = 0; i < fnOut.length; i++) {
                nc = nc.replace(fnOut[i], "_");
            }
        }
        return nc;
    }
    function f_i(nc) {
        for (var i = 0; i < csIn.length; i++) {
            nc = nc.replace(csIn[i][0], csIn[i][1]);
        }
        return nc;
    }
    return{
        filterOut: f_o,
        fileOut: fn_o,
        filterIn: f_i
    };
}());

