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
		inpt.placeholder = "Enter morse code here";
		setting = 0;
	}
	else {
		sw_one.innerText = "Text";
		sw_two.innerText = "Morse Code";
		inpt.placeholder = "Enter text here";
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
// Varients:–•
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
// console.log(Reverse_Morse_Code["•–"]);

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

