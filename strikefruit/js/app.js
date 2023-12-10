let cortes = document.getElementById('cortes');
const dispAte = document.getElementById('dispAte');
const mult = document.getElementById('multMax');
const btn = document.getElementById('btn');



function getRandomDecimal(min, max) {
    return Math.random() * (max - min) + min;
}

function formatDecimal(number) {
    return number.toFixed(2);
}

function runDecimalCounter() {
    const valorInicial = 1.00; // valor inicial
    const valorFinal = getRandomDecimal(1.50, 5.50); // valor final aleatório
    mult.textContent = formatDecimal(valorFinal - valorInicial) + "X";
}

function runCortes(){
    const maxCortes = getRandomDecimal(1, 4);
    cortes.textContent = Math.floor(maxCortes);
}

function getTime() {
    let time = dayjs();
    let newTime = time.add(2, 'm').format("HH:mm");
    dispAte.textContent = newTime;
}



btn.addEventListener('click', () => {
    getTime();
    move();
    runCortes();
    runDecimalCounter();
    countdownTimer = setInterval(runCountdown, 1000);
})

let countdown = 20;
let countdownTimer = null;

function runCountdown() {
    countdown--;
    btn.innerHTML = countdown;
    btn.disabled = true;
    if(countdown <= 0){
        finishCountdown();
    }
}

function finishCountdown(){
    clearInterval(countdownTimer);
    btn.innerHTML = 'CORTAR';
    btn.disabled = false;
    countdown = 20;
}

function move() {

    let elem = document.getElementById("greenBar");
    const firstWait = document.getElementById('waitContainer');
    let stepValue = 0;
    let id = setInterval(frame, 100);
    firstWait.style.display ='block';
    setTimeout(() => {
        firstWait.style.display = 'none';
    }, 12000)

    function frame() {

        if (stepValue >= 100) {
            clearInterval(id);

        } else {
            elem.style.width = (stepValue + 1) + "%";
            elem.innerHTML = (stepValue + 1) + "%...";
            stepValue=(stepValue + 1);

        }
        btn.disabled = true;
    }

}

