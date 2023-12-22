var btnLogin = document.getElementById('btnLogin');
var loginEmail = document.getElementById('loginEmail');
var loginPass = document.getElementById('loginPass');
var alert =  document.getElementById('alert');
var users = [];
if(localStorage.getItem('users')!=null){
    users = JSON.parse(localStorage.getItem('users'));
}

btnLogin.addEventListener('click',login);

function login(){
    var user = {
        email:loginEmail.value,
        pass:loginPass.value,
    }

    if(empty(user)){
        alert.children[0].classList.remove('d-none');
        alert.children[1].classList.add('d-none');
    } else if(search(user)){
        alert.children[0].classList.add('d-none');
        alert.children[1].classList.add('d-none');
    } else {
        alert.children[0].classList.add('d-none');
        alert.children[1].classList.remove('d-none');
    }
}

function empty(user){
    return (user.email&&user.pass)=='';
}

function search(user){
    for(var i=0;i<users.length;i++){
        if(users[i].email==user.email&&users[i].pass==user.pass){
            window.open(`./home.html?welcome=${users[i].name}`,'_blank"');
            return true;
        }
    }
    return false;
}