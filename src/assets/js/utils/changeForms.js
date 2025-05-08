export default function changeForms(showLogin = false) {
    const register = document.getElementById('register-section');
    const login = document.getElementById('login-section');
    const containerRow = document.querySelector('.row');

    if (showLogin) {
        register.classList.add('d-none');
        containerRow.classList.remove('d-none');
        // document.querySelector('.divSuccess').remove();
        login.classList.remove('d-none');
    } else {
        register.classList.remove('d-none');
        login.classList.add('d-none');
    }
}