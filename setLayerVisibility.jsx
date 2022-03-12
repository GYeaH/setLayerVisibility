const { string } = require("prop-types");

(function main(){
    var currentDoc = app.activeDocument;
    var groups = app.activeDocument.layerSets;
    var layerList = [];

    //First, turn all layers' and Groups' visibility off
    for(var i = 0; i <groups.length; i++){
        var currentGroup = groups[i];
        for(var j = 0; j < currentGroup.artLayers.length; j++){
            var currentGroup.artLayers[j].visible = false;
            layerList.push(currentGroup.artLayers[j]);      //turn layers' visibility off
        }
        currentGroup.visible = false;      //turn groups' visibility off
    }

    /*load .txt list file from D drive and turn the layers' visibily on according to the list*/
    var path = "D:\\";
    var layerNameList = [];
    layerNameList = loadList(layerNameList, path);

    for(var i = 0; i < layerNameList.length; i++){
        for(var j= 0; j < layerList.length; j++){
            if(layerList[j].name == layerNameList[i]){
                layerList[j].visible = true;
                layerList[j].parent.visible = true;
                layerList.splice(j,1);      //delet matched layer from list
            }
        }
    }

})();

function loadList(layerNameList, path){
    var fileName = "visibleList.txt";
    var listFile = new File(path + "\\" + fileName);
    if(!listFile.exists)    alert(fileName + " not found");
    listFile.open("r");
    while(!listFile.eof)
        layerNameList.push(listFile.readln());
        listFile.close();
        return layerNameList;
}