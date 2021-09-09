const login = () => {
    const user = document.getElementById('user').value;
    const passwordField = document.getElementById('psd');
    const psd = passwordField.value; 
    if(user ==='md.mominb@yahoo.com' && psd === '1234'){
        window.location.href = "banking.html";
    }
    else{
        document.getElementById('error').innerText = 'Please enter correct user/password!'
    }
    
    passwordField.value = '';
}