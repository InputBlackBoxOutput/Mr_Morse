// Mr. Morse Converter
// Created on 29 June 2020
// Written by Rutuparn Pawar (InputBlackBoxOutput)

/////////////////////////////////////////////////////////////////////////////////////////////////
// DOM linking 

const inpt = document.getElementById("inpt");
const oupt = document.getElementById("oupt");
const convert = document.getElementById("cvt");

// Setting options 
// 1 = Text to Morse Code 
// 0 = Morse Code to Text
setting = 1;

const swtch = document.getElementById('switch');
const sw_one = document.getElementById('sw-one');
const sw_two = document.getElementById('sw-two');
/////////////////////////////////////////////////////////////////////////////////////////////////
swtch.addEventListener('click', function() {
	if(setting == 1) {
		sw_one.innerText = "Morse Code";
		sw_two.innerText = "Text";
		setting = 0;
	}
	else {
		sw_one.innerText = "Text";
		sw_two.innerText = "Morse Code";
		setting = 1;
	}

})

convert.addEventListener('click', function() {
	if(setting == 1) 
		textToMorseCode();
	else
		textFromMorseCode();
});


/////////////////////////////////////////////////////////////////////////////////////////////////
// Varients: 01 & .−
Morse_Code = {
	"A": "01",      "B": "1000",    "C": "1010", 
	"D": "100",     "E": "0",       "F": "0010", 
	"G": "110",     "H": "0000",    "I": "00", 
	"J": "0111",    "K": "101",     "L": "0100", 
	"M": "11",      "N": "10",      "O": "111", 
	"P": "0110",    "Q": "1101",    "R": "010",
	"S": "000",     "T": "1",       "U": "001",
	"V": "0001",    "W": "011",     "X": "1001",  
	"Y": "1011",    "Z": "1100",

	"1": "01111 ",  "2": "00111",   "3": "00011 ",
	"4": "00001 ",  "5": "00000 ",  "6": "10000",
	"7": "11000",   "8": "11100",   "9": "11110",
	"0": "11111"
};
// console.log(Morse_Code["A"]);
/////////////////////////////////////////////////////////////////////////////////////////////////
Reverse_Morse_Code = {
	"01":   "A",    "1000":  "B",    "1010": "C", 
	"100":  "D",    "0":     "E",    "0010": "F", 
	"110":  "G",    "0000":  "H",    "00":   "I", 
	"0111": "J",    "101":   "K",    "0100": "L", 
	"11":   "M",    "10":    "N",    "111":  "O",
	"0110": "P",    "1101":  "Q",    "010":  "R",
	"000":  "S",    "1":     "T",    "001":  "U",
	"0001": "V",    "011":   "W",    "1001": "X",
	"1011": "Y",    "1100":  "Z",

	"01111": "1",  "00111": "2",  "00011": "3",
	"00001": "4",  "00000": "5",  "10000": "6",
	"11000": "7",  "11100": "8",  "11110": "9",
	"11111": "0"
};
// console.log(Reverse_Morse_Code["01"]);

/////////////////////////////////////////////////////////////////////////////////////////////////
function textToMorseCode() {
	let out = "";
	const t = inpt.value.trim().toUpperCase();

	if(t == "") return;
	
	for(let i=0; i< t.length; i++ ) {
		if(Morse_Code[t[i]] != undefined)
			out += Morse_Code[t[i]];
		else
			out += t[i];

		out += " ";
	}
	oupt.innerText = "Morse Code: " + out;
}

function textFromMorseCode() {
	let out = "";
	const t = inpt.value.trim() + " ";
	let T = "";

	if(t == " ") return;

	for(let i=0; i< t.length; i++ ) {
		T += t[i];
		if(t[i+1] == " ") {
			if(Reverse_Morse_Code[T] != undefined) 
				out += Reverse_Morse_Code[T];
			else
				out += T;

			T = "";
			i++;
		}
	}
	oupt.innerText = "Text: " + out;
}
/////////////////////////////////////////////////////////////////////////////////////////////////

