const $ = (selector) => document.querySelector(selector);

const addGlobalEventListener = (event, selector, cb) =>{
    document.addEventListener(event, (e) => {
        if(e.target.matches(selector)){
            cb(e);
        }
    });
}

const cause = JSON.parse(window.localStorage.getItem("cause"));

if(cause){
    document.querySelector(".cause .title").textContent = cause.title;
    document.querySelector(".cause img").src = cause.image;
    document.querySelector(".cause .category").textContent = cause.category;
}
else window.location.href = "home.html";

let errors = [];    
$('form').addEventListener('submit', (e) => {
    e.preventDefault();

    if (!$('.methods button.active'))
        errors.push("Please select a payment method.");
    
    if ($('#news').checked && ( $('#email').value=='' || !$('#email').checkValidity()))
        errors.push("Please enter a valid email address to receive news updates.");
    
    if(errors.length > 0){
        $('.error-message').innerHTML = errors.join('<br>');
        errors = [];
    }
    else{
        $('.error-message').innerHTML = '';
        alert("Thank you for your donation!");
    }
});

$('#amount').addEventListener('change', (e) => {
    $('.amounts button.active')?.classList.remove('active');
});

addGlobalEventListener('click', '.amounts button', (e) => {
    const amount = e.target.innerText.slice(1) + '.00';
    $('.amounts button.active')?.classList.remove('active');
    e.target.classList.add('active');

    $('#amount').value = amount;
});

addGlobalEventListener('click', '.methods button', (e) => {
    $('.methods button.active')?.classList.remove('active');
    e.target.classList.add('active');
});




