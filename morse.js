// Mr. Morse
// Created on 26 June 2020
// Written by Rutuparn Pawar (InputBlackBoxOutput)

/////////////////////////////////////////////////////////////////////////////////////////////////
// DOM linking 

const msg_tx = document.getElementById("msg-tx");
const mc_tx = document.getElementById("mc-tx");

const dot = document.getElementById("dot");
const dash = document.getElementById("dash");
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
	"A": "01"  , "B": "1000", "C": "1010",
	"D": "100" , "E": "0"   , "F": "0010",
	"G": "110" , "H": "0000", "I": "00"  ,
	"J": "0111", "K": "101" , "L": "0100",
	"M": "11"  , "N": "10"  , "O": "111" ,
	"P": "0110", "Q": "1101", "R": "010" ,
	"S": "000" , "T": "1"   , "U": "001" ,
	"V": "0001", "W": "011" , "X": "1001",
	"Y": "1011", "Z": "1100",

	"0": "11111", "1": "01111", "2": "00111",
	"3": "00011", "4": "00001", "5": "00000",
	"6": "10000", "7": "11000", "8": "11100",
	"9": "11110"
};
// console.log(Morse_Code["A"]);
/////////////////////////////////////////////////////////////////////////////////////////////////
Reverse_Morse_Code = {
	"01"  :  "A", "1000":  "B", "1010":  "C",
	"100" :  "D", "0"   :  "E", "0010":  "F",
	"110" :  "G", "0000":  "H", "00"  :  "I",
	"0111":  "J", "101" :  "K", "0100":  "L",
	"11"  :  "M", "10"  :  "N", "111" :  "O",
	"0110":  "P", "1101":  "Q", "010" :  "R", 
	"000" :  "S", "1"   :  "T", "001" :  "U",
	"0001":  "V", "011" :  "W", "1001":  "X",
	"1011":  "Y", "1100":  "Z",

	"11111":  "0", "01111":  "1", "00111":  "2",
	"00011":  "3", "00001":  "4", "00000":  "5",
	"10000":  "6", "11000":  "7", "11100":  "8",
	"11110":  "9"
};
// console.log(Reverse_Morse_Code["01"]);

/////////////////////////////////////////////////////////////////////////////////////////////////

let tx_morse_code = "";
let alpha = undefined;

dot.addEventListener('click', function() {
	tx_morse_code += ".";
	mc_tx.innerText = tx_morse_code;
});

dash.addEventListener('click', function() {
	tx_morse_code += "_";
	mc_tx.innerText = tx_morse_code;
});

check_tx.addEventListener('click', function() {
	let convertedMC = "";
	
	for (var i = 0; i< mc_tx.innerText.length; i++) {
		if(mc_tx.innerText[i] == '.')
			convertedMC += '0';
		else if(mc_tx.innerText[i] == '_')
			convertedMC += '1';
	}

	// console.log(convertedMC);
	if (convertedMC != "") {
		if(Morse_Code[alpha] === convertedMC) {
			correct_tx.hidden = false;
			incorrect_tx.hidden = true;
		}
		else {
			correct_tx.hidden = true;
			incorrect_tx.hidden = false;
		}
	}
});


clear_tx.addEventListener('click', function() {
	tx_morse_code = "";
	mc_tx.innerText = " ";
});

function generateAlphabet() {
	alpha = String.fromCharCode(65 + Math.floor(Math.random() * 26));
	msg_tx.innerText = alpha;
}
generateAlphabet();

/////////////////////////////////////////////////////////////////////////////////////////////////

let rx_morse_code = "";
let code ="";

function generateMorseCode() {
	code = Morse_Code[String.fromCharCode(65 + Math.floor(Math.random() * 26))];

	let mc = "";
	for (var i = 0; i < code.length; i++) {
		if(code[i] == '1')
			mc += '_';
		else 
			mc += '.';
	}

	mc_rx.innerText = mc;
}
generateMorseCode();

check_rx.addEventListener('click', function() {
	if(msg_rx.value != "") {
		if(Reverse_Morse_Code[code] == msg_rx.value) {
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

