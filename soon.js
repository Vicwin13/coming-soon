
let action = document.getElementById("arrow");


function validate() {

 let text = document.getElementById("emails").value;

 let RegEx = / ^ ([a-zA-Z0-9-\.]+)@([a-zA-Z0-9-]+).([a-z]{2,6})(.[a-z]{2,6})?$/

 if (text.match(RegEx))
 {
    
    document.getElementById("error").innerHTML="Valid";
    document.getElementById("error").style.color= "green";
 }
 else{
     document.getElementById("error").innerHTML="Invalid"
     document.getElementById("err").style.visibility="visible";
 }
}

action.addEventListener("click", validate());

