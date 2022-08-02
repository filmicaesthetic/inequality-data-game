// Parameter element should be a DOM Element object.
// Returns the rotation of the element in degrees.
function getRotationDegrees(element) {
    var el = document.getElementById(element);
    // get the computed style object for the element
    var style = window.getComputedStyle(el, null);
    // this string will be in the form 'matrix(a, b, c, d, tx, ty)'
    var tr = style.getPropertyValue('-webkit-transform') || 
                          style.getPropertyValue('-moz-transform') || 
                          style.getPropertyValue('transform') ;
    if (!tr || tr == 'none')
        return 0;

    var values = tr.split('(')[1],
        values = values.split(')')[0],
        values = values.split(',');

    var a = values[0]; 
    var b = values[1]; 
    var c = values[2]; 
    var d = values[3];

    var deg = Math.round(Math.asin(b) * (180/Math.PI));

    // var splits = transformString.split(',');
    // parse the string to get a and b
    // var parenLoc = splits[0].indexOf('(');
    // var a = parseFloat(splits[0].substr(9));
    // var b = parseFloat(splits[1]);
    // doing atan2 on b, a will give you the angle in radians
    // var rad = Math.atan2(b, a);
    // var deg = 180 * rad / Math.PI;
    // instead of having values from -180 to 180, get 0 to 360
    // if (deg < 0) deg += 360;
    return deg;
}

var ball = document.getElementById("ball");
var male = 0
document.getElementById("ms").innerHTML = Math.round(male);
var female = 0
document.getElementById("fs").innerHTML = Math.round(female);
var year = 0
document.getElementById("ys").innerHTML = Math.round(year);

function shoot(){
  let angle = (getRotationDegrees("shooter") + 30) / 30 * 250
  let perc = (30 - Math.abs(getRotationDegrees("shooter"))) / 30 * 100
    
  if(ball.classList != "animate"){
    document.documentElement.style
    .setProperty('--shoot-pos', angle + "px");
    ball.classList.add("animate");
    female += (perc * 575.459601731601) + 397.621933621956;
    document.getElementById("fs").innerHTML = Math.round(female);
    male += (perc * 659.930735930736) + 455.988455988474; 
    document.getElementById("ms").innerHTML = Math.round(male);
    year += 1
    document.getElementById("ys").innerHTML = Math.round(year);
  }
  setTimeout(function(){
    ball.classList.remove("animate");
  },500);
}



