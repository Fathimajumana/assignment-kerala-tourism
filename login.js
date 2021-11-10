
const email = document.getElementById("email");
const pwd = document.getElementById("pwd");
const form= document.getElementById("form");

email.addEventListener('input',()=>{
    const emailBox = document.querySelector('.emailBox');
    const emailText = document.querySelector('.emailText');
    const emailPattern =/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;

    if(email.value.match(emailPattern)){
        emailBox.classList.add('valid');
        emailBox.classList.remove('invalid');
        emailText.innerHTML="your email address is valid";
        valid = true;
    }else{
        emailBox.classList.add('invalid');
        emailBox.classList.remove('valid');
        emailText.innerHTML="Must be a valid email address";
        valid = false;
    }

});

pwd.addEventListener('input',()=>{
    const passBox = document.querySelector('.passBox');
    const passText = document.querySelector('.passText');
    const passPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

    if(pwd.value.match(passPattern)){
        passBox.classList.add('valid');
        passBox.classList.remove('invalid');
        passText.innerHTML="your password is valid";
        return "true";
    }else{
        passBox.classList.add('invalid');
        passBox.classList.remove('valid');
        passText.innerHTML="your password must be atleast 8 characters as well as contain atleast one uppercase,one lowercase and one number.";
        return "false";
    }

});



