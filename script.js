const users = {
    'ADMIN': { password: '', isAdmin: true, isLocked: false },
    'user1': { password: 'User1Password', isAdmin: false, isLocked: false },
};

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginError = document.getElementById('login-error');

    if (users[username]) {
        if (users[username].isLocked) {
            loginError.innerText = 'Обліковий запис заблоковано.';
            return;
        }

        if (users[username].password === password) {
            loginError.innerText = '';
            document.getElementById('login-form').style.display = 'none';
            if (users[username].isAdmin) {
                document.getElementById('admin-panel').style.display = 'block';
            } else {
                document.getElementById('user-panel').style.display = 'block';
            }
        } else {
            loginError.innerText = 'Невірний пароль.';
        }
    } else {
        loginError.innerText = 'Користувача не знайдено.';
    }
}

function logout() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'block';
    document.getElementById('admin-panel').style.display = 'none';
    document.getElementById('user-panel').style.display = 'none';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('new-username').value = '';
    document.getElementById('new-password').value = '';
}

function registerUser() {
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;
    const registerError = document.getElementById('register-error');

    // Перевірка на наявність імені користувача
    if (users[newUsername]) {
        registerError.innerText = 'Користувач з таким ім\'ям вже існує.';
        return;
    }

    // Додавання нового користувача
    users[newUsername] = { password: newPassword, isAdmin: false, isLocked: false };
    registerError.innerText = '';
    alert('Користувача зареєстровано!');
    document.getElementById('new-username').value = '';
    document.getElementById('new-password').value = '';
    document.getElementById('register-form').style.display = 'none';
}

function changePassword() {
    const newPassword = prompt('Введіть новий пароль адміністратора:');
    if (newPassword) {
        users['ADMIN'].password = newPassword;
        alert('Пароль адміністратора змінено!');
    }
}

function addUser() {
    const newUsername = prompt('Введіть ім\'я нового користувача:');
    const newPassword = prompt('Введіть пароль для нового користувача:');
    if (newUsername && newPassword) {
        users[newUsername] = { password: newPassword, isAdmin: false, isLocked: false };
        alert('Користувача додано!');
    }
}

function blockUser() {
    const usernameToBlock = prompt('Введіть ім\'я користувача для блокування:');
    if (users[usernameToBlock]) {
        users[usernameToBlock].isLocked = true;
        alert('Користувача заблоковано!');
    } else {
        alert('Користувача не знайдено.');
    }
}

function changeUserPassword() {
    const newPassword = prompt('Введіть новий пароль:');
    if (newPassword) {
        users['user1'].password = newPassword;
        alert('Пароль змінено!');
    }
}