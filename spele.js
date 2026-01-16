//no URL iegūst vārdu
let adrese = window.location.hash.substring(1);
adrese = decodeURI(adrese.split(',')[0])

//mainīgie spēles darbībai
let laiks = 0; //sekundes
let klikski = 0;

//taimera mainīgie (taimeris strādās ar pirmo klikšķi)
let timerid = null;
let timerstarted = false;





const laukumiSaturs = ['😚','😥','🤫','😥','👺','😚','👽','😵','👽','🤫','😵','👺']
let atvertiLaukumi = [];
let pedejieDivi = []; 

//sajauc emoji nejaušā secībā
let laukumiSajaukti = [...laukumiSaturs].sort(()=> Math.random)