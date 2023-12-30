var signupName = document.getElementById('signupName');
var signupEmail = document.getElementById('signupEmail');
var signupPassword = document.getElementById('signupPassword');
var signinEmail = document.getElementById('signinEmail');
var signinPassword = document.getElementById('signinPassword');
var message = document.getElementById('message');
var login = document.getElementById('login');

var username = localStorage.getItem('sessionUsername');



// var Name = signinEmail.value; 
// console.log(signinEmail.value)
function isempty(){
    if (signinPassword.value == "" || signinEmail.value == "") { //empty
        // return false;
        // all input is erquired
        document.getElementById('message').innerHTML = 'All inputs is required';
        // alert('All inputs is required')
        
    } else { //not empty
        // validEmail();
        // isExist();
        isExist();
        // validEmail()
    }

}

// var username = localStorage.getItem('users')
// if (username) {
//     document.getElementById('welcomUser').innerHTML = "Welcome " + username
// }

var signUpArray = []
if (localStorage.getItem('users') == null) {
    signUpArray = []
} else {
    signUpArray = JSON.parse(localStorage.getItem('users'))
}
function signUp(){
    var signUp = {
        name: signupName.value,
        email: signupEmail.value,
        password: signupPassword.value,
    }
    // validEmail();
    var nameRegex = /^[a-z0-9]{1,10}(@yahoo.com)$/;
    console.log(signupEmail.value);
    var x = nameRegex.test(signupEmail.value);
    if(x==true) {
        signUpArray.push(signUp);
        localStorage.setItem('users', JSON.stringify(signUpArray))
        document.getElementById('messageup').innerHTML = 'Success';
        console.log(signUpArray);
    }
    else {
        document.getElementById('messageup').innerHTML = 'Invalid email';
    }

}

function validEmail(){
    var nameRegex = /^[a-zA-Z0-9](@yahoo.com)$/;
    var x = nameRegex.test(signupEmail.value);
    if(x==false) {
        document.getElementById('message').innerHTML = 'Invalid email';
    }
    else {
            for ( var i=0;i<signUpArray.length;i++) {
        if(signinEmail.value == signUpArray[i].email && signinPassword.value == signUpArray[i].password) {
            window.location = './welcome.html'
            document.getElementById('welcomUser').innerHTML = `${signinEmail}`;
            break;
            // return true;
        }
        else {
            document.getElementById('message').innerHTML = 'incorrect email or password';
        }
    }
        signUpArray.push(signUp);
        localStorage.setItem('users', JSON.stringify(signUpArray))
        console.log(signUpArray)
    }
}



function isExist(){
    for ( var i=0;i<signUpArray.length;i++) {
        if(signinEmail.value == signUpArray[i].email && signinPassword.value == signUpArray[i].password) {
            window.location = './welcome.html'
            document.getElementById('welcomUser').innerHTML = `${signinEmail}`;
            break;
            // return true;
        }
        else {
            document.getElementById('message').innerHTML = 'incorrect email or password';
        }
    }
}
