let totalClick = BigInt(localStorage.getItem("click-count") || 0n);
let totalMoney = BigInt(localStorage.getItem("money-count") || 0n);
let moneyPerClick = BigInt(localStorage.getItem("money-per-click") || 1n);
let moneyPerSecond = BigInt(localStorage.getItem("money-per-second") || 0n);

const clickCounter = document.getElementById("click-count");
const moneyCounter = document.getElementById("money-count");
const mpc = document.getElementById("money-per-click");
const mps = document.getElementById("money-per-second");

const updateScreen = () => {
    clickCounter.textContent = `Total Click: ${totalClick}`;
    moneyCounter.textContent = `$${totalMoney}`
    mpc.textContent = `$${moneyPerClick} / Click`;
    mps.textContent = `$${moneyPerSecond} / Second`;
};

window.onload = updateScreen;

const restartButton = document.getElementById("restart-button");

restartButton.onclick = () => {
    totalClick = 0n;
    totalMoney = 0n;
    moneyPerClick = 1n;
    moneyPerSecond = 0n;
    localStorage.clear();
    localStorage.setItem("money-per-click", 1n);
    updateScreen();
};

const mainButton = document.getElementById("main-button");

mainButton.onclick = () => {
    totalClick++;
    totalMoney += moneyPerClick;
    localStorage.setItem("click-count", totalClick);
    localStorage.setItem("money-count", totalMoney);
    updateScreen();
};

setInterval(() => {
    totalMoney += moneyPerSecond;
    localStorage.setItem("money-count", totalMoney);
    updateScreen();
}, 1000);

let items = document.getElementById("item-container").querySelectorAll(".item");

items.forEach((e) => {
    e.onclick = () => {
        let cost = 0n;
        for(let i = 0; i < e.children.length; i++) {
            if(e.children[i].className == "buy-button") {
                cost = BigInt(e.children[i].textContent.substr(1));
                break;
            }
        }
        if(cost > totalMoney) {
            return;
        }
        totalMoney -= cost;
        localStorage.setItem("money-count", totalMoney);
        let content = e.id;
        let increment = BigInt(content.substr(0, content.length - 3));
        if(content[content.length - 1] == 'c') {
            moneyPerClick += increment;
            localStorage.setItem("money-per-click", moneyPerClick);
        } else {
            moneyPerSecond += increment;
            localStorage.setItem("money-per-second", moneyPerSecond);
        }
        updateScreen();
    };
});