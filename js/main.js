
var btnSignUp = document.getElementById('btnSignUp');
var userName = document.getElementById('sinupName');
var userEmail = document.getElementById('sinupEmail');
var userPass = document.getElementById('sinupPass');
var alert =  document.getElementById('alert');
var users = [];

if(localStorage.getItem('users')!=null){
    users = JSON.parse(localStorage.getItem('users'));
}

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
        addUser(user);
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