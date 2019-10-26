/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";
var BERING;
BERING.DOMQMenu = (function () {
    function m_d() {
        var quotes=String.fromCharCode(34);
        $('#topher').append("<div id='bigLogo'><img src='WML.png' alt='page logo'></div>");
        $('section.instructions#above').append("<p>Use the <b><i>forward</i></b> and <b><i>back</i></b> buttons to move between pages.</p>");  

        $('div.qCon').append("<div class='ender'><input class='nameI' type='text' placeholder='Name'></div>"); 
               
        $('div.qCon').append($("<div class='control'>"));
        $('div.control').append("<input type='file' id='fileInput' name='files[]' style='display: none;'/>");
 
        $('div.qCon').append("<div class='itemDisplay'></div>");
        $('div.qCon').append("<div class='navIt'></div>");
        $('div.qCon').append("<div class='progRoc'></div>");
                
        $('div.navIt').append("<button class='navButton' onClick='BERING.Command.execute("+quotes+"doBACK"+quotes+");'>&#x21e6; Back</button>");
        $('div.navIt').append("<button class='navButton' onClick='BERING.Command.execute("+quotes+"doFORWARD"+quotes+");'>Forward &#x21e8;</button>");
        $('div.control').append("<div class='commentDisplay'></div>");
        $('div.qCon').append("<br><br><h4>©McLean Fletcher</h4>");
        $('section.instructions#below').append("<br><br>");        
        $('section.instructions#below').append("<h3>Creating Your Chart</h3>");                 
        $('section.instructions#below').append("<p>A dialogue comes up when you have finished, and from there a PDF will be created once you press OK. Make sure there is a name in the name box above as this helps identify your chart from all the others.</p>");                    
        $('section.instructions#below').append("<p>Depending on your browser a preview of your chart will be displayed which can be printed. We will also attempt to save a pdf file onto your device. If no preview appears find your pdf (in Downloads) to print your chart.</p>");
        
        $('body').append($("<div id='bg'><img src='../images/wml.png' alt=''></div>"));
    }
    return{
        make: m_d
    };
}());