/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';
var BERING;
BERING.Modal = (function () {
    var modal = document.getElementById('mainModal');
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function () {
        modal.style.display = "none";
    };
    function goModal(theSet){
        var modalB = $('body').find("div.modal-body");
        modalB.html(theSet);
        modal.style.display = "block";
    }
    function lfb(theSet) {
        var dialogText;
        switch (theSet) {
            case '120217':
                dialogText = 'Inspire Ring parenting';
                break;
            case '110217':
                dialogText = 'Inspire Ring parent';
                break;
            case '040916':
                dialogText = 'Inspire Ring learner';
                break;
            case '020916':
                dialogText = 'Aspire Ring';
                break;
            case '280916':
                dialogText = 'Aspire Ring express';
                break;
            case '050916':
                dialogText = 'Inspire Ring teacher';
                break;
            case '030916':
                dialogText = 'Aspire Ring further';
                break;
            case '060916':
                dialogText = 'Collegium';
                break;
            case '070916':
                dialogText = 'Leader';
                break;
            case '090915':
                dialogText = 'Inspire Ring Express';
                break;
            default:
                dialogText = 'not supported';
        }
        ;
        if (dialogText === 'not supported') {
            dialogText = '<p>Unable to read this file.</p>';
        } else {
            dialogText = '<p>Wrong file for this page. Try going to the ' + dialogText + ' page and loading this file from there.</p>';
//                                            //alert('Wrong file for this version. Try using the ' + app + ' application on this site');
        }
        var modalB = $('body').find("div.modal-body");
        modalB.html(dialogText);
        modal.style.display = "block";
    }
    ;
    return{
        feedBack: lfb,
        publish: goModal
        
    };
}());



