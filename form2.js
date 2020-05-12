//Variables
const firstNameLabel = document.getElementById('fname');
const lastNameLabel = document.getElementById('lname');
const emailLabel = document.getElementById('email');
const passwLabel = document.getElementById('password');

const errorFname = document.getElementById('errorFname');
const errorLname = document.getElementById('errorLname');
const errorEmail = document.getElementById('errorEmail');
const errorPassword = document.getElementById('errorPassword');

//Check out if inputs are full 
events();

function events() {
    document.addEventListener('DOMContentLoaded', inicioApp);
    firstNameLabel.addEventListener('blur', chequeoFirstName); 
    lastNameLabel.addEventListener('blur', chequeoLastName);
    emailLabel.addEventListener('blur', chequeoEmail);
    passwLabel.addEventListener('blur', chequeoPassword);
}
//Inicio de apps sin msjs de error
function inicioApp() {
    errorFname.style.display = 'none';
    firstNameLabel.classList.remove('error_icon');
    errorLname.style.display = 'none';
    lastNameLabel.classList.remove('error_icon');
    errorEmail.style.display = 'none';
    emailLabel.classList.remove('error_icon');
    errorPassword.style.display = 'none';
    passwLabel.classList.remove('error_icon');
}
//Si los input estan vacios, cambiar border-color del input + icono 'x' + 
//saltar msj de error
function chequeoFirstName() {

	if (firstNameLabel.value.length > 0) {
        firstNameLabel.style.borderColor = 'black';
        errorFname.style.display = 'none';
        firstNameLabel.classList.remove('error_icon');
    } else {
        firstNameLabel.style.borderColor = '#FA8072';
        errorFname.style.display = 'block';
        firstNameLabel.classList.add('error_icon');
    }
}
function chequeoLastName() {
    
    if (lastNameLabel.value.length > 0) {
        lastNameLabel.style.borderColor = 'black';
        errorLname.style.display = 'none';
        lastNameLabel.classList.remove('error_icon');
    } else {
    	lastNameLabel.style.borderColor = '#FA8072';
    	errorLname.style.display = 'block';
    	lastNameLabel.classList.add('error_icon');
    }
}
function chequeoEmail() {

	if (emailLabel.value.indexOf('@') !== -1 ) {
        emailLabel.style.borderColor = 'black';
        errorEmail.style.display = 'none';
        emailLabel.classList.remove('error_icon');
    } else {
    	emailLabel.style.borderColor = '#FA8072';
    	errorEmail.style.display = 'block';
    	emailLabel.classList.add('error_icon');
    }
}
function chequeoPassword() {

	if (passwLabel.value.length > 0) {
        passwLabel.style.borderColor = 'black';
        errorPassword.style.display = 'none';
        passwLabel.classList.remove('error_icon');
    } else {
    	passwLabel.style.borderColor = '#FA8072';
    	errorPassword.style.display = 'block';
    	passwLabel.classList.add('error_icon');
    }
}