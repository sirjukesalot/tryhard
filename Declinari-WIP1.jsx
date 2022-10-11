//declinari 1x1, 16x9


app.beginUndoGroup(1)



var aprj = app.project;
var s = aprj.selection;

    var w = 1080;
    var hSqr = 1080;
    var hVert = 1920;
    var x = 56.5;
    var scl = [x,x]

var fDeclin = aprj.items.addFolder('Declinari');        //declin folders
var foldSqr = aprj.items.addFolder('1x1');
var foldVert = aprj.items.addFolder('9x16');

foldSqr.parentFolder = fDeclin;
foldVert.parentFolder = fDeclin;

for (var i = 0; i < s.length; i++) {

    var d = s[i].duration;
    var fr = s[i].frameRate;



    aprj.items.addComp(s[i].name + '-1x1', w, hSqr, 1, d, fr).parentFolder = foldSqr;      //creat comps with new names
    aprj.items.addComp(s[i].name + '-9x16', w, hVert, 1, d, fr).parentFolder = foldVert;


(function() {

    // Find Main render folder

    var mRenderF = findItemByName('Main render');
    if (!mRenderF) {
        return;
    }


    
  

    
    // Find compositions

    var comps1x1 = findItemByName(s[i].name + '-1x1');
    if (!comps1x1) {
        return;
    }

    var comps9x16 = findItemByName(s[i].name + '-9x16');
    if (!comps9x16) {
        return;
    }

    // Find image

   

    // Add image to composition

    

    function findItemByName(itemName) {

        for (var i = 1, il = app.project.numItems; i <= il; i++) {

            if (app.project.item(i).name === itemName) {

                return app.project.item(i);

            }

        }

        // return null if didn't find anything

        return alert("Could not find " + itemName);

    }
fDeclin.parentFolder = mRenderF;
})();


}






app.endUndoGroup()