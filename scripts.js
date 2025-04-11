function validateForm(){
    let name= document.getElementById("name").value;
    let email= document.getElementById("email").value;
    let password= document.getElementById("pass").value;

    let nameError=document.getElementById("nameError");
    let emailError=document.getElementById("emailError");
    let passError = document.getElementById("passError");

    nameError.innerText="";
    emailError.innerText="";
    passError.innerText="";

    let isvalid= true;
    let emailpatter=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(name==="")
    {
        nameError.innerText="* Name Required";
        isvalid=false;
    }
    if(!emailpatter.test(email))
    {
        emailError.innerText="* Required valid email";
        isvalid=false;

    }
    if(password.length < 8)
    {
        passError.innerText="* Pasword should be minimum 8 digits";
        isvalid=false;

    }

    return isvalid;
}