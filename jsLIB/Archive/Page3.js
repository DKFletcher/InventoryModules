"use strict";
var BERING;
BERING.Page3 = (function () {
    function init(doc){
        doc.addPage();
        
        var columns = ["Position","Emotion", "Frequency","Intensity","Feeling","Product"];
        var rows = [];
        var theSet=BERING.ring.getRing()
        
            theSet.sort(function (a, b) {
                return a.pos - b.pos;
            });
            
        for (var i = 0; i < theSet.length; i++) {
            rows.push([theSet[i].pos, theSet[i].item, theSet[i].aVa-1, theSet[i].aIn-1, theSet[i].pole, theSet[i].product()])
        }
        doc.autoTable(columns, rows, {
            addPageContent: function (data) {
                doc.text("RAW DATA", 10, 10)
            },
            margin: {top: 30},
            styles: {overflow: 'linebreak', columnWidth: 'auto'},
            columnStyles: {0: {columnWidth: 45}},
            rowStyles: {rowWidth: 14}
        });
}
    return{
        make: init 
    };
}());