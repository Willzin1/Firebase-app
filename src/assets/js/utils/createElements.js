import { signOutUser } from "./signFunctions.js";

export default function createDivMessage(auth, message, container) {
    const newDiv = document.createElement('div');
    const newP = document.createElement('p');
    const containerRow = document.querySelector('.row');

    newP.innerHTML = message;
    
    containerRow.classList.add('d-none');
    newDiv.classList.add('alert', 'alert-success', 'mt-4', 'divSuccess', 'mx-auto', 'text-center', 'shadow');
    newDiv.style.maxWidth = '600px';

    newDiv.appendChild(newP);
    newDiv.appendChild(createLogoutButton(auth));

    container.appendChild(newDiv);
}

function createLogoutButton(auth) {
    const logoutButton = document.createElement('button');

    logoutButton.textContent = "Sair";
    logoutButton.classList.add('btn', 'btn-danger', 'mt-2', 'btnLogout');

    logoutButton.addEventListener('click', () => {
        signOutUser(auth);
        document.querySelector('.divSuccess').remove();
    });

    return logoutButton;
}
