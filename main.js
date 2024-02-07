window.onload = () => {
    let totalClick = localStorage.getItem("click-count") || 0;
    const counter = document.getElementById("click-count");
    counter.textContent = totalClick;
};

let totalClick = localStorage.getItem('click-count') || 0n;

const counter = document.getElementById("click-count");
const mainButton = document.getElementById("main-button");

mainButton.onclick = () => {
    totalClick++;
    counter.textContent = totalClick;
    localStorage.setItem('click-count', totalClick);
};
