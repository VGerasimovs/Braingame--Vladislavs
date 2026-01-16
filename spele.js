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





const laukumiSaturs = ['😚','😥','🤫','😥','👺','😚','👽','😵','👽','🤫','😵','👺'];
let atvertiLaukumi = [];
let pedejieDivi = []; 

//sajauc emoji nejaušā secībā
let laukumiSajaukti = [...laukumiSaturs].sort(() => Math.random() - 0.5);