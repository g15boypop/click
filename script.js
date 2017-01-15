var posleft = 0;
var posright = 0;

function moveright(){
  // alert("tu as clické");
  var mydiv = document.getElementById("diiv");
  // mydiv.style.left = "50px";
  posleft += 50;
  mydiv.style.left = posleft + "px";
  var color =      [ "blue",
                    "orange",
                    "pink",
                    "red",
                    "green",
                    "violet"
                   ];
  var i = Math.floor(Math.random()*6);
  document.getElementById("diiv").style.backgroundColor = color[i];
}

function moveleft(){
  var madiv = document.getElementById("diiv");
  posright += 50;
  madiv.style.right = posright + "px";
  var color =      [ "blue",
                    "orange",
                    "pink",
                    "red",
                    "green",
                    "violet"
                   ];
  var i = Math.floor(Math.random()*6);
  document.getElementById("diiv").style.backgroundColor = color[i];

}
