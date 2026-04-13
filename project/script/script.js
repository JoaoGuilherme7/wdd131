import { causes } from "./cases.js";


const causeToCard = (cause) => {

    const progress = (cause.raised / cause.goal) * 100;

    return (`
        <div class="card">
            <img src="${cause.image}" alt="${cause.title}">
            <h2>${cause.title}</h2>
            <p class="description">${cause.short_description}</p>
                
            <div class="progress-bar">
                <div class="progress-achieved" style="width: ${progress}%">
                </div>
            </div>                    
            <p>
                <span class="collected">$ ${cause.raised.toFixed(2)}</span>
                /
                <span class="target">$ ${cause.goal.toFixed(2)}</span>
            </p>
            <button>See Details</button>
        </div>
        `)
}

document.querySelector(".cards").innerHTML = causes.map(causeToCard).join("");
    