// Multi step form design - 2101
const next1 = document.getElementById("next1");
const next2 = document.getElementById("next2");
const back1 = document.getElementById("back1");
const back2 = document.getElementById("back2");

const form1 = document.getElementById('form1');
const form2 = document.getElementById('form2');
const form3 = document.getElementById('form3');





next1.onclick = () => {    
    form1.style.left = '-175px';
    form2.style.left = '150px';

}
back1.onclick = () => {    
    form1.style.left = '150px';
    form2.style.left = '475px';
}
next2.onclick = () => {    
    form2.style.left = '-175px';
    form3.style.left = '150px';
}
back2.onclick = () => {    
    form2.style.left = '150px';
    form3.style.left = '475px';

}


// Multi step form design - 2101
