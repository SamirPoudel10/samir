function CHECK(){
let uname=document.getElementById("username").value;
let pass=document.getElementById("password").value;
if(uname.length==0){
    alert("Username Field is empty");
}
else if(pass.length< 8){
    alert("password is less than 8 characters");
}
else{
    location.replace
    ("userdashboard.html");

}

}
