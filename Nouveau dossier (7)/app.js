const btnValideValue = document.getElementById('btn-valide');
const emailValue = document.getElementById('email');
const passwordValue = document.getElementById('password');
const chekboxs = document.querySelectorAll('input[type="checkbox"]');
const ville = document.getElementById('ville');
//regex
const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
const passwordRegex = /^[0-9]{2}[a-z]{8}$/;
const errurs = document.getElementById('j1');
let count = 0;

// function animated() {
//     $("#j1").animate({ width: "20px" }, 1000);
// }
btnValideValue.addEventListener('click', function(e) {
    count = 0;
    e.preventDefault();
    //validation email
    if (!emailValue.value) {

        errurs.textContent = 'entre your email';
        // animated();
    } else {
        if (emailRegex.test(emailValue.value)) {
            errurs.textContent = '';
        } else {
            console.log('noooo email');
        }
    }
    //validation password

    if (!passwordValue.value) {
        errurs.textContent = 'entre your password';
    } else {
        if (passwordRegex.test(passwordValue.value)) {
            errurs.textContent = '';
        } else {
            console.log('noooo pass');
        }
    }

    //validation filier

    for (var i = 0; i < chekboxs.length; i++) {
        if (chekboxs[i].checked) {
            count++;
        }
    }
    if (count > 0) {
        console.log(count + " CheckBoxe(s) are checked.");

    } else {

        errurs.innerHTML = 'Please select CheckBoxe(s).';
    }




    //validation ville

    const villes = ville.options[ville.selectedIndex];
    console.log(villes === 0);


})