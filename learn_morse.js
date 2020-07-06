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

const correct_tx = document.getElementById("correct-tx");
correct_tx.hidden = true;
const incorrect_tx = document.getElementById("incorrect-tx");
incorrect_tx.hidden = true;


const mc_rx = document.getElementById("mc-rx");
const msg_rx = document.getElementById("msg-rx");

const check_rx = document.getElementById("check-rx");

const correct_rx = document.getElementById("correct-rx");
correct_rx.hidden = true;
const incorrect_rx = document.getElementById("incorrect-rx");
incorrect_rx.hidden = true;

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

	"–": "•–––– ",  "2": "••–––",   "3": "•••–– ",
	"4": "••••– ",  "5": "••••• ",  "6": "–••••",
	"7": "––•••",   "8": "–––••",   "9": "––––•",
	"•": "–––––"
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

	"•––––": "–",  "••–––": "2",  "•••––": "3",
	"••••–": "4",  "•••••": "5",  "–••••": "6",
	"––•••": "7",  "–––••": "8",  "––––•": "9",
	"–––––": "•"
};
// console.log(Reverse_Morse_Code["01"]);


/////////////////////////////////////////////////////////////////////////////////////////////////
let alpha = undefined;
let count = 0;

function generateAlphabet() {
	clearEnteredMorseCode();
	alpha = String.fromCharCode(65 + Math.floor(Math.random() * 26));
	msg_tx.innerText = alpha;
}
generateAlphabet();


dot.addEventListener('click', function() {
	if(count < 5) {
		mc_tx.innerText += "•";
		count++;
	}
});

dash.addEventListener('click', function() {
	if(count < 5) {
		mc_tx.innerText += "–";
		count++;
	}
});

del_tx.addEventListener('click', function() {
	mc_tx.innerText = mc_tx.innerText.substring(0, (mc_tx.innerText.length-1));
	count--;
});

clear_tx.addEventListener('click', function() {
	clearEnteredMorseCode();
});

function clearEnteredMorseCode() {
	mc_tx.innerText = "";
	count = 0;
}

check_tx.addEventListener('click', function() {
	// Add 3 attempt policy
	if(Morse_Code[alpha] == mc_tx.innerText) {
		correct_tx.hidden = false;
		incorrect_tx.hidden = true;
	}
	else {
		correct_tx.hidden = true;
		incorrect_tx.hidden = false;
	}
});
/////////////////////////////////////////////////////////////////////////////////////////////////
function generateMorseCode() {
	mc_rx.innerText = Morse_Code[String.fromCharCode(65 + Math.floor(Math.random() * 26))];;
}
generateMorseCode();

check_rx.addEventListener('click', function() {
	if(msg_rx.value != "") {
		if(Reverse_Morse_Code[mc_rx.innerText] == msg_rx.value.toUpperCase()) {
			correct_rx.hidden = false;
			incorrect_rx.hidden = true;
		}
		else {
			correct_rx.hidden = true;
			incorrect_rx.hidden = false;
		}
	}
});
/////////////////////////////////////////////////////////////////////////////////////////////////

