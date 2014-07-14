/**
 * Created by gondarslol on 7/13/2014.
 */
function calcCircleArea(r) {
    return r*r*Math.PI;
}

document.getElementById(7).innerHTML = calcCircleArea(7);
document.getElementById(1.5).innerHTML = calcCircleArea(1.5);
document.getElementById(20).innerHTML = calcCircleArea(20);