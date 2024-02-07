let totalClick = BigInt(localStorage.getItem("click-count") || 0n);
let totalMoney = BigInt(localStorage.getItem("money-count") || 0n);
let moneyPerClick = BigInt(localStorage.getItem("money-per-click") || 1n);
let moneyPerSecond = BigInt(localStorage.getItem("money-per-second") || 0n);

window.onload = () => {
    const clickCounter = document.getElementById("click-count");
    clickCounter.textContent = `Total Click: ${totalClick}`;

    const moneyCounter = document.getElementById("money-count");
    moneyCounter.textContent = `$${totalMoney}`

    const mpc = document.getElementById("money-per-click");
    mpc.textContent = `$${moneyPerClick} / Click`;

    const mps = document.getElementById("money-per-second");
    mps.textContent = `$${moneyPerSecond} / Second`;
};

const clickCounter = document.getElementById("click-count");
const moneyCounter = document.getElementById("money-count");
const mainButton = document.getElementById("main-button");

mainButton.onclick = () => {
    totalClick++;
    totalMoney += moneyPerClick;
    clickCounter.textContent = `Total Click: ${totalClick}`;
    moneyCounter.textContent = `$${totalMoney}`;
    localStorage.setItem("click-count", totalClick);
    localStorage.setItem("money-count", totalMoney);
};

setInterval(() => {
    totalMoney += moneyPerSecond;
    moneyCounter.textContent = `$${totalMoney}`;
    localStorage.setItem("money-count", totalMoney);
}, 500);