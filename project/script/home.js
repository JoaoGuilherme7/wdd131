import { causes } from "./causes.js";

const causeToCard = (cause) => {

    const progress = (cause.raised / cause.goal) * 100;

    return (`
        <a href="cause.html?id=${cause.id}">
            <div class="card ${cause.verified ? "verified" : ""}">
                <img src="${cause.image}" alt="${cause.title}">
                <h2 class="title">${cause.title}</h2>
                <p class="description">${cause.short_description}</p>
                    
                <div class="progress-bar">
                    <div class="progress-achieved" style="width: ${progress}%">
                    </div>
                </div>                    
                <p class="progress-values">
                    <span class="raised">$ ${cause.raised.toFixed(2)}</span>
                    /
                    <span class="target">$ ${cause.goal.toFixed(2)}</span>
                </p>
                <button>See Details</button>
            </div>
        </a>
    `);
}

document.querySelector(".cards").innerHTML = causes.map(causeToCard).join("");    