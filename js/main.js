
var btnSignUp = document.getElementById('btnSignUp');
var userName = document.getElementById('sinupName');
var userEmail = document.getElementById('sinupEmail');
var userPass = document.getElementById('sinupPass');
var alert =  document.getElementById('alert');
var users = [];

if(localStorage.getItem('users')!=null){
    users = JSON.parse(localStorage.getItem('users'));
}

userName.addEventListener('keyup',validName);
userEmail.addEventListener('keyup',validEmail);
userPass.addEventListener('keyup',validPass);
btnSignUp.addEventListener('click',signUp);

function signUp(){
    var user = {
        name:userName.value,
        email:userEmail.value,
        pass:userPass.value,
    }

    if(empty(user)){
        hide(alert);
        alert.children[1].classList.remove('d-none');
    } else if(find(user.email)){
        hide(alert);
        alert.children[2].classList.remove('d-none');
    } else {
        hide(alert);
        alert.children[0].classList.remove('d-none');
        if(allValidate()){
            addUser(user);
        }
    }
}

function addUser(user){
    users.push(user);
    localStorage.setItem('users',JSON.stringify(users));
}

function hide(el){
    for(var i=0;i<el.children.length;i++){
        el.children[i].classList.add('d-none');
    }
}

function find(email){
    for(var i=0;i<users.length;i++){
        if(users[i].email == email){
            return true;
        }
    }
    return false;
}

function empty(user){
    return (user.name&&user.email&&user.pass)=='';
}

function valid(el){
    el.classList.remove('is-invalid');
    el.classList.add('is-valid');
}

function inValid(el){
    el.classList.remove('is-valid');
    el.classList.add('is-invalid');
}

function validName(){
    var name = userName.value;
    var regex = /^[a-zA-Z]{2,}[0-9]{0,}/;
    if(regex.test(name)){
        valid(this);
    } else {
        inValid(this);
    }
}

function validEmail(){
    var email = userEmail.value;
    var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ ;
    if(regex.test(email)){
       valid(this);
    } else {
        inValid(this);
    }
}

function validPass(){
    var pass = userPass.value;
    var regex = /\w{6,}/;
    if(regex.test(pass)){
        valid(this);
    } else {
        inValid(this);
    }
}

function allValidate(){
    var name = userName.value;
    var email = userEmail.value;
    var pass = userPass.value;
    var regexName = /^[a-zA-Z]{2,}[0-9]{0,}/;
    var regexEmail =  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    var regexPass = /\w{6,}/;

    return regexName.test(name)&& regexEmail.test(email)&&regexPass.test(pass);
    
}


