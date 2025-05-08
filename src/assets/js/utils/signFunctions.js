import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'https://www.gstatic.com/firebasejs/11.7.0/firebase-auth.js';

import createDivMessage from "./createElements.js";
import changeForms from "./changeForms.js";

export function signUpUser(auth, email, password) {
    createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
        changeForms(true);
        alert('Usuário cadastrado com sucesso!');
    })
    .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
            alert('E-mail já cadastrado');
        }
    });
}

export function signInUser(auth, email, password) {
    signInWithEmailAndPassword(auth, email, password)
    .then(userCredentials => {
        createDivMessage(auth, `Seja bem-vindo(a)! <br> E-mail cadastrado: ${userCredentials.user.email}`, document.querySelector('.container'));
    })
    .catch(error => { 
        if (error.code === 'auth/invalid-credential') {
            alert('E-mail ou senha incorretos!');
        }
    });
}

export function signOutUser(auth) {
    signOut(auth)
    .then(() => {
        changeForms(true);
        console.log('saiuuu');
    })
    .catch(() => {
        alert('Ocorreu um erro ao sair, tente novamente!');
    });
}