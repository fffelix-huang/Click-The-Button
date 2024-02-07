let totalClick = localStorage.getItem('click-count') || 0n;
let totalMoney = localStorage.getItem("money-count") || 0n;

window.onload = () => {
    const clickCounter = document.getElementById("click-count");
    clickCounter.textContent = `Total Click: ${totalClick}`;

    const moneyCounter = document.getElementById("money-count");
    moneyCounter.textContent = `${totalMoney}$`
};

const clickCounter = document.getElementById("click-count");
const moneyCounter = document.getElementById("money-count");
const mainButton = document.getElementById("main-button");

mainButton.onclick = () => {
    totalClick++;
    totalMoney++;
    clickCounter.textContent = `Total Click: ${totalClick}`;
    moneyCounter.textContent = `${totalMoney}$`;
    localStorage.setItem('click-count', totalClick);
    localStorage.setItem('money-count', totalMoney);
};
