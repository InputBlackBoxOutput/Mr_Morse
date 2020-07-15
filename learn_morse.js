// Mr. Morse
// Created on 26 June 2020
// Written by Rutuparn Pawar (InputBlackBoxOutput)

/////////////////////////////////////////////////////////////////////////////////////////////////
// DOM linking 

const msg_tx = document.getElementById("msg-tx");
const mc_tx = document.getElementById("mc-tx");

const dot = document.getElementById("dot");
const dash = document.getElementById("dash");
const del_tx = document.getElementById("del-tx");
const clear_tx = document.getElementById("clear-tx");

const check_tx = document.getElementById("check-tx");
const next_tx = document.getElementById("next-tx");

const mc_rx = document.getElementById("mc-rx");
const msg_rx = document.getElementById("msg-rx");

const check_rx = document.getElementById("check-rx");
const next_rx = document.getElementById("next-rx");

const NONE = "background-color: rgb(255, 255, 255);";
const CORRECT = "border:2px solid rgb(89, 160, 89); border-radius:5%; background-color: rgb(109, 180, 109);";
const WRONG = "border:2px solid rgb(235, 125, 125); border-radius:5%; background-color: rgb(255, 145, 145);";
/////////////////////////////////////////////////////////////////////////////////////////////////
Morse_Code = {
	"A": "•–",      "B": "–•••",    "C": "–•–•", 
	"D": "–••",     "E": "•",       "F": "••–•", 
	"G": "––•",     "H": "••••",    "I": "••", 
	"J": "•–––",    "K": "–•–",     "L": "•–••", 
	"M": "––",      "N": "–•",      "O": "–––", 
	"P": "•––•",    "Q": "––•–",    "R": "•–•",
	"S": "•••",     "T": "–",       "U": "••–",
	"V": "•••–",    "W": "•––",     "X": "–••–",  
	"Y": "–•––",    "Z": "––••",

	"1": "•–––– ",  "2": "••–––",   "3": "•••–– ",
	"4": "••••– ",  "5": "••••• ",  "6": "–••••",
	"7": "––•••",   "8": "–––••",   "9": "––––•",
	"0": "–––––"
};
// console.log(Morse_Code["A"]);
/////////////////////////////////////////////////////////////////////////////////////////////////
Reverse_Morse_Code = {
	"•–":   "A",    "–•••":  "B",    "–•–•": "C", 
	"–••":  "D",    "•":     "E",    "••–•": "F", 
	"––•":  "G",    "••••":  "H",    "••":   "I", 
	"•–––": "J",    "–•–":   "K",    "•–••": "L", 
	"––":   "M",    "–•":    "N",    "–––":  "O",
	"•––•": "P",    "––•–":  "Q",    "•–•":  "R",
	"•••":  "S",    "–":     "T",    "••–":  "U",
	"•••–": "V",    "•––":   "W",    "–••–": "X",
	"–•––": "Y",    "––••":  "Z",

	"•––––": "1",  "••–––": "2",  "•••––": "3",
	"••••–": "4",  "•••••": "5",  "–••••": "6",
	"––•••": "7",  "–––••": "8",  "––––•": "9",
	"–––––": "0"
};
// console.log(Reverse_Morse_Code["01"]);


/////////////////////////////////////////////////////////////////////////////////////////////////
let alpha = undefined;
let count = 0;

function generateAlphabet() {
	mc_tx.style.cssText = NONE;
	clearEnteredMorseCode();
	alpha = String.fromCharCode(65 + Math.floor(Math.random() * 26));
	msg_tx.innerText = alpha;
	mc_tx.style.cssText = "border:2px solid white; border-radius:5%; background-color: white";
}
generateAlphabet();


dot.addEventListener('click', function() {
	mc_tx.style.cssText = NONE;
	if(count < 5) {
		mc_tx.innerText += " •";
		count++;
	}
});

dash.addEventListener('click', function() {
	mc_tx.style.cssText = NONE;
	if(count < 5) {
		mc_tx.innerText += " –";
		count++;
	}
});

del_tx.addEventListener('click', function() {
	mc_tx.style.cssText = NONE;
	mc_tx.innerText = mc_tx.innerText.substring(0, (mc_tx.innerText.length-1));
	count--;
});

clear_tx.addEventListener('click', function() {
	mc_tx.style.cssText = NONE;
	clearEnteredMorseCode();
});

function clearEnteredMorseCode() {
	mc_tx.style.cssText = NONE;
	mc_tx.innerText = "";
	count = 0;
}

// Correct 109, 180, 109 
// Wrong 255, 145, 145 

check_tx.addEventListener('click', function() {
	// Add 3 attempt policy
	let mc = "";
	for(let i=0; i< mc_tx.innerText.length; i++)
		if(mc_tx.innerText[i] != " ")	
			mc += mc_tx.innerText[i];
	
	if(Morse_Code[alpha] == mc)
		mc_tx.style.cssText = CORRECT;
	else
		mc_tx.style.cssText = WRONG;
});

next_tx.addEventListener('click', function() {
	generateAlphabet();
});
/////////////////////////////////////////////////////////////////////////////////////////////////
let code = "";

function generateMorseCode() {
	msg_rx.style.cssText = NONE;
	code = Morse_Code[String.fromCharCode(65 + Math.floor(Math.random() * 26))];
	for(let i=0; i< code.length; i++) {
		mc_rx.innerText += " " + code[i];
	}
}
generateMorseCode();

msg_rx.addEventListener("keyup", function() {
	msg_rx.style.cssText = NONE;
	msg_rx.value = msg_rx.value.toUpperCase();
});

check_rx.addEventListener('click', function() {
	if(msg_rx.value != "") {
		if(Reverse_Morse_Code[code] == msg_rx.value)
			msg_rx.style.cssText = CORRECT;
		else
			msg_rx.style.cssText = WRONG;
	}
});

next_rx.addEventListener('click', function() {
	mc_rx.innerText = "";
	generateMorseCode();
});
/////////////////////////////////////////////////////////////////////////////////////////////////

