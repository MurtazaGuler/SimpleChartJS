function SimpleChart(id,x,color,line){
          if(color==""){
                    color = "0,0,0";
          }
          const c = document.getElementById(id);
          var h = c.offsetHeight;
          var w = c.offsetWidth;
          var x = norm(x);
          var data = "";
          for (var i = 0; i < x.length; i++) {
                    data = data + (w/x.length)*i + "," + (h-(x[i]*h)) + " ";
          }
          var ch = "<svg style='width:100%; height:100%;'><polyline points='" + data + "' style='fill:none;stroke:rgb(" + color + ");stroke-width:" + line + "' /></svg>";
          c.innerHTML = ch;
}
function norm(array){
          var min = Math.min(...array);
          var max = Math.max(...array);
          var normalizedArray = array.map(function(value) {
                    return (value - min) / (max - min);
          });
          return normalizedArray;
}