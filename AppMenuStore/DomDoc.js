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
        //$('#topher').append("<h1>"+BERING.title+"</h1>");
        $('#topher').append("<div id='bigLogo'><img src='WML.jpg' alt='page logo'></div>");
        //$('#topher').append("<h1>"+BERING.title+"</h1>");
        $('section.instructions#above').append(" <p>You can add to your description by choosing the <b><i>Comments</i></b> option in the menu.</p>");                    
        $('section.instructions#above').append("<p>Use the <b><i>forward</i></b> and <b><i>back</i></b> buttons to move between pages.</p>");                    
//        $('section.instructions#above').append("<p>There is a <b><i>progress bar</i></b> below the menu to help you track your progress</p>");
        $('div.qCon').append($("<div class='control'>"));
        $('div.control').append("<input type='file' id='fileInput' name='files[]' style='display: none;'/>");
        
        $('div.control').append("<nav class='navCon'>");
        $('nav.navCon').append("<hr>");
        $('nav.navCon').append("<label for='drop2a' class='toggle' onClick='BERING.Command.execute("+quotes+"comment2"+quotes+");'>"+BERING.title+"<span class='hamburger-menu'></span></label>");
        $('nav.navCon').append("<input type='checkbox' id='drop2a' />");
        $('nav.navCon').append("<ul class='menu' id='questionnaire'></ul>");
        $('ul#questionnaire.menu').append("<li><a href='#/' onClick='BERING.Command.execute("+quotes+"doPDF"+quotes+");'>Your Chart</a></li>");
        $('ul#questionnaire.menu').append("<li><a href='#/' onClick='BERING.Command.execute("+quotes+"doOPEN"+quotes+");'>Open</a></li>");
//        $('ul#questionnaire.menu').append("<li><a href='#/' onClick='BERING.Command.execute("+quotes+"doDATA"+quotes+");'>Save</a></li>");
        $('ul#questionnaire.menu').append("<li><a href='#/' onClick='BERING.Command.execute("+quotes+"comment"+quotes+");'>Comment</a></li>");
        //$('ul#questionnaire.menu').append("<li><a href='#/' onClick='BERING.Command.execute("+quotes+"redFlag"+quotes+");'>Red Flag</a></li>");
        $('div.control').append("<div class='progRoc'></div>");
        $('div.control').append("<div class='navIt'></div>");
        $('div.navIt').append("<button class='buttonRev' onClick='BERING.Command.execute("+quotes+"doBACK"+quotes+");'>Back</button>");
        $('div.navIt').append("<button class='buttonFfwd' onClick='BERING.Command.execute("+quotes+"doFORWARD"+quotes+");'>Forward</button>");
        $('div.control').append("<div class='commentDisplay'></div>");
        $('div.qCon').append("<div class='itemDisplay'></div>");
        $('div.qCon').append("<div class='ender'><input class='nameI' type='text' placeholder='Name'></div>");        
        $('div.qCon').append("<br><br><h4 style='margin-top: -6em;'>&nbsp©McLean Fletcher&nbsp&nbsp</h4>");
        $('section.instructions#below').append("<br><br>");        
        $('section.instructions#below').append("<h3>Creating Your Chart</h3>");                 
        $('section.instructions#below').append("<p>Put your name in the name box and select <i><b>your chart</b></i> in the menu above.</p>");                    
        $('section.instructions#below').append("<p>Depending on your browser a preview of <i><b>your chart</b></i> will be displayed which can be printed. A pdf file will also be saved onto your device. If no preview appears open your pdf to print your chart.</p>");
        $('section.instructions#below').append("<h3>Open</h3>");                    
        $('section.instructions#below').append("<p>Use this button to open a profile you have worked on before.</p>");   
    }
    return{
        make: m_d
    };
}());