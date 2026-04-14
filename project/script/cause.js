import { causes } from "./causes.js";

const $ = (selector) => document.querySelector(selector);

const causeToCard = (cause) => {
    $('.title').textContent = cause.title;
    $('.description').textContent = cause.description;
    $('.target').textContent = `$${cause.goal}`;
    $('.raised').textContent = `$${cause.raised}`;
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

    $('.about img').src = cause.image;
    $('.about div').innerHTML += cause.about;
    $('.donate').addEventListener('click', () => {
        window.localStorage.setItem("cause", JSON.stringify(cause));
        window.location.href = `payment.html?id=${cause.id}`
    });
}

const cause = causes.find(cause => cause.id === parseInt(new URLSearchParams(window.location.search).get("id")));

if(cause)
    causeToCard(cause);
else
    alert("Cause not found!");