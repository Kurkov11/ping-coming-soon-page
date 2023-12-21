function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

document.getElementById('notify-btn').onclick = function(){
    if(! isEmail(document.getElementById('form-input').value)){
        document.getElementById('form-input').style.border = 'red solid 1px';
        document.getElementById("error-msg").style.display = 'block';
    }
}