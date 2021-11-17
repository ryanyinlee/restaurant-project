function letMeIn() {
    for (let i = 0; i < 3; i += 1) {
        let passWord = prompt('Password:');
        if (passWord == 'toastys') {
            location = 'manage.html';
            break;
        } else if (i < 2) {
            alert('Wrong Password');
        } else {
            alert('Access Restricted');
            location = 'index.html';
        }
    }
}

letMeIn();