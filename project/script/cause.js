import { causes } from "./causes.js";

const $ = (selector) => document.querySelector(selector);

const causeToCard = (cause) => {
    $('.title').textContent = cause.title;
    $('.description').textContent = cause.description;
    $('.target').textContent = `$${cause.goal}`;
    $('.raised').textContent = `$${cause.raised}`;
    $('.percentage').textContent = `${Math.round((cause.raised / cause.goal) * 100)}%`;
    $('.main-image').src = cause.image;
    $('.progress-achieved').style.width = `${(cause.raised / cause.goal) * 100}%`;

    if(cause.verified)
        $('.one').classList.add('verified');
    else
        $('.one').classList.remove('verified');

    $('.category').textContent = cause.category;
    $('.created').textContent = cause.created;
    $('.location').textContent = cause.location;
    $('.beneficiary').textContent = cause.beneficiary;

    $('.about-text').innerHTML = `<img src="${cause.image}" alt="" class="about-image">` + cause.about;
}

const cause = causes.find(cause => cause.id === parseInt(new URLSearchParams(window.location.search).get("id")));

if(cause)
    causeToCard(cause);
else
    alert("Cause not found!");