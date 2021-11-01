/*
Title: html functions
Date: 26/08/21
Author: Samuel Riches
 */

//go through each list element
var listObj = document.getElementsByTagName("li");
var i;



for (i = 0; i < listObj.length; i++){
    var span = document.createElement("SPAN");
    //\u00D7 is a x or a multiplication sign
    var txt = document.createTextNode("\u00D7")
    span.className = "close";
    span.appendChild(txt);
    listObj[i].appendChild(span);

}


//make a time object
function time(){
    d = new Date()
    d = d.toLocaleString("en-UK");
    document.getElementById("time").innerHTML = d;
}

//refresh the time object every second
setInterval(time, 1000);

// give the close button a function that closes the item that was clicked
var close = document.getElementsByClassName("close");
var c;
for( c = 0; c < close.length; c++){
    close[c].onclick = function(){
        var div = this.parentElement;
        div.style.display = "none";

    }
}



var list = document.querySelector("ul");
//this adds a event listener looking for a click event, then runs the function to see if it was a list object,
//then gives a the clicked object the checked class which changes the css to ul li.checked
list.addEventListener("click", function(ev){
    if(ev.target.tagName === 'LI'){
        ev.target.classList.toggle('checked');
    }
},false);


//need to add dom purify to stop sql inject or equivalent
function addButton(){
    var li = document.createElement('li');
    var iv = document.getElementById("inputVal").value;
    var txt = document.createTextNode(iv);
    li.appendChild(txt);
    if(iv === '') {
        alert('list is empty!');
    }
    else {
        document.getElementById('list').appendChild(li);
        document.getElementById("inputVal").value = '';
       
    }

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

}




