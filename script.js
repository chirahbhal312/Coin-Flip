const coin = document.getElementById('coin');
const result = document.getElementById('result');
const flipBtn = document.getElementById('flipBtn');

const outcomes = ['heads', 'tails'];

function flipCoin() {
    const randomOutcome = outcomes[Math.floor(Math.random() * outcomes.length)];
    coin.classList.add('flip');

    setTimeout(() => {
        coin.classList.remove('flip');
        coin.style.backgroundImage = randomOutcome === 'heads' 
            ? "url('head.png')" 
            : "url('tail.png')";
        result.textContent = `It's ${randomOutcome}!`;
    }, 500);
}

flipBtn.addEventListener('click', flipCoin);
