document.querySelector("#menuToggle").addEventListener("click", () => {
    document.querySelector("header nav").classList.toggle("open");

    if (document.querySelector("header nav").classList.contains("open"))
        document.querySelector("header #menuToggle").innerText = 'X';
    else
        document.querySelector("header #menuToggle").innerText = '☰';
});