# setLayerVisibility
Some further thinking while writing the code to flatten layers years ago.<br>

This very beginning edition only works for the basic layer structure.<br>
PS file<br>
  |_ LayerSet_1<br>
&nbsp;&nbsp;|_ layer_1<br>
&nbsp;&nbsp;|_ layer_2<br>
&nbsp;&nbsp;...<br>
  |_ LayerSet_2<br>
&nbsp;&nbsp;|_ layer_1<br>
&nbsp;&nbsp;...<br>
  |_ LayerSet_3<br>
&nbsp;&nbsp;|_ layer_1<br>
&nbsp;&nbsp;...<br>
  .<br>
  .<br>
  .<br>

If multiple layers have the samme name in either same or different layerSet, then the visibility will set for them all.<br>
Also this first edition does not effect on those layers doesn't put inside the layerSet.<br>
Due to no GUI feature, the text(.txt) file need to be located in the path written in the code.
