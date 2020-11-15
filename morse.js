// Mr. Morse Converter
// Created on 29 June 2020
// Written by Rutuparn Pawar (InputBlackBoxOutput)

/////////////////////////////////////////////////////////////////////////////////////////////////
// DOM linking 

const msg_ = document.getElementById("msg");
const mc_ = document.getElementById("mc");

const upload_msg = document.getElementById("upload-msg");
const download_msg = document.getElementById("download-msg");

const upload_mc = document.getElementById("upload-mc");
const download_mc = document.getElementById("download-mc");
/////////////////////////////////////////////////////////////////////////////////////////////////
msg_.addEventListener('keyup', function() {
		mc_.value= textToMorseCode(msg_.value.trim().toUpperCase());
})

mc_.addEventListener('keyup', function() {
		msg_.value= textFromMorseCode(mc_.value.trim(), 0);
})
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
// console.log(Reverse_Morse_Code["•–"]);

/////////////////////////////////////////////////////////////////////////////////////////////////
function textToMorseCode(inpt) {
	let oupt = "";
	if(inpt == "") return "";
	
	for(let i=0; i< inpt.length; i++ ) {
		if(Morse_Code[inpt[i]] != undefined)
			oupt += Morse_Code[inpt[i]];
		else
			oupt += inpt[i];

		oupt += " ";
	}
	return oupt;
}

function convertToDotDash(mc){
	conv_mc = "";
	
	if(/•/.test(mc) && /–/.test(mc)) 
		return mc;
	
	// if(/0/.test(mc) || /1/.test(mc)) {
	// 	for(let i=0; i<mc.length; i++) {
	// 		if(mc[i] == '0')
	// 			conv_mc += '•';
	// 		else if(mc[i] == '1')
	// 			conv_mc += '–';
	// 		else
	// 			conv_mc += mc[i];
	// 	}
	// }
	
	if(/./.test(mc) || /-/.test(mc)) {
		for(let i=0; i<mc.length; i++) {
			if(mc[i] == '.')
				conv_mc += '•';
			else if(mc[i] == '-')
				conv_mc += '–';
			else
				conv_mc += mc[i];
		}
	}	
	return conv_mc;
}

function textFromMorseCode(inpt, opt) {
	let oupt = "";
	inpt = convertToDotDash(inpt);
	
	codes = inpt.split(" ");
	for(let i=0; i<codes.length; i++) {
		if(Reverse_Morse_Code[codes[i]] != undefined) 
			if(opt == 0)
				oupt += Reverse_Morse_Code[codes[i]];
			else
				oupt += Reverse_Morse_Code[codes[i]] + " ";
		else
			if(opt == 0)
				oupt += codes[i];
			else
				oupt += codes[i] + " ";
	}
	return oupt;
}

/////////////////////////////////////////////////////////////////////////////////////////////////
let uploadSetting = -1;

upload_msg.addEventListener('click', function() {
	uploadFile()
	uploadSetting = 0;
});

upload_mc.addEventListener('click', function() {
	uploadFile()
	uploadSetting = 1;
});

function uploadFile() {
	let file = document.createElement("INPUT");
	file.setAttribute("type", "file");

	file.addEventListener('change', function() {       
		if (this.files && this.files[0]) {
			let fileExt = this.files[0].name.split(".")[1];
			
			if(fileExt == "txt") {
				let fr = new FileReader(); 
				fr.readAsText(this.files[0]); 
				fr.onload = function(){  
					let data = fr.result;
					
					if(uploadSetting == 0) {
						msg_.value = data;
						mc_.value  = textToMorseCode(msg_.value.trim().toUpperCase());
					} 
					if(uploadSetting == 1) {
						mc_.value = data;
						msg_.value= textFromMorseCode(mc_.value.trim(), 1);
					}
				}
			}
			else 
				console.log("Not .txt file");
		}
	});
	file.click();
}

/////////////////////////////////////////////////////////////////////////////////////////////////
download_msg.addEventListener('click', function () {
	if(msg_.value != "")
		downloadFile(msg_.value, 'message.txt', 'text/plain');
	else
		alert("Nothing to download!");
})

download_mc.addEventListener('click', function () {
	if(mc_.value != "")
		downloadFile(mc_.value, 'morse.txt', 'text/plain');
	else
		alert("Nothing to download!");
})


function downloadFile(data, fileExt, type) {
    var file = new Blob([data], {type: type});

    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, fileExt);
    else { // Others
        var a = document.createElement("a"), url = URL.createObjectURL(file);
        a.href = url;
        a.download = fileExt;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
 }
/////////////////////////////////////////////////////////////////////////////////////////////////