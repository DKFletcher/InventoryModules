/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict"
var BERING;
BERING.assets = (function () {
    var setArray=[
        //'appAssets/chart.jpg'
    ];
    var getObject={};
    function s_a(){
        for (var i=0; i<setArray.length; i++){
            var img=new Image();
            img.addEventListener('load', imageLoaded);
            img.src=setArray[i];
        }
    }
    function imageLoaded(event){
        
        var name=event.currentTarget.src;
        var newName=name.slice(name.lastIndexOf('/')+1,name.lastIndexOf('.'));
        getObject[newName]=event.target;
        event.target.removeEventListener('load',this);
    }
    function g_a(){
        return getObject
    }
    return{
        setAssets: s_a,
        getAssets: g_a
    };
}());





