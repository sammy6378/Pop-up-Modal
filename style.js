const flex = document.querySelector('.text');
const submit = document.getElementById('submit');
const ok = document.querySelector('.btn');


function modal(){
   flex.classList.add('show-div');
}

function okay(){
    flex.classList.remove('show-div');
}


submit.addEventListener('click',modal);

ok.addEventListener('click',okay);
