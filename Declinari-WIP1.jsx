//declinari 1x1, 16x9


app.beginUndoGroup(1)



var aprj = app.project;
var s = aprj.selection;

    var w = 1080;
    var hSqr = 1080;
    var hVert = 1920;
    var x = 2;

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

    // Find composition

var renderFolder = findItemByName('Main render');

    if (!renderFolder) {
        return;
    }


    var comps1x1 = findItemByName(s[i].name + '-1x1');

    if (!comps1x1) {
        return;
    }

    var comps9x16 = findItemByName(s[i].name + '-9x16');

    if (!comps9x16) {
        return;
    }

    // Find image

    var image = findItemByName(s[i].name);

    if (!image) {
        return;

    }


    // Add image to composition

    comps1x1.layers.add(image).scale.setValue([50,50]);
    comps9x16.layers.add(image).scale.setValue([50,50]);
    fDeclin.parentFolder = renderFolder;
    function findItemByName(itemName) {

        for (var i = 1, il = app.project.numItems; i <= il; i++) {

            if (app.project.item(i).name === itemName) {

                return app.project.item(i);

            }

        }

        // return null if didn't find anything

        return alert("Could not find " + itemName);

    }

})();


}






app.endUndoGroup()