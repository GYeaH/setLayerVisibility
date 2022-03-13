# setLayerVisibility
Some further thinking while writing the code to flatten layers years ago.

This very beginning edition only works for the basic layer structure.
|_ LayerSet_1
  |_ layer_1
  |_ layer_2
  ...
|_ LayerSet_2
  |_ layer_3
  ...
|_ LayerSet_3
  |_ layer_4
  ...
.
.
.

If multiple layers have the samme name in either same or different layerSet, then the visibility will set for them all.
Also this first edition does not effect on those layers doesn't put inside the layerSet.
Due to no GUI feature, the text(.txt) file need to be located in the path written in the code.
