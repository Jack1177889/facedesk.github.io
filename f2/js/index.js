
function annoy(){
var fname = prompt("tell me your name");

document.getElementById("annoy").innerHTML = "I am annoyed";

while(true){
alert(fname + " are we there yet?");
}

}

function mark_present()
{
   var cadet_name =  $('#cadet_name').val();
   alert(cadet_name+ " is here!");
   $('#present_cadets').append("<ul id = 'cadets_list'></ul>");
   $('#cadets_list').append("<li>"+cadet_name+"</li>");

}
/*
$(document).ready(function() {
    var flag = false;
    setInterval(function() {
        flag = !flag;
        $("body").css("background", flag ? "red" : "green");
        $("body").css("background", flag ? "green" : "red");
    }, 1000);

});
*/
$(document).ready(function() {
    var flag = 0
    var colors = ["red","green","white","gold","purple"]
    setInterval(function() {
        flag = flag + 1
        if(flag > colors.length){
            flag = 0
        }
        $("body").css("background", colors[flag]);

    }, 100);

});

















/*function annoy()
{
    alert("are we there yet?")
    alert("are we there yet?")
    alert("are we there yet?")
    
}



















function annoyHTML() {

    document.getElementById("annoy").innerHTML = "I am annoyed";
}*/
