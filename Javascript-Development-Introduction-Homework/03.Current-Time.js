var currentDate = new Date();
var hours = currentDate.getHours();
var minutes = currentDate.getMinutes();
if(minutes<10){
    console.log(hours+":0"+minutes);
}
else{
    console.log(hours+":"+minutes);
}