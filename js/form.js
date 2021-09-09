const salary = document.querySelector('#salary');
const output = document.querySelector('.output-class');
output.textContent = output.value;
salary.addEventListener('input',function(){
    output.textContent = salary.value;
}) ;

const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');
text.oninput = function() {
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
    if (nameRegex.test(text.value)) {
        textError.textContent="";
    } else {
        textError.textContent = "Name is Incorrect";
    }
};

const password = document.querySelector('#pwd');
const passwordError = document.querySelector('.password-error');
pwd.addEventListener('input',function(){ 
    let passwordRegex = RegExp('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$');
    if(passwordRegex.test(password.value)) 
        passwordError.textContent = "";
    else
        passwordError.textContent = "Enter a valid password with atleast 1 uppercase, 1 lowercase, one symbol, one number and minimum 8 characters";
});

const tel = document.querySelector('#tel');
const telError = document.querySelector('.tel-error');
tel.addEventListener('input',function(){
    let telRegex = RegExp('^([+]{0,1}[0-9]{2,4}\\s{0,1})([0-9]{10})$');
    if(telRegex.test(tel.value)) 
        telError.textContent = "";
    else
        telError.textContent = "Enter a valid 10 digit number with country code";
});

const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');
email.addEventListener('input',function(){ 
    let emailRegex = RegExp(('^[0-9a-zA-Z]+([._+-][0-9a-zA-Z]+)*@([0-9a-zA-Z][-]?)+[.][a-zA-Z]{2,4}([.][a-zA-Z]{2,4})?$'));
    if(emailRegex.test(number.value)) 
        emailError.textContent = "";
    else
        emailError.textContent = "Enter a valid email";
});

