// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.0/firebase-app.js";
import { getAuth } from 'https://www.gstatic.com/firebasejs/11.7.0/firebase-auth.js';

import changeForms from "./utils/changeForms.js";
import { signInUser, signUpUser } from "./utils/signFunctions.js";

function init() {
    const firebaseConfig = {
    apiKey: "AIzaSyBdco4-CaInJfqwotqW0LnYoIEcBdXLy14",
    authDomain: "calendarioescolar-ce916.firebaseapp.com",
    projectId: "calendarioescolar-ce916",
    storageBucket: "calendarioescolar-ce916.firebasestorage.app",
    messagingSenderId: "595884408523",
    appId: "1:595884408523:web:f62ebb323ee32cb839254e"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    events(auth);
}

function events(auth) {
    handleSubmit(auth);
    handleSignButton();
}

function handleSubmit(auth) {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', e => {
            e.preventDefault();
    
            const email = form.querySelector('.email').value.trim();
            const password = form.querySelector('.password').value.trim();

            if (!email || !password) {
                alert('Preencha todos os campos!');
                return;
            }
    
            if (form.classList.contains('formRegister')) signUpUser(auth, email, password);
            if (form.classList.contains('formSignIn')) signInUser(auth, email, password);
        });
    })
}

function handleSignButton() {
    const redirectBtn = document.querySelectorAll('.btn-go');

    redirectBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.classList.contains('login')) changeForms(true);
            if (btn.classList.contains('register')) changeForms(false);
        });
    })
}

init();
// Your web app's Firebase configuration
