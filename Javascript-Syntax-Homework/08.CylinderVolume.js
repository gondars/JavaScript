/**
 * Created by gondarslol on 7/15/2014.
 */
function calcCylinderVol(r,h) {
    return (Math.PI*r*r*h).toFixed(3);
}
console.log(calcCylinderVol(2,4));
console.log(calcCylinderVol(5,8));
console.log(calcCylinderVol(12,3));