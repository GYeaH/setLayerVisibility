(function main() {
    var currentDoc = app.activeDocument;
    var groups = app.activeDocument.layerSets;
    var layerList = [];

    /*First, turn all layers' and Groups' visibility off*/
    for (var i = 0; i < groups.length; i++) {
        var currentGroup = groups[i];
        for (var j = 0; j < currentGroup.artLayers.length; j++) {
            currentGroup.artLayers[j].visible = false;
            layerList.push(currentGroup.artLayers[j]); //turn layers' visibility off
        }
        currentGroup.visible = false;    //turn groups' visibility off
    }

    /*Second, load .txt list file from D drive and turn the layers' visibily on according to the list*/
    var path = "D:\\";
    var fileName = "visibleLayerList.txt";
    var layerNameList = [];
    
    layerNameList = loadList(layerNameList, path,fileName);

    for (var i = 0; i < layerNameList.length; i++) {
        for (var j = 0; j < layerList.length; j++) {
            /*set the visilibility to be true when the layer name on the list*/
            if (layerList[j].name == layerNameList[i]) {    //check if the target layer match the listed layer
                layerList[j].visible = true;
                layerList[j].parent.visible = true;
                layerList.splice(j, 1); //delet matched layer from list
            }
        }
    }

})();

function loadList(layerNameList, path,fileName) {
    var listFile = new File(path + "\\" + fileName);
    if (!listFile.exists) alert(fileName + " not found");
    listFile.open("r");
    while (!listFile.eof)
        layerNameList.push(listFile.readln());
    listFile.close();
    return layerNameList;
}
