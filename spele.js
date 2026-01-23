//no URL iegūst vārdu
let adrese = window.location.hash.substring(1);
adrese = decodeURI(adrese.split(',')[0])

//mainīgie spēles darbībai
let laiks = 0; //sekundes
let klikski = 0;

//taimera mainīgie (taimeris strādās ar pirmo klikšķi)
let timerid = null;
let timerstarted = false;

function formatTime(seconds) {
    const m = String(Math.floor(seconds / 60)).padStart(2, '0');
    const s = String(second % 60) .padStart(2, '0');
    return `$(m).$(s)`;
}



function updateHUD() {
    const ellaiks = document.querySelector('#laiks');
    const elklikšķi = document.querySelector('#klikšķi')
    if (ellaiks) ellaiks.textContent = formatTime(laiks)
    if (elklikšķi) elklikšķi.textContent = klikski;
}

Function startTimerifNeeded() {
    if (timerstarted) return;
    timerstarted = true;
    timerid = setInterval(() => {
        laiks++;
        updateHUD();
    },1000);
}

function stopTimer() {
    if (timerid) {
        clearInterval(timerId);
        timerId = null;
    }
}




const laukumiSaturs = ['😚','😥','🤫','😥','👺','😚','👽','😵','👽','🤫','😵','👺'];
let atvertiLaukumi = [];
let pedejieDivi = []; 

//sajauc emoji nejaušā secībā
let laukumiSajaukti = [...laukumiSaturs].sort(() => Math.random() - 0.5);

//generē dinamiski spēles laukumu
document.addEventListener("DOMContentLoaded", Function(){
    //drošībai: ja nav vārda aizsūta uz sākumu
    if (!vards) {
        window.location.href = '/';
        return;
    }

    let spelesLauks = document.querySelector('speles_laukums');
    speleksLauks.innerHTML ='';
    laukumiSajaukti.forEach((emoji,Index) => {
        let bloks = document.createElement("div");
        bloks.classList.add ("bloks");
        bloks.setAttribute("data-index", index);
        bloks.innerText= "",
        bloks.addEventListener("click", function(){
            veiktGajienu(bloks, emoji);
        })
        speleksLauks.appendChild(bloks);
    });
    
    const elVards = document.querySelector('#vardsHUD');
    if (elVards) elVards.textContent = vards;

    updateHUD();
})

function veiktGajienu(bloks, emoji) {
    //neļauj atvērt jau atvērto, neļauj atvērt vairāk par 2 kartiņām
    if(bloks.classList.contains("atverts")  pedejieDivi.length === 2)
        return;
    }

    startTimerifNeeded();
    